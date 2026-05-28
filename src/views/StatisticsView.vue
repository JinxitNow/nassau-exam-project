<script setup>
import { ref, onMounted, computed } from "vue"
import { db } from "@/firebase"
import { ref as dbRef, onValue } from "firebase/database"

import AdminShortcuts from "../components/AdminShortcuts.vue"

// =====================
// LEADS
// =====================
const leads = ref([])
const loadingLeads = ref(true)

// =====================
// EMPLOYEES
// =====================
const employees = ref([])
const loadingEmployees = ref(true)

// 🔥 FETCH LEADS
function fetchLeads() {
  const leadsRef = dbRef(db, "leads")

  onValue(leadsRef, (snapshot) => {
    const data = snapshot.val()
    leads.value = data ? Object.values(data) : []
    loadingLeads.value = false
  })
}

// 🔥 FETCH EMPLOYEES (JOB FIELD ONLY)
function fetchEmployees() {
  const employeesRef = dbRef(db, "employees")

  onValue(employeesRef, (snapshot) => {
    const data = snapshot.val()

    if (!data) {
      employees.value = []
      loadingEmployees.value = false
      return
    }

    employees.value = Object.values(data).map(emp => ({
      ...emp,
      job: (emp.job || "").trim()
    }))

    loadingEmployees.value = false
  })
}

onMounted(() => {
  fetchLeads()
  fetchEmployees()
})


// =====================
// LEADS KPI
// =====================
const totalLeads = computed(() => leads.value.length)

const nyeLeads = computed(() =>
  leads.value.filter(l => !l.status || l.status === "ny").length
)

const kontaktet = computed(() =>
  leads.value.filter(l => l.status === "kontaktet").length
)

const opfoelgning = computed(() =>
  leads.value.filter(l => l.status === "opfoelgning").length
)

const tilbud = computed(() =>
  leads.value.filter(l => l.status === "tilbud").length
)

const accepteret = computed(() =>
  leads.value.filter(l => l.tilbudStatus === "accepteret").length
)

const afslaaet = computed(() =>
  leads.value.filter(l => l.tilbudStatus === "afslaaet").length
)

const privateKunder = computed(() =>
  leads.value.filter(l =>
    l.porttype === "garage_standard" ||
    l.porttype === "garage_special"
  ).length
)

const erhvervKunder = computed(() =>
  leads.value.filter(l =>
    l.porttype &&
    !["garage_standard", "garage_special"].includes(l.porttype)
  ).length
)


// =====================
// EMPLOYEE KPI (JOB BASED)
// =====================
const totalEmployees = computed(() => employees.value.length)

const salgskonsulent = computed(() =>
  employees.value.filter(e => e.job === "Salgskonsulent").length
)

const servicesaelger = computed(() =>
  employees.value.filter(e => e.job === "Servicesælger").length
)

const servicekoordinator = computed(() =>
  employees.value.filter(e => e.job === "Servicekoordinator").length
)

const montorer = computed(() =>
  employees.value.filter(e => e.job === "Montører").length
)

const teknikere = computed(() =>
  employees.value.filter(e => e.job === "Teknikere").length
)

const andre = computed(() =>
  employees.value.filter(e =>
    ![
      "Salgskonsulent",
      "Servicesælger",
      "Servicekoordinator",
      "Montører",
      "Teknikere"
    ].includes(e.job)
  ).length
)
</script>

<template>
  <section class="admin-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <AdminShortcuts />
    </aside>

    <!-- CONTENT -->
    <main class="stats">

      <h1>CRM Statistik</h1>

      <!-- ================= CRM ================= -->
      <section class="section">
        <h2>CRM</h2>

        <p v-if="loadingLeads">Indlæser leads...</p>

        <div v-else class="grid">

          <div class="card"><h2>{{ totalLeads }}</h2><p>Total leads</p></div>
          <div class="card"><h2>{{ nyeLeads }}</h2><p>Nye leads</p></div>
          <div class="card"><h2>{{ kontaktet }}</h2><p>Kontaktet</p></div>
          <div class="card"><h2>{{ opfoelgning }}</h2><p>Opfølgning</p></div>
          <div class="card"><h2>{{ tilbud }}</h2><p>Tilbud</p></div>
          <div class="card"><h2>{{ accepteret }}</h2><p>Accepteret</p></div>
          <div class="card"><h2>{{ afslaaet }}</h2><p>Afslået</p></div>
          <div class="card"><h2>{{ privateKunder }}</h2><p>Private</p></div>
          <div class="card"><h2>{{ erhvervKunder }}</h2><p>Erhverv</p></div>

        </div>
      </section>

      <!-- ================= EMPLOYEES ================= -->
      <section class="section">
        <h2>Medarbejdere</h2>

        <p v-if="loadingEmployees">Indlæser medarbejdere...</p>

        <div v-else class="grid">

          <div class="card">
            <h2>{{ totalEmployees }}</h2>
            <p>Medarbejdere</p>
          </div>

          <div class="card">
            <h2>{{ salgskonsulent }}</h2>
            <p>Salgskonsulent</p>
          </div>

          <div class="card">
            <h2>{{ servicesaelger }}</h2>
            <p>Servicesælger</p>
          </div>

          <div class="card">
            <h2>{{ servicekoordinator }}</h2>
            <p>Servicekoordinator</p>
          </div>

          <div class="card">
            <h2>{{ montorer }}</h2>
            <p>Montører</p>
          </div>

          <div class="card">
            <h2>{{ teknikere }}</h2>
            <p>Teknikere</p>
          </div>

          <div class="card">
            <h2>{{ andre }}</h2>
            <p>Andre</p>
          </div>

        </div>
      </section>

    </main>
  </section>
</template>

<style scoped>
.admin-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
  border-right: 1px solid #eee;
  padding: 1rem;
  background: #fafafa;
}

.stats {
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}

.card {
  background: var(--color-primary);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 120px;
  padding: 1rem;
  text-align: center;
}

.card h2,
.card p {
  color: white;
  margin: 0;
}

.card h2 {
  font-size: 2rem;
}
</style>