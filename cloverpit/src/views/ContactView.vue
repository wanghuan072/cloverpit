<template>
  <div class="contact-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">Contact Us</h1>
            <p class="hero-description">Get in touch with the 321gogame.com team for support, feedback, or collaboration</p>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="contact-content">
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you! Whether you have questions about our CloverPit guides, suggestions for improvement, or want to share your own strategies, we're here to help.</p>

              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-icon">📧</div>
                  <h3>Email Support</h3>
                  <p>For general inquiries, feedback, or support requests:</p>
                  <div class="contact-details">
                    <p><strong>Email:</strong> wyong@321gogame.com</p>
                    <p><strong>Response Time:</strong> 24-48 hours</p>
                    <p><strong>Best For:</strong> General questions, feedback, support</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">💬</div>
                  <h3>Community Feedback</h3>
                  <p>Share your CloverPit strategies and discoveries:</p>
                  <div class="contact-details">
                    <p><strong>Email:</strong> wyong@321gogame.com</p>
                    <p><strong>Subject:</strong> Strategy Submission</p>
                    <p><strong>Best For:</strong> Sharing tips, reporting bugs, collaboration</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">🤝</div>
                  <h3>Collaboration</h3>
                  <p>Interested in working with us or contributing content:</p>
                  <div class="contact-details">
                    <p><strong>Email:</strong> wyong@321gogame.com</p>
                    <p><strong>Subject:</strong> Collaboration Inquiry</p>
                    <p><strong>Best For:</strong> Partnerships, content creation, guest posts</p>
                  </div>
                </div>
              </div>

              <h2>What We Can Help With</h2>
              <div class="help-categories">
                <div class="help-category">
                  <h3>Guide Questions</h3>
                  <ul>
                    <li>Clarification on strategies</li>
                    <li>Charm combination help</li>
                    <li>Ending walkthrough assistance</li>
                    <li>Game mechanics explanations</li>
                  </ul>
                </div>

                <div class="help-category">
                  <h3>Technical Support</h3>
                  <ul>
                    <li>Website navigation issues</li>
                    <li>Content accessibility problems</li>
                    <li>Mobile compatibility concerns</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>

                <div class="help-category">
                  <h3>Content Feedback</h3>
                  <ul>
                    <li>Guide accuracy improvements</li>
                    <li>Missing information requests</li>
                    <li>New strategy suggestions</li>
                    <li>Community feature ideas</li>
                  </ul>
                </div>
              </div>

              <h2>Response Guidelines</h2>
              <div class="response-info">
                <div class="response-item">
                  <h4>General Inquiries</h4>
                  <p>We typically respond within 24-48 hours for general questions and feedback.</p>
                </div>
                <div class="response-item">
                  <h4>Technical Issues</h4>
                  <p>Technical support requests are prioritized and usually receive faster responses.</p>
                </div>
                <div class="response-item">
                  <h4>Collaboration</h4>
                  <p>Partnership and collaboration inquiries may take 3-5 business days for detailed responses.</p>
                </div>
              </div>

              <h2>Before You Contact Us</h2>
              <p>To help us provide the best assistance, please consider:</p>
              <ul>
                <li>Check our existing guides for answers to common questions</li>
                <li>Be specific about your question or issue</li>
                <li>Include relevant details (game version, platform, etc.)</li>
                <li>Use a clear, descriptive subject line</li>
                <li>Be patient - we're a small team but we read every message</li>
              </ul>

              <div class="contact-info">
                <h3>Direct Contact Information</h3>
                <p><strong>Primary Email:</strong> wyong@321gogame.com</p>
                <p><strong>Website:</strong> 321gogame.com</p>
                <p><strong>Last Updated:</strong> October 17, 2025</p>
                <p><strong>Business Hours:</strong> We check emails daily, Monday through Friday</p>
              </div>

              <h2>Thank You</h2>
              <p>Thank you for your interest in 321gogame.com and our CloverPit guides. Your feedback helps us create better content and improve the gaming experience for the entire community. We look forward to hearing from you!</p>
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
.contact-page {
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
  max-width: 900px;
  margin: 0 auto;
}

.contact-content {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #444;
}

.contact-content h2 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin: 30px 0 15px 0;
  font-weight: bold;
}

.contact-content h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin: 25px 0 10px 0;
  font-weight: 600;
}

.contact-content h4 {
  color: #ff6b35;
  font-size: 1.1rem;
  margin: 20px 0 8px 0;
  font-weight: 600;
}

.contact-content p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 15px;
}

.contact-content ul {
  color: #d1d5db;
  margin: 15px 0;
  padding-left: 20px;
}

.contact-content li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.contact-method {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 25px;
  text-align: center;
}

.contact-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.contact-method h3 {
  color: #ff6b35;
  margin-bottom: 10px;
}

.contact-method p {
  color: #d1d5db;
  margin-bottom: 15px;
}

.contact-details p {
  margin: 5px 0;
  color: #ffffff;
  font-size: 0.9rem;
}

.help-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.help-category {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #555;
  border-radius: 8px;
  padding: 20px;
}

.help-category h3 {
  color: #ff6b35;
  margin-bottom: 15px;
}

.help-category ul {
  margin: 0;
  padding-left: 15px;
}

.help-category li {
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.response-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.response-item {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  padding: 20px;
}

.response-item h4 {
  color: #10b981;
  margin-bottom: 10px;
}

.response-item p {
  color: #d1d5db;
  margin: 0;
  font-size: 0.9rem;
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
  
  .contact-content {
    padding: 30px 20px;
  }
  
  .contact-content h2 {
    font-size: 1.5rem;
  }
  
  .contact-content h3 {
    font-size: 1.2rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .help-categories {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .response-info {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .contact-content {
    padding: 20px 15px;
  }
}
</style>
