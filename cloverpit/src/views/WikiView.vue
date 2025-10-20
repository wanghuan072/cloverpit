<template>
  <div class="wiki-page">
    <AppHeader />
    
    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
      <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">{{ $t('WikiPage.hero.title') }}</h1>
            <p class="hero-description" v-html="$t('WikiPage.hero.description')"></p>
            
            <!-- Quick Navigation -->
            <div class="wiki-nav">
              <div class="nav-card" @click="scrollToSection('game-info')">
                <span>{{ $t('WikiPage.hero.nav.gameInfo') }}</span>
          </div>
              <div class="nav-card" @click="scrollToSection('symbols')">
                <span>{{ $t('WikiPage.hero.nav.symbols') }}</span>
        </div>
              <div class="nav-card" @click="scrollToSection('patterns')">
                <span>{{ $t('WikiPage.hero.nav.patterns') }}</span>
      </div>
              <div class="nav-card" @click="scrollToSection('rarity')">
                <span>{{ $t('WikiPage.hero.nav.rarity') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('phone-calls')">
                <span>{{ $t('WikiPage.hero.nav.phoneCalls') }}</span>
              </div>
              <div class="nav-card" @click="scrollToSection('memory-cards')">
                <span>{{ $t('WikiPage.hero.nav.memoryCards') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Game Information Section -->
      <section id="game-info" class="section game-info">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.gameInfo.title') }}</h2>
              <p class="section-subtitle">{{ $t('WikiPage.gameInfo.subtitle') }}</p>
            </div>

            <div class="game-overview">
              <h3>{{ $t('WikiPage.gameInfo.overview.title') }}</h3>
              <p v-html="$t('WikiPage.gameInfo.overview.description1')"></p>
              
              <p>{{ $t('WikiPage.gameInfo.overview.description2') }}</p>
              
              <div class="release-info">
                <h4>{{ $t('WikiPage.gameInfo.overview.releaseInfo.title') }}</h4>
                <p v-html="$t('WikiPage.gameInfo.overview.releaseInfo.description')"></p>
              </div>
              
              <div class="gameplay-mechanics">
                <h4>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.title') }}</h4>
                <ul>
                  <li>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.items.item1') }}</li>
                  <li>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.items.item2') }}</li>
                  <li>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.items.item3') }}</li>
                  <li>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.items.item4') }}</li>
                  <li>{{ $t('WikiPage.gameInfo.overview.gameplayMechanics.items.item5') }}</li>
                </ul>
                <p v-html="$t('WikiPage.gameInfo.overview.gameplayMechanics.description')"></p>
              </div>
            </div>

            <div class="info-grid">
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.development') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.developmentValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.publisher') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.publisherValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.platform') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.platformValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.distribution') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.distributionValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.genre') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.genreValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.releaseDate') }}</h3>
                <p v-html="$t('WikiPage.gameInfo.infoCards.releaseDateValue')"></p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.engine') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.engineValue') }}</p>
              </div>
              <div class="info-card">
                <h3>{{ $t('WikiPage.gameInfo.infoCards.languageSupport') }}</h3>
                <p>{{ $t('WikiPage.gameInfo.infoCards.languageSupportValue') }}</p>
              </div>
            </div>

            <div class="game-characteristics">
              <h3>{{ $t('WikiPage.gameInfo.characteristics.title') }}</h3>
              <p>{{ $t('WikiPage.gameInfo.characteristics.description1') }}</p>
              
              <p>{{ $t('WikiPage.gameInfo.characteristics.description2') }}</p>
              
              <div class="deadline-mechanics">
                <h4>{{ $t('WikiPage.gameInfo.characteristics.deadlineMechanics.title') }}</h4>
                <p>{{ $t('WikiPage.gameInfo.characteristics.deadlineMechanics.description') }}</p>
                <ul>
                  <li v-html="$t('WikiPage.gameInfo.characteristics.deadlineMechanics.items.item1')"></li>
                  <li v-html="$t('WikiPage.gameInfo.characteristics.deadlineMechanics.items.item2')"></li>
                  <li v-html="$t('WikiPage.gameInfo.characteristics.deadlineMechanics.items.item3')"></li>
                  <li v-html="$t('WikiPage.gameInfo.characteristics.deadlineMechanics.items.item4')"></li>
                </ul>
              </div>

              <div class="slot-machine-mechanics">
                <h4>{{ $t('WikiPage.gameInfo.characteristics.slotMachineMechanics.title') }}</h4>
                <p>{{ $t('WikiPage.gameInfo.characteristics.slotMachineMechanics.description1') }}</p>
                <p>{{ $t('WikiPage.gameInfo.characteristics.slotMachineMechanics.description2') }}</p>
              </div>

              <div class="atm-system">
                <h4>{{ $t('WikiPage.gameInfo.characteristics.atmSystem.title') }}</h4>
                <p>{{ $t('WikiPage.gameInfo.characteristics.atmSystem.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Symbols Section -->
      <section id="symbols" class="section symbols">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.symbols.title') }}</h2>
              <p class="section-subtitle">{{ $t('WikiPage.symbols.subtitle') }}</p>
            </div>

            <div class="symbols-grid">
              <div class="symbol-card common">
                <div class="symbol-header">
                  <div class="symbol-icon">🍒</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.cherry.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×2</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">19.4%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">1.3</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.cherry.description') }}</p>
              </div>

              <div class="symbol-card common">
                <div class="symbol-header">
                  <div class="symbol-icon">🍋</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.lemon.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×2</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">19.4%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">1.3</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.lemon.description') }}</p>
              </div>

              <div class="symbol-card uncommon">
                <div class="symbol-header">
                  <div class="symbol-icon">🍀</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.clover.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×3</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">14.9%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">1.0</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.clover.description') }}</p>
              </div>

              <div class="symbol-card uncommon">
                <div class="symbol-header">
                  <div class="symbol-icon">🔔</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.bell.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×3</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">14.9%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">1.0</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.bell.description') }}</p>
              </div>

              <div class="symbol-card rare">
                <div class="symbol-header">
                  <div class="symbol-icon">💎</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.diamond.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×5</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">11.9%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">0.8</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.diamond.description') }}</p>
              </div>

              <div class="symbol-card rare">
                <div class="symbol-header">
                  <div class="symbol-icon">💰</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.treasure.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×5</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">11.9%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">0.8</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.treasure.description') }}</p>
              </div>

              <div class="symbol-card very-rare">
                <div class="symbol-header">
                  <div class="symbol-icon">7</div>
                  <h3>{{ $t('WikiPage.symbols.symbolsData.seven.name') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.value') }}</span>
                    <span class="stat-value">Φ ×7</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">7.5%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.weight') }}</span>
                    <span class="stat-value">0.5</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.symbolsData.seven.description') }}</p>
              </div>
            </div>

            <div class="special-symbols">
              <h3>{{ $t('WikiPage.symbols.specialSymbols.title') }}</h3>
              <p>{{ $t('WikiPage.symbols.specialSymbols.description') }}</p>
              <div class="special-symbol-card danger">
                <div class="symbol-header">
                  <div class="symbol-icon">6</div>
                  <h3>{{ $t('WikiPage.symbols.specialSymbols.number6.title') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.probability') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number6.probability') }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.effect') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number6.effect') }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.defense') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number6.defense') }}</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.specialSymbols.number6.description') }}</p>
                
                <div class="symbol-warning">
                  <h4>{{ $t('WikiPage.symbols.specialSymbols.number6.warning.title') }}</h4>
                  <p>{{ $t('WikiPage.symbols.specialSymbols.number6.warning.description') }}</p>
                </div>
              </div>

              <div class="special-symbol-card blessing">
                <div class="symbol-header">
                  <div class="symbol-icon">9</div>
                  <h3>{{ $t('WikiPage.symbols.specialSymbols.number9.title') }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.unlockConditions') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number9.unlockConditions') }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.effect') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number9.effect') }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.symbols.stats.special') }}</span>
                    <span class="stat-value">{{ $t('WikiPage.symbols.specialSymbols.number9.special') }}</span>
                  </div>
                </div>
                <p class="symbol-description">{{ $t('WikiPage.symbols.specialSymbols.number9.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Patterns Section -->
      <section id="patterns" class="section patterns">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.patterns.title') }}</h2>
              <p class="section-subtitle" v-html="$t('WikiPage.patterns.subtitle')"></p>
            </div>

            <div class="patterns-grid">
              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.width.name') }}</h3>
                  <p class="pattern-multiplier">×1.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.width.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.length.name') }}</h3>
                  <p class="pattern-multiplier">×1.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.length.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.diagonal.name') }}</h3>
                  <p class="pattern-multiplier">×1.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.diagonal.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.horizontalL.name') }}</h3>
                  <p class="pattern-multiplier">×2.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.horizontalL.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.horizontalXL.name') }}</h3>
                  <p class="pattern-multiplier">×3.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.horizontalXL.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.zig.name') }}</h3>
                  <p class="pattern-multiplier">×4.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.zig.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.zag.name') }}</h3>
                  <p class="pattern-multiplier">×4.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.zag.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.ground.name') }}</h3>
                  <p class="pattern-multiplier">×7.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.ground.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.heaven.name') }}</h3>
                  <p class="pattern-multiplier">×7.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.heaven.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell empty"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell empty"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.eye.name') }}</h3>
                  <p class="pattern-multiplier">×8.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.eye.description') }}</p>
                </div>
              </div>

              <div class="pattern-card">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                    <div class="pattern-row">
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                      <div class="pattern-cell filled"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ $t('WikiPage.patterns.patternsData.jackpot.name') }}</h3>
                  <p class="pattern-multiplier">×10.0</p>
                  <p class="pattern-description">{{ $t('WikiPage.patterns.patternsData.jackpot.description') }}</p>
                </div>
              </div>
            </div>

            <div class="jackpot-info">
              <h3>{{ $t('WikiPage.patterns.jackpotSystem.title') }}</h3>
              <p>{{ $t('WikiPage.patterns.jackpotSystem.description') }}</p>
              <div class="jackpot-levels">
                <div class="jackpot-level" v-html="$t('WikiPage.patterns.jackpotSystem.levels.level2')"></div>
                <div class="jackpot-level" v-html="$t('WikiPage.patterns.jackpotSystem.levels.level3')"></div>
                <div class="jackpot-level" v-html="$t('WikiPage.patterns.jackpotSystem.levels.level4')"></div>
                <div class="jackpot-level" v-html="$t('WikiPage.patterns.jackpotSystem.levels.level5')"></div>
              </div>
              <p class="jackpot-note">{{ $t('WikiPage.patterns.jackpotSystem.note') }}</p>
            </div>

            <div class="pattern-rules">
              <h3>{{ $t('WikiPage.patterns.calculationRules.title') }}</h3>
              <p>{{ $t('WikiPage.patterns.calculationRules.description') }}</p>
              <div class="pattern-rules-grid">
                <div class="rule-card">
                  <h4>{{ $t('WikiPage.patterns.calculationRules.patternHierarchy.title') }}</h4>
                  <p>{{ $t('WikiPage.patterns.calculationRules.patternHierarchy.description') }}</p>
                  <ul>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule1')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule2')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule3')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule4')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule5')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.patternHierarchy.rules.rule6')"></li>
                  </ul>
                </div>
                
                <div class="rule-card">
                  <h4>{{ $t('WikiPage.patterns.calculationRules.luckSystem.title') }}</h4>
                  <p>{{ $t('WikiPage.patterns.calculationRules.luckSystem.description') }}</p>
                  <ul>
                    <li v-html="$t('WikiPage.patterns.calculationRules.luckSystem.rules.rule1')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.luckSystem.rules.rule2')"></li>
                    <li v-html="$t('WikiPage.patterns.calculationRules.luckSystem.rules.rule3')"></li>
                  </ul>
                  <p>{{ $t('WikiPage.patterns.calculationRules.luckSystem.calculationOrder') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Rarity System Section -->
      <section id="rarity" class="section rarity">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.rarity.title') }}</h2>
              <p class="section-subtitle">{{ $t('WikiPage.rarity.subtitle') }}</p>
            </div>

            <div class="rarity-grid">
              <div class="rarity-card common">
                <div class="rarity-header">
                  <div class="rarity-icon">⚪</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.common.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">100%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.common.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.common.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card uncommon">
                <div class="rarity-header">
                  <div class="rarity-icon">🟢</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.uncommon.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">90%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.uncommon.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.uncommon.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card mildly-rare">
                <div class="rarity-header">
                  <div class="rarity-icon">🟡</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.mildlyRare.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">80%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.mildlyRare.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.mildlyRare.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card rare">
                <div class="rarity-header">
                  <div class="rarity-icon">🟠</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.rare.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">65%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.rare.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.rare.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card very-rare">
                <div class="rarity-header">
                  <div class="rarity-icon">🔴</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.veryRare.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">50%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.veryRare.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.veryRare.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card legendary">
                <div class="rarity-header">
                  <div class="rarity-icon">🟣</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.legendary.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">35%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.legendary.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.legendary.examples') }}</p>
                </div>
              </div>

              <div class="rarity-card ultra-legendary">
                <div class="rarity-header">
                  <div class="rarity-icon">⭐</div>
                  <h3>{{ $t('WikiPage.rarity.rarityLevelsData.ultraLegendary.name') }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">{{ $t('WikiPage.rarity.stats.frequency') }}</span>
                    <span class="stat-value">20%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ $t('WikiPage.rarity.rarityLevelsData.ultraLegendary.description') }}</p>
                <div class="rarity-examples">
                  <h4>{{ $t('WikiPage.rarity.examples') }}</h4>
                  <p>{{ $t('WikiPage.rarity.rarityLevelsData.ultraLegendary.examples') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Phone Calls Section -->
      <section id="phone-calls" class="section phone-calls">
        <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.phoneCalls.title') }}</h2>
              <p class="section-subtitle" v-html="$t('WikiPage.phoneCalls.subtitle')"></p>
            </div>

            <div class="phone-types">
              <div class="phone-type">
                <h3>{{ $t('WikiPage.phoneCalls.regularCalls.title') }}</h3>
                <p>{{ $t('WikiPage.phoneCalls.regularCalls.description') }}</p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example1.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example1.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example1.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example1.rarity') }}</div>
                  </div>
                  
                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example2.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example2.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example2.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example2.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example3.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example3.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example3.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example3.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example4.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example4.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example4.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example4.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example5.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example5.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example5.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example5.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example6.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example6.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example6.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example6.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example7.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example7.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example7.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example7.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example8.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example8.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example8.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example8.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example9.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example9.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example9.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example9.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example10.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example10.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example10.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example10.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example11.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example11.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example11.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example11.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example12.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example12.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example12.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example12.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example13.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example13.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example13.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.regularCalls.example13.rarity') }}</div>
                  </div>
                </div>
              </div>

              <div class="phone-type red-phone">
                <h3>{{ $t('WikiPage.phoneCalls.redCalls.title') }}</h3>
                <p v-html="$t('WikiPage.phoneCalls.redCalls.description')"></p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example1.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example1.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example1.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example1.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example2.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example2.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example2.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example2.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example3.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example3.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example3.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example3.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example4.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example4.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example4.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example4.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example5.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example5.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example5.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example5.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example6.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example6.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example6.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example6.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example7.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example7.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example7.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.redCalls.example7.rarity') }}</div>
                  </div>
                </div>
              </div>

              <div class="phone-type yellow-phone">
                <h3>{{ $t('WikiPage.phoneCalls.yellowCalls.title') }}</h3>
                <p>{{ $t('WikiPage.phoneCalls.yellowCalls.description') }}</p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example1.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example1.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example1.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example1.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example2.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example2.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example2.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example2.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example9.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example9.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example9.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example9.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example10.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example10.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example10.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example10.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example11.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example11.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example11.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example11.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example12.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example12.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example12.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example12.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example13.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example13.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example13.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example13.rarity') }}</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example14.question') }}"</div>
                    <div class="phone-answer">"{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example14.answer') }}"</div>
                    <div class="phone-effect">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example14.effect') }}</div>
                    <div class="phone-rarity">{{ $t('WikiPage.phoneCalls.phoneExamples.yellowCalls.example14.rarity') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Memory Cards Section -->
      <section id="memory-cards" class="section memory-cards">
      <div class="container">
          <div class="section-wrapper">
            <div class="section-header">
              <h2 class="section-title">{{ $t('WikiPage.memoryCards.title') }}</h2>
              <p class="section-subtitle" v-html="$t('WikiPage.memoryCards.subtitle')"></p>
            </div>

            <div class="memory-cards-info">
              <div class="memory-card-feature">
                <h3>{{ $t('WikiPage.memoryCards.howItWorks.title') }}</h3>
                <ul>
                  <li>{{ $t('WikiPage.memoryCards.howItWorks.items.item1') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.howItWorks.items.item2') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.howItWorks.items.item3') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.howItWorks.items.item4') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.howItWorks.items.item5') }}</li>
                </ul>
              </div>

              <div class="memory-card-tips">
                <h3>{{ $t('WikiPage.memoryCards.strategicTips.title') }}</h3>
                <ul>
                  <li>{{ $t('WikiPage.memoryCards.strategicTips.items.item1') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.strategicTips.items.item2') }}</li>
                  <li>{{ $t('WikiPage.memoryCards.strategicTips.items.item3') }}</li>
                </ul>
              </div>
            </div>

            <div class="difficulty-system">
              <h3>{{ $t('WikiPage.memoryCards.difficultySystem.title') }}</h3>
              <p>{{ $t('WikiPage.memoryCards.difficultySystem.description') }}</p>
              
              <div class="difficulty-strategies">
                <h4>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.title') }}</h4>
                <p>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.description') }}</p>
                
                <div class="strategy-examples">
                  <div class="strategy-example">
                    <h5>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.cherryLemonStrategy.title') }}</h5>
                    <p>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.cherryLemonStrategy.description') }}</p>
                  </div>
                  
                  <div class="strategy-example">
                    <h5>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.cloverTicketStrategy.title') }}</h5>
                    <p>{{ $t('WikiPage.memoryCards.difficultySystem.advancedStrategies.cloverTicketStrategy.description') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="endings-system">
              <h3>{{ $t('WikiPage.memoryCards.endingsSystem.title') }}</h3>
              <p v-html="$t('WikiPage.memoryCards.endingsSystem.description')"></p>
              
              <div class="endings-grid">
                <div class="ending-card normal-ending">
                  <h4>{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.title') }}</h4>
                  <div class="ending-requirements">
                    <h5>{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.requirements') }}</h5>
                    <ul>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.items.item1') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.items.item2') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.items.item3') }}</li>
                    </ul>
                  </div>
                  <p class="ending-description">{{ $t('WikiPage.memoryCards.endingsSystem.normalEnding.description') }}</p>
                </div>

                <div class="ending-card true-ending">
                  <h4>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.title') }}</h4>
                  <div class="ending-requirements">
                    <h5>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.requirements') }}</h5>
                    <ul>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.items.item1') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.items.item2') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.items.item3') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.items.item4') }}</li>
                    </ul>
                  </div>
                  <p class="ending-description">{{ $t('WikiPage.memoryCards.endingsSystem.trueEnding.description') }}</p>
                </div>

                <div class="ending-card game-over">
                  <h4>{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.title') }}</h4>
                  <div class="ending-requirements">
                    <h5>{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.conditions') }}</h5>
                    <ul>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.items.item1') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.items.item2') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.items.item3') }}</li>
                    </ul>
                  </div>
                  <p class="ending-description">{{ $t('WikiPage.memoryCards.endingsSystem.gameOver.description') }}</p>
                </div>

                <div class="ending-card demo-ending">
                  <h4>{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.title') }}</h4>
                  <div class="ending-requirements">
                    <h5>{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.demoVersion') }}</h5>
                    <ul>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.items.item1') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.items.item2') }}</li>
                      <li>{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.items.item3') }}</li>
                    </ul>
                  </div>
                  <p class="ending-description">{{ $t('WikiPage.memoryCards.endingsSystem.demoEnding.description') }}</p>
                </div>
              </div>
            </div>

            <div class="charm-system">
              <h3>{{ $t('WikiPage.memoryCards.charmSystem.title') }}</h3>
              <p>{{ $t('WikiPage.memoryCards.charmSystem.description') }}</p>
              
              <div class="charm-mechanics">
                <div class="charm-basics">
                  <h4>{{ $t('WikiPage.memoryCards.charmSystem.basicMechanics.title') }}</h4>
                  <ul>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.basicMechanics.items.item1')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.basicMechanics.items.item2')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.basicMechanics.items.item3')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.basicMechanics.items.item4')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.basicMechanics.items.item5')"></li>
                  </ul>
                </div>

                <div class="charm-synergies">
                  <h4>{{ $t('WikiPage.memoryCards.charmSystem.charmSynergies.title') }}</h4>
                  <p>{{ $t('WikiPage.memoryCards.charmSystem.charmSynergies.description') }}</p>
                  <ul>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.charmSynergies.items.item1')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.charmSynergies.items.item2')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.charmSynergies.items.item3')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.charmSynergies.items.item4')"></li>
                    <li v-html="$t('WikiPage.memoryCards.charmSystem.charmSynergies.items.item5')"></li>
                  </ul>
                </div>

                <div class="charm-advice">
                  <h4>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.title') }}</h4>
                  <ul>
                    <li>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.items.item1') }}</li>
                    <li>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.items.item2') }}</li>
                    <li>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.items.item3') }}</li>
                    <li>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.items.item4') }}</li>
                    <li>{{ $t('WikiPage.memoryCards.charmSystem.charmAdvice.items.item5') }}</li>
                  </ul>
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
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import '@/assets/css/public.css'

// Scroll to section function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

</script>

<style scoped>
/* Base Styles */
.wiki-page {
  background: #1a1a1a;
  color: #ffffff;
}

.wiki-page img{
  max-width: 100%;
  height: auto;
}

/* Section Base */
.section {
  position: relative;
  padding: 80px 0;
  background: #000;
}

.section.hero {
  background-image: url('../../public/images/1.webp');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
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
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

.section.hero .container {
  position: relative;
  z-index: 2;
}

/* Hero Section */
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

/* Navigation */
.wiki-nav {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}

.nav-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 15px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.nav-card:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: #ff6b35;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.nav-card span {
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
}

/* Section Wrapper */
.section-wrapper {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
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

/* Game Info Section */
.game-info {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
}

.game-info .section-wrapper {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.info-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
  transition: width 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.info-card:hover::before {
  width: 8px;
}

.info-card h3 {
  color: #ff6b35;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.info-card p {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.game-overview {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
}

.game-overview h3 {
  color: #ff6b35;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.game-overview p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 20px;
}

.gameplay-mechanics h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.gameplay-mechanics ul {
  color: #ffffff;
  line-height: 1.6;
}

.gameplay-mechanics li {
  margin-bottom: 8px;
}

/* Symbols Section */
.symbols {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%);
}

.symbols .section-wrapper {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.symbols-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.symbol-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.symbol-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
  transition: width 0.3s ease;
}

.symbol-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.symbol-card:hover::before {
  width: 8px;
}

.symbol-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.symbol-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.symbol-header h3 {
  color: #ff6b35;
  font-size: 1.3rem;
  margin: 0;
}

.symbol-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  color: #d1d5db;
  font-size: 0.9rem;
}

.stat-value {
  color: #ffffff;
  font-weight: 600;
}

.symbol-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Special Symbols */
.special-symbols {
  margin-top: 40px;
}

.special-symbols h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
}

.special-symbol-card {
  background: rgba(26, 26, 26, 0.8);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.special-symbol-card.danger {
  border: 2px solid #ff4757;
}

.special-symbol-card.blessing {
  border: 2px solid #4ecdc4;
}

.special-symbol-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
}

/* Patterns Section */
.patterns {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%);
}

.patterns .section-wrapper {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.patterns-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.pattern-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pattern-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
  transition: width 0.3s ease;
}

.pattern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.pattern-card:hover::before {
  width: 8px;
}

.pattern-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.pattern-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  background: #333;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #555;
}

.pattern-row {
  display: contents;
}

.pattern-cell {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  transition: all 0.2s ease;
}

.pattern-cell.filled {
  background: #ff6b35;
  box-shadow: 0 0 5px rgba(255, 107, 53, 0.5);
}

.pattern-cell.empty {
  background: #222;
}

.pattern-info h3 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.pattern-multiplier {
  color: #4ecdc4;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.pattern-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

/* Jackpot Info */
.jackpot-info {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  text-align: center;
}

.jackpot-info h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.jackpot-info p {
  color: #ffffff;
  margin-bottom: 20px;
}

.jackpot-levels {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.jackpot-level {
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 8px;
  padding: 10px 15px;
  color: #ffffff;
  font-weight: 500;
}

.highlight {
  color: #ff6b35;
  font-weight: bold;
}

/* Rarity Section */
.rarity {
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%);
}

.rarity .section-wrapper {
  background: rgba(251, 191, 36, 0.05);
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.rarity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.rarity-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.rarity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #ff6b35, #ff4757);
  transition: width 0.3s ease;
}

.rarity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: #ff6b35;
}

.rarity-card:hover::before {
  width: 8px;
}

.rarity-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.rarity-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.rarity-header h3 {
  color: #ff6b35;
  font-size: 1.1rem;
  margin: 0;
}

.rarity-stats {
  margin-bottom: 15px;
}

.rarity-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.rarity-examples h4 {
  color: #ff6b35;
  font-size: 1rem;
  margin-bottom: 8px;
}

.rarity-examples p {
  color: #d1d5db;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
}

/* Phone Calls Section */
.phone-calls {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
}

.phone-calls .section-wrapper {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.phone-types {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.phone-type {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
}

.phone-type.red-phone {
  border-color: #ff4757;
}

.phone-type.yellow-phone {
  border-color: #4ecdc4;
}

.phone-type h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.phone-type p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 25px;
}

.phone-examples {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.phone-example {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #555;
}

.phone-question {
  color: #ff6b35;
  font-weight: 600;
  margin-bottom: 10px;
  font-style: italic;
}

.phone-answer {
  color: #4ecdc4;
  font-weight: 600;
  margin-bottom: 10px;
}

.phone-effect {
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 500;
}

.phone-rarity {
  color: #d1d5db;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Memory Cards Section */
.memory-cards {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(8, 145, 178, 0.05) 100%);
}

.memory-cards .section-wrapper {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.memory-cards-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.memory-card-feature,
.memory-card-tips {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
}

.memory-card-feature h3,
.memory-card-tips h3 {
  color: #ff6b35;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.memory-card-feature ul,
.memory-card-tips ul {
  color: #ffffff;
  line-height: 1.6;
}

.memory-card-feature li,
.memory-card-tips li {
  margin-bottom: 10px;
}

/* Game Characteristics Section */
.game-characteristics {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  margin-top: 40px;
}

.game-characteristics h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.game-characteristics p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 20px;
}

.deadline-mechanics,
.slot-machine-mechanics,
.atm-system {
  margin-bottom: 30px;
}

.deadline-mechanics h4,
.slot-machine-mechanics h4,
.atm-system h4 {
  color: #ff6b35;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.deadline-mechanics ul {
  color: #ffffff;
  line-height: 1.6;
}

.deadline-mechanics li {
  margin-bottom: 10px;
}

.release-info {
  background: rgba(255, 107, 53, 0.1);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid rgba(255, 107, 53, 0.3);
  margin: 20px 0;
}

.release-info h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* Pattern Rules Section */
.pattern-rules {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  margin-top: 40px;
}

.pattern-rules h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 25px;
}

.pattern-rules-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.rule-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #555;
}

.rule-card h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.rule-card p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 15px;
}

.rule-card ul {
  color: #ffffff;
  line-height: 1.6;
}

.rule-card li {
  margin-bottom: 8px;
}

.jackpot-note {
  color: #d1d5db;
  font-style: italic;
  margin-top: 15px;
}

/* Difficulty System */
.difficulty-system {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  margin-top: 40px;
}

.difficulty-system h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.difficulty-system p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 25px;
}

.difficulty-strategies h4 {
  color: #ff6b35;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.strategy-examples {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.strategy-example {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #555;
}

.strategy-example h5 {
  color: #4ecdc4;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.strategy-example p {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
}

/* Symbol Warning */
.symbol-warning {
  background: rgba(220, 38, 38, 0.1);
  border-radius: 8px;
  padding: 15px;
  border: 1px solid rgba(220, 38, 38, 0.3);
  margin-top: 15px;
}

.symbol-warning h4 {
  color: #ef4444;
  font-size: 1rem;
  margin-bottom: 10px;
}

.symbol-warning p {
  color: #ffffff;
  line-height: 1.5;
  margin: 0;
}

/* Endings System */
.endings-system {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  margin-top: 40px;
}

.endings-system h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 25px;
}

.endings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.ending-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #555;
  transition: all 0.3s ease;
}

.ending-card:hover {
  border-color: #ff6b35;
  box-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
}

.ending-card.normal-ending {
  border-left: 4px solid #10b981;
}

.ending-card.true-ending {
  border-left: 4px solid #f59e0b;
}

.ending-card.game-over {
  border-left: 4px solid #ef4444;
}

.ending-card.demo-ending {
  border-left: 4px solid #8b5cf6;
}

.ending-card h4 {
  color: #ff6b35;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.ending-requirements {
  margin-bottom: 15px;
}

.ending-requirements h5 {
  color: #4ecdc4;
  font-size: 1rem;
  margin-bottom: 10px;
}

.ending-requirements ul {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.ending-requirements li {
  margin-bottom: 5px;
}

.ending-description {
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
}

/* Charm System */
.charm-system {
  background: rgba(26, 26, 26, 0.6);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #444;
  margin-top: 40px;
}

.charm-system h3 {
  color: #ff6b35;
  font-size: 1.8rem;
  margin-bottom: 25px;
}

.charm-mechanics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.charm-basics,
.charm-synergies,
.charm-advice {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #555;
}

.charm-basics h4,
.charm-synergies h4,
.charm-advice h4 {
  color: #ff6b35;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.charm-basics ul,
.charm-synergies ul,
.charm-advice ul {
  color: #ffffff;
  line-height: 1.6;
}

.charm-basics li,
.charm-synergies li,
.charm-advice li {
  margin-bottom: 10px;
}

.charm-synergies p {
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .symbols-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .patterns-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .rarity-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .memory-cards-info {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .pattern-rules-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .endings-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .charm-mechanics {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .wiki-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .nav-card {
    padding: 10px 5px;
  }
  
  .nav-card span {
    font-size: 0.8rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .symbols-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .patterns-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .rarity-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .phone-examples {
    gap: 15px;
  }
  
  .jackpot-levels {
    gap: 8px;
  }
  
  .pattern-grid {
    gap: 1px;
  }
  
  .pattern-cell {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .section-wrapper {
    padding: 20px;
  }
  
  .hero-wrapper {
    padding: 20px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .info-card,
  .symbol-card,
  .pattern-card,
  .rarity-card {
    padding: 15px;
  }
  
  .phone-type {
    padding: 20px;
  }
  
  .memory-card-feature,
  .memory-card-tips {
    padding: 20px;
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
