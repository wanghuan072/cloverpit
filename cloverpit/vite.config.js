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
          // 将路由组件分离
          'views': [
            './src/views/HomeView.vue',
            './src/views/GuideView.vue',
            './src/views/WikiView.vue',
            './src/views/EndingsView.vue',
            './src/views/BlogView.vue',
            './src/views/DownloadView.vue'
          ]
        }
      }
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 压缩选项
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // 开发服务器优化
  server: {
    hmr: {
      overlay: false
    }
  }
})
