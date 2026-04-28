import { defineConfig, Plugin } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

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

const sitemapPrerenderRepair: Plugin = {
  name: 'sitemap-prerender-repair',
  async closeBundle() {
    const buildDir = join(__dirname, 'build')
    const sitemapPath = join(buildDir, 'sitemap.xml')
    const indexPath = join(buildDir, 'index.html')
    if (!fs.existsSync(sitemapPath) || !fs.existsSync(indexPath)) return

    const [{ default: puppeteer }, http, { createReadStream }] = await Promise.all([
      import('puppeteer'),
      import('http'),
      import('fs'),
    ])

    const sitemap = fs.readFileSync(sitemapPath, 'utf8')
    const routes = Array.from(sitemap.matchAll(/<loc>https:\/\/www\.hasandogru\.de([^<]+)<\/loc>/g))
      .map((match) => match[1])
      .filter((route, index, all) => all.indexOf(route) === index)

    if (!routes.length) return

    const mimeTypes: Record<string, string> = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.xml': 'application/xml; charset=utf-8',
      '.txt': 'text/plain; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.avif': 'image/avif',
      '.webm': 'video/webm',
      '.woff2': 'font/woff2',
      '.ico': 'image/x-icon',
    }

    const server = http.createServer((req, res) => {
      const url = new URL(req.url || '/', 'http://127.0.0.1')
      let requestedPath = decodeURIComponent(url.pathname)
      let filePath = join(buildDir, requestedPath)

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = join(filePath, 'index.html')
      }

      if (!fs.existsSync(filePath)) {
        filePath = indexPath
      }

      const ext = path.extname(filePath)
      res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
      createReadStream(filePath).pipe(res)
    })

    await new Promise<void>((resolve) => server.listen(4179, '127.0.0.1', resolve))

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1440, height: 1000 })

      for (const route of routes) {
        const target = `http://127.0.0.1:4179${route}`
        await page.goto(target, { waitUntil: 'networkidle0', timeout: 30000 })
        try {
          await page.waitForSelector('#prerender-ready', { timeout: 10000 })
        } catch {
          // Some non-React fallback states do not expose the ready marker.
        }

        let html = await page.content()
        // GTM injects its loader script at runtime. Prerender snapshots should keep
        // the canonical snippet, not serialize the injected script a second time.
        html = html.replace(
          /<script\b[^>]*src=["']https:\/\/www\.googletagmanager\.com\/gtm\.js\?id=GTM-TVTXQ7M7[^"']*["'][^>]*><\/script>/g,
          ''
        )
        const outputPath = join(buildDir, route, 'index.html')
        fs.mkdirSync(path.dirname(outputPath), { recursive: true })
        fs.writeFileSync(outputPath, html)
      }

      const removeStaleDuplicateDirs = (dir: string) => {
        fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
          const fullPath = join(dir, entry.name)
          if (!entry.isDirectory()) return
          if (/ \d+$/.test(entry.name)) {
            fs.rmSync(fullPath, { recursive: true, force: true })
            return
          }
          removeStaleDuplicateDirs(fullPath)
        })
      }
      removeStaleDuplicateDirs(buildDir)

      console.log(`[sitemap-prerender-repair] Ensured ${routes.length} sitemap routes have HTML files.`)
    } finally {
      await browser.close()
      await new Promise<void>((resolve) => server.close(() => resolve()))
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    postBuildAdjustments,
    sitemapPrerenderRepair,
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
