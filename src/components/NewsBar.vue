<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const isVisible = ref(true)
const router = useRouter()

function closeBar() {
  isVisible.value = false
}

function goToBirthday() {
  router.push("/birthday-campaign")
}
</script>

<template>
  <div v-if="isVisible" class="newsbar-wrapper">
    <!-- Ganze Bar klickbar -->
    <div class="newsbar" @click="goToBirthday">
      <h2 class="news-text">
        🎉 NASSAU HAR FØDSELSDAG – SE NU PÅ VORES FØDSELSDAGSTILBUD
      </h2>

      <!-- X darf NICHT navigieren -->
      <button class="close-btn" @click.stop="closeBar">×</button>
    </div>
  </div>
</template>

<style scoped>
/* WRAPPER entfernt globales body-padding */
.newsbar-wrapper {
  width: 100vw;
  margin-left: calc(-1 * var(--body-padding, 1.5rem));
  margin-right: calc(-1 * var(--body-padding, 1.5rem));
}

/* MOBILE FIRST */
.newsbar {
  width: 100%;
  background: var(--color-cta-red);
  color: var(--color-white);

  padding: 10px 14px;
  padding-right: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer; /* <<< wichtig */
}

.news-text {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  color: var(--color-white);
}

/* Close button */
.close-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  background: #77251d;
  border: none;
  color: var(--color-cta-red);
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  margin-right: 1.5rem;
}

/* DESKTOP */
@media (min-width: 768px) {
  .newsbar-wrapper {
    margin-left: calc(-1 * 3.8rem);
    margin-right: calc(-1 * 3.8rem);
  }

  .newsbar {
    padding: 14px 20px;
    padding-right: 50px;
  }

  .close-btn {
    right: 10px;
    font-size: 24px;
    margin-right: 3.8rem;
  }
}
</style>
