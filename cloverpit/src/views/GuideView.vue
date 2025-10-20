<template>
  <div class="guide-page">
    <AppHeader />

    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <!-- Main Title -->
            <h1 class="hero-title">{{ $t('GuidePage.hero.title') }}</h1>

            <!-- Description -->
            <div class="hero-description">
              <p v-html="$t('GuidePage.hero.description')"></p>
            </div>

            <!-- Navigation Cards -->
            <div class="guide-nav">
              <div class="nav-card" @click="scrollToSection('getting-started')">
                <span>{{ $t('GuidePage.hero.nav.gettingStarted') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('beginner-tips')">
                <span>{{ $t('GuidePage.hero.nav.beginnerTips') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('advanced-strategies')">
                <span>{{ $t('GuidePage.hero.nav.advancedStrategies') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('charm-synergies')">
                <span>{{ $t('GuidePage.hero.nav.charmSynergies') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('common-mistakes')">
                <span>{{ $t('GuidePage.hero.nav.commonMistakes') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('progression-guide')">
                <span>{{ $t('GuidePage.hero.nav.progressionGuide') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('endless-mode')">
                <span>{{ $t('GuidePage.hero.nav.endlessMode') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Getting Started Section -->
      <section id="getting-started" class="section getting-started">
        <div class="container">
          <div class="getting-started-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.gettingStarted.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.gettingStarted.subtitle')"></p>
            </div>

            <div class="survival-steps">
              <div class="step-card step-1">
                <div class="step-icon">
                  <div class="step-number">1</div>
                </div>
                <h3>{{ $t('GuidePage.gettingStarted.steps.step1.title') }}</h3>
                <p>{{ $t('GuidePage.gettingStarted.steps.step1.description') }}</p>
                <div class="tips-box">
                  <h4>{{ $t('GuidePage.gettingStarted.steps.step1.keyPoints.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step1.keyPoints.point1') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step1.keyPoints.point2') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step1.keyPoints.point3') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step1.keyPoints.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-2">
                <div class="step-icon">
                  <div class="step-number">2</div>
                </div>
                <h3>{{ $t('GuidePage.gettingStarted.steps.step2.title') }}</h3>
                <p>{{ $t('GuidePage.gettingStarted.steps.step2.description') }}</p>
                <div class="tips-box">
                  <h4>{{ $t('GuidePage.gettingStarted.steps.step2.keyPoints.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step2.keyPoints.point1') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step2.keyPoints.point2') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step2.keyPoints.point3') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step2.keyPoints.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-3">
                <div class="step-icon">
                  <div class="step-number">3</div>
                </div>
                <h3>{{ $t('GuidePage.gettingStarted.steps.step3.title') }}</h3>
                <p>{{ $t('GuidePage.gettingStarted.steps.step3.description') }}</p>
                <div class="tips-box">
                  <h4>{{ $t('GuidePage.gettingStarted.steps.step3.keyPoints.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step3.keyPoints.point1') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step3.keyPoints.point2') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step3.keyPoints.point3') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step3.keyPoints.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-4">
                <div class="step-icon">
                  <div class="step-number">4</div>
                </div>
                <h3>{{ $t('GuidePage.gettingStarted.steps.step4.title') }}</h3>
                <p v-html="$t('GuidePage.gettingStarted.steps.step4.description')"></p>
                <div class="tips-box">
                  <h4>{{ $t('GuidePage.gettingStarted.steps.step4.keyPoints.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step4.keyPoints.point1') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step4.keyPoints.point2') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step4.keyPoints.point3') }}</li>
                    <li>{{ $t('GuidePage.gettingStarted.steps.step4.keyPoints.point4') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Beginner Tips Section -->
      <section id="beginner-tips" class="section beginner-tips">
        <div class="container">
          <div class="beginner-tips-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.beginnerTips.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.beginnerTips.subtitle')"></p>
            </div>

            <div class="tips-grid">
              <div class="tip-card">
                <div class="tip-number">1</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip1.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip1.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">2</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip2.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip2.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">3</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip3.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip3.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">4</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip4.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip4.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">5</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip5.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip5.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">6</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip6.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip6.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">7</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip7.title') }}</h3>
                <p v-html="$t('GuidePage.beginnerTips.tips.tip7.description')"></p>
              </div>

              <div class="tip-card">
                <div class="tip-number">8</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip8.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip8.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">9</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip9.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip9.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">10</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip10.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip10.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">11</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip11.title') }}</h3>
                <p>{{ $t('GuidePage.beginnerTips.tips.tip11.description') }}</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">12</div>
                <h3>{{ $t('GuidePage.beginnerTips.tips.tip12.title') }}</h3>
                <p v-html="$t('GuidePage.beginnerTips.tips.tip12.description')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Strategies Section -->
      <section id="advanced-strategies" class="section advanced-strategies">
        <div class="container">
          <div class="advanced-strategies-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.advancedStrategies.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.advancedStrategies.subtitle')"></p>
            </div>

            <div class="strategies-grid">
              <div class="strategy-card">
                <div class="strategy-icon">🎯</div>
                <h3>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.title') }}</h3>
                <p>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.description') }}</p>
                <div class="strategy-example">
                  <h4>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.implementation.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.implementation.point1') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.implementation.point2') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.implementation.point3') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.symbolControl.implementation.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">💰</div>
                <h3>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.title') }}</h3>
                <p>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.description') }}</p>
                <div class="strategy-example">
                  <h4>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.principles.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.principles.point1') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.principles.point2') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.principles.point3') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.economicGrowth.principles.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">⚡</div>
                <h3>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.title') }}</h3>
                <p>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.description') }}</p>
                <div class="strategy-example">
                  <h4>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.guidelines.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.guidelines.point1') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.guidelines.point2') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.guidelines.point3') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.reactionChains.guidelines.point4') }}</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">⚖️</div>
                <h3>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.title') }}</h3>
                <p>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.description') }}</p>
                <div class="strategy-example">
                  <h4>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.assessment.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.assessment.point1') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.assessment.point2') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.assessment.point3') }}</li>
                    <li>{{ $t('GuidePage.advancedStrategies.strategies.riskManagement.assessment.point4') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Charm Synergies Section -->
      <section id="charm-synergies" class="section charm-synergies">
        <div class="container">
          <div class="charm-synergies-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.charmSynergies.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.charmSynergies.subtitle')"></p>
            </div>

            <div class="synergies-grid">
              <div class="synergy-card golden-engine">
                <div class="synergy-header">
                  <div class="synergy-icon">✨</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.goldenEngine.outcome') }}</p>
                </div>
              </div>

              <div class="synergy-card ticket-loop">
                <div class="synergy-header">
                  <div class="synergy-icon">🔄</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.ticketLoop.outcome') }}</p>
                </div>
              </div>

              <div class="synergy-card cascade-chain">
                <div class="synergy-header">
                  <div class="synergy-icon">🌊</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.cascadeChain.outcome') }}</p>
                </div>
              </div>

              <div class="synergy-card safety-net">
                <div class="synergy-header">
                  <div class="synergy-icon">🛡️</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.safetyNet.outcome') }}</p>
                </div>
              </div>

              <div class="synergy-card symbol-recycling">
                <div class="synergy-header">
                  <div class="synergy-icon">♻️</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.symbolRecycling.outcome') }}</p>
                </div>
              </div>

              <div class="synergy-card high-roller">
                <div class="synergy-header">
                  <div class="synergy-icon">🎰</div>
                  <h3>{{ $t('GuidePage.charmSynergies.synergies.highRoller.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.charmSynergies.synergies.highRoller.description') }}</p>
                <div class="synergy-combo">
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.highRoller.combinationTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.highRoller.combination') }}</p>
                  <h4>{{ $t('GuidePage.charmSynergies.synergies.highRoller.outcomeTitle') }}</h4>
                  <p>{{ $t('GuidePage.charmSynergies.synergies.highRoller.outcome') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Mistakes Section -->
      <section id="common-mistakes" class="section common-mistakes">
        <div class="container">
          <div class="common-mistakes-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.commonMistakes.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.commonMistakes.subtitle')"></p>
            </div>

            <div class="mistakes-grid">
              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.ticketExpenditure.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.ticketExpenditure.description') }}</p>
                <div class="mistake-fix">
                  <h4>Solution:</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.ticketExpenditure.solution') }}</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.charmInteractions.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.charmInteractions.description') }}</p>
                <div class="mistake-fix">
                  <h4>{{ $t('GuidePage.commonMistakes.mistakes.charmInteractions.solutionTitle') }}</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.charmInteractions.solution') }}</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.savingCharms.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.savingCharms.description') }}</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.savingCharms.solution') }}</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.phoneUpgrades.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.phoneUpgrades.description') }}</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.phoneUpgrades.solution') }}</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.rareSymbols.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.rareSymbols.description') }}</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.rareSymbols.solution') }}</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>{{ $t('GuidePage.commonMistakes.mistakes.badRNG.title') }}</h3>
                </div>
                <p>{{ $t('GuidePage.commonMistakes.mistakes.badRNG.description') }}</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>{{ $t('GuidePage.commonMistakes.mistakes.badRNG.solution') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Progression Guide Section -->
      <section id="progression-guide" class="section progression-guide">
        <div class="container">
          <div class="progression-guide-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.progressionGuide.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.progressionGuide.subtitle')"></p>
            </div>

            <div class="progression-content">
              <div class="progression-section">
                <h3>{{ $t('GuidePage.progressionGuide.sections.metaProgression.title') }}</h3>
                <p>{{ $t('GuidePage.progressionGuide.sections.metaProgression.description') }}</p>

                <div class="progression-grid">
                  <div class="progression-card">
                    <h4>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockableContent.title') }}</h4>
                    <ul>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockableContent.item1') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockableContent.item2') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockableContent.item3') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockableContent.item4') }}</li>
                    </ul>
                  </div>

                  <div class="progression-card">
                    <h4>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockMethods.title') }}</h4>
                    <ul>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockMethods.item1') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockMethods.item2') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockMethods.item3') }}</li>
                      <li>{{ $t('GuidePage.progressionGuide.sections.metaProgression.unlockMethods.item4') }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="progression-section">
                <h3>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.title') }}</h3>
                <p>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.description') }}</p>

                <div class="priority-list">
                  <div class="priority-item">
                    <div class="priority-number">1</div>
                    <div class="priority-content">
                      <h4>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority1.title') }}</h4>
                      <p>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority1.description') }}</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">2</div>
                    <div class="priority-content">
                      <h4>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority2.title') }}</h4>
                      <p>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority2.description') }}</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">3</div>
                    <div class="priority-content">
                      <h4>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority3.title') }}</h4>
                      <p>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority3.description') }}</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">4</div>
                    <div class="priority-content">
                      <h4>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority4.title') }}</h4>
                      <p>{{ $t('GuidePage.progressionGuide.sections.priorityGuide.priorities.priority4.description') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="progression-section">
                <h3>{{ $t('GuidePage.progressionGuide.sections.seededRuns.title') }}</h3>
                <p v-html="$t('GuidePage.progressionGuide.sections.seededRuns.description')"></p>

                <div class="seed-tips">
                  <h4>{{ $t('GuidePage.progressionGuide.sections.seededRuns.tips.title') }}</h4>
                  <ul>
                    <li>{{ $t('GuidePage.progressionGuide.sections.seededRuns.tips.tip1') }}</li>
                    <li>{{ $t('GuidePage.progressionGuide.sections.seededRuns.tips.tip2') }}</li>
                    <li>{{ $t('GuidePage.progressionGuide.sections.seededRuns.tips.tip3') }}</li>
                    <li>{{ $t('GuidePage.progressionGuide.sections.seededRuns.tips.tip4') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Endless Mode Section -->
      <section id="endless-mode" class="section endless-mode">
        <div class="container">
          <div class="endless-mode-wrapper">
            <div class="section-header">
              <h2 class="home-title">{{ $t('GuidePage.endlessMode.title') }}</h2>
              <p class="section-subtitle" v-html="$t('GuidePage.endlessMode.subtitle')"></p>
            </div>

            <div class="endless-content">
              <div class="endless-section">
                <h3>{{ $t('GuidePage.endlessMode.sections.mechanics.title') }}</h3>
                <p>{{ $t('GuidePage.endlessMode.sections.mechanics.description') }}</p>

                <div class="endless-grid">
                  <div class="endless-card">
                    <h4>{{ $t('GuidePage.endlessMode.sections.mechanics.coreModifications.title') }}</h4>
                    <ul>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.coreModifications.item1') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.coreModifications.item2') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.coreModifications.item3') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.coreModifications.item4') }}</li>
                    </ul>
                  </div>

                  <div class="endless-card">
                    <h4>{{ $t('GuidePage.endlessMode.sections.mechanics.strategicConsequences.title') }}</h4>
                    <ul>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.strategicConsequences.item1') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.strategicConsequences.item2') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.strategicConsequences.item3') }}</li>
                      <li>{{ $t('GuidePage.endlessMode.sections.mechanics.strategicConsequences.item4') }}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="endless-section">
                <h3>{{ $t('GuidePage.endlessMode.sections.strategies.title') }}</h3>
                <p>{{ $t('GuidePage.endlessMode.sections.strategies.description') }}</p>

                <div class="endless-strategies">
                  <div class="endless-strategy">
                    <div class="strategy-icon">📈</div>
                    <h4>{{ $t('GuidePage.endlessMode.sections.strategies.strategy1.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.strategies.strategy1.description') }}</p>
                  </div>

                  <div class="endless-strategy">
                    <div class="strategy-icon">🚀</div>
                    <h4>{{ $t('GuidePage.endlessMode.sections.strategies.strategy2.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.strategies.strategy2.description') }}</p>
                  </div>

                  <div class="endless-strategy">
                    <div class="strategy-icon">⚡</div>
                    <h4>{{ $t('GuidePage.endlessMode.sections.strategies.strategy3.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.strategies.strategy3.description') }}</p>
                  </div>
                </div>
              </div>

              <div class="endless-section">
                <h3>{{ $t('GuidePage.endlessMode.sections.highScoreTips.title') }}</h3>
                <p>{{ $t('GuidePage.endlessMode.sections.highScoreTips.description') }}</p>

                <div class="high-score-tips">
                  <div class="tip-item">
                    <h4>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip1.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip1.description') }}</p>
                  </div>

                  <div class="tip-item">
                    <h4>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip2.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip2.description') }}</p>
                  </div>

                  <div class="tip-item">
                    <h4>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip3.title') }}</h4>
                    <p>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip3.description') }}</p>
                  </div>

                  <div class="tip-item">
                    <h4>{{ $t('GuidePage.endlessMode.sections.highScoreTips.tip4.title') }}</h4>
                    <p v-html="$t('GuidePage.endlessMode.sections.highScoreTips.tip4.description')"></p>
                  </div>
                </div>
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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>

<style scoped>
.section {
  position: relative;
  padding: 80px 0;
  background: #000;
}

.section.hero {
  background: #000;
  position: relative;
  overflow: hidden;
}

.section.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../../public/images/2.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.8;
}

.section.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0.8) 55%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.1) 85%,
      rgba(0, 0, 0, 0) 100%);
  z-index: 2;
}

.section.hero .container {
  position: relative;
  z-index: 3;
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
  text-align: center;
  position: relative;
  z-index: 3;
  text-shadow:
    0 0 5px #ff6b35,
    0 0 10px #ff6b35,
    0 0 15px #ff6b35,
    0 0 20px #ff6b35,
    0 0 25px #ff6b35,
    0 0 30px #ff6b35;
}

.hero-title .highlight {
  font-family: 'Creepster', cursive;
  color: #ff6b35;
  text-shadow: 0 0 10px #ff6b35;
  font-weight: normal;
}

.hero-description {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  z-index: 3;
}

.hero-description p {
  font-size: 18px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.guide-nav {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
}

.nav-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}

.nav-card:hover {
  background: rgba(0, 0, 0, 0.8);
  border-color: #ff6b35;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.nav-card span {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.home-title {
  font-family: 'Creepster', cursive;
  font-size: 48px;
  text-align: center;
  color: #ff6b35;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff6b35;
  font-weight: normal;
  text-transform: uppercase;
}

.section-subtitle {
  font-size: 18px;
  color: #d1d5db;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.getting-started-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.survival-steps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.step-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 107, 53, 0.1);
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(255, 107, 53, 0.2), inset 0 1px 0 rgba(255, 107, 53, 0.2);
  border-color: rgba(255, 107, 53, 0.5);
}

.step-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(135deg, #ff6b35, #e55a2b);
}

.step-number {
  color: white;
}

.step-card h3 {
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.step-card p {
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.tips-box {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 15px;
  text-align: left;
}

.tips-box h4 {
  color: #ff6b35;
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
}

.tips-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-box li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 5px;
  color: #d1d5db;
  font-size: 12px;
  line-height: 1.4;
}

.tips-box li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Beginner Tips Section */
.beginner-tips-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.tip-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 107, 53, 0.1);
  position: relative;
}

.tip-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 53, 0.2);
}

.tip-number {
  position: absolute;
  top: -15px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #ff6b35, #e55a2b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.tip-card h3 {
  color: #ff6b35;
  font-size: 18px;
  margin-bottom: 12px;
  margin-top: 10px;
  text-shadow: 0 0 8px #ff6b35;
}

.tip-card p {
  color: #d1d5db;
  line-height: 1.6;
  font-size: 14px;
}

/* Advanced Strategies Section */
.advanced-strategies-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.strategies-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.strategy-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 107, 53, 0.1);
}

.strategy-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 53, 0.2);
}

.strategy-icon {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
}

.strategy-card h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 16px;
  text-shadow: 0 0 10px #ff6b35;
  text-align: center;
}

.strategy-card p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 16px;
}

.strategy-example {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

.strategy-example h4 {
  color: #ff6b35;
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 600;
}

.strategy-example ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.strategy-example li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
}

.strategy-example li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Charm Synergies Section */
.charm-synergies-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.synergies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.synergy-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 107, 53, 0.1);
}

.synergy-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 53, 0.2);
}

.synergy-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.synergy-icon {
  font-size: 32px;
}

.synergy-header h3 {
  color: #ff6b35;
  font-size: 20px;
  margin: 0;
  text-shadow: 0 0 8px #ff6b35;
}

.synergy-card p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 14px;
}

.synergy-combo {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 15px;
}

.synergy-combo h4 {
  color: #ff6b35;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
}

.synergy-combo p {
  color: #d1d5db;
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 1.4;
}

.synergy-combo p:last-child {
  margin-bottom: 0;
}

/* Common Mistakes Section */
.common-mistakes-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.mistakes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.mistake-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 107, 53, 0.1);
}

.mistake-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.5);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 107, 53, 0.2);
}

.mistake-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.mistake-icon {
  font-size: 24px;
  color: #ff4757;
}

.mistake-header h3 {
  color: #ff4757;
  font-size: 18px;
  margin: 0;
  text-shadow: 0 0 8px #ff4757;
}

.mistake-card p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 14px;
}

.mistake-fix {
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 8px;
  padding: 15px;
}

.mistake-fix h4 {
  color: #00ff88;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 600;
}

.mistake-fix p {
  color: #d1d5db;
  font-size: 12px;
  margin-bottom: 0;
  line-height: 1.4;
}

/* Progression Guide Section */
.progression-guide-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.progression-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.progression-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff6b35;
}

.progression-section p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 16px;
}

.progression-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.progression-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
}

.progression-card h4 {
  color: #ff6b35;
  font-size: 18px;
  margin-bottom: 15px;
  text-shadow: 0 0 8px #ff6b35;
}

.progression-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.progression-card li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
}

.progression-card li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.priority-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.priority-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 20px;
}

.priority-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b35, #e55a2b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  flex-shrink: 0;
}

.priority-content h4 {
  color: #ff6b35;
  font-size: 18px;
  margin-bottom: 8px;
  text-shadow: 0 0 8px #ff6b35;
}

.priority-content p {
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.seed-tips {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 20px;
}

.seed-tips h4 {
  color: #ff6b35;
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 600;
}

.seed-tips ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.seed-tips li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
}

.seed-tips li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Endless Mode Section */
.endless-mode-wrapper {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.2);
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  z-index: 2;
}

.endless-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.endless-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px #ff6b35;
}

.endless-section p {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 16px;
}

.endless-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.endless-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
}

.endless-card h4 {
  color: #ff6b35;
  font-size: 18px;
  margin-bottom: 15px;
  text-shadow: 0 0 8px #ff6b35;
}

.endless-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.endless-card li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
}

.endless-card li::before {
  content: '•';
  color: #ff6b35;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.endless-strategies {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
}

.endless-strategy {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 25px;
}

.endless-strategy .strategy-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.endless-strategy h4 {
  color: #ff6b35;
  font-size: 18px;
  margin-bottom: 10px;
  text-shadow: 0 0 8px #ff6b35;
}

.endless-strategy p {
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.high-score-tips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.tip-item {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 12px;
  padding: 20px;
}

.tip-item h4 {
  color: #ff6b35;
  font-size: 16px;
  margin-bottom: 8px;
  text-shadow: 0 0 8px #ff6b35;
}

.tip-item p {
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .survival-steps {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .tips-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .synergies-grid {
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

  .home-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-header{
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 12px;
  }

  .step-icon{
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .step-card p{
    margin-bottom: 10px;
  }

  .getting-started-wrapper {
    padding: 10px;
  }

  .step-card {
    padding: 15px;
  }

  .strategies-grid{
    gap: 10px;
  }
  
  .strategy-icon{
    font-size: 28px;
    margin-bottom: 10px;
  }

  .step-card h3 {
    font-size: 16px;
  }

  .step-card p {
    font-size: 12px;
  }

  .tips-box {
    padding: 10px;
  }

  .tips-box h4 {
    font-size: 12px;
  }

  .tips-box li {
    font-size: 12px;
  }

  .guide-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .nav-card {
    padding: 5px 10px;
    min-height: 30px;
  }

  .nav-card span {
    font-size: 12px;
  }

  .beginner-tips-wrapper,
  .advanced-strategies-wrapper,
  .charm-synergies-wrapper {
    padding: 10px;
  }

  .tips-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .tip-card {
    padding: 15px;
  }

  .tip-card h3 {
    font-size: 16px;
  }

  .tip-card p {
    font-size: 12px;
  }

  .strategy-card {
    padding: 10px;
  }

  .strategy-card h3 {
    font-size: 16px;
  }

  .strategy-card p {
    font-size: 12px;
  }

  .strategy-example {
    padding: 10px;
  }

  .strategy-example h4 {
    font-size: 12px;
  }

  .strategy-example li {
    font-size: 12px;
  }

  .synergies-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .synergy-card {
    padding: 15px;
  }

  .synergy-header h3 {
    font-size: 16px;
  }

  .synergy-card p {
    font-size: 12px;
  }

  .synergy-combo {
    padding: 10px;
  }

  .synergy-combo h4 {
    font-size: 12px;
  }

  .synergy-combo p {
    font-size: 12px;
  }

  .common-mistakes-wrapper,
  .progression-guide-wrapper,
  .endless-mode-wrapper {
    padding: 10px;
  }

  .mistakes-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .mistake-card {
    padding: 15px;
  }

  .mistake-header h3 {
    font-size: 16px;
  }

  .mistake-card p {
    font-size: 12px;
  }

  .mistake-fix {
    padding: 10px;
  }

  .mistake-fix h4 {
    font-size: 12px;
  }

  .mistake-fix p {
    font-size: 12px;
  }

  .progression-section h3 {
    font-size: 20px;
  }

  .progression-section p {
    font-size: 12px;
  }

  .progression-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .progression-card {
    padding: 15px;
  }

  .progression-card h4 {
    font-size: 16px;
  }

  .progression-card li {
    font-size: 12px;
  }

  .priority-item {
    padding: 15px;
  }

  .priority-number {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  .priority-content h4 {
    font-size: 16px;
  }

  .priority-content p {
    font-size: 12px;
  }

  .seed-tips {
    padding: 15px;
  }

  .seed-tips h4 {
    font-size: 14px;
  }

  .seed-tips li {
    font-size: 12px;
  }

  .endless-section h3 {
    font-size: 20px;
  }

  .endless-section p {
    font-size: 12px;
  }

  .endless-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .endless-card {
    padding: 15px;
  }

  .endless-card h4 {
    font-size: 16px;
  }

  .endless-card li {
    font-size: 12px;
  }

  .endless-strategy {
    padding: 10px;
  }

  .endless-strategy .strategy-icon {
    font-size: 24px;
  }

  .endless-strategy h4 {
    font-size: 16px;
  }

  .endless-strategy p {
    font-size: 12px;
  }

  .high-score-tips {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .tip-item {
    padding: 15px;
  }

  .tip-item h4 {
    font-size: 14px;
  }

  .tip-item p {
    font-size: 12px;
  }
}

/* 内链样式 */
.text-link {
  color: #ff6b35;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #ff6b35;
}
</style>
