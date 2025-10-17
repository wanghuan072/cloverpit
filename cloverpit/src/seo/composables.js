import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { seoConfig } from './config.js'

// 当前SEO数据（全局状态）
const currentSEO = ref({})

// 更新单个meta标签
const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content || typeof document === 'undefined') return

    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
}

// 更新Canonical链接
const updateCanonicalLink = (href) => {
    if (typeof document === 'undefined') return
    
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', href)
}

// 更新语言标签
const updateLanguageTags = (language, canonicalUrl) => {
    if (typeof document === 'undefined') return
    
    // 更新html lang属性
    document.documentElement.lang = language

    // 移除现有的hreflang标签
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflang.forEach(tag => tag.remove())

    // 添加x-default hreflang
    const defaultLink = document.createElement('link')
    defaultLink.setAttribute('rel', 'alternate')
    defaultLink.setAttribute('hreflang', 'x-default')
    defaultLink.setAttribute('href', canonicalUrl)
    document.head.appendChild(defaultLink)

    // 添加当前语言的hreflang
    const currentLangLink = document.createElement('link')
    currentLangLink.setAttribute('rel', 'alternate')
    currentLangLink.setAttribute('hreflang', language)
    currentLangLink.setAttribute('href', canonicalUrl)
    document.head.appendChild(currentLangLink)
}

// 生成结构化数据
const generateStructuredData = (seo, canonicalUrl, language, pageName) => {
    // 基础WebPage结构
    const baseData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        inLanguage: language,
        isPartOf: {
            '@type': 'WebSite',
            name: 'CloverPit Guide',
            url: seoConfig.fullDomain,
            publisher: {
                '@type': 'Organization',
                name: 'CloverPit Guide Team',
                url: seoConfig.fullDomain,
                logo: {
                    '@type': 'ImageObject',
                    url: `${seoConfig.fullDomain}/images/about-img.webp`
                }
            }
        }
    }

    // 根据页面类型添加特定数据
    if (pageName === 'home' || pageName === 'wiki') {
        // 游戏相关页面添加VideoGame类型
        baseData['@type'] = ['WebPage', 'VideoGame']
        baseData.name = 'CloverPit: The Descent'
        baseData.genre = ['Roguelike', 'Horror', 'Slot Machine', 'Indie Game']
        baseData.gamePlatform = ['PC Windows', 'Steam Deck', 'Linux']
        baseData.operatingSystem = ['Windows 7', 'Windows 8', 'Windows 10', 'Windows 11', 'Linux']
        baseData.applicationCategory = 'Game'
        baseData.author = {
            '@type': 'Organization',
            name: 'Panik Arcade'
        }
        baseData.publisher = {
            '@type': 'Organization',
            name: 'Future Friends Games'
        }
    }

    if (pageName === 'guide') {
        baseData['@type'] = 'HowTo'
        baseData.totalTime = 'PT30M'
        baseData.supply = [
            {
                '@type': 'HowToSupply',
                name: 'CloverPit: The Descent game'
            }
        ]
    }

    if (pageName === 'endings') {
        baseData['@type'] = 'Article'
        baseData.articleSection = 'Game Guide'
        baseData.about = {
            '@type': 'VideoGame',
            name: 'CloverPit: The Descent'
        }
    }

    if (pageName === 'download') {
        baseData['@type'] = 'SoftwareApplication'
        baseData.name = 'CloverPit: The Descent'
        baseData.applicationCategory = 'Game'
        baseData.operatingSystem = ['Windows', 'Linux']
    }

    return baseData
}

// 更新结构化数据
const updateStructuredData = (seo, canonicalUrl, language, pageName) => {
    if (typeof document === 'undefined') return

    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
        existingScript.remove()
    }

    // 添加新的结构化数据
    const structuredData = generateStructuredData(seo, canonicalUrl, language, pageName)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData, null, 2)
    document.head.appendChild(script)
}

// 手动设置SEO（供router使用，不依赖Vue composables）
export function setSEO(seoData, currentPath, pageName = 'home') {
    if (typeof document === 'undefined') return

    const seo = {
        ...seoConfig.defaults,
        ...seoData
    }

    const canonicalUrl = `${seoConfig.fullDomain}${currentPath}`
    const language = seoConfig.defaultLanguage

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新基础meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author || seoConfig.defaults.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image || seoConfig.defaults.image, 'property')
    updateMetaTag('og:url', canonicalUrl, 'property')
    updateMetaTag('og:type', seo.type || seoConfig.defaults.type, 'property')
    updateMetaTag('og:site_name', 'CloverPit Guide', 'property')
    updateMetaTag('og:locale', 'en_US', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image || seoConfig.defaults.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink(canonicalUrl)

    // 语言标签
    updateLanguageTags(language, canonicalUrl)

    // 结构化数据
    updateStructuredData(seo, canonicalUrl, language, pageName)
}

// SEO composable（供组件内使用）
export function useSEO(seoDataCallback) {
    const route = useRoute()

    // 获取当前语言
    const currentLanguage = computed(() => {
        return seoConfig.defaultLanguage
    })

    // 获取当前页面路径
    const currentPath = computed(() => {
        return route.path
    })

    // 获取Canonical URL
    const canonicalUrl = computed(() => {
        return `${seoConfig.fullDomain}${currentPath.value}`
    })

    // 初始化SEO
    onMounted(() => {
        if (seoDataCallback && typeof seoDataCallback === 'function') {
            const seoData = seoDataCallback()
            currentSEO.value = {
                ...seoConfig.defaults,
                ...seoData
            }
            
            const pageName = route.name?.toLowerCase() || 'home'
            
            // 更新所有meta标签
            setSEO(currentSEO.value, currentPath.value, pageName)
        }
    })

    return {
        currentSEO,
        currentLanguage,
        currentPath,
        canonicalUrl
    }
}
