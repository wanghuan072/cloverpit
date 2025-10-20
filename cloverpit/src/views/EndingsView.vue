<template>
  <div class="endings-page">
    <AppHeader />

    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
                <h1 class="hero-title">{{ $t('EndingsPage.hero.title') }}</h1>
                <div class="hero-description">
                  <p v-html="$t('EndingsPage.hero.description')"></p>
                </div>
            <div class="endings-nav">
              <div class="nav-card" @click="scrollToSection('preparation')">
                <span>{{ $t('EndingsPage.hero.nav.preparation') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('bad-ending')">
                <span>{{ $t('EndingsPage.hero.nav.badEnding') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('good-ending')">
                <span>{{ $t('EndingsPage.hero.nav.goodEnding') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('tips')">
                <span>{{ $t('EndingsPage.hero.nav.tips') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Preparation Section -->
      <section id="preparation" class="section preparation">
        <div class="container">
          <div class="preparation-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('EndingsPage.preparation.title') }}</h2>
              <p class="section-subtitle" v-html="$t('EndingsPage.preparation.subtitle')"></p>
            </div>

            <div class="preparation-content">
              <div class="preparation-section">
                <h3>{{ $t('EndingsPage.preparation.drawerSlots.title') }}</h3>
                <p>{{ $t('EndingsPage.preparation.drawerSlots.description1') }}</p>
                
                <p>{{ $t('EndingsPage.preparation.drawerSlots.description2') }}</p>
                
                <img src="../../public/images/endings-01.webp" alt="CloverPit Ending Drawer Slots Collection" />
              
              </div>

              <div class="preparation-section">
                <h3>{{ $t('EndingsPage.preparation.corpsePieces.title') }}</h3>
                <p>{{ $t('EndingsPage.preparation.corpsePieces.description1') }}</p>
                
                <p>{{ $t('EndingsPage.preparation.corpsePieces.description2') }}</p>
                
                <p v-html="$t('EndingsPage.preparation.corpsePieces.description3')"></p>
              </div>

              <div class="preparation-section">
                <h3>{{ $t('EndingsPage.preparation.skullAcquisition.title') }}</h3>
                <p>{{ $t('EndingsPage.preparation.skullAcquisition.description1') }}</p>
                
                <p>{{ $t('EndingsPage.preparation.skullAcquisition.description2') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bad Ending Section -->
      <section id="bad-ending" class="section bad-ending">
        <div class="container">
          <div class="bad-ending-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('EndingsPage.badEnding.title') }}</h2>
              <p class="section-subtitle" v-html="$t('EndingsPage.badEnding.subtitle')"></p>
            </div>

            <div class="ending-content">
              <div class="ending-section">
                <h3>{{ $t('EndingsPage.badEnding.simplePath.title') }}</h3>
                <p>{{ $t('EndingsPage.badEnding.simplePath.description1') }}</p>
                
                <p>{{ $t('EndingsPage.badEnding.simplePath.description2') }}</p>
              </div>

              <div class="ending-section">
                <h3>{{ $t('EndingsPage.badEnding.rewards.title') }}</h3>
                <p>{{ $t('EndingsPage.badEnding.rewards.description1') }}</p>
                
                <p v-html="$t('EndingsPage.badEnding.rewards.description2')"></p>
                
                <p>{{ $t('EndingsPage.badEnding.rewards.description3') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Good Ending Section -->
      <section id="good-ending" class="section good-ending">
        <div class="container">
          <div class="good-ending-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('EndingsPage.goodEnding.title') }}</h2>
              <p class="section-subtitle" v-html="$t('EndingsPage.goodEnding.subtitle')"></p>       
            </div>

            <div class="ending-content">
              <div class="ending-section">
                <h3>{{ $t('EndingsPage.goodEnding.memoryCard.title') }}</h3>
                <p>{{ $t('EndingsPage.goodEnding.memoryCard.description1') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.memoryCard.description2') }}</p>
              
                <img src="../../public/images/endings-02.webp" alt="CloverPit Ending Memory Card Recommendation" />
              </div>

              <div class="ending-section">
                <h3>{{ $t('EndingsPage.goodEnding.phoneCalls.title') }}</h3>
                <p>{{ $t('EndingsPage.goodEnding.phoneCalls.description1') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.phoneCalls.description2') }}</p>
                
                <p v-html="$t('EndingsPage.goodEnding.phoneCalls.description3')"></p>
              </div>

              <div class="ending-section">
                <h3>{{ $t('EndingsPage.goodEnding.floppyDisk.title') }}</h3>
                <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description1') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description2') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description3') }}</p>
              
                <img src="../../public/images/endings-03.webp" alt="CloverPit Ending 666 Floppy Disk System" />
              </div>

              <div class="ending-section">
                <h3>{{ $t('EndingsPage.goodEnding.transformation.title') }}</h3>
                <p>{{ $t('EndingsPage.goodEnding.transformation.description1') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.transformation.description2') }}</p>
                
                <p>{{ $t('EndingsPage.goodEnding.transformation.description3') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tips & Tricks Section -->
      <section id="tips" class="section tips">
      <div class="container">
          <div class="tips-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('EndingsPage.tips.title') }}</h2>
              <p class="section-subtitle" v-html="$t('EndingsPage.tips.subtitle')"></p>
            </div>

            <div class="tips-content">
              <div class="tip-section">
                <h3>{{ $t('EndingsPage.tips.threeStrikes.title') }}</h3>
                <p>{{ $t('EndingsPage.tips.threeStrikes.description1') }}</p>
                
                <p>{{ $t('EndingsPage.tips.threeStrikes.description2') }}</p>
                
                <p v-html="$t('EndingsPage.tips.threeStrikes.description3')"></p>
              </div>

              <div class="tip-section">
                <h3>{{ $t('EndingsPage.tips.timing.title') }}</h3>
                <p>{{ $t('EndingsPage.tips.timing.description1') }}</p>
                
                <p>{{ $t('EndingsPage.tips.timing.description2') }}</p>
                
                <p>{{ $t('EndingsPage.tips.timing.description3') }}</p>
              </div>

              <div class="tip-section">
                <h3>{{ $t('EndingsPage.tips.sacredTrinkets.title') }}</h3>
                <p>{{ $t('EndingsPage.tips.sacredTrinkets.description1') }}</p>
                
                <p>{{ $t('EndingsPage.tips.sacredTrinkets.description2') }}</p>
                
                <p>{{ $t('EndingsPage.tips.sacredTrinkets.description3') }}</p>
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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>

<style scoped>
/* Base Styles */
.endings-page {
  background: #1a1a1a;
  color: #ffffff;
}

.endings-page img{
  max-width: 100%;
  height: auto;
}

/* Section Base */
.section {
  position: relative;
  padding: 80px 0;
  background: #000;
}

.section.hero {
  background-image: url('../../public/images/2.webp');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.section.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

.section.hero .container {
  position: relative;
  z-index: 2;
}

/* Hero Section */
.hero-wrapper {
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  font-size: 4rem;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.2;
  font-weight: 700;
  font-family: 'Creepster', 'Orbitron', monospace, cursive;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-shadow:
    0 0 5px #ff6b35,
    0 0 10px #ff6b35,
    0 0 15px #ff6b35,
    0 0 20px #ff6b35,
    0 0 25px #ff6b35,
    0 0 30px #ff6b35;
}

.hero-description {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  z-index: 3;
}

.hero-description p {
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.endings-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.nav-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}

.nav-card:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: #ff6b35;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.nav-card span {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .endings-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .endings-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .nav-card {
    padding: 5px 10px;
    min-height: 30px;
  }

  .nav-card span {
    font-size: 12px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description p {
    font-size: 16px;
  }
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  text-align: center;
  color: #ff6b35;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff6b35;
  font-weight: normal;
  text-transform: uppercase;
}

.section-subtitle {
  font-size: 18px;
  color: #d1d5db;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Preparation Section */
.preparation {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
}

.preparation-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.preparation-content {
  display: grid;
  grid-template-columns: 1fr;
}

.preparation-section {
  margin-bottom: 30px;
}

.preparation-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.preparation-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Bad Ending Section */
.bad-ending {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
}

.bad-ending-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.ending-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.ending-section {
  margin-bottom: 30px;
}

.ending-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.ending-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Good Ending Section */
.good-ending {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%);
}

.good-ending-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}


/* Tips Section */
.tips {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%);
}

.tips-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.tips-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.tip-section {
  margin-bottom: 30px;
}

.tip-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.tip-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .preparation-content,
  .ending-content,
  .tips-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .endings-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description{
    margin-bottom: 10px;
  }

  .hero-description p {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-header{
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 12px;
  }

  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
    margin-bottom: 10px;
  }

  .preparation-section p,
  .ending-section p,
  .tip-section p{
    margin-bottom: 10px;
  }

  .endings-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .nav-card {
    padding: 5px 10px;
    min-height: 30px;
  }

  .nav-card span {
    font-size: 12px;
  }

  .preparation-wrapper,
  .bad-ending-wrapper,
  .good-ending-wrapper,
  .tips-wrapper {
    padding: 10px;
  }

  .preparation-content,
  .ending-content,
  .tips-content {
    gap: 15px;
  }

  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
  }

  .preparation-section h3,
  .ending-section h3,
  .tip-section h3 {
    font-size: 16px;
  }

  .preparation-section p,
  .ending-section p,
  .tip-section p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .hero-wrapper {
    padding: 25px 15px;
  }
  
  .hero-title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .endings-nav {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .nav-card {
    padding: 8px;
  }
  
  .nav-card span {
    font-size: 11px;
  }
  
  .preparation-wrapper,
  .bad-ending-wrapper,
  .good-ending-wrapper,
  .tips-wrapper {
    padding: 15px;
  }
  
  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .preparation-section h3,
  .ending-section h3,
  .tip-section h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .preparation-section p,
  .ending-section p,
  .tip-section p {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
}

/* 内链样式 */
.text-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #ff6b35;
}
</style>