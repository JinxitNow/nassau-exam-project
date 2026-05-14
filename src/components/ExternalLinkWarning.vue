<script setup>
import { ref } from "vue"

const isOpen = ref(false)
const targetUrl = ref("")

function openWarning(url) {
  targetUrl.value = url
  isOpen.value = true
}

function proceed() {
  window.open(targetUrl.value, "_blank")
  isOpen.value = false
}

function cancel() {
  isOpen.value = false
}

defineExpose({ openWarning })
</script>

<template>
  <div v-if="isOpen" class="overlay">
    <div class="modal">
      <h2>Du er på vej ud af vores prototype 🛠️</h2>

      <p class="line">
        Den næste side er en rigtig side —
        altså sådan en, der faktisk findes.
      </p>

      <p class="line">
        Hvis du vil tilbage til vores test,
        så brug browserens tilbage‑knap.
      </p>

      <p class="line small">
        Bare rolig, vi gemmer din plads ✨
      </p>

      <div class="buttons">
        <button class="confirm" @click="proceed">Fortsæt</button>
        <button class="cancel" @click="cancel">Annuller</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* ----------------------------- */
/* MOBILE FIRST (default styles) */
/* ----------------------------- */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  backdrop-filter: blur(3px);
}

.modal {
  background: #ffffff;
  padding: 1.8rem;
  border-radius: 12px;
  width: 90%;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.25s ease-out;
}

.modal h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--color-black);
}

.modal p {
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--color-black);
}

.buttons {
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

button {
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: 0.2s ease;
  width: 100%;
}

/* NASSAU Rot */
.confirm {
  background: var(--color-cta-red);
  color: white;
}

.confirm:hover {
  background: var(--color-cta-red);
  opacity: 0.9;
}

/* Grauer Cancel Button */
.cancel {
  background: #e5e5e5;
  color: var(--color-black);
}

.cancel:hover {
  background: #d4d4d4;
}

/* ----------------------------- */
/* DESKTOP (ab 768px)            */
/* ----------------------------- */

@media (min-width: 768px) {
  .modal {
    padding: 2.5rem;
    max-width: 420px;
  }

  .modal h2 {
    font-size: 1.4rem;
  }

  .modal p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .buttons {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  button {
    width: auto;
    min-width: 120px;
  }
}

/* ----------------------------- */
/* Animation                     */
/* ----------------------------- */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
