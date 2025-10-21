import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将Vue相关库分离
          'vue-vendor': ['vue', 'vue-router', 'vue-i18n'],
          // 将语言文件分离
          'locales': [
            './src/locales/en.json',
            './src/locales/zh.json',
            './src/locales/ja.json',
            './src/locales/ru.json',
            './src/locales/ko.json',
            './src/locales/de.json',
            './src/locales/fr.json',
            './src/locales/es.json',
            './src/locales/pt.json'
          ]
        }
      }
    }
  }
})
