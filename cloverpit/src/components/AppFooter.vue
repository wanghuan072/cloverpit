<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-section-logo">
              <img src="../../public/images/logo.webp" alt="CloverPit Logo" />
              <span>CloverPit</span>
            </div>
            <p>{{ $t('footer.description') }}</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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




