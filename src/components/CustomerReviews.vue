<script setup>
import { ref } from "vue"

const localReviews = ref([
  { 
    name: "Mikkel Larsen", 
    text: "Super professionel service og hurtig montering. Vi er meget tilfredse med resultatet.", 
    stars: 4,
    image: "/img/profilepic1.webp"
  },
  { 
    name: "Jonas Nielsen", 
    text: "Montørerne var venlige og effektive. Porten fungerer perfekt.", 
    stars: 5,
    image: "/img/profilepic2.webp"
  },
  { 
    name: "Frederik Hansen", 
    text: "God kommunikation hele vejen igennem og virkelig flot resultat.", 
    stars: 4,
    image: "/img/profilepic3.webp"
  },
])

const trustpilotReviews = ref([
  { 
    name: "Kasper Jensen", 
    text: "Meget positiv oplevelse fra start til slut. Kan klart anbefales.", 
    stars: 5,
    image: "/img/profilepic4.webp"
  },
  { 
    name: "Sofie Poulsen", 
    text: "Vi fik god rådgivning omkring valg af port, og installationen gik hurtigt uden problemer.", 
    stars: 4,
    image: "/img/profilepic5.webp"
  },
  { 
    name: "Tobias Andersen", 
    text: "Kvaliteten virker rigtig høj, og porten fungerer perfekt.", 
    stars: 5,
    image: "/img/profilepic6.webp"
  },
])

</script>

<template>
  <section class="reviews-bg">
    <div class="reviews-wrapper">

      <!-- EGNE ANMELDELSER -->
      <div class="reviews-block">
        <h1>VORES EGNE KUNDEANMELDELSER</h1>
        <h2 class="subtitle">DET HER SIGER VORES KUNDER</h2>

        <div class="review-list">
          <div
            v-for="(review, i) in localReviews"
            :key="`local-${i}`"
            class="review-card"
          >
            <div class="avatar-block">
              <div class="avatar">
                <img :src="review.image" alt="Kunde" />
              </div>
              <p class="name">{{ review.name }}</p>
            </div>

            <div class="review-content">
              <p class="text">{{ review.text }}</p>

              <div class="stars">
                <span
                  v-for="n in 5"
                  :key="n"
                  :class="{ active: n <= review.stars }"
                >
                  ★
                </span>
              </div>
            </div>
          </div>
        </div>

      <div class="flex-center" style="margin-top: 1.5rem;">
  <a 
    href="https://nassau.dk/referencer/case-garageporte/" 
    class="cta"
  >
    SE FLERE ANMELDELSER
  </a>
</div>

      </div>

      <!-- TRUSTPILOT -->
      <div class="reviews-block trustpilot">

        <h1>TRUSTPILOT</h1>
        <h2 class="subtitle">4.8 STJERNER PÅ TRUSTPILOT</h2>

        <div class="tp-row">

          <!-- VENSTRE: REVIEWS -->
          <div class="tp-reviews">
            <div
              v-for="(review, i) in trustpilotReviews"
              :key="`tp-${i}`"
              class="review-card"
            >
              <div class="avatar-block">
                <div class="avatar">
                  <img :src="review.image" alt="Kunde" />
                </div>
                <p class="name">{{ review.name }}</p>
              </div>

              <div class="review-content">
                <p class="text">{{ review.text }}</p>

                <div class="stars">
                  <span
                    v-for="n in 5"
                    :key="n"
                    :class="{ active: n <= Number(review.stars) }"
                  >
                    ★
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- HØJRE: LOGO -->
          <div class="tp-logo-wrapper">
            <img src="/img/trustpilot.png" alt="Trustpilot logo" class="tp-logo" />
          </div>

        </div>

       <div class="flex-center" style="margin-top: 1.5rem;">
  <a 
    href="https://nassau.dk/referencer/case-garageporte/" 
    class="cta"
  >
    SE FLERE ANMELDELSER
  </a>
</div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* ⭐ BAGGRUNDSCONTAINER ⭐ */
.reviews-bg {
  background: var(--color-neutral-light);
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 2rem 0;
}

/* ⭐ GRID – to lige store kolonner ⭐ */
@media (min-width: 900px) {
  .reviews-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr; /* lige store */
    gap: 1rem;
  }
}

/* ⭐ BLOKKE ⭐ */
.reviews-block {
  background: #d1d1d1);
  padding: 1.5rem;
  color: white; 
}

/* ⭐ TEKST ⭐ */
p, .name {
  color: white !important;
}

/* ⭐ REVIEW LIST ⭐ */
.review-list,
.tp-reviews {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* ⭐ REVIEW CARD ⭐ */
.review-card {
  background: #727272;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem; /* større afstand mellem avatar og tekst */
  align-items: flex-start;
}

/* ⭐ AVATAR ⭐ */
.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  flex-shrink: 0;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.4rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ⭐ REVIEW CONTENT ⭐ */
.review-content {
  flex: 1;
  max-width: 95%; /* Trustpilot reviews bliver bredere */
}

.text {
  margin-bottom: 0.5rem;
}

/* ⭐ STJERNER ⭐ */
.stars {
  display: flex;
  gap: 2px;
  color: #ffffff66;
}

.stars span.active {
  color: #ffb400;
}

/* ⭐ SIDE-OM-SIDE ⭐ */
.tp-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
}

/* ⭐ LOGO ⭐ */
.tp-logo-wrapper {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  margin-top: 12rem; /* flyt logoet længere ned */
}

.tp-logo {
  width: 150px;
  max-width: 100%;
}

.cta {
background: var(--color-cta-red);
color: var(--color-white);
padding: 0.9rem 1.8rem;
border-radius: 8px;
margin-top: 1.5rem;
  
}

.cta:hover {
  background: #e0a000;       /* mørkere gul ved hover */
  transform: translateY(-2px);
}

.cta:active {
  transform: translateY(0);
  background: #c98c00;
}
</style>
