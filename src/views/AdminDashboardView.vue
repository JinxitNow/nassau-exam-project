<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import AdminSidebar from "../components/AdminSidebar.vue";

const router = useRouter();
function goTo(path) {
  router.push(path);
}

onMounted(() => {
  document.body.classList.add("dashboard-active");
});
onUnmounted(() => {
  document.body.classList.remove("dashboard-active");
});
</script>

<template>
  <section class="dashboard-page">

    <!-- HEADER -->
    <div class="dashboard-header">
      <AdminSidebar />

      <div class="dashboard-heading">
        <h1>Admin Dashboard</h1>
        <p class="dashboard-subtitle">Sidst opdateret: 11.05.2026</p>
      </div>
    </div>

    <!-- GRID -->
    <div class="dashboard-grid">

      <!-- EMPLOYEES (FORM + MAP LATER) -->
      <div class="column">
        <h2>Medarbejdere</h2>
        <p>Opret medarbejdere og administrer deres placering.</p>
        <button class="cta" @click="goTo('/admin-employees')">
          Gå til medarbejdere
        </button>
      </div>

      <!-- LEADS FROM QUIZ -->
      <div class="column">
        <h2>Kundehenvendelser</h2>
        <p>Se kunder der ønsker kontakt efter quiz-resultater.</p>
        <button class="cta" @click="goTo('/admin-leads')">
          Gå til henvendelser
        </button>
      </div>

      <!-- STATISTICS -->
      <div class="column">
        <h2>Statistik</h2>
        <p>Se statistik over brugere, quiz og aktivitet.</p>
        <button class="cta" @click="goTo('/statistik')">
          Gå til statistik
        </button>
      </div>

      <!-- TUTORIALS -->
      <div class="column">
        <h2>Manual & Tutorials</h2>
        <p>Se vejledninger til kampagne- og login-funktioner.</p>
        <button class="cta" @click="goTo('/tutorials')">
          Gå til manual
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
body.dashboard-active {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.dashboard-page {
  margin-left: 240px;
  padding: 2rem;
  background-color: var(--color-neutral-light);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.dashboard-heading h1 {
  margin: 0;
}

.dashboard-subtitle {
  margin-top: 0.3rem;
  color: var(--color-neutral-dark);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.column {
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 1.8rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.column h2 {
  margin-bottom: 0.8rem;
}

.column p {
  flex-grow: 1;
  margin-bottom: 1.2rem;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .dashboard-page {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>
