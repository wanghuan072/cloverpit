<template>
  <div class="endings-page">
    <AppHeader />

    <div class="page-content">
      <!-- Hero Section -->
      <section class="section hero">
        <div class="container">
          <div class="hero-wrapper">
                <h1 class="hero-title">CloverPit Endings Guide</h1>
                <div class="hero-description">
                  <p>Master the art of escaping CloverPit with this comprehensive CloverPit Endings guide to all CloverPit ending types, including the true CloverPit ending and sacred trinkets. This CloverPit Endings guide covers every CloverPit ending path and CloverPit ending strategy available in the game.</p>
                </div>
            <div class="endings-nav">
              <div class="nav-card" @click="scrollToSection('preparation')">
                <span>CloverPit Ending Preparation</span>
              </div>
              <div class="nav-card" @click="scrollToSection('bad-ending')">
                <span>CloverPit Bad Ending</span>
              </div>
              <div class="nav-card" @click="scrollToSection('good-ending')">
                <span>CloverPit Good Ending</span>
              </div>
              <div class="nav-card" @click="scrollToSection('tips')">
                <span>CloverPit Ending Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Preparation Section -->
      <section id="preparation" class="section preparation">
        <div class="container">
          <div class="preparation-wrapper">
            <div class="section-header">
              <h2 class="section-title">CloverPit Ending Preparation</h2>
              <p class="section-subtitle">Essential preparation steps before attempting any CloverPit ending. This CloverPit ending guide covers all necessary preparation for successful CloverPit ending achievement.</p>
            </div>

            <div class="preparation-content">
              <div class="preparation-section">
                <h3>CloverPit Ending Drawer Slots Collection</h3>
                <p>Before attempting any CloverPit ending, you must ensure that you have obtained all your drawer slots, as these will be needed to store the corpse pieces for your run. This preparation requires drawer slots earned by reaching certain deadlines during your CloverPit runs. The important detail is that once you have obtained a key for a particular run, you cannot get another one in that same run, which means this preparation will require at least 3 separate CloverPit runs to complete.</p>
                
                <p>The drawer system is crucial for CloverPit ending preparation. Each drawer slot represents a potential storage location for corpse pieces, and having all slots available gives you the maximum flexibility when planning your run. The slots are earned progressively as you reach higher deadlines, making them a natural reward for advancing through CloverPit's difficulty curve and preparing for your ending attempt.</p>
                
                <img src="../../public/images/endings-01.webp" alt="CloverPit Ending Drawer Slots Collection" />
              
              </div>

              <div class="preparation-section">
                <h3>CloverPit Ending Corpse Pieces Setup</h3>
                <p>The key to starting your CloverPit ending run with corpse pieces lies in how you end your previous run. If you want to guarantee that you start with all the corpse pieces (excluding the skull, which is found randomly in the shop), you must ensure that when you end a CloverPit run, all your drawers are filled with items. These items will then transform into corpse pieces in your next run, giving you a significant advantage from the start.</p>
                
                <p>For example, if your last CloverPit run had two trinkets in the bottom two drawers (as shown in the reference image), you will be able to start your next run with 2 out of 4 corpse pieces already in place. This preparation method is much more reliable than trying to obtain corpse pieces during the actual run, as the criteria for gaining them mid-run is unclear and can add unnecessary complexity to an already challenging endeavor.</p>
                
                <p>If your drawers are empty and you want to quickly fill them before starting a corpse run, you can use the "Cold Affection" memory card. This card allows you to buy 4 items and then restart, effectively giving you a quick way to populate your drawers without committing to a full run.</p>
              </div>

              <div class="preparation-section">
                <h3>CloverPit Ending Skull Acquisition</h3>
                <p>The skull is the easiest component to obtain for your CloverPit ending preparation, as it appears as a common rarity item in the shop. This makes it relatively straightforward to find during your run, and it's even better if you can find one with a modifier attached. The skull's common status means you don't need to worry too much about finding it, unlike the more complex preparation required for the other corpse pieces.</p>
                
                <p>Once you have all your drawer slots unlocked, your corpse pieces prepared, and a clear understanding of where to find the skull, you'll have everything you need to attempt either of the two main CloverPit endings. This preparation phase is essential for success, as starting without these advantages makes the runs significantly more difficult.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bad Ending Section -->
      <section id="bad-ending" class="section bad-ending">
        <div class="container">
          <div class="bad-ending-wrapper">
            <div class="section-header">
              <h2 class="section-title">Obtaining the CloverPit Bad Ending</h2>
              <p class="section-subtitle">The straightforward path to escape CloverPit, but not the true CloverPit ending victory. This CloverPit ending guide covers the bad ending path.</p>
            </div>

            <div class="ending-content">
              <div class="ending-section">
                <h3>CloverPit Bad Ending Simple Path</h3>
                <p>Obtaining the CloverPit bad ending is relatively straightforward compared to the more complex good ending. This process involves playing through CloverPit normally and reaching a specific coin quota. For the standard bad ending, you need to accumulate 250,000 coins. However, if you're using the "Delusions of grandeur" memory card, this requirement doubles to 500,000 coins.</p>
                
                <p>Once you reach the required coin quota, CloverPit will unlock the dark key, which serves as your ticket to freedom. With this key in hand, you can proceed to the exit located behind you in your cell and leave the cursed CloverPit slot machine behind forever. This process is intentionally simple, representing the path of least resistance - a quick escape rather than a true understanding or mastery of CloverPit's deeper mechanics required for the true ending.</p>
              </div>

              <div class="ending-section">
                <h3>CloverPit Bad Ending Rewards and Consequences</h3>
                <p>Successfully completing the CloverPit bad ending will grant you the game credits, marking the end of your journey through CloverPit. Additionally, the memory card you used during the run will receive a rainbow border effect, though it's worth noting that this effect is not fully holographic and represents a lesser achievement compared to what's possible with other strategies.</p>
                
                <p>While the CloverPit bad ending does provide a sense of completion and allows you to escape the cursed machine, it's important to understand that this is considered the "bad" ending for a reason. It represents taking the easy way out without truly engaging with CloverPit's more complex systems and deeper mysteries. CloverPit clearly communicates that there are much more rewarding conclusions available for players who are willing to put in the additional effort and take on the more challenging path to the true ending.</p>
                
                <p>The CloverPit bad ending serves as both an achievement and a stepping stone. It proves you can survive and escape CloverPit, but it also hints at the greater rewards and deeper satisfaction that come from pursuing the more challenging good ending path. This guide recommends the bad ending as a starting point before attempting the true ending.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Good Ending Section -->
      <section id="good-ending" class="section good-ending">
        <div class="container">
          <div class="good-ending-wrapper">
            <div class="section-header">
              <h2 class="section-title">Obtaining the CloverPit Good Ending (+ Sacred Trinkets)</h2>
              <p class="section-subtitle">The true path to CloverPit victory and sacred trinkets. This CloverPit ending guide covers the complete good ending strategy.</p>       
            </div>

            <div class="ending-content">
              <div class="ending-section">
                <h3>CloverPit Good Ending Memory Card Recommendation</h3>
                <p>For achieving the CloverPit good ending, I strongly recommend using the 'Heartbreak' memory card. This choice is strategic because it guarantees that you will get at least one CloverPit 666 pattern during your run, which is absolutely essential for the transformation process. The CloverPit 666 pattern serves as a crucial trigger that forces your next phone call to be red, and without this pattern, you'll find yourself unable to complete the necessary steps for the good ending.</p>
                
                <p>The Heartbreak memory card's ability to ensure a CloverPit 666 pattern is invaluable because it removes one of the most unpredictable elements from your strategy. Without this guarantee, you would be relying on random chance to roll the CloverPit 666 pattern, which could require multiple attempts and significantly extend your preparation time. By using Heartbreak, you can plan your run with confidence, knowing that you'll have access to the red phone calls needed for the transformation sequence.</p>
              
                <img src="../../public/images/endings-02.webp" alt="CloverPit Ending Memory Card Recommendation" />
              </div>

              <div class="ending-section">
                <h3>CloverPit Good Ending Phone Call Rules and Restrictions</h3>
                <p>The most critical rule for achieving the CloverPit good ending is that you must never take any phone calls that contain red text and feature a lower-pitched voice. These calls represent the corrupted or dangerous communications that will prevent the transformation from occurring. You can identify these forbidden calls by their distinctive red text color and the noticeably deeper, more menacing voice tone.</p>
                
                <p>However, you are allowed to take calls from other sources or ignore them entirely if you prefer. The key distinction is specifically avoiding the red-text calls with the lower pitch. Additionally, opening the menu during calls is perfectly fine - you can simply hit "Be right back" and not return to the call, which counts as avoiding the forbidden communication.</p>
                
                <p>This restriction is part of CloverPit's deeper narrative about choosing the right path and avoiding the temptations that lead to corruption. By consistently rejecting the red calls, you demonstrate your commitment to the purer path that leads to the true ending. This guide emphasizes the importance of this phone call discipline.</p>
              </div>

              <div class="ending-section">
                <h3>CloverPit Good Ending 666 Floppy Disk System</h3>
                <p>The CloverPit ending transformation process centers around the CloverPit 666 floppy disk, which acts as a tracking mechanism for your progress toward the CloverPit good ending. Each time you finish a deadline that had a red phone call (which you correctly avoided), you will receive one mark on your CloverPit 666 floppy disk. This CloverPit ending system requires you to accumulate exactly three marks before the CloverPit ending transformation can occur.</p>
                
                <p>The CloverPit ending process works as follows: First, you finish a deadline that featured a red phone call (which you avoided), earning your first mark. You then repeat this process two more times, each time avoiding the red calls and completing the deadline. Once you have accumulated three marks on your CloverPit 666 floppy disk, you take one more phone call - this time, the phone will transform and begin offering holy calls instead of the regular communications for your CloverPit ending.</p>
                
                <p>This three-strike system represents a test of patience and discipline in CloverPit ending strategies. It requires you to consistently make the right choices over multiple deadlines, proving your worthiness for the CloverPit ending transformation. The CloverPit 666 floppy disk serves as both a progress tracker and a symbolic representation of your journey toward enlightenment in CloverPit ending achievement.</p>
              
                <img src="../../public/images/endings-03.webp" alt="CloverPit Ending 666 Floppy Disk System" />
              </div>

              <div class="ending-section">
                <h3>CloverPit Good Ending Transformation and Its Benefits</h3>
                <p>Once you have successfully accumulated three marks on your CloverPit 666 floppy disk, your next phone call will be holy in nature. This CloverPit ending transformation affects multiple aspects of the game simultaneously. The phone itself transforms, now offering holy calls instead of regular or red calls. These holy calls provide access to sacred charms, which are powerful items that can significantly enhance your CloverPit ending gameplay experience.</p>
                
                <p>More importantly, the CloverPit ending transformation also affects the key that you use to exit the room. When you use this transformed key on the door, it will unlock the true CloverPit ending, providing a much more satisfying and complete conclusion to your journey through CloverPit. This represents the reward for your patience, discipline, and commitment to the proper path in CloverPit ending strategies.</p>
                
                <p>The CloverPit ending transformation sequence is the culmination of all your preparation and careful decision-making. It represents CloverPit's way of rewarding players who choose to engage with its deeper mechanics and pursue the more challenging but ultimately more rewarding path to CloverPit ending victory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tips & Tricks Section -->
      <section id="tips" class="section tips">
      <div class="container">
          <div class="tips-wrapper">
            <div class="section-header">
              <h2 class="section-title">CloverPit Ending Tips & Tricks</h2>
              <p class="section-subtitle">Advanced CloverPit ending strategies and important details for CloverPit ending success. This CloverPit ending guide provides expert tips.</p>
            </div>

            <div class="tips-content">
              <div class="tip-section">
                <h3>CloverPit Ending Getting Your 3 Strikes</h3>
                <p>To successfully complete the transformation process, you need to obtain all three strikes on your CloverPit 666 floppy disk. This requires careful planning and understanding of CloverPit's mechanics. The key insight is that you must obtain at least one 'CloverPit 666' pattern during your run, as this pattern forces your next phone call to be red, providing you with the third strike opportunity.</p>
                
                <p>Without the CloverPit 666 pattern, you will only be able to get 2 red phone calls by deadline 8, as the other two red calls are guaranteed to appear on deadline 3 and deadline 7. This means you would fall short of the required three strikes, making the transformation impossible. The CloverPit 666 pattern is therefore not just helpful but absolutely essential for achieving the good ending.</p>
                
                <p>This is why the Heartbreak memory card is so valuable - it guarantees that you will roll at least one CloverPit 666 pattern, ensuring that you have access to all three strike opportunities. Without this guarantee, you would be relying on random chance, which could require multiple attempts and significantly extend your preparation time.</p>
              </div>

              <div class="tip-section">
                <h3>CloverPit Ending Timing and Deadline Strategy</h3>
                <p>Understanding the timing of red phone calls is crucial for planning your strategy. CloverPit has a predictable pattern for when these calls appear, and knowing this schedule allows you to plan your approach accordingly.</p>
                
                <p>Red phone calls are guaranteed to appear on deadline 3 and deadline 7 in CloverPit. These represent your first two opportunities to earn strikes on your CloverPit 666 floppy disk. However, to get the third strike, you need to trigger an additional red call through the CloverPit 666 pattern. This means you need to roll the CloverPit 666 pattern before deadline 8 to ensure you have enough time to complete the transformation process.</p>
                
                <p>The timing becomes even more important when you consider that you need to avoid taking the red calls while still completing the deadlines that feature them in CloverPit. This requires careful balance - you need the red calls to appear so you can earn strikes, but you must resist the temptation to answer them. The CloverPit 666 pattern helps by providing a guaranteed third red call opportunity, making the timing more predictable and manageable.</p>
              </div>

              <div class="tip-section">
                <h3>CloverPit Ending Sacred Trinkets and Holy Calls</h3>
                <p>Once you have successfully completed the transformation process, the phone will begin offering holy calls instead of regular or red calls. These holy calls are exclusive to the good ending path and provide access to sacred charms, which are among the most powerful items in CloverPit.</p>
                
                <p>Sacred charms offer significant gameplay advantages and represent the ultimate reward for successfully navigating the complex transformation process. These items are not available through any other means and serve as a tangible benefit for choosing the more challenging but ultimately more rewarding path to the good ending.</p>
                
                <p>The holy calls themselves also represent a thematic shift in CloverPit's narrative. Where regular calls might offer mundane rewards and red calls represent corruption or danger, holy calls provide access to items that align with the purer, more enlightened path you've chosen to pursue. This creates a cohesive experience where your choices throughout CloverPit directly impact the rewards and opportunities available to you.</p>
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
/* Base Styles */
.endings-page {
  background: #1a1a1a;
  color: #ffffff;
}

.endings-page img{
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
  background-image: url('../../public/images/2.webp');
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

.endings-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

/* Responsive Design */
@media (max-width: 1024px) {
  .endings-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .endings-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .nav-card {
    padding: 5px 10px;
    min-height: 30px;
  }

  .nav-card span {
    font-size: 12px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description p {
    font-size: 16px;
  }
}

/* Section Headers */
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

/* Preparation Section */
.preparation {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
}

.preparation-wrapper {
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

.preparation-content {
  display: grid;
  grid-template-columns: 1fr;
}

.preparation-section {
  margin-bottom: 30px;
}

.preparation-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.preparation-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Bad Ending Section */
.bad-ending {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
}

.bad-ending-wrapper {
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

.ending-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.ending-section {
  margin-bottom: 30px;
}

.ending-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.ending-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Good Ending Section */
.good-ending {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%);
}

.good-ending-wrapper {
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


/* Tips Section */
.tips {
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%);
}

.tips-wrapper {
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

.tips-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.tip-section {
  margin-bottom: 30px;
}

.tip-section h3 {
  color: #ff6b35;
  font-size: 24px;
  margin-bottom: 20px;
  text-shadow: 0 0 8px #ff6b35;
  font-weight: 600;
}

.tip-section p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .preparation-content,
  .ending-content,
  .tips-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .endings-nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
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

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-header{
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 12px;
  }

  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
    margin-bottom: 10px;
  }

  .preparation-section p,
  .ending-section p,
  .tip-section p{
    margin-bottom: 10px;
  }

  .endings-nav {
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

  .preparation-wrapper,
  .bad-ending-wrapper,
  .good-ending-wrapper,
  .tips-wrapper {
    padding: 10px;
  }

  .preparation-content,
  .ending-content,
  .tips-content {
    gap: 15px;
  }

  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
  }

  .preparation-section h3,
  .ending-section h3,
  .tip-section h3 {
    font-size: 16px;
  }

  .preparation-section p,
  .ending-section p,
  .tip-section p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .hero-wrapper {
    padding: 25px 15px;
  }
  
  .hero-title {
    font-size: 2rem;
    letter-spacing: 1px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .endings-nav {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .nav-card {
    padding: 8px;
  }
  
  .nav-card span {
    font-size: 11px;
  }
  
  .preparation-wrapper,
  .bad-ending-wrapper,
  .good-ending-wrapper,
  .tips-wrapper {
    padding: 15px;
  }
  
  .preparation-section,
  .ending-section,
  .tip-section {
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .preparation-section h3,
  .ending-section h3,
  .tip-section h3 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .preparation-section p,
  .ending-section p,
  .tip-section p {
    font-size: 13px;
    line-height: 1.5;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
}
</style>