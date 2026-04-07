import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Post-build plugin: converts Vite's render-blocking <link rel="stylesheet">
// into an async preload/onload pattern to remove CSS from the critical render path.
const makeCssAsync: Plugin = {
  name: 'make-css-async',
  transformIndexHtml: {
    enforce: 'post',
    transform(html: string) {
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
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    makeCssAsync,
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        // Hashed filenames for proper browser caching
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Split vendor libraries so Framer Motion only loads on non-home pages
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'framer-vendor': ['motion/react'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  },
})
