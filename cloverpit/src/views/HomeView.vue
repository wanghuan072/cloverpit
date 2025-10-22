<template>
  <div class="home">
    <AppHeader />
    <main>
      <section class="section hero">
        <div class="container">
          <div class="wrapper">
            <!-- 顶部推荐栏 -->
            <div class="hero-recommendation">
              <span class="recommendation-text">🔥 {{ $t('HomePage.hero.banner.announcement') }}</span>
            </div>
            <h1 class="title-main" v-html="$t('HomePage.hero.title')"></h1>
            <p class="hero-description" v-html="$t('HomePage.hero.description')"></p>
            <div class="hero-buttons">
              <a href="/cloverpit-download" class="btn btn-primary btn-download">
                <span class="btn-icon">⬇️</span>
                <span>{{ $t('HomePage.hero.buttons.download') }}</span>
              </a>
              <a href="/cloverpit-guide" class="btn btn-secondary btn-guide">
                <span class="btn-icon">📖</span>
                <span>{{ $t('HomePage.hero.buttons.guides') }}</span>
              </a>
            </div>

            <!-- 底部信息 -->
            <div class="hero-footer">
              <span class="footer-icon">⚡</span>
              <span class="footer-text">{{ $t('HomePage.hero.footer.text') }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section about">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.about.title') }}</h2>
             <div class="about-content">
               <div class="about-image">
                 <img 
                   src="/images/about-img.webp" 
                   alt="CloverPit Game Screenshot"
                   loading="eager"
                   decoding="sync"
                   fetchpriority="high"
                 />
               </div>
               <p v-html="$t('HomePage.about.description1')"></p>
               <p v-html="$t('HomePage.about.description2')"></p>
               <p v-html="$t('HomePage.about.description3')"></p>
               <p v-html="$t('HomePage.about.description4')"></p>
             </div>
          </div>
        </div>
      </section>

      <section class="section features">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.features.title') }}</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">⚔️</div>
                 <h3>{{ $t('HomePage.features.card1.title') }}</h3>
                <p v-html="$t('HomePage.features.card1.description')"></p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">🎯</div>
                 <h3>{{ $t('HomePage.features.card2.title') }}</h3>
                <p v-html="$t('HomePage.features.card2.description')"></p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">🏆</div>
                 <h3>{{ $t('HomePage.features.card3.title') }}</h3>
                <p v-html="$t('HomePage.features.card3.description')"></p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">🏚️</div>
                 <h3>{{ $t('HomePage.features.card4.title') }}</h3>
                <p v-html="$t('HomePage.features.card4.description')"></p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">💎</div>
                 <h3>{{ $t('HomePage.features.card5.title') }}</h3>
                <p v-html="$t('HomePage.features.card5.description')"></p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">📖</div>
                 <h3>{{ $t('HomePage.features.card6.title') }}</h3>
                <p v-html="$t('HomePage.features.card6.description')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section guide">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.guide.title') }}</h2>
            <div class="guide-content">
              <div class="guide-text">
                <p v-html="$t('HomePage.guide.description1')"></p>
                <p v-html="$t('HomePage.guide.description2')"></p>
                <p v-html="$t('HomePage.guide.description3')"></p>
              </div>
              <div class="guide-cta">
                <h3>{{ $t('HomePage.guide.cta.title') }}</h3>
                <p v-html="$t('HomePage.guide.cta.description')"></p>
                <div class="guide-buttons">
                  <a href="/cloverpit-guide" class="btn btn-primary">{{ $t('HomePage.guide.cta.button') }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section information">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.information.title') }}</h2>
            <div class="records-container">
              <div class="records-column">
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.awakeningDate') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.awakeningValue') }}</span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.creators') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.creatorsValue') }}</span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.nature') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.natureValue') }}</span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.souls') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.soulsValue') }}</span>
                </div>
              </div>
              <div class="records-column">
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.gateway') }}</span>
                  <span class="record-value" v-html="$t('HomePage.information.records.gatewayValue')"></span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.harbingers') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.harbingersValue') }}</span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.whispers') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.whispersValue') }}</span>
                </div>
                <div class="record-item">
                  <span class="record-label">{{ $t('HomePage.information.records.cost') }}</span>
                  <span class="record-value">{{ $t('HomePage.information.records.costValue') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section faq">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.faq.title') }}</h2>
            <div class="faq-list">
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q1.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q1.answer')"></p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q2.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q2.answer')"></p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q3.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q3.answer')"></p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q4.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q4.answer')"></p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q5.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q5.answer')"></p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <h3>{{ $t('HomePage.faq.q6.question') }}</h3>
                </div>
                <div class="faq-answer">
                  <p v-html="$t('HomePage.faq.q6.answer')"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section trailer">
        <div class="container">
          <div class="wrapper">
            <h2 class="title-sub">{{ $t('HomePage.trailer.title') }}</h2>
             <div class="video-container">
               <div class="video-wrapper">
                 <div v-if="!videoPlaying" class="video-placeholder" @click="playVideo">
                   <div class="play-button">
                     <div class="play-icon">▶</div>
                   </div>
                   <img src="../../public/images/video-bg.webp" alt="CloverPit Official Trailer" />
                   <div class="video-overlay">
                     <h3>{{ $t('HomePage.trailer.overlay.title') }}</h3>
                     <p>{{ $t('HomePage.trailer.overlay.description') }}</p>
                   </div>
                 </div>
                 <div v-if="videoPlaying" class="video-iframe-container">
                   <iframe
                     src="https://www.youtube.com/embed/jUUv8N3n9n8"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen
                     class="video-iframe"
                   ></iframe>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import '@/assets/css/public.css'

const videoPlaying = ref(false)

const playVideo = () => {
  videoPlaying.value = true
}
</script>

<style scoped>
/* Horror neon glow effects - Only for h1 and h2 */
.title-main {
  font-size: 4rem;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.2;
  font-weight: 700;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  text-shadow:
    0 0 5px #ff6b35,
    0 0 10px #ff6b35,
    0 0 15px #ff6b35,
    0 0 20px #ff6b35,
    0 0 25px #ff6b35,
    0 0 30px #ff6b35;
}

.title-sub {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.2;
  font-weight: 700;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  text-shadow:
    0 0 5px #ff6b35,
    0 0 10px #ff6b35,
    0 0 15px #ff6b35,
    0 0 20px #ff6b35,
    0 0 25px #ff6b35,
    0 0 30px #ff6b35;
}

.section.hero {
  background-image: url('/images/2.webp');
}

.section.about {
  background-image: url('/images/1.webp');
}

.section.features {
  background-image: url('/images/3.webp');
}

.section.guide {
  background-image: url('/images/4.webp');
}

.section.information {
  background-image: url('/images/5.webp');
}

.section.faq {
  background-image: url('/images/6.webp');
}

.section.trailer {
  background-image: url('/images/7.webp');
}


.section {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 0;
}

.wrapper {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  position: relative;
  z-index: 2;
}

/* Section通用蒙版 */
.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(10, 0, 20, 0.4) 100%);
  z-index: 0;
}

/* Hero Section */
.section.hero {
  height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  contain: paint;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.section.hero .wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* 顶部推荐栏 */
.hero-recommendation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.recommendation-text {
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #ffffff;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.text-highlight {
  color: #ff6b35;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.btn-download {
  background: linear-gradient(135deg, #ff6b35, #e55a2b);
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
}

.btn-guide {
  background: transparent;
  color: white;
  border: 2px solid white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 8px;
}

.btn-icon {
  font-size: 1.1rem;
}

/* 底部信息 */
.hero-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #ffffff;
  font-size: 0.9rem;
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto;
}

.footer-icon {
  color: #ff6b35;
  font-size: 1.1rem;
}

.footer-text {
  text-align: left;
  line-height: 1.4;
}

.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #ff4757;
  color: #ffffff;
}

.btn-secondary {
  background: #ff6b35;
  color: #ffffff;
}

.btn-dark {
  background: #2d2d2d;
  color: #ffffff;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.about-content {
  overflow: hidden;
}

.about-content::after {
  content: '';
  display: table;
  clear: both;
}

.about-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: justify;
  text-indent: 2em;
  margin-top: 0;
}

.about-content strong {
  color: #ff6b35;
}

.about-content em {
  color: #4ecdc4;
  font-style: italic;
}

.about-image {
  float: left;
  width: 450px;
  margin-right: 25px;
  margin-bottom: 15px;
  shape-outside: margin-box;
  border-radius: 15px;
  overflow: hidden; /* 防止内容溢出 */
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 107, 53, 0.3);
  display: block; /* 避免基线对齐问题 */
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #444;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #ff4757);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #ff6b35;
  font-weight: bold;
}

.feature-card p {
  color: #ffffff;
  line-height: 1.6;
  font-size: 0.95rem;
}

.guide-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.guide-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  color: #ffffff;
}

.guide-text strong {
  color: #ff6b35;
  font-weight: bold;
}

.guide-cta {
  background: rgba(26, 26, 26, 0.9);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #ff6b35;
  text-align: center;
}

.guide-cta h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ff6b35;
}

.guide-cta p {
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.6;
}

.guide-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.records-container {
  display: flex;
  gap: 60px;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
}

.records-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.record-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background: rgba(26, 26, 26, 0.9);
  border-radius: 12px;
  border: 1px solid #444;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.record-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
  transition: width 0.3s ease;
}

.record-item:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.record-item:hover::before {
  width: 8px;
}

.record-label {
  color: #ff6b35;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  flex-shrink: 0;
  margin-right: 20px;
}

.record-value {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  flex: 1;
}


.faq-item {
  background: rgba(26, 26, 26, 0.9);
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #444;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #ff6b35;
}

.faq-question {
  padding: 25px 25px 15px 25px;
  border-bottom: 1px solid rgba(255, 107, 53, 0.2);
}

.faq-question h3 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
}

.faq-answer {
  padding: 15px 25px 25px 25px;
}

.faq-answer p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

/*  */
.trailer-wrapper .title-section {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.trailer-wrapper>p {
  text-align: center;
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 50px;
}


.video-wrapper {
  position: relative;
  width: 80%;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(255, 107, 53, 0.3);
}

.video-placeholder {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.video-iframe-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-placeholder img {
  width: 100%;
  height: auto;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: rgba(255, 107, 53, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.play-button:hover {
  background: rgba(255, 107, 53, 1);
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 15px 40px rgba(255, 107, 53, 0.6);
  border-color: rgba(255, 255, 255, 0.6);
}

.play-icon {
  color: #ffffff;
  font-size: 2.5rem;
  margin-left: 5px;
  font-weight: bold;
}

.video-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 30px 20px 20px 20px;
  color: #ffffff;
}

.video-overlay .title-card {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.video-overlay p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section.hero{
    height: auto;
    padding: 100px 0 20px 0;
  }

  .about-image {
    width: 300px;
    margin-right: 20px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .guide-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .records-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .record-item {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  
  .record-label {
    margin-right: 0;
    margin-bottom: 8px;
  }
  
  .record-value {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px 0;
  }
  
  .wrapper {
    padding: 20px 10px;
  }
  
  .title-main {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .title-sub {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .section.hero .wrapper{
    padding: 20px;
  }

  .hero-recommendation{
    padding: 10px;
    margin-bottom: 10px;
  }

  .recommendation-text{
    font-size: 12px;
  }

  .hero-description{
    font-size: 12px;
    margin-bottom: 10px;
  }

  .hero-buttons {
    gap: 10px;
    margin-bottom: 10px;
  }

  .btn {
    width: 150px;
    padding: 10px 15px;
    font-size: 12px;
  }
  
  .play-button {
    width: 80px;
    height: 80px;
  }
  
  .play-icon {
    font-size: 2rem;
  }

  .footer-text{
    font-size: 12px;
  }

  
  .about-image {
    float: none;
    width: 100%;
    margin: 0 0 10px 0;
    display: block;
  }
  
  .about-content p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 10px;
    text-indent: 0;
  }
  
  .features-grid {
    gap: 10px;
  }
  
  .feature-card {
    padding: 10px;
  }

  .feature-icon{
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  .feature-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .feature-card p {
    font-size: 12px;
  }
  
  .guide-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .guide-text p {
    font-size: 12px;
    margin-bottom: 10px;
  }
  
  .guide-cta {
    padding: 15px;
  }
  
  .guide-cta h3 {
    font-size: 16px;
  }
  
  .guide-cta p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .guide-buttons{
    gap: 10px;
    flex-direction: row;
    justify-content: center;
  }
  
  .records-container {
    flex-direction: column;
    gap: 10px;
  }

  .records-column{
    gap: 10px;
  }
  
  .record-item {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 15px;
  }
  
  .record-label {
    margin-right: 0;
    margin-bottom: 5px;
    font-size: 12px;
  }
  
  .record-value {
    text-align: left;
    font-size: 12px;
  }
  
  .faq-item {
    margin-bottom: 10px;
  }
  
  .faq-question {
    padding: 15px;
  }
  
  .faq-question h3 {
    font-size: 16px;
  }
  
  .faq-answer {
    padding: 10px 15px 15px 15px;
  }
  
  .faq-answer p {
    font-size: 12px;
  }
  
  .video-wrapper{
    width: 100%;
  }
  
  .video-overlay h3 {
    font-size: 16px;
  }
  
  .video-overlay p {
    font-size: 12px;
  }
}

/* 内链样式 */
.text-link {
  color: #00bfff;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.text-link:hover {
  color: #ffffff;
  text-shadow: 0 0 8px #00bfff;
  border-bottom-color: #00bfff;
}
</style>
