<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

// 🔵 Viser banneret første gang hvis der ikke er taget stilling
onMounted(() => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) visible.value = true
})

// 🔵 Gemmer accept og lukker banner
const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'accepted')
  visible.value = false
}

// 🔵 Gemmer afvisning og lukker banner
const declineCookies = () => {
  localStorage.setItem('cookieConsent', 'declined')
  visible.value = false
}

// 🔵 Åbner banneret igen når man klikker på cookie-ikonet
const openCookies = () => {
  visible.value = true
}
</script>

<template>
  <!-- COOKIE ICON (kun dette ændres) -->
  <button class="cookie-icon" @click="openCookies">
    <img src="/icons/icon-cookie.svg" alt="Cookie indstillinger" />
  </button>

  <!-- COOKIE BANNER (layout uændret, kun position ændret) -->
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

/* ============================================================
   COOKIE ICON – flyttet lidt op fra bunden
============================================================ */

/* 🔵 Ikonet sidder stadig i venstre hjørne, men lidt højere */
.cookie-icon {
  position: fixed;   /* ← sticky nederst venstre */
  left: 0;           /* ← helt ud til venstre */
  bottom: 20px;      /* ← LIDT op fra bunden (ændringen du ønskede) */
  padding: 0;        /* ← ingen padding */
  margin: 0;         /* ← ingen margin */
  background: none;
  border: none;
  cursor: pointer;
  z-index: 9998;
}

.cookie-icon img {
  width: 32px;
  height: 32px;
  display: block;
}

/* Mobil: mindre ikon */
@media (max-width: 767px) {
  .cookie-icon img {
    width: 22px;
    height: 22px;
  }
}

/* ============================================================
   COOKIE BANNER – uændret styling og sticky position
============================================================ */

.cookie-banner {
  position: fixed;        /* ← sticky */
  left: 20px;             /* ← svæver lidt fra venstre */
  bottom: 20px;           /* ← svæver lidt fra bunden */
  margin: 0;

  /* 🔵 ALT DETTE ER UÆNDRET */
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  z-index: 9999;
}

/* ============================================================
   COOKIE CONTENT – uændret
============================================================ */

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

/* Desktop layout */
@media (min-width: 768px) {
  .cookie-banner {
    max-width: 520px;
    left: 20px;
    bottom: 20px;
  }

  .cookie-content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
