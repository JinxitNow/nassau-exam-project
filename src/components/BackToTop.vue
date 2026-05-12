<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const progress = ref(0);
const isVisible = ref(false);

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  progress.value = scrolled;

  // Button erst anzeigen, wenn man runter scrollt
  isVisible.value = scrollTop > 120;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<template>
  <button
    class="backtotop"
    :class="{ active: isVisible }"
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <!-- PROGRESS CIRCLE -->
    <svg class="progress" viewBox="0 0 100 100">
      <circle class="bg" cx="50" cy="50" r="45" />
      <circle
        class="indicator"
        cx="50"
        cy="50"
        r="45"
        :style="{ strokeDashoffset: 283 - (283 * progress) / 100 }"
      />
    </svg>

    <!-- ARROW -->
   <svg class="arrow" viewBox="0 0 24 24">
  <path
    d="M12 3 L12 21 M5 10 L12 3 L19 10"
    stroke="var(--color-cta-red)"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
</svg>

  </button>
</template>

<style scoped>
.backtotop {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  cursor: pointer;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.25s ease, transform 0.25s ease;

  z-index: 9999;
  padding: 0;
}

.backtotop.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* SVG */
.progress {
  width: 48px;
  height: 48px;
  transform: rotate(-90deg);
}

.bg {
  fill: none;
  stroke: transparent;
  stroke-width: 6;
}

.indicator {
  fill: none;
  stroke: var(--color-cta-red); /* euer CTA-Rot */
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 0.2s linear;
}

/* ARROW */
.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
  pointer-events: none;
}


/* MOBILE VERSION */
@media (max-width: 768px) {
  .backtotop {
    right: 16px;
    bottom: 16px;
    width: 38px;
    height: 38px;
  }

  .progress {
    width: 38px;
    height: 38px;
  }

  .arrow {
    width: 18px;
    height: 18px;
  }
}

</style>
