import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
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
        // Task 2: Reverted to hashed filenames for proper caching
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Task 5: Eliminate Unused JS by splitting vendor libraries
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'framer-vendor': ['motion/react'],
          'ui-vendor': ['lucide-react']
        }
      }
    }
  },
})
