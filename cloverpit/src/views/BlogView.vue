<template>
  <div class="placeholder-page">
    <AppHeader />
    <main class="page-content">
      <div class="container">
        <div class="placeholder-wrapper">
          <h1>Blog</h1>
          <p>Latest news, updates, and community content for CloverPit</p>
          <div class="placeholder-content">
            <img src="https://picsum.photos/600/400?id=10" alt="Blog Placeholder" />
            <p>Coming Soon - Latest news, updates, and community content</p>
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<style scoped>
.placeholder-page {
  background: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding-top: 70px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-content {
  padding: 100px 0;
}

.placeholder-wrapper {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.placeholder-wrapper h1 {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 20px;
}

.placeholder-wrapper > p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #ffffff;
}

.placeholder-content img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 30px;
}

.placeholder-content p {
  font-size: 1.1rem;
  color: #ffffff;
  opacity: 0.8;
}
</style>
