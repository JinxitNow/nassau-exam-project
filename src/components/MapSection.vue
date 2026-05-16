<script setup>
import { ref, onMounted } from "vue";
import { loadEmployees } from "@/services/firebaseEmployees";
import { loadPins } from "@/services/firebasePins";
import EmployeePin from "@/components/EmployeePin.vue";

const employees = ref([]);
const pins = ref([]);

const zipcode = ref("");
const selectedJob = ref(null);
const showJobDropdown = ref(false);

const emit = defineEmits(["pin-selected", "zipcode-selected", "job-selected"]);

onMounted(() => {
  // Mitarbeiter laden
  loadEmployees((list) => {
    employees.value = list;
  });

  // Pins laden
  loadPins((list) => {
    pins.value = list;
  });
});

function selectPin(pinId) {
  emit("pin-selected", pinId);
}

function submitZip() {
  if (!zipcode.value) return;
  emit("zipcode-selected", zipcode.value);
}

function chooseJob(job) {
  if (selectedJob.value === job) {
    selectedJob.value = null;
    emit("job-selected", null);
    showJobDropdown.value = false;
    return;
  }

  selectedJob.value = job;
  emit("job-selected", job);
  showJobDropdown.value = false;
}
</script>


<template>
  <div class="map-container">

    <!-- FILTERBAR -->
    <div class="filter-bar">
      <div class="zip-wrapper">
        <input
          v-model="zipcode"
          placeholder="Indtast dit postnummer"
          class="zip-input"
        />
        <button class="zip-btn" @click="submitZip">✔</button>
      </div>

      <div class="job-filter">
        <button
          class="filter-btn"
          :class="{ active: selectedJob }"
          @click="showJobDropdown = !showJobDropdown"
        >
          Filtrer
        </button>

        <div v-if="showJobDropdown" class="dropdown">
          <p :class="{ active: selectedJob === null }" @click="chooseJob(null)">Alle</p>
          <p :class="{ active: selectedJob === 'privat' }" @click="chooseJob('privat')">Privat salg</p>
          <p :class="{ active: selectedJob === 'erhverv' }" @click="chooseJob('erhverv')">Erhverv salg</p>
          <p :class="{ active: selectedJob === 'service' }" @click="chooseJob('service')">Service</p>
        </div>
      </div>
    </div>

    <!-- MAP BOX -->
    <div class="map-box">
      <img src="/img/map.svg" class="map-image" />      
    </div>

  </div>
</template>

<style scoped>
/* OUTER WRAPPER */
.map-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* FILTERBAR — fixeret til højre */
.filter-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  padding: 0;
  position: relative;
  z-index: 20;
}

/* ZIP INPUT WRAPPER */
.zip-wrapper {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

/* ENS HØJDE TIL ALLE FILTER-ELEMENTER */
.zip-input,
.zip-btn,
.filter-btn {
  height: 40px;                 /* Ens højde */
  display: flex;
  align-items: center;
}

/* ZIP INPUT */
.zip-input {
  padding: 0 12px;              /* kun horizontal padding */
  border: 1px solid var(--color-neutral-dark);
  border-radius: 6px;
}

/* ZIP BUTTON */
.zip-btn {
  background-color: var(--color-cta-red);
  color: var(--color-white);
  border: none;
  padding: 0 14px;              /* kun horizontal padding */
  border-radius: 6px;
  cursor: pointer;
  justify-content: center;
}

/* FILTER BUTTON */
.job-filter {
  position: relative;
}

.filter-btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0 16px;              /* kun horizontal padding */
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: center;
}

.filter-btn.active {
  background-color: var(--color-primary);
}

/* DROPDOWN */
.dropdown {
  position: absolute;
  top: 42px;
  right: 0;

  background: var(--color-white);
  border: 1px solid var(--color-neutral-dark);
  border-radius: 6px;
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 150px;

  z-index: 999;
}

.dropdown p {
  margin: 0;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown p:hover {
  background-color: var(--color-neutral-light);
}

.dropdown p.active {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.map-box {
  width: 100%;
  max-width: 650px;
  outline: 1px solid var(--color-secondary-teal);
  margin-left: auto;
  margin-right: 0;

  position: relative;   /* WICHTIG für absolute Pins */
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: auto;         /* Proportionen bleiben */
  display: block;       /* kein extra whitespace */
}



</style>
