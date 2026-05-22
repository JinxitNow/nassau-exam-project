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
    <div class="newsbar" @click="goToBirthday">
      <h2 class="news-text">
        🎉 NASSAU HAR FØDSELSDAG – FEJR DAGEN SAMMEN MED OS I DAG
      </h2>

      <button class="close-btn" @click.stop="closeBar">×</button>
    </div>
  </div>
</template>

<style scoped>

/* ============================
   MOBILE FIRST
============================ */

/* Wrapper entfernt globales body-padding */
.newsbar-wrapper {
  width: 100vw;
  margin-left: calc(-1 * var(--body-padding, 1.5rem));
  margin-right: calc(-1 * var(--body-padding, 1.5rem));
}

/* Bar */
.newsbar {
  width: 100%;
  background: var(--color-cta-red);
  color: var(--color-white);

  padding: 10px 14px;
  padding-right: 40px; /* Platz für X */

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
}

/* Text – MOBILE FIX */
.news-text {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  color: var(--color-white);

  max-width: 80%;
  padding-right: 50px;   /* Platz für X */
  padding-left: 50px;    /* gleicht aus → Text bleibt mittig */
  word-break: break-word;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


/* Close button */
.close-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);

  background: #77251d;
  border: none;
  color: var(--color-cta-red);

  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;

  margin-right: 1.5rem; /* NICHT ändern */
}

/* ============================
   DESKTOP
============================ */
@media (min-width: 768px) {

  .newsbar-wrapper {
    margin-left: calc(-1 * 3.8rem);
    margin-right: calc(-1 * 3.8rem);
  }

  .newsbar {
    padding: 14px 20px;
    padding-right: 50px;
  }

  .news-text {
    font-size: 16px;
    max-width: 100%;     /* Desktop braucht keine Begrenzung */
    padding-right: 0;
  }

  .close-btn {
    right: 10px;
    font-size: 24px;
    margin-right: 3.8rem;
  }
}
</style>
