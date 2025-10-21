<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-section-logo">
              <img src="../../public/images/logo.webp" alt="CloverPit Logo" loading="eager" decoding="async" />
              <span>CloverPit</span>
            </div>
            <p>{{ $t('footer.description') }}</p>
            <div class="social-links">
              <a href="https://x.com/monicaNilo83076/status/1980123107290644629" target="_blank" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582342691767" target="_blank" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>{{ $t('footer.navigation') }}</h4>
            <ul class="footer-links">
              <li><a href="/">{{ $t('nav.home') }}</a></li>
              <li><a href="/cloverpit-guide">{{ $t('nav.guide') }}</a></li>
              <li><a href="/cloverpit-wiki">{{ $t('nav.wiki') }}</a></li>
              <li><a href="/cloverpit-endings">{{ $t('nav.endings') }}</a></li>
              <li><a href="/cloverpit-blog">{{ $t('nav.blog') }}</a></li>
              <li><a href="/cloverpit-download">{{ $t('nav.download') }}</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>{{ $t('footer.legal') }}</h4>
            <ul class="footer-links">
              <li><a href="/privacy-policy">{{ $t('footer.links.privacyPolicy') }}</a></li>
              <li><a href="/terms-of-service">{{ $t('footer.links.termsOfService') }}</a></li>
              <li><a href="/copyright">{{ $t('footer.links.copyright') }}</a></li>
              <li><a href="/about-us">{{ $t('footer.links.aboutUs') }}</a></li>
              <li><a href="/contact-us">{{ $t('footer.links.contactUs') }}</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>{{ $t('footer.copyright') }}</p>
              <p>{{ $t('footer.disclaimer') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// AppFooter component logic
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 1px solid #ff6b35;
}

.footer-wrapper {
  padding: 60px 0 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section-logo{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.footer-section-logo img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.footer-section-logo span {
  color: #ff6b35;
  font-size: 24px;
  font-weight: bold;
}

.footer-section h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.footer-section p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 16px;
  border: 1px solid #444;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-link:hover {
  border-color: #ff6b35;
  color: #ff6b35;
  background: rgba(255, 107, 53, 0.1);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-links a:hover {
  color: #ff6b35;
  opacity: 1;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding: 30px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright p {
  color: #ffffff;
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.7;
  line-height: 1.4;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
}

@media (max-width: 480px) {
  .footer-wrapper {
    padding: 40px 0 0 0;
  }
  
  .footer-content {
    gap: 25px;
  }
  
  .footer-section h3 {
    font-size: 1.3rem;
  }
  
  .footer-section h4 {
    font-size: 1.1rem;
  }
}
</style>




