<template>
  <div class="about-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('AboutPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('AboutPage.hero.description') }}</p>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="about-content">
              <h2>{{ $t('AboutPage.content.ourMission.title') }}</h2>
              <p>{{ $t('AboutPage.content.ourMission.description') }}</p>

              <h2>{{ $t('AboutPage.content.whoWeAre.title') }}</h2>
              <p>{{ $t('AboutPage.content.whoWeAre.description') }}</p>

              <h2>{{ $t('AboutPage.content.whatWeDo.title') }}</h2>
              <p>{{ $t('AboutPage.content.whatWeDo.description') }}</p>
              <ul>
                <li>{{ $t('AboutPage.content.whatWeDo.items.strategies') }}</li>
                <li>{{ $t('AboutPage.content.whatWeDo.items.charmCombinations') }}</li>
                <li>{{ $t('AboutPage.content.whatWeDo.items.endingsWalkthrough') }}</li>
                <li>{{ $t('AboutPage.content.whatWeDo.items.gameMechanics') }}</li>
                <li>{{ $t('AboutPage.content.whatWeDo.items.communityInsights') }}</li>
                <li>{{ $t('AboutPage.content.whatWeDo.items.regularUpdates') }}</li>
              </ul>

              <h2>{{ $t('AboutPage.content.ourExpertise.title') }}</h2>
              <p>{{ $t('AboutPage.content.ourExpertise.description') }}</p>
              <ul>
                <li>{{ $t('AboutPage.content.ourExpertise.items.rogueliteSpecialists') }}</li>
                <li>{{ $t('AboutPage.content.ourExpertise.items.strategyWriters') }}</li>
                <li>{{ $t('AboutPage.content.ourExpertise.items.communityModerators') }}</li>
                <li>{{ $t('AboutPage.content.ourExpertise.items.gameAnalysis') }}</li>
              </ul>

              <h2>{{ $t('AboutPage.content.communityFocus.title') }}</h2>
              <p>{{ $t('AboutPage.content.communityFocus.description') }}</p>

              <h2>{{ $t('AboutPage.content.qualityCommitment.title') }}</h2>
              <p>{{ $t('AboutPage.content.qualityCommitment.description') }}</p>

              <h2>{{ $t('AboutPage.content.independence.title') }}</h2>
              <p>{{ $t('AboutPage.content.independence.description') }}</p>

              <h2>{{ $t('AboutPage.content.contactOurTeam.title') }}</h2>
              <p>{{ $t('AboutPage.content.contactOurTeam.description') }}</p>

              <div class="contact-info">
                <h3>{{ $t('AboutPage.content.contactInfo.title') }}</h3>
                <p><strong>{{ $t('AboutPage.content.contactInfo.email') }}</strong> wyong@321gogame.com</p>
                <p><strong>{{ $t('AboutPage.content.contactInfo.website') }}</strong> 321gogame.com</p>
                <p><strong>{{ $t('AboutPage.content.contactInfo.responseTime') }}</strong> {{ $t('AboutPage.content.contactInfo.responseTimeValue') }}</p>
                <p><strong>{{ $t('AboutPage.content.contactInfo.lastUpdated') }}</strong> {{ $t('AboutPage.content.contactInfo.lastUpdatedValue') }}</p>
              </div>

              <h2>{{ $t('AboutPage.content.thankYou.title') }}</h2>
              <p>{{ $t('AboutPage.content.thankYou.description') }}</p>
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
.about-page {
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

.content {
  padding: 80px 0;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #444;
}

.about-content h2 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin: 30px 0 15px 0;
  font-weight: bold;
}

.about-content h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin: 25px 0 10px 0;
  font-weight: 600;
}

.about-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 15px;
}

.about-content ul {
  color: #d1d5db;
  margin: 15px 0;
  padding-left: 20px;
}

.about-content li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.contact-info {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.contact-info h3 {
  color: #ff6b35;
  margin-top: 0;
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
  
  .about-content {
    padding: 30px 20px;
  }
  
  .about-content h2 {
    font-size: 1.5rem;
  }
  
  .about-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .about-content {
    padding: 20px 15px;
  }
}
</style>
