import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  root: '.',
  build: {
    outDir: './public',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/application.[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (info) => {
          if (info.name?.endsWith('.css')) return 'css/stylesheet.[hash][extname]'
          return 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.DEVELOPMENT_NODE_PORT) || 8038,
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://web',
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      events: 'events',
      '@': path.resolve(__dirname, 'frontend'),
      src: path.resolve(__dirname, 'frontend'),
      assets: path.resolve(__dirname, 'frontend/assets')
    }
  }
})
