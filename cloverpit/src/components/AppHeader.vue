<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <span>CloverPit</span>
        </div>
        
        <!-- 桌面端导航 -->
        <nav class="nav desktop-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-guide" class="nav-link">Guide</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-wiki" class="nav-link">Wiki</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-endings" class="nav-link">Endings</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-download" class="nav-link">Download</router-link>
            </li>
          </ul>
        </nav>

        <!-- 汉堡菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }"
          :aria-label="isMobileMenuOpen ? 'Close Menu' : 'Open Menu'"
          :aria-expanded="isMobileMenuOpen">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="sr-only">{{ isMobileMenuOpen ? 'Close Menu' : 'Open Menu' }}</span>
        </button>

        <!-- 移动端滑出导航 -->
        <nav class="nav mobile-nav" :class="{ open: isMobileMenuOpen }">
          <ul class="mobile-nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-guide" class="nav-link" @click="closeMobileMenu">Guide</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-wiki" class="nav-link" @click="closeMobileMenu">Wiki</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-endings" class="nav-link" @click="closeMobileMenu">Endings</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-blog" class="nav-link" @click="closeMobileMenu">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cloverpit-download" class="nav-link" @click="closeMobileMenu">Download</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- 移动端遮罩层 -->
    <div class="mobile-overlay" :class="{ open: isMobileMenuOpen }" @click="closeMobileMenu"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ff6b35;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo span {
  color: #ff6b35;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  font-family: 'Creepster', 'Orbitron', monospace, cursive;
  text-shadow: 0 0 10px #ff6b35;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  display: inline-block;
  line-height: 30px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ff6b35;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff6b35;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

/* 汉堡菜单按钮 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端遮罩层 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* 移动端导航 */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid #ff6b35;
  z-index: 1001;
  transition: right 0.3s ease;
  padding: 80px 0 20px 0;
}

.mobile-nav.open {
  right: 0;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.mobile-nav-list .nav-item {
  margin: 0;
  border-bottom: 1px solid rgba(255, 107, 53, 0.1);
}

.mobile-nav-list .nav-link {
  display: block;
  padding: 20px 30px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.mobile-nav-list .nav-link:hover,
.mobile-nav-list .nav-link.router-link-active {
  background: rgba(255, 107, 53, 0.1);
  color: #ff6b35;
  border-left-color: #ff6b35;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  /* 隐藏桌面端导航 */
  .desktop-nav {
    display: none;
  }

  /* 显示汉堡菜单按钮 */
  .mobile-menu-btn {
    display: flex;
  }

  .header-content {
    padding: 10px 0;
  }

  .logo span {
    font-size: 20px;
  }
}

@media (min-width: 769px) {
  /* 隐藏移动端导航 */
  .mobile-nav {
    display: none;
  }

  /* 隐藏汉堡菜单按钮 */
  .mobile-menu-btn {
    display: none;
  }

  /* 隐藏移动端遮罩 */
  .mobile-overlay {
    display: none;
  }
}
</style>




