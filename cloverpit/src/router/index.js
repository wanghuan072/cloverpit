import { createRouter, createWebHistory } from 'vue-router'
import { setSEO } from '@/seo'

// 页面SEO配置
const pageSEOConfig = {
  home: {
    title: 'CloverPit: The Descent - Complete Game Guide & Wiki | 321gogame.com',
    description: 'Master the ultimate CloverPit: The Descent strategy guide. Comprehensive gameplay guides, charm combinations, endings guide, and professional gaming tutorials.',
    keywords: 'CloverPit, CloverPit The Descent, rogue-lite, slot machine, horror game, game guide, charm combinations, endings guide, game wiki, 321gogame.com'
  },
  guide: {
    title: 'CloverPit: The Descent Strategy Guide - Complete Gameplay Guide | 321gogame.com',
    description: 'Master the rogue-lite slot machine horror with this comprehensive CloverPit guide featuring beginner tips, advanced strategies, and charm synergies.',
    keywords: 'CloverPit guide, CloverPit strategy, gameplay guide, charm combinations, survival tips, horror game guide, 321gogame.com'
  },
  wiki: {
    title: 'CloverPit: The Descent Wiki - Complete Game Encyclopedia | 321gogame.com',
    description: 'Complete CloverPit Wiki database of game mechanics, symbols, patterns, and strategies. Comprehensive CloverPit Wiki for all players.',
    keywords: 'CloverPit wiki, game mechanics, symbols, patterns, rarity, phone calls, memory cards, game encyclopedia, 321gogame.com'
  },
  endings: {
    title: 'CloverPit: The Descent Endings Guide - All Game Endings | 321gogame.com',
    description: 'Master the art of escaping CloverPit with this comprehensive endings guide to all ending types, including the true ending and sacred trinkets.',
    keywords: 'CloverPit endings, all endings, true ending, bad ending, good ending, sacred trinkets, ending guide, 321gogame.com'
  },
  blog: {
    title: 'CloverPit: The Descent Blog - Latest News & Updates | 321gogame.com',
    description: 'Latest news, updates, and community content for CloverPit: The Descent. Expert guides, tips, strategies, and game insights.',
    keywords: 'CloverPit blog, game news, updates, community content, expert guides, tips, strategies, 321gogame.com'
  },
  download: {
    title: 'Download CloverPit: The Descent - Official Download Guide | 321gogame.com',
    description: 'Download CloverPit: The Descent safely and securely. Official download channels, system requirements, and installation guide.',
    keywords: 'download CloverPit, game download, system requirements, installation guide, official download, 321gogame.com'
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/cloverpit-guide',
      name: 'Guide',
      component: () => import('../views/GuideView.vue')
    },
    {
      path: '/cloverpit-wiki',
      name: 'Wiki',
      component: () => import('../views/WikiView.vue')
    },
    {
      path: '/cloverpit-endings',
      name: 'Endings',
      component: () => import('../views/EndingsView.vue')
    },
    {
      path: '/cloverpit-blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/cloverpit-download',
      name: 'Download',
      component: () => import('../views/DownloadView.vue')
    }
  ],
})

// 路由守卫：设置页面SEO
router.beforeEach(async (to, from, next) => {
  try {
    // 获取页面名称
    const pageName = to.name?.toLowerCase() || 'home'
    
    // 获取对应的SEO配置
    const seoData = pageSEOConfig[pageName] || pageSEOConfig.home
    
    // 设置页面SEO
    if (typeof document !== 'undefined') {
      setSEO(seoData, to.path, pageName)
    }
    
    next()
  } catch (error) {
    console.error('SEO setup error:', error)
    next()
  }
})

export default router
