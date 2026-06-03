<script setup>
import { ref, onMounted } from "vue"
import { db } from "../firebase"

import {
  ref as dbRef,
  push,
  set,
  update,
  onValue,
  remove
} from "firebase/database"

import AdminShortcuts from "../components/AdminShortcuts.vue"

/* ⭐ Nye felter */
const name = ref("")
const job = ref("")
const email = ref("")
const phone = ref("")
const department = ref("")

/* ⭐ Kundetype */
const customerType = ref("")

/* ⭐ Pin-valg */
const pinIds = ref([])

/* ⭐ Firebase state */
const editingId = ref(null)
const message = ref("")
const loading = ref(false)
const errors = ref({})
const employees = ref([])

/* ⭐ Liste over alle pins */
const allPins = [
  "pin_bornholm",
  "pin_faeroeerne",
  "pin_fyn",
  "pin_groenland",
  "pin_midtjylland",
  "pin_midtsjaelland",
  "pin_nordjylland",
  "pin_nordsjaelland",
  "pin_ostjylland",
  "pin_soenderjylland",
  "pin_storkoebenhavn",
  "pin_sydjylland",
  "pin_sydsjaelland",
  "pin_vestjylland"
]

/* ⭐ Simpel validering */
function validate() {
  errors.value = {}

  if (!name.value) {
    errors.value.name = "Udfyld navn."
  }

  if (!job.value) {
    errors.value.job = "Udfyld jobtitel."
  }

  if (!email.value.includes("@")) {
    errors.value.email = "Ugyldig email."
  }

  if (!phone.value) {
    errors.value.phone = "Udfyld telefonnummer."
  }

  if (!customerType.value) {
    errors.value.customerType = "Vælg kundetype."
  }

  return Object.keys(errors.value).length === 0
}

/* ⭐ Gem eller opdater medarbejder */
async function onSubmit() {
  if (!validate()) return

  loading.value = true

  const payload = {
    name: name.value,
    job: job.value,
    email: email.value,
    phone: phone.value,
    department: department.value,
    customerType: customerType.value,
    pinIds: pinIds.value,
    imageUrl: "/employees/empty.svg",
    updatedAt: Date.now()
  }

  try {

    /* ⭐ UPDATE */
    if (editingId.value) {

      await update(
        dbRef(db, "employees/" + editingId.value),
        payload
      )

      message.value = "Medarbejder opdateret."

    } else {

      /* ⭐ CREATE */
      const newRef = push(dbRef(db, "employees"))

      await set(newRef, payload)

      message.value = "Medarbejder tilføjet."
    }

    resetForm()

  } catch (err) {

    console.error(err)
    message.value = "Fejl ved gemning."

  }

  loading.value = false
}

/* ⭐ Nulstil formular */
function resetForm() {
  name.value = ""
  job.value = ""
  email.value = ""
  phone.value = ""
  department.value = ""
  customerType.value = ""
  pinIds.value = []

  editingId.value = null

  errors.value = {}
}

/* ⭐ Hent medarbejdere */
function loadEmployees() {

  onValue(
    dbRef(db, "employees"),
    (snapshot) => {

      const data = snapshot.val()

      employees.value = data
        ? Object.entries(data).map(([id, val]) => ({
            id,
            ...val
          }))
        : []
    }
  )
}

/* ⭐ Indlæs medarbejder i formularen */
function editEmployee(emp) {

  name.value = emp.name || ""
  job.value = emp.job || ""
  email.value = emp.email || ""
  phone.value = emp.phone || ""
  department.value = emp.department || ""
  customerType.value = emp.customerType || ""

  pinIds.value = emp.pinIds
    ? [...emp.pinIds]
    : []

  editingId.value = emp.id

  message.value = "Du redigerer nu: " + emp.name
}

/* ⭐ Slet medarbejder */
function deleteEmployee(id) {

  remove(
    dbRef(db, "employees/" + id)
  )
}

onMounted(loadEmployees)
</script>


<template>
  <section class="admin-members-page">

    <!-- Header -->
    <div class="members-header">
      <AdminShortcuts />
      <div class="members-heading">
        <h2>Medarbejderadministration</h2>
        <p class="members-subtitle">Tilføj, opdater eller slet medarbejdere</p>
      </div>
    </div>

    <div class="container">

      <!-- ⭐ FORMULAR -->
      <div class="form-column">
        <h3>Tilføj eller opdater medarbejder</h3>

        <form @submit.prevent="onSubmit" class="form-grid">

          <!-- Navn + Job -->
          <div class="row">
            <div class="input-group">
              <label>Navn</label>
              <input v-model="name" />
              <p v-if="errors.name" class="error-msg">{{ errors.name }}</p>
            </div>

            <div class="input-group">
              <label>Jobtitel</label>
              <input v-model="job" />
              <p v-if="errors.job" class="error-msg">{{ errors.job }}</p>
            </div>
          </div>

          <!-- Email + Telefon -->
          <div class="row">
            <div class="input-group">
              <label>Email</label>
              <input v-model="email" type="email" />
              <p v-if="errors.email" class="error-msg">{{ errors.email }}</p>
            </div>

            <div class="input-group">
              <label>Telefonnummer</label>
              <input v-model="phone" type="tel" />
              <p v-if="errors.phone" class="error-msg">{{ errors.phone }}</p>
            </div>
          </div>

          <!-- Afdeling + Kundetype -->
<div class="row">

  <div class="input-group">
    <label>Afdeling</label>
    <input v-model="department" />
  </div>

  <div class="input-group">
    <label>Kundetype</label>

    <div class="radio-group">
      <label>
        <input type="radio" value="erhverv" v-model="customerType" />
        Erhverv
      </label>

      <label>
        <input type="radio" value="privat" v-model="customerType" />
        Privat
      </label>
    </div>

    <p v-if="errors.customerType" class="error-msg">
      {{ errors.customerType }}
    </p>
  </div>
          </div>

          <!-- ⭐ PIN-VALG -->
          <div class="row">
            <div class="input-group">
              <label>Vælg pins</label>

              <div class="checkbox-list">
                <label v-for="pin in allPins" :key="pin" class="checkbox-item">
                  <input 
                    type="checkbox" 
                    :value="pin" 
                    v-model="pinIds" 
                  />
                  {{ pin }}
                </label>
              </div>

            </div>
          </div>

          <!-- Knapper -->
          <div class="form-buttons">
            <button type="button" class="secondary-btn" @click="resetForm">Annuller</button>
            <button type="submit" class="primary-btn">
              {{ editingId ? 'Opdater' : 'Tilføj' }}
              <span v-if="loading" class="spinner"></span>
            </button>
          </div>

          <p v-if="message" class="message">{{ message }}</p>
        </form>
      </div>

      <!-- ⭐ LISTE -->
      <div class="placeholder-column">
        <div class="member-wrapper">
          <h3>Medarbejdere</h3>

          <div class="member-scroll">

            <div v-if="!employees.length" class="member-box empty">
              <p>Ingen medarbejdere endnu.</p>
            </div>

            <div 
              v-for="emp in employees" 
              :key="emp.id" 
              class="member-box"
            >
              <p><strong>{{ emp.name }}</strong></p>
              <p>{{ emp.job }}</p>
              <p>{{ emp.email }}</p>
              <p>{{ emp.phone }}</p>
              <p>Afdeling: {{ emp.department }}</p>
              <p>Kundetype: {{ emp.customerType }}</p>

              <p>Pins:</p>
              <ul v-if="emp.pinIds">
                <li v-for="p in emp.pinIds" :key="p">{{ p }}</li>
              </ul>

              <div class="actions">
                <button @click="editEmployee(emp)">Opdater</button>
                <button @click="deleteEmployee(emp.id)">Slet</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

/* ⭐ GENERELT LAYOUT – baggrund fjernet */
.admin-members-page {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  overflow-x: hidden;
}

/* Layout */
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-column,
.placeholder-column {
  width: 100%;
}

/* ⭐ FORM-BOKS – dashboard style */
.form-column {
  background: var(--color-primary);
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
  color: var(--color-white); /* ⭐ alt tekst i boksen hvid */
}

/* Grid */
.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Rækker */
.row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Input-grupper */
.input-group {
  display: flex;
  flex-direction: column;
}

/* Labels */
.input-group label {
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--color-white);
}

/* Inputs – beholder sort tekst */
input {
  padding: 8px;
  border: 1px solid #ccc;
  background: var(--color-white);
  border-radius: 4px;
  color: var(--color-black);
}

/* ⭐ Radio-gruppe – mindre tekst */
.radio-group {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.4rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--color-white);
  font-size: 0.85rem; /* ⭐ mindre */
}

/* ⭐ Checkbox-liste – 2 kolonner */
.checkbox-list {
  display: grid;
grid-template-columns: repeat(3, 1fr);  gap: 0.6rem 1rem;
  margin-top: 0.4rem;
}

/* ⭐ Checkbox-item */
.checkbox-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--color-white);
  font-size: 0.85rem;
  white-space: nowrap;
}

/* Mobil */
@media (max-width: 768px) {
  .checkbox-list {
    grid-template-columns: 1fr;
  }
}

/* Knapper */
.form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

.primary-btn,
.secondary-btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.primary-btn {
  background-color: var(--color-cta-red);
  color: var(--color-white);
  min-width: 180px;
  padding: 0.9rem 1.8rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.secondary-btn {
  background-color: #ccc;
  color: var(--color-black);
}

/* Spinner */
.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid var(--color-white);
  border-top: 2px solid transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin .9s linear infinite;
  margin-left: 6px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Fejlbeskeder */
.error-msg {
  color: var(--color-white);
  margin-top: 2px;
}

.message {
  margin-top: 1rem;
  color: var(--color-white);
}

/* ⭐ LISTE-BOKS – dashboard style */
.member-wrapper {
  background: var(--color-primary);
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
  color: var(--color-white);
}

/* Titel i bokse */
.member-wrapper h3,
.form-column h3 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: var(--color-white);
}

/* Scroll-liste */
.member-scroll {
  overflow-y: auto;
  max-height: 500px;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  box-sizing: border-box;
}

/* ⭐ Medarbejder-cards – WHITE STYLE */
.member-box {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid #e6e6e6;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  color: var(--color-black);
}

/* Tekst */
.member-box ul,
.member-box li {
  margin: 0;
  line-height: 1.3;
  color: var(--color-black);
  font-size: 0.9rem;
}

/* Navn fylder hele bredden */
.member-box p strong {
  grid-column: 1 / -1;
  font-size: 1rem;
}

.member-box p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-black);
  line-height: 1.3;
}

/* Liste (pins) fylder også hele bredden */
.member-box ul {
  grid-column: 1 / -1;
  padding-left: 1rem;
}

/* Actions også fuld bredde */
.actions {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.actions button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.actions button:first-child {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.actions button:last-child {
  background-color: #ccc;
  color: var(--color-black);
}

.actions button:hover {
  opacity: 0.9;
}

/* Desktop */
@media (min-width: 769px) {

  .member-wrapper {
    margin-top: 0;
  }

  .admin-members-page {
    margin-left: 240px;
    padding: 2rem 3.8rem 2rem 0;
  }

  .container {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.5rem;
  }

  .form-column {
    max-width: 540px;
  }

  .member-wrapper {
    max-width: 550px;
    max-height: 525px;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

/* ⭐ Header – TITEL & SUBTITLE BLIVER SORT */
.members-header {
  
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.members-heading {
  margin-top: 3rem;
}

.members-heading h2 {
  margin: 0;
  color: var(--color-primary); /* ⭐ sort */
}

.members-subtitle {
  margin-top: 0.5rem;
  color: var(--color-black); /* ⭐ sort */
}


/* Responsiv */
@media (max-width: 1024px) {
  .members-header {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .members-heading {
    text-align: center;
  }
}

</style>
