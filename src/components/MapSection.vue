<script setup>
import { ref, onMounted } from "vue";
import { loadEmployees } from "@/services/firebaseEmployees";
import EmployeePin from "@/components/EmployeePin.vue";

const employees = ref([]);

const zipcode = ref("");
const selectedJob = ref(null);
const showJobDropdown = ref(false);

const emit = defineEmits(["pin-selected", "zipcode-selected", "job-selected"]);

onMounted(() => {
  loadEmployees((list) => {
    employees.value = list;
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

    <!-- FILTERBAR (jetzt am globalen Layout ausgerichtet) -->
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

          <p :class="{ active: selectedJob === null }" @click="chooseJob(null)">
            Alle
          </p>

          <p :class="{ active: selectedJob === 'privat' }" @click="chooseJob('privat')">
            Privat salg
          </p>

          <p :class="{ active: selectedJob === 'erhverv' }" @click="chooseJob('erhverv')">
            Erhverv salg
          </p>

          <p :class="{ active: selectedJob === 'service' }" @click="chooseJob('service')">
            Service
          </p>

        </div>
      </div>
    </div>

    <!-- MAP BOX -->
    <div class="map-box">
      <img src="/icons/placeholder.svg" class="map-image" />

      <EmployeePin
        v-for="emp in employees"
        :key="emp.id"
        :employee="emp"
        @click="selectPin(emp.pinId)"
      />
    </div>

  </div>
</template>

<style scoped>
/* OUTER WRAPPER */
.map-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* FILTERBAR — jetzt am globalen Layout ausgerichtet */
.filter-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: var(--global-padding, 2rem); /* nutzt dein globales padding */
  padding-left: var(--global-padding, 2rem);
}

/* ZIP INPUT */
.zip-wrapper {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.zip-input {
  padding: 8px 12px;
  border: 1px solid var(--color-neutral-dark);
  border-radius: 6px;
  font-size: 12px;
}

.zip-btn {
  background-color: var(--color-cta-red);
  color: var(--color-white);
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

/* FILTER BUTTON */
.job-filter {
  position: relative;
}

.filter-btn {
  background-color: var(--color-secondary-teal);
  color: var(--color-white);
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
}

.filter-btn.active {
  background-color: var(--color-cta-red);
}

/* DROPDOWN */
.dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  background: var(--color-white);
  border: 1px solid var(--color-neutral-dark);
  border-radius: 6px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 150px;
  z-index: 10;
}

.dropdown p {
  margin: 0;
  padding: 6px;
  cursor: pointer;
  font-size: 12px;
  border-radius: 4px;
}

.dropdown p:hover {
  background-color: var(--color-neutral-light);
}

.dropdown p.active {
  background-color: var(--color-secondary-teal);
  color: var(--color-white);
}

/* MAP BOX */
.map-box {
  background: var(--color-neutral-light);
  border-radius: 50%;
  width: 380px;
  height: 380px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);

  /* OUTLINE sichtbar */
  outline: 2px solid red;
}

/* MAP IMAGE */
.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
