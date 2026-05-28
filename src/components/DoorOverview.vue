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
    <h1 class="overview-title">PORTOVERSIGT</h1>
    <h2 class="overview-subtitle">
      HER FINDER DU BESKRIVELSER AF DE FORSKELLIGE TYPER AF PORTE SOM NASSAU KAN LEVERE.
    </h2>

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

.overview-title {
  margin-bottom: 0.5rem;
}

.overview-subtitle {
  margin-bottom: 1.5rem;
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
  display: none;
  background: white;
  padding: 0 1rem;
}

.accordion-content.open {
  display: block;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    align-items: start;
    grid-auto-rows: auto;
  }

  /* ⭐ TEXT + BILD NEBENEINANDER */
  .accordion-content.open {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  /* ⭐ TEXT */
  .accordion-content.open p {
    flex: 1;
    margin: 0;
  }

  /* ⭐ BILD RECHTS */
  .door-image {
    width: 140px;
    height: 140px;

    object-fit: cover;

    margin-top: 0;

    flex-shrink: 0;

    border-radius: 6px;
  }

}
</style>
