<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: '/img/slideshow1.webp',
    title: 'EN PORSCHEBOX',
    text: 'Arkitekt Bruno Jakobsen valgte NASSAU Softline og 9000G i forbindelse med hans projekt The Nordic BarnHouse',
  },

  {
    image: '/img/slideshow2.webp',
    title: 'MULIGHED FOR SPECIALFARVER',
    text: 'Familie Larsen har valgt en .........',
  },

  {
    image: '/img/slideshow3.webp',
    title: 'HØJ KVALITET',
    text: 'Haderslev Kaserne valgt NASSAU porte, da de er udviklet til at holde i mange år og kræver minimal vedligeholdelse.',
  },

  {
    image: '/img/slideshow4.webp',
    title: 'MODERNE DESIGN',
    text: 'Et moderne udtryk og høj funktionalitet giver både bedre komfort og flottere facade til hjemmet.',
  },

  {
    image: '/img/slideshow5.webp',
    title: 'KVALITET, STABILITET OG HASTIGHED',
    text: 'Valget faldt på NASSAU 9000 energy ledhejseport, da Falck skulle have nye porte i',
  },

 {
    image: '/img/slideshow6.webp',
    title: 'HØJ KVALITET',
    text: 'Portene er udviklet til at holde i mange år og kræver minimal vedligeholdelse.',
  },

   {
    image: '/img/slideshow7.webp',
    title: 'EN DRØM BLEV TIL VIRKELIGHED',
    text: 'Valget faldt på NASSAU Woodgrain garageporte med panoramaruder og sprosser, da tidligere racerkører Nicolas Kiesas skulle vælge porte til hans nye garage.',
  },

    {
    image: '/img/slideshow8.webp',
    title: 'UDSIGT & PERFEKT LYSINDFALD',
    text: 'Miccom DeSign & Creations valgte en 9000G ledhejseporte til deres kontor/værksted',
  },

 {
    image: '/img/slideshow9.webp',
    title: 'FLEKSIBEL TILPASNING',
    text: 'Familie Jensen er nybyggere og havde brug for en port der kunne passes ind i arkitektens planer og derfor faldt valget på en NASSAU Classic port',
  },

 {
    image: '/img/slideshow10.webp',
    title: 'STABIL KVALITET',
    text: 'NASSAU Panorama Ledhejseporte i vaskehaller - En port med maksimalt lysindfald',
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


/* MOBILVISNING*/

@media (max-width: 900px) {

  .slider-container {
    position: relative;
    overflow: hidden;
    background-color: var(--color-primary);
    min-height: 320px;
    display: flex; /* teksten skal ikke længere stå side om side */
    align-items: center;
  }

  /* BILLEDE SOM BAGGRUND */
  .slide-image-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9; /* mørkt vandmærke-look */
  }

  /* MØRKT OVERLAY */
  .slide-image-wrapper::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 43, 67, 0.55);
  }

  /* TEKST OVENPÅ */
  .slide-content {
    position: relative;
    z-index: 2;
    width: 100%;
  }
  }

/*DESKTOPVISNING*/

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
  max-width: 85%;
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

.slide-image-wrapper {
  flex: 7;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

/* DESKTOP ONLY */
@media (min-width: 901px) {

  .slide-image-wrapper {
    flex: 7;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

}

</style>