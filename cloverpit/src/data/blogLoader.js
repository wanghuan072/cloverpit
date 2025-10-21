// 博客数据加载工具函数
import { getCurrentLocale } from '@/i18n'

// 支持的语言列表
const supportedLanguages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

/**
 * 根据当前语言动态加载博客数据
 * @returns {Promise<Array>} 博客数据数组
 */
export async function loadBlogData() {
  try {
    // 获取当前语言
    const currentLocale = getCurrentLocale()
    
    // 确保语言在支持列表中，否则使用英文
    const locale = supportedLanguages.includes(currentLocale) ? currentLocale : 'en'
    
    // 动态导入对应语言的博客数据
    const blogModule = await import(`./${locale}/blog.js`)
    
    return blogModule.blog || []
  } catch (error) {
    console.error('Failed to load blog data:', error)
    // 如果加载失败，返回空数组
    return []
  }
}

/**
 * 根据语言和文章地址栏查找特定博客文章
 * @param {string} addressBar - 文章地址栏
 * @param {string} locale - 语言代码，可选
 * @returns {Promise<Object|null>} 博客文章对象或null
 */
export async function findBlogPost(addressBar, locale = null) {
  try {
    // 如果没有指定语言，使用当前语言
    const targetLocale = locale || getCurrentLocale()
    const finalLocale = supportedLanguages.includes(targetLocale) ? targetLocale : 'en'
    
    // 动态导入对应语言的博客数据
    const blogModule = await import(`./${finalLocale}/blog.js`)
    const blogData = blogModule.blog || []
    
    // 查找匹配的文章
    const post = blogData.find(item => item.addressBar === addressBar)
    
    return post || null
  } catch (error) {
    console.error('Failed to find blog post:', error)
    return null
  }
}

/**
 * 获取所有支持的语言列表
 * @returns {Array<string>} 支持的语言代码数组
 */
export function getSupportedLanguages() {
  return [...supportedLanguages]
}

/**
 * 检查语言是否受支持
 * @param {string} locale - 语言代码
 * @returns {boolean} 是否支持该语言
 */
export function isLanguageSupported(locale) {
  return supportedLanguages.includes(locale)
}
