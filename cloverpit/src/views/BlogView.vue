<template>
  <div class="blog-page">
    <AppHeader />
    
    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('BlogPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('BlogPage.hero.description') }}</p>
          </div>
        </div>
      </section>

      <!-- Blog List Section -->
      <section class="section blog-list">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('BlogPage.blogList.title') }}</h2>
              <p class="section-subtitle">{{ $t('BlogPage.blogList.subtitle') }}</p>
            </div>

            <div class="blog-grid">
              <article 
                v-for="post in blogPosts" 
                :key="post.id" 
                class="blog-card"
                @click="navigateToPost(post)"
              >
                <div class="blog-image">
                  <img :src="post.imageUrl" :alt="post.imageAlt" />
                  <div class="blog-overlay">
                    <span class="read-more">{{ $t('BlogPage.blogList.readMore') }}</span>
                  </div>
                </div>
                <div class="blog-content">
                  <div class="blog-meta">
                    <span class="publish-date">{{ formatDate(post.publishDate) }}</span>
                  </div>
                  <h3 class="blog-title">{{ post.title }}</h3>
                  <p class="blog-description">{{ post.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import "../assets/css/public.css"

import { blog } from '../data/blog.js'

const router = useRouter()
const blogPosts = ref([])

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// 导航到博客详情页
const navigateToPost = (post) => {
  router.push(`/blog/${post.addressBar}`)
}

onMounted(() => {
  blogPosts.value = blog
})
</script>

<style scoped>
/* Base Styles */
.blog-page {
  background: #1a1a1a;
  color: #ffffff;
}

/* Section Base */
.section {
  position: relative;
  padding: 80px 0;
  background: #000;
}

.section.hero {
  background-image: url('../../public/images/1.webp');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.section.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

.section.hero .container {
  position: relative;
  z-index: 2;
}

/* Hero Section */
.hero-wrapper {
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  font-size: 64px;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.2;
  font-weight: 700;
  font-family: 'Creepster', 'Orbitron', monospace, cursive;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow:
    0 0 5px #ff6b35,
    0 0 10px #ff6b35,
    0 0 15px #ff6b35,
    0 0 20px #ff6b35,
    0 0 25px #ff6b35,
    0 0 30px #ff6b35;
}

.hero-description {
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 900px;
  margin: 0 auto;
}

/* Blog List Section */
.blog-list {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 71, 87, 0.05) 100%);
}

.section-wrapper {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  text-align: center;
  color: #ff6b35;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff6b35;
  font-weight: normal;
  text-transform: uppercase;
}

.section-subtitle {
  font-size: 18px;
  color: #d1d5db;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.blog-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #444;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.blog-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-card:hover .blog-overlay {
  opacity: 1;
}

.read-more {
  color: #ff6b35;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.blog-content {
  padding: 25px;
}

.blog-meta {
  margin-bottom: 15px;
}

.publish-date {
  color: #ff6b35;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.blog-title {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 15px;
  line-height: 1.3;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-description {
  color: #ffffff;
  opacity: 0.8;
  line-height: 1.6;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .section-wrapper {
    padding: 20px;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .blog-image {
    height: 180px;
  }
  
  .blog-content {
    padding: 20px;
  }
  
  .blog-title {
    font-size: 18px;
  }
  
  .blog-description {
    font-size: 14px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .section-subtitle {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .hero-wrapper {
    padding: 20px;
  }
  
  .hero-title {
    font-size: 24px;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .section-wrapper {
    padding: 15px;
  }
  
  .blog-content {
    padding: 15px;
  }
  
  .blog-title {
    font-size: 16px;
  }
  
  .blog-description {
    font-size: 12px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .section-subtitle {
    font-size: 14px;
  }
}
</style>
