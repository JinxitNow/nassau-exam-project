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

        <div>
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
        </div>

        <div class="flex-center">
          <a
            href="https://nassau.dk/referencer/case-garageporte/"
            class="cta"
          >
            SE FLERE ANMELDELSER
          </a>
        </div>

      </div>

      <!-- TRUSTPILOT -->
      <div class="reviews-block">

        <div>
          <h1>TRUSTPILOT</h1>
          <h2 class="subtitle">4.8 STJERNER PÅ TRUSTPILOT</h2>

          <div class="tp-row">

            <!-- REVIEWS -->
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

            <!-- LOGO -->
            <div class="tp-logo-wrapper">
              <img
                src="/img/trustpilot-logo-icon.svg"
                alt="Trustpilot logo"
                class="tp-logo"
              />
            </div>

          </div>
        </div>

        <div class="flex-center">
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

.text::before {
  content: "“";
}

.text::after {
  content: "”";
}

/* ============================
   SECTION BACKGROUND
============================ */
.reviews-bg {
  background: var(--color-neutral-light);

  width: 100vw;

  margin-left: 50%;
  transform: translateX(-50%);

  padding-top: 3rem;
  padding-bottom: 3rem;
}

/* ============================
   WRAPPER
============================ */
.reviews-wrapper {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 4rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* ============================
   REVIEW COLUMN
============================ */
.reviews-block {
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ============================
   TITLES
============================ */
.subtitle {
  margin-bottom: 2rem;
}

/* ============================
   REVIEW LIST
============================ */
.review-list,
.tp-reviews {
  display: flex;
  flex-direction: column;

  gap: 1rem;
}

/* ============================
   REVIEW CARD
============================ */
.review-card {
  background: var(--color-neutral-dark);

  padding: 1.2rem;

  display: flex;
  gap: 1rem;

  align-items: flex-start;

  min-height: 130px;
}

/* ============================
   AVATAR BLOCK
============================ */
.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90px;

  flex-shrink: 0;
}

/* ============================
   AVATAR
============================ */
.avatar {
  width: 58px;
  height: 58px;

  border-radius: 50%;

  overflow: hidden;

  margin-bottom: 0.5rem;
}

.avatar img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

/* ============================
   NAME
============================ */
.name {
  color: var(--color-white);

  margin: 0;

  text-align: center;
}

/* ============================
   REVIEW CONTENT
============================ */
.review-content {
  flex: 1;
  min-width: 0;
    padding-right: 1.5rem; 

}

/* ============================
   REVIEW TEXT
============================ */
.text {
  color: var(--color-white);
font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.8rem;

  line-height: 1.5;
}

/* ============================
   STARS
============================ */
.stars {
  display: flex;
  gap: 2px;
 font-size: 1.8rem;
  color: #ffffff50;
}

.stars span.active {
  color: #ffb400;
}

/* ============================
   TRUSTPILOT ROW
============================ */
.tp-row {
  display: flex;

  align-items: center;

  justify-content: flex-start;

  gap: 1.5rem;
}

/* ============================
   TRUSTPILOT LOGO
============================ */
.tp-logo-wrapper {
  width: 135px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.tp-logo {
  width: 100%;
  height: auto;
}

/* ============================
   CTA BUTTON AREA
============================ */
.flex-center {
  margin-top: 2rem;
}

/* ============================
   DESKTOP
============================ */
@media (min-width: 768px) {

  .reviews-wrapper {
    display: grid;

    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

    gap: 4rem;

    align-items: start;

    padding-left: 3.8rem;
    padding-right: 3.8rem;
  }

  /* HVID LINJE I MIDTEN */
  .reviews-wrapper::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: 50%;

    width: 2px;

    background: var(--color-white);

    transform: translateX(-50%);
  }

}

/* ============================
   MOBILE
============================ */
@media (max-width: 767px) {

  .reviews-wrapper {
    gap: 4rem;
  }

  /* HVID LINJE MELLEM SEKTIONER */
  .reviews-block {
    position: relative;

    padding-bottom: 2rem;
  }

  .reviews-block:first-child::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;

    bottom: -2rem;

    height: 2px;

    background: var(--color-white);
  }

  .tp-row {
    flex-direction: column;

    align-items: stretch;
  }

  .tp-logo-wrapper {
    width: 100%;

    margin-top: 1rem;
  }

  .tp-logo {
    max-width: 150px;
  }

  .review-card {
    min-height: auto;
  }

}

</style>