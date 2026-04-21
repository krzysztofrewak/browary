import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const htmlTemplate = path.resolve(__dirname, 'frontend/templates/index.html')

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'html-template',
      configureServer (server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url.includes('.') && !req.url.startsWith('/api')) {
            req.url = '/frontend/templates/index.html'
          }
          next()
        })
      }
    }
  ],
  root: '.',
  build: {
    outDir: path.resolve(__dirname, 'public'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlTemplate,
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
