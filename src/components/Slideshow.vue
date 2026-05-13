<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: '/img/slideshow1.webp',
    title: 'EN LØSNING, DER BARE FUNGERER',
    text: 'Familien Jensen fik udskiftet deres gamle garageport med en ny NASSAU ledhejseport, og oplevelsen har været al forventning. De fremhæver især den stille drift og den høje isolering.',
  },

  {
    image: '/img/slideshow2.webp',
    title: 'MODERNE DESIGN',
    text: 'Et moderne udtryk og høj funktionalitet giver både bedre komfort og flottere facade til hjemmet.',
  },

  {
    image: '/img/slideshow3.webp',
    title: 'HØJ KVALITET',
    text: 'Portene er udviklet til at holde i mange år og kræver minimal vedligeholdelse.',
  },

  {
    image: '/img/slideshow4.webp',
    title: 'MODERNE DESIGN',
    text: 'Et moderne udtryk og høj funktionalitet giver både bedre komfort og flottere facade til hjemmet.',
  },

  {
    image: '/img/slideshow5.webp',
    title: 'HØJ KVALITET',
    text: 'Portene er udviklet til at holde i mange år og kræver minimal vedligeholdelse.',
  }

]

const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentSlide.value = index
}

let slideInterval

onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 6000) // 6000ms = 6 sekunder
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <div class="slideshow-wrapper">

    <div class="slider-container">

      <!-- VENSTRE TEKST -->
      <div class="slide-content">

        <h2>
          {{ slides[currentSlide].title }}
        </h2>

        <p>
          {{ slides[currentSlide].text }}
        </p>

        <a href="#">
          Se flere cases her →
        </a>

      </div>

      <!-- HØJRE BILLEDE -->
      <div class="slide-image-wrapper">

        <img
          :src="slides[currentSlide].image"
          alt="Slideshow billede"
          class="slide-image"
        >

      </div>

    </div>

    <!-- NAVIGATION -->
    <div class="slider-navigation">

      <button @click="prevSlide">
        ◀
      </button>

      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>

      <button @click="nextSlide">
        ▶
      </button>

    </div>

  </div>
</template>

<style scoped>

.slideshow-wrapper {
  width: 100%;
  margin: 60px auto;
}

/* BLÅ CONTAINER */

.slider-container {
  background-color: var(--color-primary);
  display: flex;
  gap: 40px;
  padding: 32px;
  align-items: stretch;
}

.slide-content {
  flex: 3;
}

.slide-image-wrapper {
  flex: 7;
}

.slide-content h2 {
  font-size: 32px;
  line-height: 1.1;
  margin-bottom: 24px;
  font-weight: 700;
  color: white;
}

.slide-content p {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
  color: white;
}

.slide-content a {
  color: white;
  text-decoration: none;
  font-style: italic;
}

/* HØJRE BILLEDE */

.slide-image {
  width: 100%;
  display: block;
  border: 4px solid #0094ff;
}

/* NAVIGATION */

.slider-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 24px;
}

.slider-navigation button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #003b5c;
}

/* DOTS */

.dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #003b5c;
  cursor: pointer;
}

.dot.active {
  background-color: #0094ff;
}

/* RESPONSIVE */

@media (max-width: 900px) {

  .slider-container {
    flex-direction: column;
  }

  .slide-image-wrapper,
  .slide-content {
    width: 100%;
  }

  .slide-content h2 {
    font-size: 24px;
  }
}

</style>