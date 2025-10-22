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
    // 禁用CSS代码分割，减少HTTP请求
    cssCodeSplit: false,
    // 使用默认压缩，避免terser依赖问题
    minify: 'esbuild'
  },
  // 开发服务器优化
  server: {
    hmr: {
      overlay: false
    }
  }
})
