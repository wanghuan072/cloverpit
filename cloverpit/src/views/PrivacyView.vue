<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('PrivacyPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('PrivacyPage.hero.description') }}</p>
            <div class="last-updated">
              <span>{{ $t('PrivacyPage.hero.lastUpdated') }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="legal-content">
              <h2>{{ $t('PrivacyPage.content.informationWeCollect.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.informationWeCollect.description') }}</p>
              
              <h3>{{ $t('PrivacyPage.content.informationWeCollect.personalInformation.title') }}</h3>
              <ul>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.personalInformation.items.emailDescription1') }} wyong@321gogame.com{{ $t('PrivacyPage.content.informationWeCollect.personalInformation.items.emailDescription2') }}</li>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.personalInformation.items.name') }}</li>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.personalInformation.items.voluntaryInfo') }}</li>
              </ul>

              <h3>{{ $t('PrivacyPage.content.informationWeCollect.automaticallyCollected.title') }}</h3>
              <ul>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.automaticallyCollected.items.ipAddress') }}</li>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.automaticallyCollected.items.pagesVisited') }}</li>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.automaticallyCollected.items.referringWebsite') }}</li>
                <li>{{ $t('PrivacyPage.content.informationWeCollect.automaticallyCollected.items.deviceInfo') }}</li>
              </ul>

              <h2>{{ $t('PrivacyPage.content.howWeUse.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.howWeUse.description') }}</p>
              <ul>
                <li>{{ $t('PrivacyPage.content.howWeUse.items.provideContent') }}</li>
                <li>{{ $t('PrivacyPage.content.howWeUse.items.respondInquiries') }}</li>
                <li>{{ $t('PrivacyPage.content.howWeUse.items.analyzeUsage') }}</li>
                <li>{{ $t('PrivacyPage.content.howWeUse.items.ensureSecurity') }}</li>
              </ul>

              <h2>{{ $t('PrivacyPage.content.informationSharing.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.informationSharing.description') }}</p>
              <ul>
                <li>{{ $t('PrivacyPage.content.informationSharing.items.requiredByLaw') }}</li>
                <li>{{ $t('PrivacyPage.content.informationSharing.items.protectRights') }}</li>
                <li>{{ $t('PrivacyPage.content.informationSharing.items.serviceProviders') }}</li>
              </ul>

              <h2>{{ $t('PrivacyPage.content.dataSecurity.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.dataSecurity.description') }}</p>

              <h2>{{ $t('PrivacyPage.content.cookiesAndTracking.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.cookiesAndTracking.description') }}</p>

              <h2>{{ $t('PrivacyPage.content.thirdPartyLinks.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.thirdPartyLinks.description') }}</p>

              <h2>{{ $t('PrivacyPage.content.childrensPrivacy.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.childrensPrivacy.description') }}</p>

              <h2>{{ $t('PrivacyPage.content.changesToPolicy.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.changesToPolicy.description') }}</p>

              <h2>{{ $t('PrivacyPage.content.contactUs.title') }}</h2>
              <p>{{ $t('PrivacyPage.content.contactUs.description') }}</p>
              <div class="contact-info">
                <p><strong>{{ $t('PrivacyPage.content.contactUs.email') }}</strong> wyong@321gogame.com</p>
                <p><strong>{{ $t('PrivacyPage.content.contactUs.website') }}</strong> 321gogame.com</p>
                <p><strong>{{ $t('PrivacyPage.content.contactUs.lastUpdated') }}</strong> {{ $t('PrivacyPage.content.contactUs.lastUpdatedValue') }}</p>
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
