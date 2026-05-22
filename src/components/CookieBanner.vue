<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) visible.value = true
})

const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  visible.value = false
}

const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  visible.value = false
}

const openCookies = () => {
  visible.value = true
}
</script>

<template>
  <!-- COOKIE ICON -->
  <button class="cookie-icon" @click="openCookies">
    <img src="/icons/icon-cookie.svg" alt="Cookie indstillinger" />
  </button>

  <!-- COOKIE BANNER -->
  <div v-if="visible" class="cookie-banner">
    <div class="cookie-content">

      <div class="cookie-text">
        <h3>Vi bruger cookies</h3>
        <p>
          Denne hjemmeside bruger cookies til statistik,
          funktionalitet og forbedring af brugeroplevelsen.
        </p>
      </div>

      <div class="cookie-buttons">
        <button class="btn decline" @click="declineCookies">Afvis</button>
        <button class="btn accept" @click="acceptCookies">Accepter</button>
      </div>

    </div>
  </div>
</template>

<style scoped>

/* COOKIE BANNER – mobil */
.cookie-banner {
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

/* COOKIE ICON – default (desktop) */
.cookie-icon {
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 9998;
  padding: 0;
}

.cookie-icon img {
  width: 32px;   /* desktop størrelse */
  height: 32px;
  display: block;
}

/* Mobil: mindre ikon */
@media (max-width: 767px) {
  .cookie-icon img {
    width: 22px;   /* mindre på mobil */
    height: 22px;
  }
}

.cookie-content {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cookie-text h3 {
  margin: 0 0 8px;
}

.cookie-text p {
  margin: 0;
  line-height: 1.2;
}

.cookie-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.accept {
  background: var(--color-primary);
  color: white;
}

.decline {
  background: #eee;
}

/* Desktop */
@media (min-width: 768px) {
  .cookie-banner {
   max-width: 520px;
   margin-left: 0.5rem;
   margin-right: auto;
  }

  .cookie-icon {
  left: 20px;
  bottom: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 9998;
  margin-left: -4rem;
}
  .cookie-content {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }
}
</style>
