<script setup>
import { ref } from "vue";

const isVisible = ref(true);

function closeBar() {
  isVisible.value = false;
}
</script>

<template>
  <div v-if="isVisible" class="newsbar-wrapper">
    <div class="newsbar">
      <h2 class="news-text">
        🎉 NASSAU HAR FØDSELSDAG – SE NU PÅ VORES FØDSELSDAGSTILBUD
      </h2>

      <button class="close-btn" @click="closeBar">×</button>
    </div>
  </div>
</template>

<style scoped>
/* WRAPPER entfernt globales body-padding */
.newsbar-wrapper {
  width: 100vw;              /* volle Bildschirmbreite */
  margin-left: calc(-1 * var(--body-padding, 1.5rem));
  margin-right: calc(-1 * var(--body-padding, 1.5rem));
}

/* MOBILE FIRST */
.newsbar {
  width: 100%;
  background: var(--color-cta-red);
  color: var(--color-white);

  padding: 10px 14px;

  display: flex;
  align-items: center;
  justify-content: center; /* Text zentriert */
  position: relative;
}

.news-text {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center; /* Text wirklich mittig */
  line-height: 1.3;
  color: var(--color-white);
}

/* Close button */
.close-btn {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  background: #77251D;
  border: none;
  color: var(--color-cta-red);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
}

/* DESKTOP */
@media (min-width: 768px) {
  .newsbar-wrapper {
    margin-left: calc(-1 * 3.8rem);
    margin-right: calc(-1 * 3.8rem);
  }

  .newsbar {
    padding: 14px 20px;
  }

  .news-text {
    font-size: 18px;
  }

  .close-btn {
    font-size: 24px;
  }
}
</style>
