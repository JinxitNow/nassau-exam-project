<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import LoginShortcuts from '../components/AdminShortcuts.vue'

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
    <div class="dashboard-header">
      <LoginShortcuts />
      <div class="dashboard-heading">
        <h2>Velkommen til Admin Dashboard</h2>
        <p class="dashboard-subtitle">Sidste opdatering: 23.05.2026</p>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="column">
        <h3>Medarbejder</h3>
        <p>Tilføj og rediger medarbejdere</p>
        <button class="primary-btn" @click="goTo('/admin-employees')">
          Administrer medarbejder
        </button>
      </div>

      <div class="column">
        <h3>Henvendelser</h3>
        <p>Henvendelser af kunder</p>
        <button class="primary-btn" @click="goTo('/admin-leads')">
          Gå til Henvendelser
        </button>
      </div>

      <div class="column">
        <h3>Statistikker</h3>
        <p>Se på statistikker</p>
        <button class="primary-btn" @click="goTo('/statistik')">
          Gå til Statistikker
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
  padding: 5rem;
  background-color: var(--color-white);
}

.dashboard-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.dashboard-heading h2 {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin: 0;
}

.dashboard-subtitle {
  font-size: 0.95rem;
  color: var(--color-black);
  margin-top: 0.5rem;
}

/* 3 kolonner i stedet for 4 */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.column {
  background-color: var(--color-primary);
  border-radius: 8px;
  padding: 1.8rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  text-align: left;
}

.column h3 {
  margin-bottom: 1rem;
  color: var(--color-white);
  font-size: 1.1rem;
}

.column p {
  line-height: 1.5;
  flex-grow: 1;
  color: var(--color-white);
}

.primary-btn {
  padding: 0.7rem 1.5rem;
  background-color: var(--color-cta-red);
  color: #FBFBFB;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 300;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.1s ease;
  align-self: flex-start;
  min-width: 250px;
}

.primary-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .dashboard-heading {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .dashboard-page {
    margin-left: 0;
    padding: 1rem 1.5rem;
  }
}
</style>
