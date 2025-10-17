<template>
  <div class="about-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">About Us</h1>
            <p class="hero-description">Meet the team behind the comprehensive CloverPit guide on 321gogame.com</p>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="about-content">
              <h2>Our Mission</h2>
              <p>At 321gogame.com, we are passionate gamers dedicated to creating the most comprehensive and accurate guides for CloverPit: The Descent. Our mission is to help players master this challenging rogue-lite slot machine horror game through detailed strategies, charm combinations, and expert insights.</p>

              <h2>Who We Are</h2>
              <p>We are a team of experienced gamers and strategy enthusiasts who have spent countless hours exploring every aspect of CloverPit. Our expertise comes from extensive gameplay, community interaction, and deep analysis of game mechanics.</p>

              <h2>What We Do</h2>
              <p>Our comprehensive CloverPit guide includes:</p>
              <ul>
                <li>Detailed gameplay strategies and tips</li>
                <li>Complete charm synergy combinations</li>
                <li>All endings walkthrough and secrets</li>
                <li>Game mechanics and symbol explanations</li>
                <li>Community-driven insights and discoveries</li>
                <li>Regular updates with new strategies</li>
              </ul>

              <h2>Our Expertise</h2>
              <p>Our team brings together diverse gaming backgrounds:</p>
              <ul>
                <li>Rogue-lite and deck-building game specialists</li>
                <li>Strategy guide writers with years of experience</li>
                <li>Community moderators and content creators</li>
                <li>Game analysis and testing experts</li>
              </ul>

              <h2>Community Focus</h2>
              <p>We believe in the power of community knowledge. Our guides are constantly updated based on player feedback, new discoveries, and community insights. We encourage players to share their strategies and help us improve our content.</p>

              <h2>Quality Commitment</h2>
              <p>Every guide on 321gogame.com is thoroughly tested and verified. We ensure that our strategies work in actual gameplay and provide real value to players. Our content is regularly reviewed and updated to maintain accuracy and relevance.</p>

              <h2>Independence</h2>
              <p>321gogame.com is an independent fan site. We are not affiliated with, endorsed by, or connected to the original CloverPit: The Descent game or its publishers. This independence allows us to provide honest, unbiased guides and strategies.</p>

              <h2>Contact Our Team</h2>
              <p>We welcome feedback, suggestions, and questions from the CloverPit community. If you have strategies to share, questions about our guides, or suggestions for improvement, please don't hesitate to reach out.</p>

              <div class="contact-info">
                <h3>Get in Touch</h3>
                <p><strong>Email:</strong> wyong@321gogame.com</p>
                <p><strong>Website:</strong> 321gogame.com</p>
                <p><strong>Response Time:</strong> We typically respond within 24-48 hours</p>
                <p><strong>Last Updated:</strong> October 17, 2025</p>
              </div>

              <h2>Thank You</h2>
              <p>Thank you for choosing 321gogame.com as your CloverPit guide resource. We're committed to helping you survive the cursed slot machine and discover all the secrets this incredible game has to offer.</p>
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
