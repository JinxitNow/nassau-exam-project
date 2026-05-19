<script setup>
import { ref, computed } from "vue";
import EmployeeCard from "@/components/EmployeeCard.vue";

// HomeView liefert uns eine LISTE, nicht nur 1 Person
const props = defineProps({
  employees: {
    type: Array,
    default: () => []
  }
});

// Slider Index
const slideIndex = ref(0);

// Immer 2 Karten pro Slide
const slides = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.employees.length; i += 2) {
    chunks.push(props.employees.slice(i, i + 2));
  }
  return chunks;
});

// Navigation
function nextSlide() {
  if (slideIndex.value < slides.value.length - 1) {
    slideIndex.value++;
  }
}

function prevSlide() {
  if (slideIndex.value > 0) {
    slideIndex.value--;
  }
}
</script>

<template>
  <section class="local-expert">

    <h1>FIND DIN LOKALE PORT EKSPERT</h1>
    <p>Få fat i din lokale port ekspert, få service og se hvem der er tættest på dig.</p>

    <div class="buttons">
      <button class="cta">Hurtig portservice / reparation</button>
      <button class="cta">Vagtcentral</button>
    </div>

    <!-- SLIDER -->
    <div v-if="employees.length" class="slider">

      <!-- LEFT ARROW -->
      <button
        class="arrow left"
        @click="prevSlide"
        :disabled="slideIndex === 0"
      >
        ‹
      </button>

      <!-- SLIDE CONTENT -->
      <div class="slide-window">
        <div
          class="slide-track"
          :style="{ transform: `translateX(-${slideIndex * 100}%)` }"
        >
          <div
            v-for="(pair, index) in slides"
            :key="index"
            class="slide"
          >
            <EmployeeCard
              v-for="emp in pair"
              :key="emp.id"
              :employee="emp"
            />
          </div>
        </div>
      </div>

      <!-- RIGHT ARROW -->
      <button
        class="arrow right"
        @click="nextSlide"
        :disabled="slideIndex === slides.length - 1"
      >
        ›
      </button>

    </div>

    <!-- FALLBACK -->
    <p v-else>Ingen medarbejdere fundet…</p>

  </section>
</template>

<style scoped>
.local-expert {
  width: 50%;
}

/* CTA Buttons */
.buttons {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

/* SLIDER */
.slider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}

/* Arrows */
.arrow {
  background: var(--color-secondary-teal);
  color: var(--color-white);
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}

.arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

/* Slide window */
.slide-window {
  overflow: hidden;
  width: 100%;
}

/* Track */
.slide-track {
  display: flex;
  transition: transform 0.3s ease;
}

/* Each slide contains 2 cards */
.slide {
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Mobile: 1 Karte pro Reihe */
@media (max-width: 768px) {
  .local-expert {
    width: 100%;
  }

  .slide {
    grid-template-columns: 1fr;
  }
}
</style>
