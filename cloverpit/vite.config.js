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
    // 优化构建性能
    rollupOptions: {
      output: {
        // 代码分割优化
        manualChunks: {
          vendor: ['vue', 'vue-router', 'vue-i18n'],
          utils: ['@/seo', '@/data']
        }
      }
    },
    // 资源优化
    assetsInlineLimit: 4096, // 小于4KB的资源内联
    cssCodeSplit: true, // CSS代码分割
    sourcemap: false, // 生产环境关闭sourcemap
    minify: 'terser', // 使用terser压缩
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true // 移除debugger
      }
    }
  },
  // 开发服务器优化
  server: {
    hmr: {
      overlay: false // 关闭错误遮罩层
    }
  }
})
