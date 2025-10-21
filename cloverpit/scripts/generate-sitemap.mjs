#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const domain = 'https://321gogame.com'

// 与路由一致的页面基本路径（默认语言英文无前缀）
const pages = [
  '/',
  '/cloverpit-guide',
  '/cloverpit-wiki',
  '/cloverpit-endings',
  '/cloverpit-blog',
  '/cloverpit-download',
  '/privacy-policy',
  '/terms-of-service',
  '/copyright',
  '/about-us',
  '/contact-us'
]

const languages = ['en', 'zh', 'ja', 'ru', 'ko', 'de', 'fr', 'es', 'pt']

// 动态加载多语言博客数据
async function loadBlogDataForLanguage(lang) {
  try {
    const blogModule = await import(`../src/data/${lang}/blog.js`)
    return blogModule.blog || []
  } catch (error) {
    console.warn(`Failed to load blog data for language ${lang}:`, error.message)
    return []
  }
}

// 加载所有语言的博客数据
async function loadAllBlogData() {
  const allBlogData = {}
  for (const lang of languages) {
    allBlogData[lang] = await loadBlogDataForLanguage(lang)
  }
  return allBlogData
}

// 生成全部本地化路径
function generateLocalizedUrls() {
  const urls = []
  const today = new Date().toISOString().slice(0, 10)
  for (const lang of languages) {
    const isDefault = lang === 'en'
    for (const page of pages) {
      const loc = isDefault ? `${domain}${page}` : `${domain}/${lang}${page}`
      const priority = page === '/' ? 1.0 : page.startsWith('/cloverpit-') ? 0.9 : 0.6
      const changefreq = page === '/cloverpit-download' || page === '/privacy-policy' || page === '/terms-of-service' ? 'monthly' : (page === '/' ? 'weekly' : 'weekly')
      urls.push({ loc, lastmod: today, changefreq, priority })
    }
  }
  return urls
}

function toXml(urls) {
  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  for (const u of urls) {
    lines.push('    <url>')
    lines.push(`        <loc>${u.loc}</loc>`)
    lines.push(`        <lastmod>${u.lastmod}</lastmod>`)
    lines.push(`        <changefreq>${u.changefreq}</changefreq>`)
    lines.push(`        <priority>${u.priority}</priority>`)
    lines.push('    </url>')
  }
  lines.push('</urlset>')
  return lines.join('\n')
}

// 生成多语言博客详情 URL 列表
function generateBlogUrls(allBlogData) {
  const urls = []
  const today = new Date().toISOString().slice(0, 10)
  
  for (const lang of languages) {
    const blogData = allBlogData[lang] || []
    const isDefaultLang = lang === 'en'
    
    for (const post of blogData) {
      if (!post || !post.addressBar) continue
      
      // 生成多语言路径
      const loc = isDefaultLang 
        ? `${domain}/blog/${post.addressBar}`
        : `${domain}/${lang}/blog/${post.addressBar}`
      
      const lastmod = post.publishDate || today
      const changefreq = 'weekly'
      const priority = 0.7
      urls.push({ loc, lastmod, changefreq, priority })
    }
  }
  
  return urls
}

// 主执行函数
async function generateSitemap() {
  try {
    // 加载所有语言的博客数据
    const allBlogData = await loadAllBlogData()
    
    // 生成URL列表
    const pageUrls = generateLocalizedUrls()
    const blogUrls = generateBlogUrls(allBlogData)
    const urls = [...pageUrls, ...blogUrls]
    
    // 生成XML
    const xml = toXml(urls)
    
    // 写入文件
    const outPath = resolve(process.cwd(), 'public', 'sitemap.xml')
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, xml, 'utf8')
    
    console.log(`Generated sitemap with ${urls.length} URLs at ${outPath}`)
    console.log(`- Page URLs: ${pageUrls.length}`)
    console.log(`- Blog URLs: ${blogUrls.length}`)
    
    // 显示各语言的博客数量
    for (const lang of languages) {
      const blogCount = (allBlogData[lang] || []).length
      if (blogCount > 0) {
        console.log(`  - ${lang}: ${blogCount} blog posts`)
      }
    }
  } catch (error) {
    console.error('Failed to generate sitemap:', error)
    process.exit(1)
  }
}

// 执行生成
generateSitemap()


