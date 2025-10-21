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

            <!-- Enhanced Navigation -->
            <div class="endings-nav">
              <div class="nav-card" @click="scrollToSection('preparation')">
                <div class="nav-content">
                  <h3>{{ $t('EndingsPage.hero.nav.preparation') }}</h3>
                </div>
              </div>
              <div class="nav-card" @click="scrollToSection('bad-ending')">
                <div class="nav-content">
                  <h3>{{ $t('EndingsPage.hero.nav.badEnding') }}</h3>
                </div>
              </div>
              <div class="nav-card" @click="scrollToSection('good-ending')">
                <div class="nav-content">
                  <h3>{{ $t('EndingsPage.hero.nav.goodEnding') }}</h3>
                </div>
              </div>
              <div class="nav-card" @click="scrollToSection('tips')">
                <div class="nav-content">
                  <h3>{{ $t('EndingsPage.hero.nav.tips') }}</h3>
                </div>
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

            <!-- Step-by-step preparation guide -->
            <div class="preparation-steps">
              <!-- Step 1: Unlock Drawers -->
              <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>{{ $t('EndingsPage.preparation.drawerSlots.title') }}</h3>
                  <div class="step-description">
                    <p>{{ $t('EndingsPage.preparation.drawerSlots.description1') }}</p>
                    <p>{{ $t('EndingsPage.preparation.drawerSlots.description2') }}</p>
                  </div>
                  <div class="step-image">
                    <img src="../../public/images/endings-01.webp" alt="CloverPit Ending Drawer Slots Collection" />
                  </div>
                </div>
              </div>

              <!-- Step 2: Get Corpse Pieces -->
              <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>{{ $t('EndingsPage.preparation.corpsePieces.title') }}</h3>
                  <div class="step-description">
                    <p>{{ $t('EndingsPage.preparation.corpsePieces.description1') }}</p>
                    <p>{{ $t('EndingsPage.preparation.corpsePieces.description2') }}</p>
                    <p v-html="$t('EndingsPage.preparation.corpsePieces.description3')"></p>
                  </div>
                  <div class="step-image">
                    <img src="../../public/images/endings-02.webp" alt="CloverPit Ending Corpse Pieces Collection-01" />
                    <img src="../../public/images/endings-03.webp" alt="CloverPit Ending Corpse Pieces Collection-02" />
                    <img src="../../public/images/endings-04.webp" alt="CloverPit Ending Corpse Pieces Collection-03" />
                    <img src="../../public/images/endings-05.webp" alt="CloverPit Ending Corpse Pieces Collection-04" />
                  </div>
                </div>
              </div>

              <!-- Step 3: Acquire Skull -->
              <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>{{ $t('EndingsPage.preparation.skullAcquisition.title') }}</h3>
                  <div class="step-description">
                    <p>{{ $t('EndingsPage.preparation.skullAcquisition.description1') }}</p>
                    <p>{{ $t('EndingsPage.preparation.skullAcquisition.description2') }}</p>
                  </div>
                </div>
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
              <!-- Requirements Card -->
              <div class="ending-card requirements">
                <div class="card-header">
                  <div class="card-icon">⚫</div>
                  <h3>{{ $t('EndingsPage.badEnding.simplePath.title') }}</h3>
                </div>
                <div class="card-content">
                  <p>{{ $t('EndingsPage.badEnding.simplePath.description1') }}</p>
                  <p>{{ $t('EndingsPage.badEnding.simplePath.description2') }}</p>
                </div>
              </div>

              <!-- Rewards Card -->
              <div class="ending-card rewards">
                <div class="card-header">
                  <div class="card-icon">🏆</div>
                  <h3>{{ $t('EndingsPage.badEnding.rewards.title') }}</h3>
                </div>
                <div class="card-content">
                  <p>{{ $t('EndingsPage.badEnding.rewards.description1') }}</p>
                  <p v-html="$t('EndingsPage.badEnding.rewards.description2')"></p>
                  <p>{{ $t('EndingsPage.badEnding.rewards.description3') }}</p>
                </div>
              </div>
            </div>

            <div class="ending-image">
              <img src="../../public/images/endings-06.webp" alt="CloverPit Ending Drawer Slots Collection" />
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

            <!-- Good Ending Process -->
            <div class="good-ending-process">
              <!-- Step 1: Memory Card Strategy -->
              <div class="process-step">
                <div class="step-indicator">
                  <div class="step-number">1</div>
                  <div class="step-line"></div>
                </div>
                <div class="step-content">
                  <div class="step-card">
                    <div class="card-header">
                      <h3>{{ $t('EndingsPage.goodEnding.memoryCard.title') }}</h3>
                    </div>
                    <div class="card-content">
                      <p>{{ $t('EndingsPage.goodEnding.memoryCard.description1') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.memoryCard.description2') }}</p>
                    </div>
                  </div>
                  <div class="step-image">
                    <img src="../../public/images/endings-07.webp" alt="CloverPit Ending Memory Card Strategy" />
                  </div>
                </div>
              </div>

              <!-- Step 2: Phone Call Management -->
              <div class="process-step">
                <div class="step-indicator">
                  <div class="step-number">2</div>
                  <div class="step-line"></div>
                </div>
                <div class="step-content">
                  <div class="step-card">
                    <div class="card-header">
                      <h3>{{ $t('EndingsPage.goodEnding.phoneCalls.title') }}</h3>
                    </div>
                    <div class="card-content">
                      <p>{{ $t('EndingsPage.goodEnding.phoneCalls.description1') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.phoneCalls.description2') }}</p>
                      <p v-html="$t('EndingsPage.goodEnding.phoneCalls.description3')"></p>
                    </div>
                  </div>
                  <div class="step-image">
                    <img src="../../public/images/endings-09.webp" alt="CloverPit Ending Phone Call Management" />
                  </div>
                </div>
              </div>

              <!-- Step 3: Disk Marking System -->
              <div class="process-step">
                <div class="step-indicator">
                  <div class="step-number">3</div>
                  <div class="step-line"></div>
                </div>
                <div class="step-content">
                  <div class="step-card">
                    <div class="card-header">
                      <h3>{{ $t('EndingsPage.goodEnding.floppyDisk.title') }}</h3>
                    </div>
                    <div class="card-content">
                      <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description1') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description2') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.floppyDisk.description3') }}</p>
                    </div>
                  </div>
                  <div class="step-image">
                    <img src="../../public/images/endings-08.webp" alt="CloverPit Ending Memory Card Strategy" />
                  </div>
                </div>
              </div>

              <!-- Step 4: White Key Transformation -->
              <div class="process-step">
                <div class="step-indicator">
                  <div class="step-number">4</div>
                </div>
                <div class="step-content">
                  <div class="step-card">
                    <div class="card-header">
                      <h3>{{ $t('EndingsPage.goodEnding.transformation.title') }}</h3>
                    </div>
                    <div class="card-content">
                      <p>{{ $t('EndingsPage.goodEnding.transformation.description1') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.transformation.description2') }}</p>
                      <p>{{ $t('EndingsPage.goodEnding.transformation.description3') }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="step-image">
                <img src="../../public/images/endings-10.webp" alt="CloverPit Ending White Key Transformation-01" />
                <img src="../../public/images/endings-11.webp" alt="CloverPit Ending White Key Transformation-02" />
                <img src="../../public/images/endings-12.webp" alt="CloverPit Ending White Key Transformation-03" />
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

            <div class="tips-grid">
              <div class="tip-card">
                <div class="tip-header">
                  <div class="tip-icon">🎯</div>
                  <h3>{{ $t('EndingsPage.tips.threeStrikes.title') }}</h3>
                </div>
                <div class="tip-content">
                  <p>{{ $t('EndingsPage.tips.threeStrikes.description1') }}</p>
                  <p>{{ $t('EndingsPage.tips.threeStrikes.description2') }}</p>
                  <p v-html="$t('EndingsPage.tips.threeStrikes.description3')"></p>
                </div>
              </div>

              <div class="tip-card">
                <div class="tip-header">
                  <div class="tip-icon">⏰</div>
                  <h3>{{ $t('EndingsPage.tips.timing.title') }}</h3>
                </div>
                <div class="tip-content">
                  <p>{{ $t('EndingsPage.tips.timing.description1') }}</p>
                  <p>{{ $t('EndingsPage.tips.timing.description2') }}</p>
                  <p>{{ $t('EndingsPage.tips.timing.description3') }}</p>
                </div>
              </div>

              <div class="tip-card">
                <div class="tip-header">
                  <div class="tip-icon">✨</div>
                  <h3>{{ $t('EndingsPage.tips.sacredTrinkets.title') }}</h3>
                </div>
                <div class="tip-content">
                  <p>{{ $t('EndingsPage.tips.sacredTrinkets.description1') }}</p>
                  <p>{{ $t('EndingsPage.tips.sacredTrinkets.description2') }}</p>
                  <p>{{ $t('EndingsPage.tips.sacredTrinkets.description3') }}</p>
                </div>
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

.endings-page img {
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

/* Enhanced Navigation */
.endings-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.nav-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 15px;
  padding: 25px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  min-height: 80px;
}

.nav-card:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: #ff6b35;
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.3);
}

.nav-content h3 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  text-align: center;
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

/* Step Cards */
.preparation-steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.step-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.step-number {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.step-content {
  flex: 1;
}

.step-content h3 {
  color: #ff6b35;
  font-size: 22px;
  margin-bottom: 15px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.step-description p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 12px;
  font-size: 16px;
}

.step-image {
  margin-top: 15px;
}

.step-image img {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
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

.ending-image {
  margin-top: 20px;
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
}

.ending-image img {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.ending-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

/* Card Layout */
.ending-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.ending-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.card-header h3 {
  color: #ff6b35;
  font-size: 20px;
  margin: 0;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.card-content p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 12px;
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

/* Process Steps */
.good-ending-process {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.process-step {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.step-indicator .step-number {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
  margin-bottom: 10px;
}

.step-line {
  width: 3px;
  height: 40px;
  background: linear-gradient(to bottom, #22c55e, transparent);
  border-radius: 2px;
}

.process-step:last-child .step-line {
  display: none;
}

.step-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.step-content:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(34, 197, 94, 0.4);
  transform: translateY(-2px);
}

.step-card {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  transition: none;
}

.step-card .card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.step-card .card-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.step-card .card-header h3 {
  color: #22c55e;
  font-size: 20px;
  margin: 0;
  text-shadow: 0 0 8px #22c55e;
  font-weight: 600;
}

.step-card .card-content p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 12px;
  font-size: 16px;
}

.step-image {
  margin-top: 20px;
  text-align: center;
  padding-top: 15px;
  border-top: 1px solid rgba(34, 197, 94, 0.2);
}

.step-image img {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  height: auto;
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

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.tip-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.tip-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(168, 85, 247, 0.4);
  transform: translateY(-2px);
}

.tip-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.tip-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.tip-header h3 {
  color: #a855f7;
  font-size: 20px;
  margin: 0;
  text-shadow: 0 0 8px #a855f7;
  font-weight: 600;
}

.tip-content p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 12px;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .endings-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .ending-content {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    flex-direction: column;
    gap: 20px;
  }

  .step-indicator {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .step-line {
    width: 40px;
    height: 3px;
    background: linear-gradient(to right, #22c55e, transparent);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;
  }

  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .hero-description {
    margin-bottom: 30px;
  }

  .hero-description p {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .section-header {
    margin-bottom: 30px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .endings-nav {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .nav-card {
    padding: 20px;
    min-height: 60px;
  }

  .nav-content h3 {
    font-size: 14px;
  }

  .nav-content p {
    font-size: 11px;
  }

  .preparation-wrapper,
  .bad-ending-wrapper,
  .good-ending-wrapper,
  .tips-wrapper {
    padding: 20px;
  }

  .step-card {
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  .step-number {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  .step-content h3 {
    font-size: 18px;
  }

  .step-description p {
    font-size: 14px;
  }

  .ending-card,
  .tip-card {
    padding: 20px;
  }

  .card-header h3,
  .tip-header h3 {
    font-size: 18px;
  }

  .card-content p,
  .tip-content p {
    font-size: 14px;
  }

  .process-step {
    flex-direction: column;
    gap: 20px;
  }

  .step-indicator {
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .step-indicator .step-number {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .step-line {
    width: 30px;
    height: 3px;
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