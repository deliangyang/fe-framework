import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({

    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),

    }
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000/',
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
