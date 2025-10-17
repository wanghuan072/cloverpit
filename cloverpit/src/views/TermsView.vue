<template>
  <div class="legal-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">Terms of Service</h1>
            <p class="hero-description">Terms and conditions for using 321gogame.com CloverPit guide services</p>
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
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using 321gogame.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

              <h2>Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on 321gogame.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2>Disclaimer</h2>
              <p>The materials on 321gogame.com are provided on an 'as is' basis. 321gogame.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h2>Limitations</h2>
              <p>In no event shall 321gogame.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 321gogame.com, even if 321gogame.com or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

              <h2>Accuracy of Materials</h2>
              <p>The materials appearing on 321gogame.com could include technical, typographical, or photographic errors. 321gogame.com does not warrant that any of the materials on its website are accurate, complete, or current. 321gogame.com may make changes to the materials contained on its website at any time without notice.</p>

              <h2>Links</h2>
              <p>321gogame.com has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by 321gogame.com of the site. Use of any such linked website is at the user's own risk.</p>

              <h2>Modifications</h2>
              <p>321gogame.com may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

              <h2>Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>

              <h2>User Conduct</h2>
              <p>Users agree to use 321gogame.com responsibly and not to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Use the site for any unlawful or prohibited purpose</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>All content on 321gogame.com, including but not limited to text, graphics, logos, images, and software, is the property of 321gogame.com or its content suppliers and is protected by copyright and other intellectual property laws.</p>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
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
