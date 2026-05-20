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
  <section class="reviews-wrapper">

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

      <button class="btn">SE FLERE ANMELDELSER</button>
    </div>

    <!-- TRUSTPILOT -->
    <div class="reviews-block trustpilot">

      <h1>TRUSTPILOT</h1>
      <h2 class="subtitle">4.8 STJERNER PÅ TRUSTPILOT</h2>

      <!-- ⭐ SIDE-OM-SIDE PÅ MOBIL OG DESKTOP ⭐ -->
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
          <img src="/img/trustpilot.webp" alt="Trustpilot logo" class="tp-logo" />
        </div>

      </div>

      <button class="btn">SE FLERE ANMELDELSER</button>
    </div>

  </section>
</template>

<style scoped>
/* GRID LAYOUT */
@media (min-width: 900px) {
  .reviews-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    padding: 3rem 4rem;
    align-items: start;
  }
}

/* BLOKKE */
.reviews-block {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.subtitle {
  margin-top: -4px;
  margin-bottom: 1rem;
  color: #666;
}

/* REVIEW LIST */
.review-list,
.tp-reviews {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.review-card {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
}

/* AVATAR */
.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  flex-shrink: 0;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.4rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name {
  font-weight: 600;
  text-align: center;
}

/* REVIEW CONTENT */
.review-content {
  flex: 1;
}

.text {
  margin-bottom: 0.5rem;
  color: #444;
}

/* STJERNER */
.stars {
  display: flex;
  gap: 2px;
  color: #999;
}

.stars span {
  font-size: 1.1rem;
  color: inherit;
}

.stars span.active {
  color: #ffb400;
}

/* KNAP */
.btn {
  margin-top: 1.2rem;
  background: #d62828;
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* ⭐ SIDE-OM-SIDE PÅ MOBIL ⭐ */
.tp-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
}

/* LOGO */
.tp-logo-wrapper {
  display: flex;
  justify-content: center;   /* centrér logoet horisontalt */
  align-items: flex-start;
  width: 100%;
  margin-top: 12.5rem;
}

.tp-logo {
  width: 140px;
  max-width: 100%;
}

/* DESKTOP: lidt mere luft */
@media (min-width: 900px) {
  .tp-row {
    gap: 2rem;
  }
}
</style>
