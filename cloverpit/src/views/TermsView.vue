<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('TermsPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('TermsPage.hero.description') }}</p>
            <div class="last-updated">
              <span>{{ $t('TermsPage.hero.lastUpdated') }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="legal-content">
              <h2>{{ $t('TermsPage.content.acceptanceOfTerms.title') }}</h2>
              <p>{{ $t('TermsPage.content.acceptanceOfTerms.description') }}</p>

              <h2>{{ $t('TermsPage.content.useLicense.title') }}</h2>
              <p>{{ $t('TermsPage.content.useLicense.description') }}</p>
              <ul>
                <li>{{ $t('TermsPage.content.useLicense.items.modifyCopy') }}</li>
                <li>{{ $t('TermsPage.content.useLicense.items.commercialUse') }}</li>
                <li>{{ $t('TermsPage.content.useLicense.items.reverseEngineer') }}</li>
                <li>{{ $t('TermsPage.content.useLicense.items.removeCopyright') }}</li>
              </ul>

              <h2>{{ $t('TermsPage.content.disclaimer.title') }}</h2>
              <p>{{ $t('TermsPage.content.disclaimer.description') }}</p>

              <h2>{{ $t('TermsPage.content.limitations.title') }}</h2>
              <p>{{ $t('TermsPage.content.limitations.description') }}</p>

              <h2>{{ $t('TermsPage.content.accuracyOfMaterials.title') }}</h2>
              <p>{{ $t('TermsPage.content.accuracyOfMaterials.description') }}</p>

              <h2>{{ $t('TermsPage.content.links.title') }}</h2>
              <p>{{ $t('TermsPage.content.links.description') }}</p>

              <h2>{{ $t('TermsPage.content.modifications.title') }}</h2>
              <p>{{ $t('TermsPage.content.modifications.description') }}</p>

              <h2>{{ $t('TermsPage.content.governingLaw.title') }}</h2>
              <p>{{ $t('TermsPage.content.governingLaw.description') }}</p>

              <h2>{{ $t('TermsPage.content.userConduct.title') }}</h2>
              <p>{{ $t('TermsPage.content.userConduct.description') }}</p>
              <ul>
                <li>{{ $t('TermsPage.content.userConduct.items.violateLaws') }}</li>
                <li>{{ $t('TermsPage.content.userConduct.items.transmitHarmfulCode') }}</li>
                <li>{{ $t('TermsPage.content.userConduct.items.unauthorizedAccess') }}</li>
                <li>{{ $t('TermsPage.content.userConduct.items.interfereFunctioning') }}</li>
                <li>{{ $t('TermsPage.content.userConduct.items.unlawfulPurpose') }}</li>
              </ul>

              <h2>{{ $t('TermsPage.content.intellectualProperty.title') }}</h2>
              <p>{{ $t('TermsPage.content.intellectualProperty.description') }}</p>

              <h2>{{ $t('TermsPage.content.contactInformation.title') }}</h2>
              <p>{{ $t('TermsPage.content.contactInformation.description') }}</p>
              <div class="contact-info">
                <p><strong>{{ $t('TermsPage.content.contactInformation.email') }}</strong> wyong@321gogame.com</p>
                <p><strong>{{ $t('TermsPage.content.contactInformation.website') }}</strong> 321gogame.com</p>
                <p><strong>{{ $t('TermsPage.content.contactInformation.lastUpdated') }}</strong> {{ $t('TermsPage.content.contactInformation.lastUpdatedValue') }}</p>
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
