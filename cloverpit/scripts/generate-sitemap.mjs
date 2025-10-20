#!/usr/bin/env node
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { blog } from '../src/data/blog.js'

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

// 仅默认语言（无语言前缀）的博客详情 URL 列表
function generateBlogUrls() {
  const urls = []
  const today = new Date().toISOString().slice(0, 10)
  for (const post of blog) {
    if (!post || !post.addressBar) continue
    const loc = `${domain}/blog/${post.addressBar}`
    const lastmod = post.publishDate || today
    const changefreq = 'weekly'
    const priority = 0.7
    urls.push({ loc, lastmod, changefreq, priority })
  }
  return urls
}

const urls = [...generateLocalizedUrls(), ...generateBlogUrls()]
const xml = toXml(urls)

const outPath = resolve(process.cwd(), 'public', 'sitemap.xml')
mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, xml, 'utf8')
console.log(`Generated sitemap with ${urls.length} URLs at ${outPath}`)


