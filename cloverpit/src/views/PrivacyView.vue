<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">Privacy Policy</h1>
            <p class="hero-description">How we protect your personal information and data on 321gogame.com</p>
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
              <h2>Information We Collect</h2>
              <p>321gogame.com is committed to protecting your privacy. We collect minimal information necessary to provide our CloverPit guide services:</p>
              
              <h3>Personal Information</h3>
              <ul>
                <li>Email address (when you contact us at wyong@321gogame.com)</li>
                <li>Name (if provided in communications)</li>
                <li>Any information you voluntarily share in feedback or support requests</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our CloverPit guide content</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze website usage to enhance user experience</li>
                <li>Ensure website security and prevent abuse</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
              <ul>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in website operations (under strict confidentiality agreements)</li>
              </ul>

              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2>Cookies and Tracking</h2>
              <p>Our website may use cookies and similar technologies to enhance your browsing experience and analyze site usage. You can control cookie settings through your browser preferences.</p>

              <h2>Third-Party Links</h2>
              <p>Our CloverPit guide may contain links to external websites. We are not responsible for the privacy practices of these third-party sites.</p>

              <h2>Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <div class="contact-info">
                <p><strong>Email:</strong> wyong@321gogame.com</p>
                <p><strong>Website:</strong> 321gogame.com</p>
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
