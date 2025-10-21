<template>
  <div class="blog-detail-page">
    <AppHeader />
    
    <!-- 博客详情头部 -->
    <section class="blog-header" :style="{ backgroundImage: `url(${blogPost.imageUrl})` }">
      <div class="header-overlay">
        <div class="container">
          <!-- 面包屑导航 -->
          <nav class="breadcrumb">
            <a :href="getLocalizedPath('/')" class="breadcrumb-link">{{ t('nav.home') }}</a>
            <span class="breadcrumb-separator">/</span>
            <a :href="getLocalizedPath('/cloverpit-blog')" class="breadcrumb-link">{{ t('nav.blog') }}</a>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">{{ blogPost.title }}</span>
          </nav>
          
          <!-- 博客标题 -->
          <h1 class="blog-title">{{ blogPost.title }}</h1>
          
          <!-- 发布日期 -->
          <div class="publish-date-container">
            <span class="publish-date">{{ formatDate(blogPost.publishDate) }}</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 博客内容 -->
    <main class="blog-content-section">
      <div class="container">
        <article class="blog-article">
          <div class="article-content" v-html="blogPost.detailsHtml"></div>
        </article>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import "../assets/css/public.css"
import { findBlogPost } from '../data/blogLoader.js'
import { setSEO } from '../seo'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const blogPost = ref({})

// 检测当前语言并生成多语言路径
const getLocalizedPath = (path) => {
  const currentLocale = locale.value
  if (currentLocale === 'en') {
    return path
  }
  return `/${currentLocale}${path}`
}

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// 设置博客详情页SEO
const setupBlogDetailSEO = () => {
  if (blogPost.value && blogPost.value.seo) {
    const seoData = {
      title: blogPost.value.seo.title,
      description: blogPost.value.seo.description,
      keywords: blogPost.value.seo.keywords
    }
    
    if (typeof document !== 'undefined') {
      // 从当前路径前缀推断语言
      const path = window.location.pathname || '/'
      const supported = ['en','zh','ja','ru','ko','de','fr','es','pt']
      let lang = 'en'
      for (const l of supported) {
        if (l !== 'en' && (path === `/${l}` || path.startsWith(`/${l}/`))) { lang = l; break }
      }
      setSEO(seoData, getLocalizedPath(`/blog/${blogPost.value.addressBar}`), 'blog', lang)
    }
  }
}

onMounted(async () => {
  try {
    const addressBar = route.params.slug
    const post = await findBlogPost(addressBar)
    
    if (post) {
      blogPost.value = post
      setupBlogDetailSEO()
    } else {
      // 如果找不到文章，重定向到博客列表页
      router.push(getLocalizedPath('/cloverpit-blog'))
    }
  } catch (error) {
    console.error('Failed to load blog post:', error)
    router.push(getLocalizedPath('/cloverpit-blog'))
  }
})
</script>

<style scoped>
.blog-detail-page {
  background: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  padding-top: 70px;
}

/* 博客头部样式 */
.blog-header {
  position: relative;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.6) 50%, 
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.header-overlay .container {
  text-align: center;
  z-index: 3;
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 40px;
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: #ff6b35;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #ffffff;
}

.breadcrumb-separator {
  color: #ffffff;
  margin: 0 10px;
  opacity: 0.6;
}

.breadcrumb-current {
  color: #ffffff;
  opacity: 0.8;
}

/* 博客标题 */
.blog-title {
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
  text-align: center;
}

/* 发布日期容器 */
.publish-date-container {
  margin-bottom: 0;
}

.publish-date {
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

/* 博客内容区域 */
.blog-content-section {
  padding: 80px 0;
  background: #1a1a1a;
}

.blog-article {
  background: rgba(26, 26, 26, 0.9);
  border-radius: 15px;
  padding: 40px;
  border: 1px solid #444;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .blog-header {
    height: 50vh;
  }
  
  .blog-title {
    font-size: 48px;
  }
  
  .blog-article {
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .blog-header {
    height: 40vh;
    background-attachment: scroll;
  }
  
  .blog-title {
    font-size: 32px;
    letter-spacing: 2px;
  }
  
  .breadcrumb {
    margin-bottom: 20px;
    font-size: 14px;
  }
  
  .blog-content-section {
    padding: 40px 0;
  }
  
  .blog-article {
    padding: 20px;
    margin: 0 10px;
  }
  
  .publish-date {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .blog-header {
    height: 35vh;
  }
  
  .blog-title {
    font-size: 24px;
    letter-spacing: 1px;
  }
  
  .breadcrumb {
    margin-bottom: 15px;
    font-size: 12px;
  }
  
  .blog-article {
    padding: 15px;
    margin: 0 5px;
  }
  
  .publish-date {
    padding: 8px 16px;
    font-size: 12px;
  }
}

/* 全局样式 - 用于v-html内容 */
:deep(.article-content) {
  color: #ffffff;
  line-height: 1.8;
}

:deep(.article-content h2) {
  color: #ff6b35;
  font-size: 32px;
  margin: 0 0 20px 0;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
}

:deep(.article-content h3) {
  color: #00ff41;
  font-size: 24px;
  margin: 0 0 15px 0;
  font-weight: 600;
}

:deep(.article-content h4) {
  color: #ff6b35;
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: 600;
}

:deep(.article-content p) {
  margin-bottom: 20px;
  color: #ffffff;
  opacity: 0.9;
  font-size: 16px;
}

:deep(.article-content ul) {
  margin: 20px 0;
  padding-left: 30px;
}

:deep(.article-content li) {
  margin-bottom: 10px;
  color: #ffffff;
  opacity: 0.9;
  font-size: 16px;
}

:deep(.article-content strong) {
  color: #ff6b35;
  font-weight: 600;
}

:deep(.article-content div) {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid #ff6b35;
  border-radius: 8px;
  padding: 20px;
  margin: 25px 0;
}

:deep(.article-content div h4) {
  color: #ff6b35;
  margin: 0 0 15px 0;
  font-size: 18px;
}

/* v-html内容响应式设计 */
@media (max-width: 768px) {
  :deep(.article-content h2) {
    font-size: 24px;
    margin: 0 0 15px 0;
  }
  
  :deep(.article-content h3) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
  
  :deep(.article-content h4) {
    font-size: 18px;
    margin: 0 0 8px 0;
  }
  
  :deep(.article-content p) {
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  :deep(.article-content li) {
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  :deep(.article-content div) {
    padding: 15px;
    margin: 20px 0;
  }
  
  :deep(.article-content div h4) {
    font-size: 16px;
    margin: 0 0 12px 0;
  }
}

@media (max-width: 480px) {
  :deep(.article-content h2) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
  
  :deep(.article-content h3) {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
  
  :deep(.article-content h4) {
    font-size: 16px;
    margin: 0 0 8px 0;
  }
  
  :deep(.article-content p) {
    font-size: 12px;
    margin-bottom: 12px;
  }
  
  :deep(.article-content li) {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  :deep(.article-content div) {
    padding: 12px;
    margin: 15px 0;
  }
  
  :deep(.article-content div h4) {
    font-size: 14px;
    margin: 0 0 10px 0;
  }
}
</style>
