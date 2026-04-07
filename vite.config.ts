import { defineConfig, Plugin } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const makeCssAsync: Plugin = {
  name: 'make-css-async',
  transformIndexHtml: {
    order: 'post',
    handler(html: string) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    },
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    makeCssAsync,
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
        '/de/blog/erbrecht-leitfaden-tuerkei', '/tr/blog/miras-hukuku-rehberi',
        '/de/blog/internationale-scheidung-tuerkei', '/tr/blog/uluslararasi-bosanma',
        '/de/blog/immobilienrechte-tuerkei', '/tr/blog/gayrimenkul-haklari',
        '/de/blog/tanima-tenfiz-leitfaden', '/tr/blog/tanima-tenfiz-rehberi',
        '/de/blog/pflichtteil-herabsetzungsklage-tuerkei', '/tr/blog/sakli-pay-tenkis-davasi',
        '/de/blog/teilungsklage-immobilien-tuerkei', '/tr/blog/izale-i-suyu-paylasim-davasi',
        '/de/blog/mavi-kart-rechte-tuerkei', '/tr/blog/mavi-kart-haklari-rehberi',
        '/de/blog/vorladung-haftbefehl-tuerkei', '/tr/blog/turkiye-den-tebligat-veya-yakalama-karari',
        '/de/blog/strafanzeige-tuerkei-rehber', '/tr/blog/turkiye-de-suc-duyurusu-rehberi',
        '/de/blog/scheidung-tuerkei-ohne-reise', '/tr/blog/turkiye-de-bosanma-rehberi',
        '/de/blog/tuerkische-vekaletname-deutschland', '/tr/blog/almanya-da-vekaletname-cikarma-rehberi',
        '/de/datenschutz', '/tr/gizlilik-politikasi',
        '/de/impressum', '/tr/yasal-bilgiler',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        headless: true,
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
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'framer-vendor': ['motion/react'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  },
})
