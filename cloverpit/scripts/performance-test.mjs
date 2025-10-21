#!/usr/bin/env node
/**
 * 性能测试脚本
 * 用于验证CloverPit网站的性能优化效果
 */

import { chromium } from 'playwright'
import { writeFileSync } from 'node:fs'

const BASE_URL = 'http://localhost:5173'

async function runPerformanceTest() {
  console.log('🚀 开始性能测试...')
  
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  
  try {
    // 测试首页性能
    console.log('📊 测试首页性能...')
    await page.goto(`${BASE_URL}/`)
    
    // 等待页面完全加载
    await page.waitForLoadState('networkidle')
    
    // 获取性能指标
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0]
      const paintEntries = performance.getEntriesByType('paint')
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime
      
      return {
        fcp: fcp ? Math.round(fcp) : null,
        lcp: lcp ? Math.round(lcp) : null,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      }
    })
    
    console.log('📈 性能指标结果:')
    console.log(`  FCP (首次内容绘制): ${performanceMetrics.fcp}ms`)
    console.log(`  LCP (最大内容绘制): ${performanceMetrics.lcp}ms`)
    console.log(`  DOM内容加载: ${performanceMetrics.domContentLoaded}ms`)
    console.log(`  页面完全加载: ${performanceMetrics.loadComplete}ms`)
    console.log(`  总加载时间: ${performanceMetrics.totalTime}ms`)
    
    // 测试博客详情页性能
    console.log('📊 测试博客详情页性能...')
    await page.goto(`${BASE_URL}/blog/cloverpit-advanced-guide-beyond-interest-flow`)
    await page.waitForLoadState('networkidle')
    
    const blogMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0]
      const paintEntries = performance.getEntriesByType('paint')
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime
      const lcp = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime
      
      return {
        fcp: fcp ? Math.round(fcp) : null,
        lcp: lcp ? Math.round(lcp) : null,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      }
    })
    
    console.log('📈 博客页性能指标:')
    console.log(`  FCP: ${blogMetrics.fcp}ms`)
    console.log(`  LCP: ${blogMetrics.lcp}ms`)
    console.log(`  总加载时间: ${blogMetrics.totalTime}ms`)
    
    // 生成性能报告
    const report = {
      timestamp: new Date().toISOString(),
      homepage: performanceMetrics,
      blogPage: blogMetrics,
      recommendations: []
    }
    
    // 性能建议
    if (performanceMetrics.fcp > 2500) {
      report.recommendations.push('FCP超过2.5秒，建议进一步优化关键资源加载')
    }
    if (performanceMetrics.lcp > 4000) {
      report.recommendations.push('LCP超过4秒，建议优化最大内容元素加载')
    }
    if (performanceMetrics.totalTime > 5000) {
      report.recommendations.push('总加载时间超过5秒，建议优化整体性能')
    }
    
    // 保存报告
    writeFileSync('performance-report.json', JSON.stringify(report, null, 2))
    console.log('📄 性能报告已保存到 performance-report.json')
    
    console.log('✅ 性能测试完成!')
    
  } catch (error) {
    console.error('❌ 性能测试失败:', error.message)
  } finally {
    await browser.close()
  }
}

// 运行测试
runPerformanceTest().catch(console.error)
