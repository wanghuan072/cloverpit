<template>
  <div class="download-page">
    <AppHeader />
    
    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">Download CloverPit</h1>
            <p class="hero-description">A rogue-lite slot machine nightmare. Gamble for your life in a never-ending debt simulator! Get ready for the ultimate CloverPit download experience.</p>
            
            <!-- Quick Navigation -->
            <div class="download-nav">
              <div class="nav-card" @click="scrollToSection('game-info')">
                <span>Game Info</span>
              </div>
              <div class="nav-card" @click="scrollToSection('features')">
                <span>Features</span>
              </div>
              <div class="nav-card" @click="scrollToSection('game-details')">
                <span>Game Details</span>
              </div>
              <div class="nav-card" @click="scrollToSection('languages')">
                <span>Languages</span>
              </div>
              <div class="nav-card" @click="scrollToSection('platform-support')">
                <span>Platform Support</span>
              </div>
              <div class="nav-card" @click="scrollToSection('system-requirements')">
                <span>System Requirements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Game Info Section -->
      <section id="game-info" class="section game-info">
        <div class="container">
          <div class="game-info-wrapper">
            <div class="game-header">
              <div class="game-title">
                <h2>CloverPit</h2>
                <p class="game-subtitle">The demonic lovechild of Balatro and Buckshot Roulette</p>
              </div>
              
              <div class="game-stats">
                <div class="stat-item">
                  <span class="stat-label">Reviews</span>
                  <span class="stat-value positive">Very Positive (5,393)</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Release Date</span>
                  <span class="stat-value">27 Sep, 2025</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Developer</span>
                  <span class="stat-value">Panik Arcade</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Publisher</span>
                  <span class="stat-value">Future Friends Games</span>
                </div>
              </div>
            </div>

            <div class="game-description">
              <p>CloverPit is the demonic lovechild of Balatro and Buckshot Roulette, a rogue-lite that traps players in a hell of their own creation. Locked in a rusty cell with a slot machine and an ATM, you must pay off your debt at the end of each round, or fall to ruin – literally!</p>
              
              <p>Manipulate the slot machine to earn extra coins. Turn the odds in your favor with various prizes and charms that trigger big big combos, snowballing into a dazzling lucky run. Bend the rules, break the game, and pay off your captor long enough to earn a shot at freedom.</p>
              
              <p>The game offers endless possibilities for customization and replayability, with a thriving modding community creating new content and experiences.</p>
              
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="section features">
        <div class="container">
          <div class="features-wrapper">
            <h2 class="section-title">Features</h2>
            <div class="features-grid">
              <div class="feature-item">
                <div class="feature-icon">💀</div>
                <h3>A gripping rogue-lite</h3>
                <p>Every round could be your last!</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <h3>Meta-progression</h3>
                <p>Seeded runs, unlockable run modifiers and power-ups! Extensive modding support allows the community to create custom content and experiences.</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🏆</div>
                <h3>Endless Mode</h3>
                <p>Push your score to new heights!</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🔒</div>
                <h3>Hellish atmosphere</h3>
                <p>An escape room nightmare!</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">🎲</div>
                <h3>150+ items</h3>
                <p>Items and synergies to boost your luck!</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon">📖</div>
                <h3>Sinister tale</h3>
                <p>A story of addiction and escape!</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Game Details Section -->
      <section id="game-details" class="section game-details">
        <div class="container">
          <div class="details-wrapper">
            <div class="details-grid">
              <div class="detail-card">
                <h3>Genre</h3>
                <p>Action, Adventure, Indie, Simulation, Sports, Strategy</p>
              </div>
              <div class="detail-card">
                <h3>Platform</h3>
                <p>Single-player</p>
              </div>
              <div class="detail-card">
                <h3>Steam Features</h3>
                <p>Steam Achievements, Steam Cloud, Family Sharing</p>
              </div>
              <div class="detail-card">
                <h3>Controller Support</h3>
                <p>Full Controller Support, Xbox Controllers, DualShock Controllers (USB Only)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Languages Section -->
      <section id="languages" class="section languages">
        <div class="container">
          <div class="languages-wrapper">
            <h2 class="section-title">Languages</h2>
            <div class="languages-table">
              <div class="table-header">
                <div class="header-cell">Language</div>
                <div class="header-cell">Interface</div>
                <div class="header-cell">Full Audio</div>
                <div class="header-cell">Subtitles</div>
              </div>
              <div class="table-row">
                <div class="table-cell">English</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">✓</div>
              </div>
              <div class="table-row">
                <div class="table-cell">French</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">-</div>
                <div class="table-cell">✓</div>
              </div>
              <div class="table-row">
                <div class="table-cell">Italian</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">-</div>
                <div class="table-cell">✓</div>
              </div>
              <div class="table-row">
                <div class="table-cell">German</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">-</div>
                <div class="table-cell">✓</div>
              </div>
              <div class="table-row">
                <div class="table-cell">Spanish - Spain</div>
                <div class="table-cell">✓</div>
                <div class="table-cell">-</div>
                <div class="table-cell">✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Support Section -->
      <section id="platform-support" class="section platform-support">
        <div class="container">
          <div class="platform-wrapper">
            <h2 class="section-title">Platform Support & Future Releases</h2>
            <div class="platform-content">
              <div class="platform-section">
                <h3>Current Availability</h3>
                <div class="platform-item">
                  <div class="platform-info">
                    <h4>Windows</h4>
                    <p>Full CloverPit download available now on Steam for Windows 10 and above. Experience the complete horror slot machine nightmare with all features unlocked.</p>
                  </div>
                  <div class="platform-status available">Available Now</div>
                </div>
              </div>

              <div class="platform-section">
                <h3>Coming Soon</h3>
                <div class="platform-item">
                  <div class="platform-info">
                    <h4>Mac Support</h4>
                    <p>CloverPit Mac version is currently in development. Mac users will soon be able to experience the same twisted gameplay on their preferred platform.</p>
                  </div>
                  <div class="platform-status upcoming">Coming Soon</div>
                </div>
                
                <div class="platform-item">
                  <div class="platform-info">
                    <h4>Mobile Gaming</h4>
                    <p>CloverPit mobile adaptation is being developed to bring the slot machine horror experience to your smartphone and tablet devices.</p>
                  </div>
                  <div class="platform-status upcoming">In Development</div>
                </div>
              </div>

              <div class="platform-section">
                <h3>Community Features</h3>
                <div class="platform-item">
                  <div class="platform-info">
                    <h4>Modding Support</h4>
                    <p>Explore the growing CloverPit mods community! Customize your experience with user-created content, new charms, and alternative game modes.</p>
                  </div>
                  <div class="platform-status community">Active Community</div>
                </div>
              </div>
            </div>
            
            <div class="language-support">
              <h3>Multi-Language Support</h3>
              <p>CloverPit descargar is available for Spanish-speaking players, with full interface and subtitle support. The game supports multiple languages to ensure players worldwide can enjoy the horror experience in their native tongue.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- System Requirements Section -->
      <section id="system-requirements" class="section system-requirements">
        <div class="container">
          <div class="requirements-wrapper">
            <h2 class="section-title">System Requirements</h2>
            <div class="requirements-grid">
              <div class="requirement-card">
                <h3>Minimum Requirements</h3>
                <ul class="requirement-list">
                  <li><strong>OS:</strong> Windows 10 or more</li>
                  <li><strong>Processor:</strong> Intel i3 4th generation or equivalent</li>
                  <li><strong>Memory:</strong> 1 GB RAM</li>
                  <li><strong>Graphics:</strong> Most dedicated GPUs should work</li>
                  <li><strong>Storage:</strong> 512 MB available space</li>
                  <li><strong>Additional Notes:</strong> Requires a 64-bit processor and operating system</li>
                </ul>
              </div>
              <div class="requirement-card">
                <h3>Recommended Requirements</h3>
                <ul class="requirement-list">
                  <li><strong>Additional Notes:</strong> Requires a 64-bit processor and operating system</li>
                  <li><strong>Cross-Platform:</strong> Save files sync across devices via Steam Cloud</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Disclaimer Section -->
      <section class="section disclaimer">
        <div class="container">
          <div class="disclaimer-wrapper">
            <h2 class="section-title">P.S. IS THIS GAMBLING?</h2>
            <div class="disclaimer-content">
              <p><strong>Hell no!</strong> CloverPit is a rogue-lite horror game, and not a slot machine simulator. Our slot machine is designed to be broken and ultimately overcome, and will never ask you for real money!</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Download CTA Section -->
      <section class="section download-cta">
      <div class="container">
          <div class="cta-wrapper">
            <h2 class="cta-title">Ready to Face Your Nightmare?</h2>
            <p class="cta-description">Download CloverPit now and experience the most twisted slot machine horror game ever created!</p>
            <div class="cta-actions">
              <a href="https://store.steampowered.com/app/3314790/CloverPit/" target="_blank" class="btn btn-primary btn-large">
                <span class="btn-icon">🎰</span>
                Download on Steam
              </a>
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
    const headerHeight = 80; // 顶部导航栏高度
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped>
.download-page {
  background: #1a1a1a;
  color: #ffffff;
}

/* Hero Section */
.hero {
  background-image: url('../../public/images/1.webp');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

.hero .container {
  position: relative;
  z-index: 2;
}

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
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 900px;
  margin: 0 auto 40px auto;
}

/* Download Navigation */
.download-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-bottom: 40px;
}

.nav-card {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 15px 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-card:hover {
  background: rgba(255, 107, 53, 0.2);
  border-color: rgba(255, 107, 53, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
}

.nav-card span {
  color: #ff6b35;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
}

.btn-primary {
  background: linear-gradient(135deg, #ff4757, #ff6b35);
  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
}

.btn-secondary {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.btn-large {
  padding: 20px 40px;
  font-size: 1.2rem;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

.btn-icon {
  font-size: 1.2em;
}

/* Game Info Section */
.game-info {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.game-info-wrapper {
  display: grid;
  gap: 40px;
}

.game-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.game-title h2 {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 10px;
  font-family: 'Creepster', cursive;
}

.game-subtitle {
  font-size: 1.2rem;
  color: #d1d5db;
  font-style: italic;
}

.game-stats {
  display: grid;
  gap: 15px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.stat-label {
  font-weight: bold;
  color: #9ca3af;
}

.stat-value {
  color: #ffffff;
}

.stat-value.positive {
  color: #10b981;
}

.game-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #d1d5db;
}

.game-description p {
  margin-bottom: 20px;
}


/* Features Section */
.features {
  padding: 80px 0;
  background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
}

.features-wrapper {
  text-align: center;
}

.section-title {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 50px;
  font-family: 'Creepster', cursive;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-item {
  background: rgba(255, 107, 53, 0.1);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 107, 53, 0.3);
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 107, 53, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 1.5rem;
  color: #ff6b35;
  margin-bottom: 15px;
}

.feature-item p {
  color: #d1d5db;
  line-height: 1.6;
}


/* Game Details Section */
.game-details {
  padding: 80px 0;
  background: 
    linear-gradient(rgba(26, 26, 26, 0.8), rgba(42, 42, 42, 0.8)),
    url('../../public/images/cloverpit-bg-03.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.detail-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-card h3 {
  font-size: 1.3rem;
  color: #ff6b35;
  margin-bottom: 15px;
}

.detail-card p {
  color: #d1d5db;
  line-height: 1.6;
}

/* Languages Section */
.languages {
  padding: 80px 0;
  background: 
    linear-gradient(rgba(44, 24, 16, 0.8), rgba(26, 26, 26, 0.8)),
    url('../../public/images/cloverpit-bg-04.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.languages-table {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: rgba(255, 107, 53, 0.2);
  font-weight: bold;
}

.header-cell {
  padding: 20px;
  color: #ff6b35;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.header-cell:last-child {
  border-right: none;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-row:last-child {
  border-bottom: none;
}

.table-cell {
  padding: 15px 20px;
  color: #d1d5db;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.table-cell:last-child {
  border-right: none;
}

/* Platform Support Section */
.platform-support {
  padding: 80px 0;
  background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
}

.platform-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.platform-content {
  margin-bottom: 50px;
}

.platform-section {
  margin-bottom: 40px;
}

.platform-section h3 {
  font-size: 1.4rem;
  color: #ff6b35;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 107, 53, 0.3);
  text-align: left;
}

.platform-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid #444;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
}

.platform-item:hover {
  background: rgba(26, 26, 26, 0.8);
  border-color: #666;
}

.platform-info {
  flex: 1;
  margin-right: 20px;
}

.platform-info h4 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 600;
}

.platform-info p {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.platform-status {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
}

.platform-status.available {
  background: #10b981;
  color: #ffffff;
}

.platform-status.upcoming {
  background: #f59e0b;
  color: #ffffff;
}

.platform-status.community {
  background: #8b5cf6;
  color: #ffffff;
}

.language-support {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid #444;
  border-radius: 8px;
  padding: 30px;
  text-align: left;
}

.language-support h3 {
  color: #ff6b35;
  font-size: 1.3rem;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 107, 53, 0.3);
}

.language-support p {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* System Requirements Section */
.system-requirements {
  padding: 80px 0;
  background: 
    linear-gradient(rgba(26, 26, 26, 0.8), rgba(42, 42, 42, 0.8)),
    url('../../public/images/cloverpit-bg-05.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.requirement-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.requirement-card h3 {
  font-size: 1.5rem;
  color: #ff6b35;
  margin-bottom: 25px;
  text-align: center;
}

.requirement-list {
  list-style: none;
  padding: 0;
}

.requirement-list li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #d1d5db;
  line-height: 1.6;
}

.requirement-list li:last-child {
  border-bottom: none;
}

.requirement-list strong {
  color: #ff6b35;
}

/* Disclaimer Section */
.disclaimer {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
}

.disclaimer-wrapper {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.disclaimer-content {
  background: rgba(16, 185, 129, 0.1);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.disclaimer-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #d1d5db;
  margin: 0;
}

.disclaimer-content strong {
  color: #10b981;
  font-size: 1.3rem;
}

/* Download CTA Section */
.download-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
  text-align: center;
}

.cta-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 3rem;
  color: #ff6b35;
  margin-bottom: 20px;
  font-family: 'Creepster', cursive;
  text-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
}

.cta-description {
  font-size: 1.3rem;
  color: #d1d5db;
  margin-bottom: 40px;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
}

.cta-actions .btn {
  background: linear-gradient(135deg, #ff4757, #ff6b35);
  border: 2px solid #ff6b35;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
}

.cta-actions .btn:hover {
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .game-header {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .details-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 20px;
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

  .download-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .platform-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .platform-info {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .platform-status {
    align-self: flex-start;
  }
  
  .nav-card {
    padding: 10px 5px;
    min-height: 50px;
  }
  
  .nav-card span {
    font-size: 12px;
  }

  .game-header {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .game-title h2 {
    font-size: 20px;
  }
  
  .game-subtitle {
    font-size: 12px;
  }

  .game-info-wrapper{
    gap: 10px;
  }

  .game-description p{
    margin-bottom: 10px;
    font-size: 12px;
  }
  
  .features-grid {
    gap: 10px;
  }
 
  .feature-icon{
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .feature-item {
    padding: 10px;
  }
  
  .feature-item h3 {
    font-size: 16px;
  }
  
  .feature-item p {
    font-size: 12px;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .detail-card {
    padding: 10px;
  }
  
  .detail-card h3 {
    font-size: 16px;
  }
  
  .detail-card p {
    font-size: 12px;
  }
  
  .requirements-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .requirement-card {
    padding: 10px;
  }
  
  .requirement-card h3 {
    font-size: 16px;
  }
  
  .requirement-list li {
    font-size: 12px;
    padding: 8px 0;
  }
  
  .languages-table {
    overflow-x: auto;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 120px 1fr 1fr 1fr;
    min-width: 400px;
  }
  
  .header-cell,
  .table-cell {
    padding: 10px 8px;
    font-size: 12px;
  }
  
  .header-cell:first-child,
  .table-cell:first-child {
    min-width: 120px;
  }
  
  .disclaimer-content {
    padding: 10px;
  }
  
  .disclaimer-content p {
    font-size: 12px;
  }
  
  .cta-title {
    font-size: 20px;
  }
  
  .cta-description {
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
    font-size: 24px;
    letter-spacing: 1px;
  }
  
  .hero-description {
    font-size: 12px;
  }

  .download-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  .platform-item {
    padding: 20px;
  }
  
  .language-support {
    padding: 20px;
  }
  
  .platform-section h3 {
    font-size: 1.2rem;
  }
  
  .platform-info h4 {
    font-size: 1.1rem;
  }
  
  .nav-card {
    padding: 8px;
    min-height: 45px;
  }
  
  .nav-card span {
    font-size: 11px;
  }
  
  .btn {
    width: 100%;
  }
  
  .feature-item,
  .detail-card,
  .requirement-card {
    padding: 10px;
  }
  
  .languages-table {
    overflow-x: auto;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 100px 1fr 1fr 1fr;
    min-width: 350px;
  }
  
  .header-cell,
  .table-cell {
    padding: 8px 6px;
    font-size: 11px;
  }
  
  .header-cell:first-child,
  .table-cell:first-child {
    min-width: 100px;
  }
  
  .disclaimer-content {
    padding: 10px;
  }
}
</style>