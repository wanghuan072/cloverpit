import { createRouter, createWebHistory } from 'vue-router'
import { setSEO } from '@/seo'

// 只导入英文语言文件用于SEO
import enLocale from '@/locales/en.json'

// 语言数据映射 - 只包含英文
const localeDataMap = {
  en: enLocale
}

// 页面配置
const pageConfigs = [
  { path: '/', component: 'HomeView', name: 'Home' },
  { path: '/cloverpit-guide', component: 'GuideView', name: 'Guide' },
  { path: '/cloverpit-wiki', component: 'WikiView', name: 'Wiki' },
  { path: '/cloverpit-endings', component: 'EndingsView', name: 'Endings' },
  { path: '/cloverpit-blog', component: 'BlogView', name: 'Blog' },
  { path: '/cloverpit-download', component: 'DownloadView', name: 'Download' },
  { path: '/privacy-policy', component: 'PrivacyView', name: 'Privacy' },
  { path: '/terms-of-service', component: 'TermsView', name: 'Terms' },
  { path: '/copyright', component: 'CopyrightView', name: 'Copyright' },
  { path: '/about-us', component: 'AboutView', name: 'About' },
  { path: '/contact-us', component: 'ContactView', name: 'Contact' },
  { path: '/blog/:slug', component: 'BlogDetailView', name: 'BlogDetail' }
]

// 支持的语言列表 - 简化
const supportedLanguages = ['en']

// 简化路由生成 - 只生成英文路由
function generateRoutes() {
  return pageConfigs.map(page => ({
    path: page.path,
    name: page.name,
    component: () => import(`@/views/${page.component}.vue`)
  }))
}

// 生成路由配置
const routes = generateRoutes()

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 检测URL中的语言
function detectLanguageFromPath(path) {
  for (const lang of supportedLanguages) {
    if (lang === 'en') continue // 英文是默认语言，不需要前缀
    if (path.startsWith(`/${lang}`)) {
      return lang
    }
  }
  return 'en' // 默认返回英文
}

// 简化路由守卫 - 只设置SEO
router.beforeEach(async (to, from, next) => {
  try {
    // 设置HTML的lang属性
    document.documentElement.lang = 'en'
    
    // 设置页面SEO
    setPageSEO(to, 'en')
    
    next()
  } catch (error) {
    console.error('Route guard error:', error)
    next()
  }
})

// 简化SEO设置函数
async function setPageSEO(route, language) {
  // 获取页面SEO配置
  const seoKey = getSEOKey(route.path)

  // 从英文语言文件获取SEO数据
  const localeData = localeDataMap['en']
  const seoData = localeData?.seo?.[seoKey]

  if (seoData && typeof document !== 'undefined') {
    setSEO(seoData, route.path, seoKey, 'en')
  }
}

// 根据路径获取SEO配置键
function getSEOKey(path) {
  const pathMap = {
    '/': 'home',
    '/cloverpit-guide': 'guide',
    '/cloverpit-wiki': 'wiki',
    '/cloverpit-endings': 'endings',
    '/cloverpit-blog': 'blog',
    '/cloverpit-download': 'download',
    '/privacy-policy': 'privacy',
    '/terms-of-service': 'terms',
    '/copyright': 'copyright',
    '/about-us': 'about',
    '/contact-us': 'contact'
  }

  return pathMap[path] || 'home'
}

export default router
