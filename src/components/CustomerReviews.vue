<script setup>
import { ref } from "vue"

const localReviews = ref([
  { name: "Mikkel Larsen", text: "Super professionel service og hurtig montering. Vi er meget tilfredse med resultatet.", stars: 5 },
  { name: "Jonas Nielsen", text: "Montørerne var venlige og effektive. Porten fungerer perfekt.", stars: 4 },
  { name: "Frederik Hansen", text: "God kommunikation hele vejen igennem og virkelig flot resultat.", stars: 4 },
])

const trustpilotReviews = ref([
  { name: "Kasper Jensen", text: "Meget positiv oplevelse fra start til slut. Kan klart anbefales.", stars: 5 },
  { name: "Sofie Poulsen", text: "Vi fik god rådgivning omkring valg af port, og installationen gik hurtigt uden problemer.", stars: 5 },
  { name: "Tobias Andersen", text: "Kvaliteten virker rigtig høj, og porten fungerer perfekt.", stars: 5 },
])
</script>


<template>
  <section class="reviews-wrapper">
    <!-- Egne anmeldelser -->
    <div class="reviews-block">
      <h2 class="title">VORES EGNE KUNDEANMELDELSER</h2>
      <p class="subtitle">DET HER SIGER VORES KUNDER</p>

      <div class="review-list">
        <div v-for="(review, i) in localReviews" :key="i" class="review-card">
          <p class="name">{{ review.name }}</p>
          <p class="text">{{ review.text }}</p>
          <div class="stars">
            <span v-for="n in review.stars" :key="n">⭐</span>
          </div>
        </div>
      </div>

      <button class="btn">SE FLERE ANMELDELSER</button>
    </div>

    <!-- Trustpilot -->
    <div class="reviews-block trustpilot">
      <h2 class="title">TRUSTPILOT</h2>
      <p class="subtitle">4.8 STJERNER PÅ TRUSTPILOT</p>

      <div class="review-list">
        <div v-for="(review, i) in trustpilotReviews" :key="i" class="review-card">
          <p class="name">{{ review.name }}</p>
          <p class="text">{{ review.text }}</p>
          <div class="stars">
            <span v-for="n in review.stars" :key="n">⭐</span>
          </div>
        </div>
      </div>

      <button class="btn">SE FLERE ANMELDELSER</button>
    </div>
  </section>
</template>



<style scoped>
/* --- WRAPPER --- */
.reviews-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
}

/* --- BLOCKS --- */
.reviews-block {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.title {
  font-size: 1.3rem;
  font-weight: 700;
}

.subtitle {
  margin-top: -4px;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.95rem;
}

/* --- REVIEW CARDS --- */
.review-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 10px;
}

.name {
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.text {
  margin-bottom: 0.5rem;
  color: #444;
}

.stars {
  color: #ffb400;
}

/* --- BUTTON --- */
.btn {
  margin-top: 1.2rem;
  background: #d62828;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

/* --- DESKTOP --- */
@media (min-width: 900px) {
  .reviews-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 3rem 4rem;
  }
}
</style>
