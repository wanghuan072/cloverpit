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

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 动态生成路由 - 支持多语言但按需加载
function generateRoutes() {
  const routes = []

  // 为每种语言生成路由
  supportedLanguages.forEach(lang => {
    pageConfigs.forEach(page => {
      const isDefaultLang = lang === 'en'
      const path = isDefaultLang ? page.path : `/${lang}${page.path}`
      const name = isDefaultLang ? page.name : `${page.name}${lang.charAt(0).toUpperCase() + lang.slice(1)}`

      routes.push({
        path,
        name,
        component: () => import(`@/views/${page.component}.vue`)
      })
    })
  })

  return routes
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

// 路由守卫：根据URL设置语言和SEO
router.beforeEach(async (to, from, next) => {
  // 从URL路径中检测语言
  const detectedLanguage = detectLanguageFromPath(to.path)

  try {
    // 导入i18n实例并设置语言
    const { default: i18n, loadLocale } = await import('@/i18n')

    // 如果语言不是英文，先加载语言文件
    if (detectedLanguage !== 'en') {
      await loadLocale(detectedLanguage)
    }

    // 设置语言
    i18n.global.locale.value = detectedLanguage
    localStorage.setItem('language', detectedLanguage)

    // 设置HTML的lang属性
    document.documentElement.lang = detectedLanguage
    
    // 设置页面SEO
    setPageSEO(to, detectedLanguage)
    
    next()
  } catch (error) {
    console.error('Language switching error:', error)
    next()
  }
})

// SEO设置函数 - 支持多语言
async function setPageSEO(route, language) {
  // 获取页面SEO配置
  const seoKey = getSEOKey(route.path, language)

  // 从对应语言文件获取SEO数据
  const localeData = localeDataMap[language] || localeDataMap['en']
  const seoData = localeData?.seo?.[seoKey]

  if (seoData && typeof document !== 'undefined') {
    setSEO(seoData, route.path, seoKey, language)
  }
}

// 根据路径获取SEO配置键
function getSEOKey(path, language) {
  // 移除语言前缀
  let cleanPath = path
  if (language !== 'en') {
    cleanPath = path.replace(`/${language}`, '') || '/'
  }

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

  return pathMap[cleanPath] || 'home'
}

export default router
