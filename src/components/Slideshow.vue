<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    image: '/img/slideshow1.webp',
    title: 'EN PORSCHEBOX',
    text: 'Arkitekt Bruno Jakobsen valgte en NASSAU 9000G i fuld sort til sin ikoniske Barnhouse BOX — en garage skabt til hans Porsche og integreret i The Nordic Barnhouse Project. Portens sorte profiler og skinner matcher husets rene linjer og naturlige materialer, og skaber en eksklusiv helhed, der er blevet fremhævet i både TV2 og Porsches 9:11 Magazine.',
    link: 'https://nassau.dk/arkitektens-hus/',
    linkText: 'Se casen her →'
  },
  {
    image: '/img/slideshow2.webp',
    title: 'MULIGHED FOR SPECIALFARVER',
    text: 'Familien valgte en NASSAU port speciallakeret i beigebrun for at matche husets arkitektur og farvepalette. Med et hav af farvemuligheder kunne porten tilpasses præcist, så den fremstår som en naturlig del af facaden og giver et harmonisk, eksklusivt udtryk.',
  },
  {
    image: '/img/slideshow3.webp',
    title: 'HØJ KVALITET',
    text: 'Haderslev Kaserne valgte NASSAU porte, fordi de er udviklet til at holde i mange år og kræver minimal vedligeholdelse. Portene leverer stabil drift, høj sikkerhed og en robust konstruktion, der passer til de daglige krav i et militært miljø. En løsning der sikrer pålidelighed – år efter år.',
  },
  {
    image: '/img/slideshow4.webp',
    title: 'EKSKLUSIVT DESIGN',
    text: 'Familien valgte en NASSAU Softline Granit garageport for at få et moderne udtryk, høj funktionalitet og bedre komfort i hverdagen. Den eksklusive granit/sablé overflade og den vandrette profilering giver et stilrent look, der løfter hele facaden. Med 44 mm isolerede paneler, robuste tætningslister og sortlakerede profiler får familien en af markedets bedst isolerede porte – en løsning der både ser godt ud og holder på varmen.',
  },
  {
    image: '/img/slideshow5.webp',
    title: 'KVALITET, STABILITET OG HASTIGHED',
    text: 'Da Falck skulle have nye porte, faldt valget på NASSAU 9000 Energy – en port udviklet til intensiv, daglig drift. Den høje isoleringsevne, stabile konstruktion og hurtige åbne‑/lukketider giver en driftssikker løsning, der understøtter Falcks behov for effektivitet og pålidelighed i alle situationer.',  },
  {
    image: '/img/slideshow6.webp',
    title: 'KLASSISK PORT',
    text: 'Familien valgte en NASSAU Classic garageport for at få en løsning, der både er tidløs, robust og nem at tilpasse til husets stil. Den elegante stucco‑struktur og de vandrette profiler giver et harmonisk udtryk, mens de 44 mm isolerede paneler sikrer høj varmeisolering året rundt. Med 11 flotte standardfarver og en konstruktion i stærk aluminium får familien en port, der kombinerer fleksibilitet, kvalitet og lang levetid.',
  },
  {
    image: '/img/slideshow7.webp',
    title: 'EN DRØM BLEV TIL VIRKELIGHED',
    text: 'Tidligere racerkører Nicolas Kiesa valgte en NASSAU Woodgrain garageport med panoramaruder og sprosser til sin nye garage. Portens design giver et eksklusivt udtryk, masser af naturligt lys og en finish, der matcher garagens arkitektur. En løsning der kombinerer funktionalitet, kvalitet og et visuelt udtryk, der passer perfekt til hans passion for biler.',
    link: 'https://nassau.dk/port/nicolas-kiesa-garage/',
    linkText: 'Se casen her →'
  },
  {
    image: '/img/slideshow8.webp',
    title: 'UDSIGT & PERFEKT LYSINDFALD',
    text: 'Miccom DeSign & Creations valgte en NASSAU 9000G ledhejseport til deres kontor og værksted. Porten giver et moderne udtryk, masser af lys og en driftssikker løsning, der passer perfekt til en kreativ virksomhed med høje krav til både funktionalitet og æstetik.',
  },
  {
    image: '/img/slideshow9.webp',
    title: 'FLEKSIBEL TILPASNING',
    text: 'Familie Jensen er nybyggere og havde brug for en garageport, der kunne passe præcist ind i arkitektens planer. Valget faldt på en NASSAU Classic port, som med sit tidløse design, stærke materialer og fleksible farvemuligheder blev den perfekte løsning til deres nye hjem.',
  },
    {
    image: '/img/slideshow10.webp',
    title: 'STABIL KVALITET',
    text: 'NASSAU Panorama ledhejseporte er valgt til vaskehaller, hvor maksimalt lysindfald og høj driftssikkerhed er afgørende. De store glasfelter giver et lyst og åbent arbejdsmiljø, mens den robuste konstruktion sikrer stabil funktion – selv i fugtige og krævende omgivelser. En port skabt til både holdbarhed og synlighed.',
  }
]

const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goToSlide(index) {
  currentSlide.value = index
}

let slideInterval

onMounted(() => {
  slideInterval = setInterval(nextSlide, 8000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<template>
  <div class="slideshow-wrapper">

    <div class="slider-container">

      <!-- TEKST -->
      <div class="slide-content">
        <h2>{{ slides[currentSlide].title }}</h2>
        <p>{{ slides[currentSlide].text }}</p>

        <a
          v-if="slides[currentSlide].link"
          :href="slides[currentSlide].link"
          target="_blank"
          rel="noopener noreferrer"
          class="slide-link"
        >
          {{ slides[currentSlide].linkText }}
        </a>
      </div>

      <!-- BILLEDE -->
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
      <button @click="prevSlide">◀</button>

      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>

      <button @click="nextSlide">▶</button>
    </div>

  </div>
</template>

<style scoped>

/* WRAPPER */
.slideshow-wrapper {
  width: 100%;
  margin: 60px auto;
}

/* ————————————————
   MOBILE FIRST
——————————————— */

.slider-container {
  position: relative;
  overflow: hidden;
  background-color: var(--color-primary);
  min-height: 320px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* BILLEDE SOM BAGGRUND PÅ MOBIL */
.slide-image-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.slide-image-wrapper::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 43, 67, 0.55);
}

/* TEKST */
.slide-content {
  position: relative;
  z-index: 2;
  max-width: 90%;
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

.slide-link {
  color: white;
  font-style: italic;
  text-decoration: underline;
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

/* ————————————————
   DESKTOP
——————————————— */

@media (min-width: 900px) {

  .slider-container {
    flex-direction: row;
    gap: 40px;
    padding: 32px;
    align-items: stretch;
  }

  .slide-content {
    flex: 3;
    max-width: 85%;
  }

  .slide-image-wrapper {
    position: relative;
    flex: 7;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    z-index: 1;
  }

  .slide-image-wrapper::after {
    display: none;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 1;
  }
}

</style>
