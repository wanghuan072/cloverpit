<template>
  <div class="contact-page">
    <AppHeader />
    
    <div class="page-content">
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('ContactPage.hero.title') }}</h1>
            <p class="hero-description">{{ $t('ContactPage.hero.description') }}</p>
          </div>
        </div>
      </section>

      <section class="section content">
        <div class="container">
          <div class="content-wrapper">
            <div class="contact-content">
              <h2>{{ $t('ContactPage.content.getInTouch.title') }}</h2>
              <p>{{ $t('ContactPage.content.getInTouch.description') }}</p>

              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-icon">📧</div>
                  <h3>{{ $t('ContactPage.content.contactMethods.emailSupport.title') }}</h3>
                  <p>{{ $t('ContactPage.content.contactMethods.emailSupport.description') }}</p>
                  <div class="contact-details">
                    <p><strong>{{ $t('ContactPage.content.contactMethods.emailSupport.email') }}</strong> wyong@321gogame.com</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.emailSupport.responseTime') }}</strong> {{ $t('ContactPage.content.contactMethods.emailSupport.responseTimeValue') }}</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.emailSupport.bestFor') }}</strong> {{ $t('ContactPage.content.contactMethods.emailSupport.bestForValue') }}</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">💬</div>
                  <h3>{{ $t('ContactPage.content.contactMethods.communityFeedback.title') }}</h3>
                  <p>{{ $t('ContactPage.content.contactMethods.communityFeedback.description') }}</p>
                  <div class="contact-details">
                    <p><strong>{{ $t('ContactPage.content.contactMethods.communityFeedback.email') }}</strong> wyong@321gogame.com</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.communityFeedback.subject') }}</strong> {{ $t('ContactPage.content.contactMethods.communityFeedback.subjectValue') }}</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.communityFeedback.bestFor') }}</strong> {{ $t('ContactPage.content.contactMethods.communityFeedback.bestForValue') }}</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">🤝</div>
                  <h3>{{ $t('ContactPage.content.contactMethods.collaboration.title') }}</h3>
                  <p>{{ $t('ContactPage.content.contactMethods.collaboration.description') }}</p>
                  <div class="contact-details">
                    <p><strong>{{ $t('ContactPage.content.contactMethods.collaboration.email') }}</strong> wyong@321gogame.com</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.collaboration.subject') }}</strong> {{ $t('ContactPage.content.contactMethods.collaboration.subjectValue') }}</p>
                    <p><strong>{{ $t('ContactPage.content.contactMethods.collaboration.bestFor') }}</strong> {{ $t('ContactPage.content.contactMethods.collaboration.bestForValue') }}</p>
                  </div>
                </div>
              </div>

              <h2>{{ $t('ContactPage.content.helpCategories.title') }}</h2>
              <div class="help-categories">
                <div class="help-category">
                  <h3>{{ $t('ContactPage.content.helpCategories.guideQuestions.title') }}</h3>
                  <ul>
                    <li>{{ $t('ContactPage.content.helpCategories.guideQuestions.items.clarification') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.guideQuestions.items.charmCombination') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.guideQuestions.items.endingWalkthrough') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.guideQuestions.items.gameMechanics') }}</li>
                  </ul>
                </div>

                <div class="help-category">
                  <h3>{{ $t('ContactPage.content.helpCategories.technicalSupport.title') }}</h3>
                  <ul>
                    <li>{{ $t('ContactPage.content.helpCategories.technicalSupport.items.navigation') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.technicalSupport.items.accessibility') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.technicalSupport.items.mobileCompatibility') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.technicalSupport.items.performance') }}</li>
                  </ul>
                </div>

                <div class="help-category">
                  <h3>{{ $t('ContactPage.content.helpCategories.contentFeedback.title') }}</h3>
                  <ul>
                    <li>{{ $t('ContactPage.content.helpCategories.contentFeedback.items.accuracy') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.contentFeedback.items.missingInfo') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.contentFeedback.items.newStrategies') }}</li>
                    <li>{{ $t('ContactPage.content.helpCategories.contentFeedback.items.communityFeatures') }}</li>
                  </ul>
                </div>
              </div>

              <h2>{{ $t('ContactPage.content.responseGuidelines.title') }}</h2>
              <div class="response-info">
                <div class="response-item">
                  <h4>{{ $t('ContactPage.content.responseGuidelines.generalInquiries.title') }}</h4>
                  <p>{{ $t('ContactPage.content.responseGuidelines.generalInquiries.description') }}</p>
                </div>
                <div class="response-item">
                  <h4>{{ $t('ContactPage.content.responseGuidelines.technicalIssues.title') }}</h4>
                  <p>{{ $t('ContactPage.content.responseGuidelines.technicalIssues.description') }}</p>
                </div>
                <div class="response-item">
                  <h4>{{ $t('ContactPage.content.responseGuidelines.collaboration.title') }}</h4>
                  <p>{{ $t('ContactPage.content.responseGuidelines.collaboration.description') }}</p>
                </div>
              </div>

              <h2>{{ $t('ContactPage.content.beforeContact.title') }}</h2>
              <p>{{ $t('ContactPage.content.beforeContact.description') }}</p>
              <ul>
                <li>{{ $t('ContactPage.content.beforeContact.items.checkGuides') }}</li>
                <li>{{ $t('ContactPage.content.beforeContact.items.beSpecific') }}</li>
                <li>{{ $t('ContactPage.content.beforeContact.items.includeDetails') }}</li>
                <li>{{ $t('ContactPage.content.beforeContact.items.useClearSubject') }}</li>
                <li>{{ $t('ContactPage.content.beforeContact.items.bePatient') }}</li>
              </ul>

              <div class="contact-info">
                <h3>{{ $t('ContactPage.content.contactInfo.title') }}</h3>
                <p><strong>{{ $t('ContactPage.content.contactInfo.primaryEmail') }}</strong> wyong@321gogame.com</p>
                <p><strong>{{ $t('ContactPage.content.contactInfo.website') }}</strong> 321gogame.com</p>
                <p><strong>{{ $t('ContactPage.content.contactInfo.lastUpdated') }}</strong> {{ $t('ContactPage.content.contactInfo.lastUpdatedValue') }}</p>
                <p><strong>{{ $t('ContactPage.content.contactInfo.businessHours') }}</strong> {{ $t('ContactPage.content.contactInfo.businessHoursValue') }}</p>
              </div>

              <h2>{{ $t('ContactPage.content.thankYou.title') }}</h2>
              <p>{{ $t('ContactPage.content.thankYou.description') }}</p>
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
