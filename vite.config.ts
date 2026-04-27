import { defineConfig, Plugin } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

import fs from 'fs'
import { join } from 'path'

const postBuildAdjustments: Plugin = {
  name: 'post-build-adjustments',
  closeBundle() {
    const buildDir = join(__dirname, 'build')
    const assetsDir = join(buildDir, 'assets')
    if (!fs.existsSync(assetsDir)) return

    // 1. Find actual hashed files in the build/assets directory
    const files = fs.readdirSync(assetsDir)
    const findHashed = (prefix: string, ext: string) => 
      files.find((f: string) => f.startsWith(prefix) && f.endsWith(ext))

    const hero = findHashed('hero', '.avif')
    const logo = findHashed('logo', '.avif')
    const inter = findHashed('Inter', '.woff2')
    const cormorant = findHashed('CormorantGaramond-Regular', '.woff2')

    // 2. Collect HTML files for processing
    const htmlFiles: string[] = []
    const collectHtml = (dir: string) => {
      fs.readdirSync(dir, { withFileTypes: true }).forEach((entry: fs.Dirent) => {
        const fullPath = join(dir, entry.name)
        if (entry.isDirectory()) collectHtml(fullPath)
        else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath)
      })
    }
    collectHtml(buildDir)

    // 3. Process each HTML file
    htmlFiles.forEach(filePath => {
      let html = fs.readFileSync(filePath, 'utf8')

      // A. Inject Hashed Preloads (Fonts, LCP Assets)
      let preloads = ''
      if (hero) preloads += `\n    <link rel="preload" as="image" href="/assets/${hero}" fetchpriority="high" type="image/avif">`
      if (logo) preloads += `\n    <link rel="preload" as="image" href="/assets/${logo}" fetchpriority="high" type="image/avif">`
      if (inter) preloads += `\n    <link rel="preload" href="/assets/${inter}" as="font" type="font/woff2" crossorigin="anonymous">`
      if (cormorant) preloads += `\n    <link rel="preload" href="/assets/${cormorant}" as="font" type="font/woff2" crossorigin="anonymous">`
      
      html = html.replace('<!-- [POST_BUILD_INJECT_PRELOADS] -->', preloads)

      // B. Ensure Async CSS (Make all CSS links non-blocking)
      // Matches <link rel="stylesheet" followed by any attributes and pointing to /assets/*.css
      html = html.replace(
        /<link rel="stylesheet" [^>]*href="\/assets\/([^"]+\.css)"[^>]*>/g,
        (_: string, file: string) => `<link rel="preload" as="style" href="/assets/${file}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="/assets/${file}"></noscript>`
      )

      // C. Cleanup: Remove any stale/hardcoded preloads that might have survived prerendering
      html = html.replace(/<link rel="preload" href="\/src\/assets\/fonts\/[^"]+"[^>]*>/g, '')

      // D. Agent-Friendly Formatting (Un-minify HTML for better parsing by AI crawlers)
      // We insert newlines after structural tags to avoid the "single-line HTML" issue.
      html = html
        .replace(/>(\s*)<([a-zA-Z1-6!/])/g, '>\n<$2') // Simple newline between any adjacent tags
        .replace(/(<\/div>|<\/p>|<\/header>|<\/section>|<\/article>|<\/li>|<\/h[1-6]>|<\/nav>|<\/footer>|<div id="root">|<article[^>]*>)/g, '$1\n')
        .replace(/\n\s*\n/g, '\n') // Remove excessive empty lines

      fs.writeFileSync(filePath, html)
    })
    console.log(`[post-build-adjustments] Processed ${htmlFiles.length} HTML files with correct hashed assets.`)
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    postBuildAdjustments,
    prerender({
      routes: [
        '/de', '/tr',
        '/de/ueber-uns', '/tr/hakkimizda',
        '/de/leistungen', '/tr/hizmetler',
        '/de/leistungen/familienrecht', '/tr/hizmetler/aile-hukuku',
        '/de/leistungen/vollmacht-apostille', '/tr/hizmetler/vekaletname-ve-apostil',
        '/de/leistungen/migrationsrecht', '/tr/hizmetler/goc-hukuku',
        '/de/leistungen/strafrecht', '/tr/hizmetler/ceza-hukuku',
        '/de/leistungen/tanima-ve-tenfiz', '/tr/hizmetler/tanima-ve-tenfiz',
        '/de/leistungen/mavi-kart', '/tr/hizmetler/mavi-kart',
        '/de/leistungen/icra-ve-iflas', '/tr/hizmetler/icra-ve-iflas',
        '/de/leistungen/erbrecht', '/tr/hizmetler/miras-hukuku',
        '/de/leistungen/sorgerecht', '/tr/hizmetler/velayet',
        '/de/leistungen/immobilienrecht', '/tr/hizmetler/gayrimenkul-hukuku',
        '/de/blog', '/tr/blog',
        '/de/blog/strafverfahren-tuerkei-haftbefehl-verteidigung-deutschland', '/tr/blog/turkiye-ceza-davasi-tutuklama-karari-almanya-savunma',
        '/de/blog/erbschaft-tuerkei-deutschland-ratgeber', '/tr/blog/almanya-turkiye-miras-hukuku-rehberi',
        '/de/blog/deutschland-scheidung-anerkennung-tuerkei-tanima-tenfiz', '/tr/blog/almanya-bosanma-tanima-tenfiz-davasi-rehberi',
        '/de/blog/erbschein-tuerkei-deutschland-beantragen', '/tr/blog/veraset-ilami-nedir-nasil-alinir',
        '/en/blog/turkish-inheritance-certificate-germany-guide',
        '/de/blog/almanya-scheidung-tuerkei-vermoegensaufteilung', '/tr/blog/almanya-bosanma-turkiye-mal-paylasimi',
        '/de/blog/deutschland-muris-muvazaasi-tapu-annullierung', '/tr/blog/almanya-muris-muvazaasi-tapu-iptali',
        '/de/blog/deutschland-gemeinsames-sorgerecht-tuerkei-anerkennung', '/tr/blog/almanya-ortak-velayet-turkiye-tenfiz',
        '/de/blog/deutschland-tuerkei-forderungseinzug-zwangsvollstreckung', '/tr/blog/almanya-turkiye-alacak-tahsili-icra',
        '/de/blog/strafverfahren-tuerkei-verteidigung-deutschland', '/tr/blog/turkiye-ceza-davasi-almanya-savunma',
        '/de/blog/blaue-karte-tuerkei-erbrecht-immobilien', '/tr/blog/mavi-kart-turkiye-miras-tasinmaz-haklari',
        '/de/blog/erbrecht-leitfaden-tuerkei', '/tr/blog/miras-hukuku-rehberi',
        '/de/blog/internationale-scheidung-tuerkei', '/tr/blog/uluslararasi-bosanma',
        '/de/blog/immobilienrechte-tuerkei', '/tr/blog/gayrimenkul-haklari',
        '/de/blog/anerkennung-scheidung-tuerkei-deutschland', '/tr/blog/tanima-tenfiz-rehberi',
        '/de/blog/pflichtteil-herabsetzungsklage-tuerkei', '/tr/blog/sakli-pay-tenkis-davasi',
        '/de/blog/teilungsklage-immobilien-tuerkei', '/tr/blog/izale-i-suyu-paylasim-davasi',
        '/de/blog/mavi-kart-rechte-tuerkei', '/tr/blog/mavi-kart-haklari-rehberi',
        '/de/blog/vorladung-haftbefehl-tuerkei', '/tr/blog/turkiye-den-tebligat-veya-yakalama-karari',
        '/de/blog/strafanzeige-tuerkei-rehber', '/tr/blog/turkiye-de-suc-duyurusu-rehberi',
        '/de/blog/scheidung-tuerkei-ohne-reise', '/tr/blog/turkiye-de-bosanma-rehberi',
        '/de/blog/tuerkische-vekaletname-deutschland', '/tr/blog/almanya-da-vekaletname-cikarma-rehberi',
        '/de/blog/scheidungsanwalt-mannheim', '/tr/blog/mannheim-bosanma-avukati',
        '/de/blog/familienrecht-beratung-mannheim', '/tr/blog/mannheim-aile-hukuku-danismanligi',
        '/de/blog/sorgerecht-anwalt-mannheim', '/tr/blog/mannheim-velayet-avukati',
        '/de/blog/vollmacht-auf-tuerkisch', '/tr/blog/turkce-vekaletname-nasil-cikarilir',
        '/de/blog/mietrecht-mannheim', '/tr/blog/mannheim-kira-hukuku',
        '/de/blog/kind-tuerkei-mitnehmen-sorgerecht', '/tr/blog/cocukla-turkiyeye-gitmek-velayet',
        '/de/blog/was-kostet-anwalt-tuerkisches-recht', '/tr/blog/turk-hukuku-avukat-ucretleri',
        '/de/blog/tuerkisches-testament-deutschland', '/tr/blog/turk-vasiyetnamesi-almanya',
        '/de/blog/scheidung-tuerkei-dauer-kosten', '/tr/blog/turkiyede-bosanma-suresi-maliyeti',
        '/de/blog/tuerkischer-anwalt-mannheim-erstberatung', '/tr/blog/mannheim-turk-avukat-ilk-gorusme',
        '/de/datenschutz', '/tr/gizlilik-politikasi',
        '/de/impressum', '/tr/yasal-bilgiler',
         // English routes
        '/en', '/en/about', '/en/services', '/en/blog',
        '/en/services/familienrecht', '/en/services/vollmacht-apostille',
        '/en/services/migrationsrecht', '/en/services/strafrecht',
        '/en/services/tanima-ve-tenfiz', '/en/services/mavi-kart',
        '/en/services/icra-ve-iflas', '/en/services/erbrecht',
        '/en/services/sorgerecht', '/en/services/immobilienrecht',
        '/en/blog/debt-collection-turkey-from-germany',
        '/en/blog/turkish-inheritance-germany-guide',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 7000,
        headless: true,
        maxConcurrentRoutes: 3,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'react-router': ['react-router'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  },
})
