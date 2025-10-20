<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('CopyrightPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('CopyrightPage.hero.description') }}</p>
            <div class="last-updated">
              <span>{{ $t('CopyrightPage.hero.lastUpdated') }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="legal-content">
              <h2>{{ $t('CopyrightPage.content.copyrightOwnership.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.copyrightOwnership.description') }}</p>

              <h2>{{ $t('CopyrightPage.content.websiteContent.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.websiteContent.description') }}</p>

              <h2>{{ $t('CopyrightPage.content.cloverPitGameContent.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.cloverPitGameContent.description') }}</p>
              
              <div class="notice-box">
                <h3>{{ $t('CopyrightPage.content.importantNotice.title') }}</h3>
                <p>{{ $t('CopyrightPage.content.importantNotice.description') }}</p>
                <ul>
                  <li><strong>{{ $t('CopyrightPage.content.importantNotice.developer') }}</strong> {{ $t('CopyrightPage.content.importantNotice.developerValue') }}</li>
                  <li><strong>{{ $t('CopyrightPage.content.importantNotice.publisher') }}</strong> {{ $t('CopyrightPage.content.importantNotice.publisherValue') }}</li>
                  <li><strong>{{ $t('CopyrightPage.content.importantNotice.gameTitle') }}</strong> {{ $t('CopyrightPage.content.importantNotice.gameTitleValue') }}</li>
                </ul>
              </div>

              <h2>{{ $t('CopyrightPage.content.fairUsePolicy.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.fairUsePolicy.description') }}</p>
              <ul>
                <li>{{ $t('CopyrightPage.content.fairUsePolicy.items.guides') }}</li>
                <li>{{ $t('CopyrightPage.content.fairUsePolicy.items.analysis') }}</li>
                <li>{{ $t('CopyrightPage.content.fairUsePolicy.items.community') }}</li>
                <li>{{ $t('CopyrightPage.content.fairUsePolicy.items.fanContent') }}</li>
              </ul>

              <h2>{{ $t('CopyrightPage.content.userGeneratedContent.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.userGeneratedContent.description') }}</p>

              <h2>{{ $t('CopyrightPage.content.dmcaCompliance.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.dmcaCompliance.description1') }} wyong@321gogame.com {{ $t('CopyrightPage.content.dmcaCompliance.description2') }}</p>
              <ul>
                <li>{{ $t('CopyrightPage.content.dmcaCompliance.items.description') }}</li>
                <li>{{ $t('CopyrightPage.content.dmcaCompliance.items.location') }}</li>
                <li>{{ $t('CopyrightPage.content.dmcaCompliance.items.contactInfo') }}</li>
                <li>{{ $t('CopyrightPage.content.dmcaCompliance.items.goodFaith') }}</li>
                <li>{{ $t('CopyrightPage.content.dmcaCompliance.items.authorization') }}</li>
              </ul>

              <h2>{{ $t('CopyrightPage.content.thirdPartyContent.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.thirdPartyContent.description') }}</p>

              <h2>{{ $t('CopyrightPage.content.licenseToUse.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.licenseToUse.description') }}</p>
              <ul>
                <li>{{ $t('CopyrightPage.content.licenseToUse.items.reproduce') }}</li>
                <li>{{ $t('CopyrightPage.content.licenseToUse.items.modify') }}</li>
                <li>{{ $t('CopyrightPage.content.licenseToUse.items.remove') }}</li>
                <li>{{ $t('CopyrightPage.content.licenseToUse.items.harm') }}</li>
              </ul>

              <h2>{{ $t('CopyrightPage.content.contactInformation.title') }}</h2>
              <p>{{ $t('CopyrightPage.content.contactInformation.description') }}</p>
              <div class="contact-info">
                <p><strong>{{ $t('CopyrightPage.content.contactInformation.email') }}</strong> wyong@321gogame.com</p>
                <p><strong>{{ $t('CopyrightPage.content.contactInformation.website') }}</strong> 321gogame.com</p>
                <p><strong>{{ $t('CopyrightPage.content.contactInformation.subjectLine') }}</strong> {{ $t('CopyrightPage.content.contactInformation.subjectLineValue') }}</p>
                <p><strong>{{ $t('CopyrightPage.content.contactInformation.lastUpdated') }}</strong> {{ $t('CopyrightPage.content.contactInformation.lastUpdatedValue') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import '@/assets/css/public.css'
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.page-content {
  padding-top: 80px;
}

.hero {
  padding: 60px 0;
  background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-description {
  font-size: 1.2rem;
  color: #d1d5db;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.last-updated {
  color: #9ca3af;
  font-size: 0.9rem;
}

.content {
  padding: 80px 0;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.legal-content {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #444;
}

.legal-content h2 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin: 30px 0 15px 0;
  font-weight: bold;
}

.legal-content h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin: 25px 0 10px 0;
  font-weight: 600;
}

.legal-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 15px;
}

.legal-content ul {
  color: #d1d5db;
  margin: 15px 0;
  padding-left: 20px;
}

.legal-content li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.notice-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.notice-box h3 {
  color: #f59e0b;
  margin-top: 0;
}

.notice-box p {
  color: #ffffff;
}

.notice-box ul {
  color: #ffffff;
}

.contact-info {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

.contact-info p {
  margin: 5px 0;
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .legal-content {
    padding: 30px 20px;
  }
  
  .legal-content h2 {
    font-size: 1.5rem;
  }
  
  .legal-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .legal-content {
    padding: 20px 15px;
  }
}
</style>
