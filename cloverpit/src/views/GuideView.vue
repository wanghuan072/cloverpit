<template>
  <div class="guide-page">
    <AppHeader />

    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
            <!-- Main Title -->
            <h1 class="hero-title">CloverPit Strategy Guide</h1>

            <!-- Description -->
            <div class="hero-description">
              <p>Master the rogue-lite slot machine horror with this comprehensive CloverPit guide featuring beginner
                tips, advanced strategies, and charm synergies</p>
            </div>

            <!-- Navigation Cards -->
            <div class="guide-nav">
              <div class="nav-card" @click="scrollToSection('getting-started')">
                <span>Getting Started</span>
              </div>
              <div class="nav-card" @click="scrollToSection('beginner-tips')">
                <span>Beginner Tips</span>
              </div>
              <div class="nav-card" @click="scrollToSection('advanced-strategies')">
                <span>Advanced Strategies</span>
              </div>
              <div class="nav-card" @click="scrollToSection('charm-synergies')">
                <span>Charm Synergies</span>
              </div>
              <div class="nav-card" @click="scrollToSection('common-mistakes')">
                <span>Common Mistakes</span>
              </div>
              <div class="nav-card" @click="scrollToSection('progression-guide')">
                <span>Progression Guide</span>
              </div>
              <div class="nav-card" @click="scrollToSection('endless-mode')">
                <span>Endless Mode</span>
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
              <h2 class="home-title">Getting Started with CloverPit</h2>
              <p class="section-subtitle">Welcome to CloverPit, the rogue-lite slot machine horror game where you must
                manipulate a sinister slot machine to survive. This comprehensive CloverPit guide will help new players
                understand the core mechanics and survive their first runs in CloverPit.</p>
            </div>

            <div class="survival-steps">
              <div class="step-card step-1">
                <div class="step-icon">
                  <div class="step-number">1</div>
                </div>
                <h3>Master the Basic Gameplay Cycle</h3>
                <p>At its heart, CloverPit follows a straightforward yet unforgiving pattern: you get 3 attempts to spin
                  the cursed machine, collect sufficient coins to settle your debt, or face the abyss below. Newcomers
                  will quickly learn this harsh reality through trial and error.</p>
                <div class="tips-box">
                  <h4>💡 Key Points</h4>
                  <ul>
                    <li>Each round grants you precisely 3 spins</li>
                    <li>Your debt grows larger with each successful payment</li>
                    <li>Inability to pay results in immediate failure</li>
                    <li>Concentrate on surviving the initial rounds</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-2">
                <div class="step-icon">
                  <div class="step-number">2</div>
                </div>
                <h3>Study Symbol Economics</h3>
                <p>Each symbol in CloverPit carries its own monetary value. Learning which symbols offer the best
                  returns
                  will guide your charm purchasing decisions and help you determine when to take calculated risks.</p>
                <div class="tips-box">
                  <h4>💡 Key Points</h4>
                  <ul>
                    <li>Valuable symbols appear less frequently on the reels</li>
                    <li>Matching 3 identical symbols yields higher rewards</li>
                    <li>Golden variations of symbols offer additional bonuses</li>
                    <li>Familiarize yourself with the payout table early on</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-3">
                <div class="step-icon">
                  <div class="step-number">3</div>
                </div>
                <h3>Budget Your Ticket Resources</h3>
                <p>Tickets serve as your primary currency for acquiring charms from the various vending machines
                  scattered
                  throughout CloverPit. How you manage these tickets in the early game will determine whether you can
                  create powerful combinations or find yourself struggling with inferior equipment.</p>
                <div class="tips-box">
                  <h4>💡 Key Points</h4>
                  <ul>
                    <li>Avoid exhausting all tickets in the first round</li>
                    <li>Reserve funds for premium vending machines</li>
                    <li>Inexpensive charms can sometimes provide excellent value</li>
                    <li>Think several rounds ahead when making purchases</li>
                  </ul>
                </div>
              </div>

              <div class="step-card step-4">
                <div class="step-icon">
                  <div class="step-number">4</div>
                </div>
                <h3>Explore Charm Interactions</h3>
                <p>With more than 150 unique charms available, CloverPit offers countless possibilities for
                  experimentation. Your initial playthroughs should prioritize understanding how different charms
                  function
                  and how they can be combined to enhance the slot machine's behavior.</p>
                <div class="tips-box">
                  <h4>💡 Key Points</h4>
                  <ul>
                    <li>Pay close attention to charm descriptions</li>
                    <li>Start with economy-focused charms for consistency</li>
                    <li>Identify which charms affect specific symbols</li>
                    <li>Be willing to test unconventional combinations</li>
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
              <h2 class="home-title">Essential CloverPit Beginner Tips</h2>
              <p class="section-subtitle">Master these fundamental tips from our CloverPit guide to improve your chances
                of survival in CloverPit and build a foundation for advanced strategies.</p>
            </div>

            <div class="tips-grid">
              <div class="tip-card">
                <div class="tip-number">1</div>
                <h3>Calculate Your Debt Requirements</h3>
                <p>Before pulling the lever, always review your current debt obligation. This CloverPit guide recommends
                  determining the average amount needed per spin to meet your target, then select charms that will help
                  you achieve this goal reliably. Avoid spinning without a clear payment strategy.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">2</div>
                <h3>Optimize Your Three-Spin Strategy</h3>
                <p>Each round in CloverPit provides exactly 3 spins. Resist the temptation to rely on luck for your
                  initial spins. Instead, use the first two spins to build momentum with your charms, reserving the
                  final
                  spin as your decisive attempt when all effects are fully active.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">3</div>
                <h3>Focus on Economic Stability First</h3>
                <p>During your initial 2-3 rounds, this CloverPit guide suggests prioritizing charms that directly boost
                  coin generation or multiply your earnings. While flashy combination charms may seem appealing,
                  economic
                  charms provide the foundation you need to survive long enough to utilize more complex strategies
                  later.
                </p>
              </div>

              <div class="tip-card">
                <div class="tip-number">4</div>
                <h3>Time Your Charm Activations</h3>
                <p>Numerous charms in CloverPit feature rechargeable abilities triggered by the red button. Coordinate
                  these activations between spins to maximize their effectiveness. Rather than waiting for the perfect
                  moment, use these abilities regularly to maintain consistent performance.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">5</div>
                <h3>Monitor Symbol Appearance Rates</h3>
                <p>Observe which symbols appear most commonly on the CloverPit slot machine. This CloverPit guide
                  advises
                  selecting charms that enhance symbols that already appear frequently rather than attempting to
                  manipulate
                  rare symbols into appearing more often.</p>
              </div>


              <div class="tip-card">
                <div class="tip-number">6</div>
                <h3>Leverage Phone Upgrade Opportunities</h3>
                <p>Between rounds, the ominous toy phone presents permanent upgrade options. This CloverPit guide
                  emphasizes
                  that these enhancements accumulate throughout your run and can significantly alter the odds in your
                  favor.
                  Always select upgrades that synergize with your current charm configuration.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">7</div>
                <h3>Embrace Failed Runs as Learning</h3>
                <p>Every death in CloverPit unlocks meta-progression content. This CloverPit guide reminds you not to
                  get
                  frustrated by falling into the pit - each run teaches you charm interactions and brings you closer to
                  unlocking powerful new items for future attempts.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">8</div>
                <h3>Shop From Different Vending Machines</h3>
                <p>CloverPit features multiple vending machines with different inventories and price points. This
                  CloverPit
                  guide notes that higher-cost machines often contain more powerful charms, but sometimes cheaper
                  machines
                  offer better value for building specific strategies.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">9</div>
                <h3>Accept RNG But Mitigate It</h3>
                <p>CloverPit has randomness, but skilled players consistently win through smart charm selection and risk
                  management. This CloverPit guide explains that the goal isn't eliminating randomness - it's building
                  such
                  a strong engine that random outcomes don't matter.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">10</div>
                <h3>Unlock Storage Capacity</h3>
                <p>The storage unit in CloverPit expands your charm carrying capacity. This CloverPit guide recommends
                  prioritizing unlocking additional storage slots through progression - more charms means more powerful
                  synergy combinations in later rounds.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">11</div>
                <h3>Recognize When to Pivot Your Build</h3>
                <p>Sometimes the charms offered by vending machines in CloverPit don't match your planned strategy. This
                  CloverPit guide teaches that skilled players adapt to available options rather than forcing a specific
                  build. Flexibility often beats stubbornness.</p>
              </div>

              <div class="tip-card">
                <div class="tip-number">12</div>
                <h3>Study Successful Runs</h3>
                <p>When you complete a successful run in CloverPit, take note of which charm combinations worked well.
                  This
                  CloverPit guide mentions that the CloverPit community also shares powerful seeds - try these to learn
                  winning strategies from experienced players.</p>
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
              <h2 class="home-title">Advanced CloverPit Strategies</h2>
              <p class="section-subtitle">Once you've mastered the basics of CloverPit, these advanced strategies from
                our
                CloverPit guide will help you push deeper into runs and achieve higher scores.</p>
            </div>

            <div class="strategies-grid">
              <div class="strategy-card">
                <div class="strategy-icon">🎯</div>
                <h3>Advanced Symbol Control</h3>
                <p>Expert CloverPit gameplay requires actively controlling which symbols appear on the reels. This
                  CloverPit
                  guide shows that rather than accepting random outcomes, utilize charms that enhance specific symbol
                  frequencies, generate golden variations, or eliminate undesirable symbols.</p>
                <div class="strategy-example">
                  <h4>Implementation Approach:</h4>
                  <ul>
                    <li>Locate high-value symbols that appear with moderate frequency</li>
                    <li>Accumulate charms that specifically enhance these symbols</li>
                    <li>Employ removal charms to clear low-value symbol interference</li>
                    <li>Generate golden variants to secure bonus rewards</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">💰</div>
                <h3>Exponential Economic Growth</h3>
                <p>The most dependable CloverPit approach centers on creating exponential economic expansion. This
                  CloverPit
                  guide demonstrates how to construct a system that produces surplus coins early, reinvest those profits
                  into more potent charms, and establish a compounding effect that renders later rounds effortless.</p>
                <div class="strategy-example">
                  <h4>Core Principles:</h4>
                  <ul>
                    <li>Exceed debt requirements early to access superior charms</li>
                    <li>Allocate tickets to economic multipliers before decorative effects</li>
                    <li>Phone upgrades that enhance ticket income accumulate over time</li>
                    <li>By rounds 5-6, you should possess dominant economic superiority</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">⚡</div>
                <h3>Creating Reaction Chains</h3>
                <p>Some of the most formidable CloverPit configurations center on charm combinations that initiate
                  cascading
                  effects. This CloverPit guide reveals that when charm A activates charm B, which then triggers charm
                  C,
                  you create explosive turns that produce enormous payouts from apparently simple spins.</p>
                <div class="strategy-example">
                  <h4>Chain Construction Guidelines:</h4>
                  <ul>
                    <li>Seek "when X occurs" trigger conditions on charms</li>
                    <li>Combine charms that establish the conditions other charms require</li>
                    <li>Accumulate multiple charms that activate from the same event</li>
                    <li>Experiment with combinations in safer early rounds before depending on them</li>
                  </ul>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">⚖️</div>
                <h3>Advanced Risk Management</h3>
                <p>Expert CloverPit players know when to take calculated risks versus when to play conservatively. This
                  CloverPit guide covers how this involves reading the game state and making smart decisions about charm
                  purchases, spin timing, and when to commit resources.</p>
                <div class="strategy-example">
                  <h4>Risk Assessment:</h4>
                  <ul>
                    <li>Early rounds: Be conservative, focus on guaranteed value</li>
                    <li>Mid rounds: Take calculated risks to accelerate your build</li>
                    <li>Late rounds: Either you're winning handily or need risky plays to survive</li>
                    <li>Know your "safety margin" - how much you can afford to lose and recover</li>
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
              <h2 class="home-title">Powerful CloverPit Charm Synergies</h2>
              <p class="section-subtitle">These charm combinations featured in our CloverPit guide create especially
                powerful synergies. While specific charm names vary, these archetypes represent effective strategies for
                breaking the slot machine.</p>
            </div>

            <div class="synergies-grid">
              <div class="synergy-card golden-engine">
                <div class="synergy-header">
                  <div class="synergy-icon">✨</div>
                  <h3>Golden Symbol Amplification</h3>
                </div>
                <p>Merge charms that generate golden symbols with charms that amplify golden symbol rewards. Since
                  golden
                  symbols already provide enhanced payouts in CloverPit, multiplying their value creates exponential
                  returns.</p>
                <div class="synergy-combo">
                  <h4>Combination:</h4>
                  <p>Golden Symbol Generator + Golden Reward Amplifier + Symbol Frequency Enhancer</p>
                  <h4>Outcome:</h4>
                  <p>Consistently high-value spins with reduced variance</p>
                </div>
              </div>

              <div class="synergy-card ticket-loop">
                <div class="synergy-header">
                  <div class="synergy-icon">🔄</div>
                  <h3>Ticket Generation Cycle</h3>
                </div>
                <p>Accumulate ticket-producing charms alongside ticket amplifiers in CloverPit. Increased tickets lead
                  to
                  more charms, which generate additional tickets, establishing a self-perpetuating cycle of escalating
                  power.</p>
                <div class="synergy-combo">
                  <h4>Combination:</h4>
                  <p>Ticket Reward Enhancer + Ticket Amplifier Charms + Economic Charms</p>
                  <h4>Outcome:</h4>
                  <p>Rapidly expanding charm collection and unstoppable mid-game progression</p>
                </div>
              </div>

              <div class="synergy-card cascade-chain">
                <div class="synergy-header">
                  <div class="synergy-icon">🌊</div>
                  <h3>Cascade Trigger Chain</h3>
                </div>
                <p>The ultimate CloverPit combo: chain charms where each successful spin triggers additional effects,
                  which
                  trigger more effects, creating an avalanche of value from a single lever pull.</p>
                <div class="synergy-combo">
                  <h4>Combo:</h4>
                  <p>On-Win Trigger Charms + Multi-Effect Charms + Combo Multipliers</p>
                  <h4>Result:</h4>
                  <p>Single spins that generate more value than entire early rounds</p>
                </div>
              </div>

              <div class="synergy-card safety-net">
                <div class="synergy-header">
                  <div class="synergy-icon">🛡️</div>
                  <h3>Safety Net Strategy</h3>
                </div>
                <p>Build resilience in CloverPit with charms that provide minimum guarantees or safety mechanics.
                  Perfect
                  for players learning the game or attempting challenging seeds.</p>
                <div class="synergy-combo">
                  <h4>Combo:</h4>
                  <p>Minimum Payout Guarantees + Debt Reduction Charms + Consistent Value Charms</p>
                  <h4>Result:</h4>
                  <p>Lower ceiling but much higher floor - consistent survival</p>
                </div>
              </div>

              <div class="synergy-card symbol-recycling">
                <div class="synergy-header">
                  <div class="synergy-icon">♻️</div>
                  <h3>Symbol Recycling Combo</h3>
                </div>
                <p>Use charms that destroy low-value symbols and replace them with high-value ones in CloverPit. This
                  "cleanses" the slot machine reels, improving every future spin's odds.</p>
                <div class="synergy-combo">
                  <h4>Combo:</h4>
                  <p>Low Symbol Destroyer + High Symbol Creator + Symbol Persistence Charms</p>
                  <h4>Result:</h4>
                  <p>Increasingly favorable reel composition as the round progresses</p>
                </div>
              </div>

              <div class="synergy-card high-roller">
                <div class="synergy-header">
                  <div class="synergy-icon">🎰</div>
                  <h3>All-Or-Nothing High Roller</h3>
                </div>
                <p>For experienced CloverPit players: maximize variance with charms that amplify single symbol types to
                  absurd degrees. Risky but can generate massive payouts when successful.</p>
                <div class="synergy-combo">
                  <h4>Combo:</h4>
                  <p>Single Symbol Focus + Maximum Multipliers + Symbol Guarantee Charms</p>
                  <h4>Result:</h4>
                  <p>Extreme payouts but high failure risk - not for beginners</p>
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
              <h2 class="home-title">Common CloverPit Mistakes to Avoid</h2>
              <p class="section-subtitle">Learn from these common errors that new CloverPit players make, as documented
                in
                our CloverPit guide. Avoiding these CloverPit mistakes will dramatically improve your survival rate.</p>
            </div>

            <div class="mistakes-grid">
              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Immediate Ticket Expenditure</h3>
                </div>
                <p>Novice CloverPit players frequently exhaust every ticket as soon as they acquire them. This approach
                  leaves no financial buffer for superior charms in later vending machines or emergency acquisitions
                  when
                  builds require modification.</p>
                <div class="mistake-fix">
                  <h4>Solution:</h4>
                  <p>Maintain a ticket reserve equivalent to 2-3 rounds of earnings for operational flexibility.</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Overlooking Charm Interactions</h3>
                </div>
                <p>Acquiring random charms that appear appealing without considering their collaborative potential is a
                  direct route to failure in CloverPit. Five disconnected charms are significantly weaker than 3 that
                  work
                  in harmony.</p>
                <div class="mistake-fix">
                  <h4>Solution:</h4>
                  <p>Select a strategic theme and acquire charms that reinforce that approach.</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Saving Rechargeable Charms</h3>
                </div>
                <p>Many CloverPit players hoard rechargeable charm uses "for the perfect moment." But these charms
                  recharge
                  between spins - use them liberally to maximize total value across the round.</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>Use rechargeable abilities on cooldown unless you have a specific reason to wait.</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Neglecting Phone Upgrades</h3>
                </div>
                <p>The phone offers permanent upgrades between rounds in CloverPit, but players often choose randomly
                  without considering their build. Poor upgrade choices compound into significant disadvantages.</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>Always choose phone upgrades that synergize with your current charm strategy.</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Chasing Rare Symbols</h3>
                </div>
                <p>Rare symbols in CloverPit pay more but appear infrequently. Building entirely around rare symbols
                  means
                  many spins generate nothing. Common symbols with multipliers are often more reliable.</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>Focus on moderately common symbols and multiply their value.</p>
                </div>
              </div>

              <div class="mistake-card">
                <div class="mistake-header">
                  <div class="mistake-icon">❌</div>
                  <h3>Giving Up After Bad RNG</h3>
                </div>
                <p>Sometimes the CloverPit slot machine delivers terrible spins. Frustrated players make desperate
                  decisions
                  or give up mentally. But with proper charm building, you can recover from bad luck.</p>
                <div class="mistake-fix">
                  <h4>Fix:</h4>
                  <p>Stay calm, trust your build, and remember variance averages out over 3 spins.</p>
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
              <h2 class="home-title">CloverPit Progression Guide</h2>
              <p class="section-subtitle">Understanding meta-progression in CloverPit, as outlined in this CloverPit
                guide,
                helps you make the most of each run and unlock powerful new content efficiently.</p>
            </div>

            <div class="progression-content">
              <div class="progression-section">
                <h3>Mastering Meta-Progression</h3>
                <p>Each run in CloverPit, regardless of success or failure, advances your permanent progression. This
                  CloverPit guide explains how accomplishing challenges, achieving milestones, and uncovering charm
                  combinations reveals new content for subsequent runs.</p>

                <div class="progression-grid">
                  <div class="progression-card">
                    <h4>Unlockable Content</h4>
                    <ul>
                      <li>Additional charms integrated into vending machine inventories</li>
                      <li>Run modifiers to increase variety</li>
                      <li>Expanded storage capacity</li>
                      <li>Enhanced phone upgrade selections</li>
                    </ul>
                  </div>

                  <div class="progression-card">
                    <h4>Unlock Methods</h4>
                    <ul>
                      <li>Endure a specific number of rounds</li>
                      <li>Accumulate designated total coin amounts</li>
                      <li>Gather particular charm combinations</li>
                      <li>Achieve hidden challenges</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="progression-section">
                <h3>Progression Priority Guide</h3>
                <p>This CloverPit guide recommends focusing your early CloverPit runs on unlocking these key progression
                  elements in order:</p>

                <div class="priority-list">
                  <div class="priority-item">
                    <div class="priority-number">1</div>
                    <div class="priority-content">
                      <h4>Storage Capacity</h4>
                      <p>More charm slots = more powerful synergies. Prioritize storage unlocks above all else.</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">2</div>
                    <div class="priority-content">
                      <h4>Economy Charms</h4>
                      <p>Unlock charms that boost ticket income and coin generation early for easier future runs.</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">3</div>
                    <div class="priority-content">
                      <h4>Powerful Rare Charms</h4>
                      <p>Focus on unlocking game-changing legendary and epic rarity charms.</p>
                    </div>
                  </div>

                  <div class="priority-item">
                    <div class="priority-number">4</div>
                    <div class="priority-content">
                      <h4>Run Modifiers</h4>
                      <p>After mastering standard mode, unlock modifiers for variety and challenge.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="progression-section">
                <h3>Using Seeded Runs for Progression</h3>
                <p>CloverPit supports seeded runs that generate identical charm and upgrade offerings. This CloverPit
                  guide
                  suggests using community-shared powerful seeds to complete progression challenges or practice specific
                  strategies.</p>

                <div class="seed-tips">
                  <h4>Seed Strategy Tips:</h4>
                  <ul>
                    <li>Use known powerful seeds to unlock difficult content</li>
                    <li>Share your own broken seeds with the CloverPit community</li>
                    <li>Experiment with seeds to learn charm synergies safely</li>
                    <li>Compete with friends using identical seeds for bragging rights</li>
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
              <h2 class="home-title">CloverPit Endless Mode Guide</h2>
              <p class="section-subtitle">Endless mode in CloverPit removes the finish line and tests how long you can
                survive against exponentially increasing debt. This CloverPit guide covers this mode for experienced
                players
                seeking ultimate challenges.</p>
            </div>

            <div class="endless-content">
              <div class="endless-section">
                <h3>Endless Mode Mechanics</h3>
                <p>Endless mode in CloverPit functions distinctly from standard mode, featuring accelerated scaling and
                  altered mechanics:</p>

                <div class="endless-grid">
                  <div class="endless-card">
                    <h4>Core Modifications</h4>
                    <ul>
                      <li>Debt escalates exponentially rather than linearly</li>
                      <li>No victory condition - endure as long as possible</li>
                      <li>Scoring determined by rounds survived and coins accumulated</li>
                      <li>Charm configurations must scale indefinitely</li>
                    </ul>
                  </div>

                  <div class="endless-card">
                    <h4>Strategic Consequences</h4>
                    <ul>
                      <li>Multiplicative scaling outperforms additive bonuses</li>
                      <li>Early game survival becomes less critical than scaling potential</li>
                      <li>Runs conclude when your system cannot maintain pace</li>
                      <li>High scores demand nearly perfect synergies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="endless-section">
                <h3>Endless Mode Strategies</h3>
                <p>This CloverPit guide shows that succeeding in CloverPit endless mode requires fundamentally different
                  approaches than standard mode:</p>

                <div class="endless-strategies">
                  <div class="endless-strategy">
                    <div class="strategy-icon">📈</div>
                    <h4>Prioritize Percentage Multipliers</h4>
                    <p>In endless CloverPit, flat bonuses become worthless as debt scales. Focus exclusively on
                      percentage-based multipliers and scaling effects that grow with your economy.</p>
                  </div>

                  <div class="endless-strategy">
                    <div class="strategy-icon">🚀</div>
                    <h4>Build Exponential Engines</h4>
                    <p>The best endless mode CloverPit builds involve exponential scaling - charms that multiply other
                      multipliers, creating compound growth that can theoretically scale infinitely.</p>
                  </div>

                  <div class="endless-strategy">
                    <div class="strategy-icon">⚡</div>
                    <h4>Optimize Every Decision</h4>
                    <p>In endless CloverPit runs, every ticket spent, every phone upgrade choice, and every charm
                      purchase
                      must be optimal. Small inefficiencies compound into run-ending disadvantages.</p>
                  </div>
                </div>
              </div>

              <div class="endless-section">
                <h3>Endless Mode High Score Tips</h3>
                <p>This CloverPit guide explains that competing for high scores in CloverPit endless mode requires
                  mastery
                  of advanced techniques:</p>

                <div class="high-score-tips">
                  <div class="tip-item">
                    <h4>Study Top Players</h4>
                    <p>Watch CloverPit endless mode runs from leaderboard players to learn optimal builds</p>
                  </div>

                  <div class="tip-item">
                    <h4>Reset for Optimal Starts</h4>
                    <p>The first few rounds determine endless potential - reset if offerings are poor</p>
                  </div>

                  <div class="tip-item">
                    <h4>Accept the Ceiling</h4>
                    <p>Every CloverPit endless run eventually fails - the question is when, not if</p>
                  </div>

                  <div class="tip-item">
                    <h4>Share Your Builds</h4>
                    <p>The CloverPit community thrives on sharing powerful endless mode strategies</p>
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
</style>
