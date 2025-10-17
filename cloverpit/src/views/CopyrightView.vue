<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">Copyright Notice</h1>
            <p class="hero-description">Intellectual property and copyright information for 321gogame.com</p>
            <div class="last-updated">
              <span>Last Updated: October 17, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="legal-content">
              <h2>Copyright Ownership</h2>
              <p>All content on 321gogame.com, including but not limited to text, graphics, logos, images, audio clips, video, digital downloads, data compilations, and software, is the property of 321gogame.com or its content suppliers and is protected by international copyright laws.</p>

              <h2>Website Content</h2>
              <p>The compilation of all content on this site is the exclusive property of 321gogame.com and is protected by copyright laws. All rights reserved.</p>

              <h2>CloverPit Game Content</h2>
              <p>321gogame.com is not affiliated with, endorsed by, or connected to the original CloverPit: The Descent game or its publishers. This is an independent fan site created for informational purposes only.</p>
              
              <div class="notice-box">
                <h3>Important Notice</h3>
                <p>All trademarks, copyrights, and intellectual property related to CloverPit: The Descent belong to their respective owners:</p>
                <ul>
                  <li><strong>Developer:</strong> Panik Arcade</li>
                  <li><strong>Publisher:</strong> Future Friends Games</li>
                  <li><strong>Game Title:</strong> CloverPit: The Descent</li>
                </ul>
              </div>

              <h2>Fair Use Policy</h2>
              <p>Our use of game-related content falls under fair use for educational and informational purposes. We provide:</p>
              <ul>
                <li>Game guides and walkthroughs for educational purposes</li>
                <li>Analysis and commentary on game mechanics</li>
                <li>Community discussion and strategy sharing</li>
                <li>Non-commercial fan content and guides</li>
              </ul>

              <h2>User-Generated Content</h2>
              <p>If you submit content to 321gogame.com, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and distribute such content in connection with our services.</p>

              <h2>DMCA Compliance</h2>
              <p>321gogame.com respects the intellectual property rights of others. If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please contact us at wyong@321gogame.com with the following information:</p>
              <ul>
                <li>A description of the copyrighted work that you claim has been infringed</li>
                <li>The location of the allegedly infringing material on our site</li>
                <li>Your contact information</li>
                <li>A statement that you have a good faith belief that the use is not authorized</li>
                <li>A statement that the information is accurate and that you are authorized to act on behalf of the copyright owner</li>
              </ul>

              <h2>Third-Party Content</h2>
              <p>Some content on our site may be sourced from third parties. We make every effort to properly attribute such content and respect the rights of content creators.</p>

              <h2>License to Use</h2>
              <p>You may view, download, and print content from 321gogame.com for your personal, non-commercial use only. You may not:</p>
              <ul>
                <li>Reproduce, distribute, or display content for commercial purposes</li>
                <li>Modify or create derivative works from our content</li>
                <li>Remove copyright notices or other proprietary markings</li>
                <li>Use our content in a way that could harm our reputation</li>
              </ul>

              <h2>Contact Information</h2>
              <p>For copyright-related inquiries, please contact us:</p>
              <div class="contact-info">
                <p><strong>Email:</strong> wyong@321gogame.com</p>
                <p><strong>Website:</strong> 321gogame.com</p>
                <p><strong>Subject Line:</strong> Copyright Inquiry</p>
                <p><strong>Last Updated:</strong> October 17, 2025</p>
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
