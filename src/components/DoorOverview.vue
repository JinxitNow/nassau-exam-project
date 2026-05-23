<script setup>
import { ref } from "vue"

const props = defineProps({
  doors: {
    type: Array,
    required: true
  }
})

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="door-overview">
    <h2 class="overview-title">PORTOVERSIGT</h2>
    <p class="overview-subtitle">
      HER FINDER DU BESKRIVELSER AF DE FORSKELLIGE TYPER AF PORTE SOM NASSAU KAN LEVERE.
    </p>

    <div class="accordion">
      <div 
        v-for="(door, i) in doors" 
        :key="i" 
        class="accordion-item"
      >
        <button class="accordion-header" @click="toggle(i)">
          <span>{{ door.title }}</span>
          <span class="arrow" :class="{ open: openIndex === i }">⌄</span>
        </button>

        <div 
          class="accordion-content" 
          :class="{ open: openIndex === i }"
        >
          <p>{{ door.text }}</p>

          <img 
            v-if="door.image" 
            :src="door.image" 
            alt="" 
            class="door-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ============================
   MOBILE FIRST
============================ */

.door-overview {
  padding: 2rem 0;
}

.overview-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.overview-subtitle {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  color: var(--color-black);
}

/* Accordion container */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Single card */
.accordion-item {
  background: var(--color-neutral-light);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
}

/* Header */
.accordion-header {
  width: 100%;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 1rem;
  font-size: 1rem;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

/* Arrow animation */
.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}

/* Content */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  background: var(--color-white);
  padding: 0 1rem;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.accordion-content.open {
  max-height: 500px;
  padding: 1rem;
}

/* Image inside card */
.door-image {
  width: 100%;
  margin-top: 1rem;
  border-radius: 6px;
}

/* ============================
   DESKTOP VERSION
============================ */
@media (min-width: 768px) {
  .accordion {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* <<< IMMER 3 SPALTEN */
    gap: 1.5rem;
  }
}
</style>
