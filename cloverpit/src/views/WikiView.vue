<template>
  <div class="wiki-page">
    <AppHeader />
    
    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
      <div class="container">
          <div class="hero-wrapper">
            <h1 class="hero-title">CloverPit Wiki</h1>
            <p class="hero-description">Complete CloverPit Wiki database of CloverPit game mechanics, symbols, patterns, and strategies. This comprehensive CloverPit Wiki provides detailed information about CloverPit gameplay, CloverPit strategies, and CloverPit mechanics for all CloverPit players.</p>
            
            <!-- Quick Navigation -->
            <div class="wiki-nav">
              <div class="nav-card" @click="scrollToSection('game-info')">
                <span>CloverPit Game Info</span>
          </div>
              <div class="nav-card" @click="scrollToSection('symbols')">
                <span>CloverPit Symbols</span>
        </div>
              <div class="nav-card" @click="scrollToSection('patterns')">
                <span>CloverPit Patterns</span>
      </div>
              <div class="nav-card" @click="scrollToSection('rarity')">
                <span>CloverPit Rarity</span>
              </div>
              <div class="nav-card" @click="scrollToSection('phone-calls')">
                <span>CloverPit Phone Calls</span>
              </div>
              <div class="nav-card" @click="scrollToSection('memory-cards')">
                <span>CloverPit Memory Cards</span>
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
              <h2 class="section-title">CloverPit Game Information</h2>
              <p class="section-subtitle">Essential CloverPit Wiki details about CloverPit: The Descent</p>
            </div>

            <div class="game-overview">
              <h3>CloverPit Wiki Game Overview</h3>
              <p><strong>"LET'S GO GAMBLING - Now, let's roll"</strong> - CloverPit is a thrilling slot machine roguelike developed by Panik Arcade, an Italian indie studio. This CloverPit Wiki covers all aspects of CloverPit gameplay. Players must survive in a cell with a slot machine and ATM, earning coins through gambling to meet increasingly difficult quotas. The CloverPit Wiki documents over 150 unique charms, phone call systems, and various endings based on player choices.</p>
              
              <p>CloverPit presents a unique blend of horror, gambling mechanics, and strategic gameplay that challenges players to master both luck and skill. This comprehensive CloverPit Wiki explores the game's atmospheric design that creates an immersive experience where every spin of the slot machine could mean the difference between survival and death. With its deep progression systems and multiple endings, CloverPit offers hours of replayability for those brave enough to face the cursed machine, and this CloverPit Wiki provides essential guidance for success.</p>
              
              <div class="release-info">
                <h4>CloverPit Wiki Release Information</h4>
                <p>The CloverPit DEMO version was released free of charge on Steam on April 10, 2025, with the official CloverPit release date on September 27, 2025. This CloverPit Wiki tracks the complete development timeline. Originally scheduled for September 3, 2025, the CloverPit Steam release was postponed due to the launch of HOLLOW KNIGHT: Silksong on the same day. The CloverPit Steam version has received positive reception from players who appreciate its unique take on the roguelike genre and innovative slot machine mechanics. Steam Clover Pit offers the complete gaming experience with full access to all CloverPit features and endings, and this CloverPit Wiki provides comprehensive coverage of all CloverPit content.</p>
              </div>
              
              <div class="gameplay-mechanics">
                <h4>CloverPit Wiki Core Gameplay</h4>
                <ul>
                  <li>Survive by meeting coin quotas within deadlines</li>
                  <li>Use charms and phone upgrades to enhance slot machine performance</li>
                  <li>Manage tickets as currency for purchasing charms</li>
                  <li>Face exponential difficulty scaling as quotas increase</li>
                  <li>Discover multiple endings based on strategic choices</li>
                </ul>
                <p>The CloverPit game's core loop revolves around the tension between risk and reward. This CloverPit Wiki explains how players must balance immediate survival needs with long-term strategic planning, making each decision crucial to their success. The slot machine serves as both your salvation and your potential downfall, requiring careful management of resources and timing. This CloverPit Wiki provides detailed strategies for mastering these CloverPit mechanics.</p>
              </div>
            </div>

            <div class="info-grid">
              <div class="info-card">
                <h3>Development</h3>
                <p>Panik Arcade</p>
              </div>
              <div class="info-card">
                <h3>Publisher</h3>
                <p>Future Friends Games</p>
              </div>
              <div class="info-card">
                <h3>Platform</h3>
                <p>Microsoft Windows</p>
              </div>
              <div class="info-card">
                <h3>Distribution</h3>
                <p>CloverPit Steam</p>
              </div>
              <div class="info-card">
                <h3>Genre</h3>
                <p>Roguelike, Strategy, Gambling</p>
              </div>
              <div class="info-card">
                <h3>CloverPit Release Date</h3>
                <p>Early Access: April 10, 2025<br>Full CloverPit Release: September 27, 2025</p>
              </div>
              <div class="info-card">
                <h3>Engine</h3>
                <p>Unity</p>
              </div>
              <div class="info-card">
                <h3>Language Support</h3>
                <p>Korean subtitles supported</p>
              </div>
            </div>

            <div class="game-characteristics">
              <h3>Game Characteristics</h3>
              <p>The goal is to earn money through gambling in a cell with a slot machine and deposit the quota into an ATM. However, as the game progresses, the required quota increases exponentially compared to the basic allowance multiplier, making it impossible to beat by simply playing a slot machine endlessly.</p>
              
              <p>CloverPit's unique design philosophy combines elements of psychological horror with strategic gameplay. The game creates an atmosphere of isolation and desperation, where players must rely on their wits and luck to survive. The slot machine itself becomes a character in the story, representing both opportunity and danger. The game's difficulty curve is carefully designed to create tension while still allowing for strategic mastery.</p>
              
              <div class="deadline-mechanics">
                <h4>Deadline System</h4>
                <p>If you do not deposit a certain amount of coins before passing the deadline by proceeding with the basic 3 rounds per deadline, the floor under your feet will open and you will fall to your death, ending the game. Players must match the amount by combining various items and increasing the multiples of symbols and arrangements.</p>
                <ul>
                  <li><strong>Demo Version:</strong> Fixed deadline at the 5th round (12,500 coins)</li>
                  <li><strong>Official Release:</strong> Amount gradually increases in stages</li>
                  <li><strong>Early Access:</strong> Game ends after clearing the 5th deadline</li>
                  <li><strong>Full Release:</strong> Obtain the Bloody Skull Key and escape (minimum unlockable at 9th deadline)</li>
                </ul>
              </div>

              <div class="slot-machine-mechanics">
                <h4>Slot Machine Mechanics</h4>
                <p>The slot machine requires a small amount of coins to operate. When you have enough money, it's fixed to at least 3 times or up to 7 times. If you have insufficient funds, the number of spins is reduced according to your available amount, and if you have less than the minimum required, you get one free spin opportunity.</p>
                <p>When you reach the current maximum spin count, it resets to one minimum spin and awards two clover tickets.</p>
              </div>

              <div class="atm-system">
                <h4>ATM System</h4>
                <p>The ATM displays the coin amount needed to be earned by the deadline and shows how much has been deposited so far. It provides interest according to the deposited coins, creating an additional incentive for early deposits.</p>
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
              <h2 class="section-title">CloverPit Wiki Slot Machine Symbols</h2>
              <p class="section-subtitle">This CloverPit Wiki section covers understanding CloverPit symbol values, probabilities, and strategic importance</p>
            </div>

            <div class="symbols-grid">
              <div class="symbol-card" v-for="symbol in symbols" :key="symbol.name" :class="symbol.rarity">
                <div class="symbol-header">
                  <div class="symbol-icon">{{ symbol.icon }}</div>
                  <h3>{{ symbol.name }}</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">Value:</span>
                    <span class="stat-value">{{ symbol.value }}</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Probability:</span>
                    <span class="stat-value">{{ symbol.probability }}%</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Weight:</span>
                    <span class="stat-value">{{ symbol.weight }}</span>
                  </div>
                </div>
                <p class="symbol-description">{{ symbol.description }}</p>
              </div>
            </div>

            <div class="special-symbols">
              <h3>CloverPit Wiki Special Symbols</h3>
              <p>This CloverPit Wiki section details the most important special symbols in CloverPit, including CloverPit 666 and CloverPit 999 mechanics.</p>
              <div class="special-symbol-card danger">
                <div class="symbol-header">
                  <div class="symbol-icon">6</div>
                  <h3>Number 6 (CloverPit 666)</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">Probability:</span>
                    <span class="stat-value">1.5% (Demo: up to 7%)</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Effect:</span>
                    <span class="stat-value">Lose all coins in round</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Defense:</span>
                    <span class="stat-value">Bible or Rosary charms</span>
                  </div>
                </div>
                <p class="symbol-description">The most dangerous symbol with 1.5% probability (increased to 7% in demo based on progress). When three 6s align, you lose all coins earned in the current round. Can be defended with Bible or Rosary charms. When CloverPit 666 is activated, incoming calls become red phone calls. In official release, activating CloverPit 666 adds corpse charms to the drawer and creates strategic CloverPit 666 deck options. Essential for achieving the true CloverPit ending - you must answer red phone calls 3 times.</p>
                
                <div class="symbol-warning">
                  <h4>⚠️ Warning</h4>
                  <p>CloverPit 666 hitting in the last slot of the last round has a high risk of game over due to failure to settle the score. Even when using CloverPit 666 decks strategically, it remains a trap symbol that should never appear in normal CloverPit decks.</p>
                </div>
              </div>

              <div class="special-symbol-card blessing">
                <div class="symbol-header">
                  <div class="symbol-icon">9</div>
                  <h3>Number 9 (CloverPit 999)</h3>
                </div>
                <div class="symbol-stats">
                  <div class="stat">
                    <span class="stat-label">Unlock Conditions:</span>
                    <span class="stat-value">Complete normal ending + Skip 3 red calls</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Effect:</span>
                    <span class="stat-value">Gain all coins in round</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Special:</span>
                    <span class="stat-value">Transforms phone to yellow options</span>
                  </div>
                </div>
                <p class="symbol-description">Hidden symbol with unprecedented effects. Unlock requires: 1) Complete normal ending at least once, 2) Skip red phone calls from deadline #3 onwards (visible as CloverPit 666 floppy disks above slot machine), 3) Skip red phone calls 3 times total. When unlocked, 6 symbols are automatically replaced with 9s when spins stop. CloverPit 999 grants all coins from other symbols in the round and activates all CloverPit 666 charms. Transforms future phone calls to beneficial yellow options. Changes blood-red key to white skull key for complete CloverPit ending.</p>
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
              <h2 class="section-title">CloverPit Wiki Pattern System</h2>
              <p class="section-subtitle">This CloverPit Wiki explains CloverPit slot machine patterns and their multipliers</p>
            </div>

            <div class="patterns-grid">
              <div class="pattern-card" v-for="pattern in patterns" :key="pattern.name">
                <div class="pattern-visual">
                  <div class="pattern-grid">
                    <div v-for="(row, rowIndex) in pattern.layout" :key="rowIndex" class="pattern-row">
                      <div v-for="(cell, cellIndex) in row" :key="cellIndex" :class="['pattern-cell', cell ? 'filled' : 'empty']"></div>
                    </div>
                  </div>
                </div>
                <div class="pattern-info">
                  <h3>{{ pattern.name }}</h3>
                  <p class="pattern-multiplier">×{{ pattern.multiplier }}</p>
                  <p class="pattern-description">{{ pattern.description }}</p>
                </div>
              </div>
            </div>

            <div class="jackpot-info">
              <h3>CloverPit Wiki Jackpot System</h3>
              <p>This CloverPit Wiki documents that when multiple jackpots are triggered through charm effects, they receive special names:</p>
              <div class="jackpot-levels">
                <div class="jackpot-level">2nd Jackpot: <span class="highlight">SUPER JACKPOT</span></div>
                <div class="jackpot-level">3rd Jackpot: <span class="highlight">MEGA JACKPOT</span></div>
                <div class="jackpot-level">4th Jackpot: <span class="highlight">ULTRA JACKPOT</span></div>
                <div class="jackpot-level">5th Jackpot: <span class="highlight">ULTIMATE JACKPOT</span></div>
              </div>
              <p class="jackpot-note">Only the wording is different, but the rewards are all the same as the basic jackpot.</p>
            </div>

            <div class="pattern-rules">
              <h3>CloverPit Wiki Pattern Calculation Rules</h3>
              <p>This CloverPit Wiki section explains the complex pattern calculation rules that govern CloverPit gameplay mechanics.</p>
              <div class="pattern-rules-grid">
                <div class="rule-card">
                  <h4>Pattern Hierarchy</h4>
                  <p>The lower pattern implied in a higher rating pattern is not calculated:</p>
                  <ul>
                    <li><strong>Horizontal-L:</strong> Horizontal pattern is not calculated</li>
                    <li><strong>Horizontal-XL:</strong> Horizontal-L and horizontal patterns are not calculated</li>
                    <li><strong>Zig, Zag:</strong> Diagonal pattern is not calculated</li>
                    <li><strong>Ground, Heaven:</strong> Ground doesn't activate Zig and Horizontal-XL (3 rows). Heaven doesn't activate Zag and Horizontal-XL (1 row)</li>
                    <li><strong>Eye:</strong> Lines 2 and 4 vertical patterns are not calculated</li>
                    <li><strong>Jackpot:</strong> Separate from all other patterns</li>
                  </ul>
                </div>
                
                <div class="rule-card">
                  <h4>Luck System</h4>
                  <p>Pattern appearance is determined by luck value:</p>
                  <ul>
                    <li><strong>Luck 0:</strong> Patterns appear randomly with probability per symbol weight</li>
                    <li><strong>Luck > 0:</strong> Probability determined by luck value</li>
                    <li><strong>Luck ≥ 15:</strong> Guaranteed jackpot (excluding symbol 6)</li>
                  </ul>
                  <p>Calculation order: Luck probability → Pattern establishment → Symbol determination (proportional to weight)</p>
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
              <h2 class="section-title">CloverPit Wiki Rarity System</h2>
              <p class="section-subtitle">This CloverPit Wiki covers CloverPit charm and phone call rarity levels</p>
            </div>

            <div class="rarity-grid">
              <div class="rarity-card" v-for="rarity in rarityLevels" :key="rarity.name" :class="rarity.name.toLowerCase().replace(' ', '-')">
                <div class="rarity-header">
                  <div class="rarity-icon">{{ rarity.icon }}</div>
                  <h3>{{ rarity.name }}</h3>
                </div>
                <div class="rarity-stats">
                  <div class="stat">
                    <span class="stat-label">Frequency:</span>
                    <span class="stat-value">{{ rarity.frequency }}%</span>
                  </div>
                </div>
                <p class="rarity-description">{{ rarity.description }}</p>
                <div class="rarity-examples">
                  <h4>Examples:</h4>
                  <p>{{ rarity.examples }}</p>
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
              <h2 class="section-title">CloverPit Wiki Phone Call System</h2>
              <p class="section-subtitle">This CloverPit Wiki explores mysterious CloverPit phone calls that provide buffs and strategic options</p>
            </div>

            <div class="phone-types">
              <div class="phone-type">
                <h3>CloverPit Wiki Regular Phone Calls</h3>
                <p>This CloverPit Wiki section covers standard phone calls that provide various beneficial effects. Characterized by sarcastic or rebellious dialogue addressing gambling addiction.</p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"How is it going?"</div>
                    <div class="phone-answer">"Don't throw away my stuff!"</div>
                    <div class="phone-effect">Permanently increases charm space by 1</div>
                    <div class="phone-rarity">UNCOMMON (Max: 1)</div>
                  </div>
                  
                  <div class="phone-example">
                    <div class="phone-question">"Can you lend me some money?"</div>
                    <div class="phone-answer">"Why should I do that?"</div>
                    <div class="phone-effect">+5 Tickets</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I can't quit right now!"</div>
                    <div class="phone-answer">"That's not really surprising!"</div>
                    <div class="phone-effect">Jackpot value doubles</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Can I eat some?"</div>
                    <div class="phone-answer">"You don't even have money to buy food!"</div>
                    <div class="phone-effect">Store charms discounted by 2 tickets until next restock</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I need nutritional supplements"</div>
                    <div class="phone-answer">"Not surprising! You can't live by just drinking drinks..."</div>
                    <div class="phone-effect">Lemon and cherry values doubled permanently</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I think I'm lucky!"</div>
                    <div class="phone-answer">"You are truly delusional. Isn't it?"</div>
                    <div class="phone-effect">Clover and bell values doubled permanently</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"This time, green/yellow/orange"</div>
                    <div class="phone-answer">"Are you betting on color now? I don't care if it's yellow, orange, green."</div>
                    <div class="phone-effect">Add nurses/aspirations/ambition characteristics to one random charm</div>
                    <div class="phone-rarity">RARE/ULTRA RARE/LEGENDARY (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"If you keep going, the pattern will be matched!"</div>
                    <div class="phone-answer">"Don't translate the thoughts in your head into reality!"</div>
                    <div class="phone-effect">Add obsessive compulsive characteristics to one random charm</div>
                    <div class="phone-rarity">LEGENDARY (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"It's a little fun!"</div>
                    <div class="phone-answer">"Is it still fun...?"</div>
                    <div class="phone-effect">Add game characteristics to one random charm</div>
                    <div class="phone-rarity">RARE (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Obviously, the value will rise"</div>
                    <div class="phone-answer">"It's a gamble with your future!"</div>
                    <div class="phone-effect">Add speculation characteristics to one random charm</div>
                    <div class="phone-rarity">ULTRA RARE (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Can you give me some energy drinks?"</div>
                    <div class="phone-answer">"For you, caffeine addiction is probably the least of your problems..."</div>
                    <div class="phone-effect">Restore all charging of all charms with red button</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I'm thinking of some strategies!"</div>
                    <div class="phone-answer">"Uh... try your best!"</div>
                    <div class="phone-effect">Increase value of patterns with 3 or less symbols by default value</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I found out the victory strategy!"</div>
                    <div class="phone-answer">"If it works right..."</div>
                    <div class="phone-effect">Increase value of patterns with four or more symbols</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
                  </div>
                </div>
              </div>

              <div class="phone-type red-phone">
                <h3>Red Phone Calls</h3>
                <p>High-risk, high-reward phone calls that appear on deadlines 3 and 7, or after 666 activation. Provides answers that encourage continued gambling.</p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"I want to have fun?"</div>
                    <div class="phone-answer">"My head hurts!"</div>
                    <div class="phone-effect">Get both options, then apply deception characteristic to one random charm</div>
                    <div class="phone-rarity">ULTRA RARE (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"The price doesn't matter!"</div>
                    <div class="phone-answer">"Wear two random charms for free in the store. Set the ticket to 0."</div>
                    <div class="phone-effect">Get two random charms for free, tickets set to 0</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Give me my money!"</div>
                    <div class="phone-answer">"Set the coin twice, initialize the clover ticket to 0."</div>
                    <div class="phone-effect">Double coins, set tickets to 0</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Cryptocurrency is good!"</div>
                    <div class="phone-answer">"Those tickets will go up in value! It just takes some time!"</div>
                    <div class="phone-effect">Clover tickets doubled, coins set to 0</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"There is nothing to eat except mold"</div>
                    <div class="phone-answer">"So? Isn't it edible?"</div>
                    <div class="phone-effect">Lemon and cherry probability permanently reduced, then add deception to one charm</div>
                    <div class="phone-rarity">ULTRA RARE (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Wait a minute, what day is it today?!"</div>
                    <div class="phone-answer">"Clover, the probability of serving is permanently reduced by half."</div>
                    <div class="phone-effect">Clover probability reduced by half</div>
                    <div class="phone-rarity">RARE (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I already walked everything!"</div>
                    <div class="phone-answer">"The probability of diamonds, coins, and seven decreases in half."</div>
                    <div class="phone-effect">Diamond, treasure, and seven probability reduced by half</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
                  </div>
                </div>
              </div>

              <div class="phone-type yellow-phone">
                <h3>Yellow Phone Calls</h3>
                <p>Exclusive positive phone calls unlocked by skipping 3 red phone calls. All options provide beneficial effects and unlock special content.</p>
                
                <div class="phone-examples">
                  <div class="phone-example">
                    <div class="phone-question">"I'm trying to get my mind back together!"</div>
                    <div class="phone-answer">"It's off to a good start!"</div>
                    <div class="phone-effect">Symbol multiplier +3</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I see a pattern in my behavior too."</div>
                    <div class="phone-answer">"Taking the first step is the hardest!"</div>
                    <div class="phone-effect">Pattern multiplier +1</div>
                    <div class="phone-rarity">COMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I have more energy these days."</div>
                    <div class="phone-answer">"That's good news!"</div>
                    <div class="phone-effect">Restore all red button charms, reduce charging consumption permanently (min 1)</div>
                    <div class="phone-rarity">RARE (Max: 2)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"Help!"</div>
                    <div class="phone-answer">"I'm listening!"</div>
                    <div class="phone-effect">Create Holy Spirit charm on table, reduce coins by half</div>
                    <div class="phone-rarity">LEGENDARY (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I need to heal myself first."</div>
                    <div class="phone-answer">"It's right to think that way!"</div>
                    <div class="phone-effect">Modify all charms in store and make one free</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I'm working with a consistent attitude right now!"</div>
                    <div class="phone-answer">"You will understand naturally as time goes by!"</div>
                    <div class="phone-effect">Permit pattern activated once more</div>
                    <div class="phone-rarity">LEGENDARY (Max: 1)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I'd like to take care of some issues."</div>
                    <div class="phone-answer">"Just take it one step at a time!"</div>
                    <div class="phone-effect">Value of patterns with less than 3 symbols doubled</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
                  </div>

                  <div class="phone-example">
                    <div class="phone-question">"I will take back control of my life."</div>
                    <div class="phone-answer">"Give it a try! Good, right?"</div>
                    <div class="phone-effect">Value of patterns with four or more symbols doubled</div>
                    <div class="phone-rarity">UNCOMMON (∞)</div>
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
              <h2 class="section-title">Memory Cards</h2>
              <p class="section-subtitle">New feature in the official release</p>
            </div>

            <div class="memory-cards-info">
              <div class="memory-card-feature">
                <h3>How Memory Cards Work</h3>
                <ul>
                  <li>Memory card packs float on the store ceiling after drawer release</li>
                  <li>Available when transitioning between deadlines</li>
                  <li>Each pack contains 3 memory cards</li>
                  <li>Pack rewards increase with each game condition met</li>
                  <li>Can be used to apply special rules to new games</li>
                </ul>
              </div>

              <div class="memory-card-tips">
                <h3>Strategic Tips</h3>
                <ul>
                  <li>Maintain phone chances and lucky enemies before collecting packs</li>
                  <li>Memory cards can significantly alter game difficulty and mechanics</li>
                  <li>Choose carefully which cards to use for optimal gameplay</li>
                </ul>
              </div>
            </div>

            <div class="difficulty-system">
              <h3>Difficulty System</h3>
              <p>Naturally, the game is quite difficult, with deadlines divided according to luck and mechanisms that don't guarantee minimum combos depending on the deck, even if jackpots burst.</p>
              
              <div class="difficulty-strategies">
                <h4>Advanced Strategies</h4>
                <p>Once you get used to the game, you can increase the odds and multipliers of specific symbols by combining items and phone messages:</p>
                
                <div class="strategy-examples">
                  <div class="strategy-example">
                    <h5>Cherry & Lemon Strategy</h5>
                    <p>Typical items related to cherries and lemons, which are the most common and often ignored by first-timers due to their low rewards, can be combined with items like pentacles, mushrooms, and stains. When combined properly, the money received increases exponentially with each spin, easily reaching billions in reserves by the end.</p>
                  </div>
                  
                  <div class="strategy-example">
                    <h5>Clover Ticket Strategy</h5>
                    <p>If you match clover ticket-related items well, it's not about item purchases, but the more you collect, the more you can spin. You can see that it continues to increase and the multipliers jump proportionally to the amount held.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="endings-system">
              <h3>CloverPit Wiki Game Endings System</h3>
              <p>This CloverPit Wiki documents that CloverPit features multiple CloverPit endings based on player choices and strategic decisions throughout the CloverPit game. The CloverPit Wiki provides comprehensive coverage of all ending paths.</p>
              
              <div class="endings-grid">
                <div class="ending-card normal-ending">
                  <h4>Normal Ending</h4>
                  <div class="ending-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>Complete the game by meeting all deadlines</li>
                      <li>Obtain the Bloody Skull Key</li>
                      <li>Escape from the cell (minimum unlockable at 9th deadline)</li>
                    </ul>
                  </div>
                  <p class="ending-description">The standard ending where you successfully escape from the cursed slot machine cell. This ending unlocks the ability to access the true ending path.</p>
                </div>

                <div class="ending-card true-ending">
                  <h4>True Ending</h4>
                  <div class="ending-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>Complete normal ending at least once</li>
                      <li>Skip red phone calls 3 times total</li>
                      <li>Unlock the CloverPit 999 symbol system</li>
                      <li>Obtain the White Skull Key instead of Bloody Skull Key</li>
                    </ul>
                  </div>
                  <p class="ending-description">The complete CloverPit ending where you transcend the cursed system entirely. Unlocks the CloverPit 999 symbol and transforms all phone calls to beneficial yellow options. Changes the final key from blood-red to white skull.</p>
                </div>

                <div class="ending-card game-over">
                  <h4>Game Over</h4>
                  <div class="ending-requirements">
                    <h5>Conditions:</h5>
                    <ul>
                      <li>Fail to meet coin quota by deadline</li>
                      <li>The floor opens and you fall to your death</li>
                      <li>Message: "You're dead"</li>
                    </ul>
                  </div>
                  <p class="ending-description">The standard failure state. However, each death unlocks meta-progression content and brings you closer to understanding the game's deeper mechanics.</p>
                </div>

                <div class="ending-card demo-ending">
                  <h4>Demo Ending</h4>
                  <div class="ending-requirements">
                    <h5>Demo Version:</h5>
                    <ul>
                      <li>Clear the game by the 5th deadline (12,500 coins)</li>
                      <li>Receive reward and game ends</li>
                      <li>Message: "You won"</li>
                    </ul>
                  </div>
                  <p class="ending-description">The simplified ending available in the demo version. Fixed deadline at the 5th round with a straightforward victory condition.</p>
                </div>
              </div>
            </div>

            <div class="charm-system">
              <h3>CloverPit Wiki Charm System</h3>
              <p>This CloverPit Wiki explains that the CloverPit charm system is the core of CloverPit's strategic gameplay, featuring over 150 unique CloverPit charms with various effects and synergies. The CloverPit Wiki provides detailed information about charm mechanics and strategies.</p>
              
              <div class="charm-mechanics">
                <div class="charm-basics">
                  <h4>Basic Charm Mechanics</h4>
                  <ul>
                    <li><strong>Charm Capacity:</strong> Players can possess up to 7 charms by default</li>
                    <li><strong>Purchase Currency:</strong> Clover Tickets are used to buy charms from vending machines</li>
                    <li><strong>Charm Shop:</strong> 4 random charms available with restock button</li>
                    <li><strong>Capacity Modifiers:</strong> Certain charms or phone calls can increase/decrease capacity</li>
                    <li><strong>Characteristics:</strong> Charms can gain special characteristics through phone calls</li>
                  </ul>
                </div>

                <div class="charm-synergies">
                  <h4>Charm Synergies</h4>
                  <p>Charms work best when combined strategically:</p>
                  <ul>
                    <li><strong>Economy Charms:</strong> Boost coin generation and ticket income</li>
                    <li><strong>Symbol Enhancement:</strong> Increase specific symbol values or probabilities</li>
                    <li><strong>Pattern Amplification:</strong> Enhance pattern multipliers and jackpot values</li>
                    <li><strong>Utility Effects:</strong> Provide defensive options like Bible/Rosary for 666 protection</li>
                    <li><strong>Meta Effects:</strong> Influence luck, spin counts, and game mechanics</li>
                  </ul>
                </div>

                <div class="charm-advice">
                  <h4>Charm Selection Advice</h4>
                  <ul>
                    <li>Start with economy-focused charms for early game stability</li>
                    <li>Build synergies around 2-3 core symbols rather than spreading too thin</li>
                    <li>Consider phone call characteristics when planning charm combinations</li>
                    <li>Save tickets for premium vending machines with better charm selection</li>
                    <li>Adapt your strategy based on available charms rather than forcing specific builds</li>
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

// Symbols data
const symbols = ref([
  {
    name: 'Cherry',
    icon: '🍒',
    value: 'Φ ×2',
    probability: '19.4',
    weight: '1.3',
    rarity: 'common',
    description: 'The most common CloverPit symbol with 19.4% probability according to this CloverPit Wiki. If you get a golden variant early, the price increases rapidly, making it quite effective in CloverPit. This CloverPit Wiki notes that golden variant efficiency is lower in the second half. Used in stock decks and tarot decks using repeated occurrences and batteries rather than increasing the symbol value itself by utilizing high early probability. This CloverPit Wiki recommends this as a stable CloverPit symbol for beginners.'
  },
  {
    name: 'Lemon',
    icon: '🍋',
    value: 'Φ ×2',
    probability: '19.4',
    weight: '1.3',
    rarity: 'common',
    description: 'Another most common CloverPit symbol with 19.4% probability as documented in this CloverPit Wiki. Works excellently with cherry-based strategies and provides consistent early CloverPit game income. This CloverPit Wiki explains that lemon is similar to cherry in that golden variants are highly effective early but lose efficiency in later CloverPit rounds.'
  },
  {
    name: 'Clover',
    icon: '🍀',
    value: 'Φ ×3',
    probability: '14.9',
    weight: '1.0',
    rarity: 'uncommon',
    description: 'CloverPit symbol with about 14.9% probability according to this CloverPit Wiki. The probability is somewhat ambiguous, making it strangely popular, but this CloverPit Wiki notes it\'s actually not bad if golden variants are picked up well early. In the official CloverPit edition, many effects linked to clover tickets around the CloverPit Symbol have been added, along with additional decks and Ticketer decks as documented in this CloverPit Wiki.'
  },
  {
    name: 'Bell',
    icon: '🔔',
    value: 'Φ ×3',
    probability: '14.9',
    weight: '1.0',
    rarity: 'uncommon',
    description: 'Similar to clover in value and probability in CloverPit. Often paired with other symbols in multi-symbol CloverPit strategies. The bell symbol represents good fortune and is commonly used in combination with other moderate-value CloverPit symbols.'
  },
  {
    name: 'Diamond',
    icon: '💎',
    value: 'Φ ×5',
    probability: '11.9',
    weight: '0.8',
    rarity: 'rare',
    description: 'Higher value CloverPit symbol with 11.9% probability, similar to Seven but with different value and probability. Phone choices may affect all CloverPit symbols including Seven. In the official CloverPit release version, this symbol maintains its high value and strategic importance.'
  },
  {
    name: 'Treasure',
    icon: '💰',
    value: 'Φ ×5',
    probability: '11.9',
    weight: '0.8',
    rarity: 'rare',
    description: 'Formerly called "Coin", now "Treasure" in the official CloverPit version. High value makes it worth building CloverPit strategies around. Similar to Diamond in value and probability, this CloverPit symbol represents accumulated wealth and is excellent for late-game CloverPit strategies.'
  },
  {
    name: 'Seven',
    icon: '7',
    value: 'Φ ×7',
    probability: '7.5',
    weight: '0.5',
    rarity: 'very-rare',
    description: 'CloverPit symbol with the lowest probability at 7.5%. Previously intertwined with diamonds and coins, but in the official CloverPit version, several options that assist Seven through telephone or talismans are treated separately. It\'s the best CloverPit symbol to aim for maximum value, but if you get buried too early, it\'s difficult to pass the early CloverPit stages.'
  }
])

// Patterns data with visual layouts
const patterns = ref([
  {
    name: 'Width',
    multiplier: '1.0',
    layout: [
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, false, false, false, false]
    ],
    description: 'Basic horizontal line pattern'
  },
  {
    name: 'Length',
    multiplier: '1.0',
    layout: [
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false]
    ],
    description: 'Basic vertical line pattern'
  },
  {
    name: 'Diagonal',
    multiplier: '1.0',
    layout: [
      [false, false, false, true, false],
      [false, false, true, false, false],
      [false, true, false, false, false]
    ],
    description: 'Basic diagonal line pattern'
  },
  {
    name: 'Horizontal-L',
    multiplier: '2.0',
    layout: [
      [false, false, false, false, false],
      [false, true, true, true, true],
      [false, false, false, false, false]
    ],
    description: 'Extended horizontal pattern'
  },
  {
    name: 'Horizontal-XL',
    multiplier: '3.0',
    layout: [
      [false, false, false, false, false],
      [true, true, true, true, true],
      [false, false, false, false, false]
    ],
    description: 'Full horizontal line pattern'
  },
  {
    name: 'Zig',
    multiplier: '4.0',
    layout: [
      [false, false, true, false, false],
      [false, true, false, true, false],
      [true, false, false, false, true]
    ],
    description: 'Zigzag diagonal pattern'
  },
  {
    name: 'Zag',
    multiplier: '4.0',
    layout: [
      [true, false, false, false, true],
      [false, true, false, true, false],
      [false, false, true, false, false]
    ],
    description: 'Reverse zigzag pattern'
  },
  {
    name: 'Ground',
    multiplier: '7.0',
    layout: [
      [false, false, true, false, false],
      [false, true, false, true, false],
      [true, true, true, true, true]
    ],
    description: 'Bottom-heavy pyramid pattern'
  },
  {
    name: 'Heaven',
    multiplier: '7.0',
    layout: [
      [true, true, true, true, true],
      [false, true, false, true, false],
      [false, false, true, false, false]
    ],
    description: 'Top-heavy pyramid pattern'
  },
  {
    name: 'Eye',
    multiplier: '8.0',
    layout: [
      [false, true, true, true, false],
      [true, true, false, true, true],
      [false, true, true, true, false]
    ],
    description: 'Eye-shaped pattern'
  },
  {
    name: 'Jackpot',
    multiplier: '10.0',
    layout: [
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]
    ],
    description: 'Ultimate pattern - all slots filled'
  }
])

// Rarity levels data
const rarityLevels = ref([
  {
    name: 'COMMON',
    icon: '⚪',
    frequency: '100',
    description: 'Basic rarity that appears most frequently in CloverPit according to this CloverPit Wiki.',
    examples: 'Most basic CloverPit charms and phone call options documented in this CloverPit Wiki'
  },
  {
    name: 'UNCOMMON',
    icon: '🟢',
    frequency: '90',
    description: '10% less frequent than Common rarity items in CloverPit as noted in this CloverPit Wiki.',
    examples: 'CloverPit Crowbar, Hamsa, Calendar, Super Capacitor, Property Certificate - all documented in this CloverPit Wiki'
  },
  {
    name: 'MILDLY RARE',
    icon: '🟡',
    frequency: '80',
    description: '20% less frequent than Common rarity items in CloverPit.',
    examples: 'Various specialized CloverPit charms with moderate power'
  },
  {
    name: 'RARE',
    icon: '🟠',
    frequency: '65',
    description: '35% less frequent than Common rarity items in CloverPit.',
    examples: 'High-value CloverPit charms with significant effects'
  },
  {
    name: 'VERY RARE',
    icon: '🔴',
    frequency: '50',
    description: '50% less frequent than Common rarity items in CloverPit.',
    examples: 'CloverPit Pareidolia, Number One, Chastity Belt, Aa Batteries, Vorago, Barathrum'
  },
  {
    name: 'LEGENDARY',
    icon: '🟣',
    frequency: '35',
    description: '65% less frequent than Common rarity items in CloverPit.',
    examples: 'Extremely powerful CloverPit charms with game-changing effects'
  },
  {
    name: 'ULTRA LEGENDARY',
    icon: '⭐',
    frequency: '20',
    description: '80% less frequent than Common rarity items in CloverPit.',
    examples: 'CloverPit Electricity Meter, Music Tape, Dark Lotus, Swole Cat, Megaphone'
  }
])
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
</style>
