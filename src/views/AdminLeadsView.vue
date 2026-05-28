<script setup>
import { ref, onMounted, computed } from "vue"
import { db } from "@/firebase"
import { ref as dbRef, onValue, update, push, set } from "firebase/database"

import AdminShortcuts from "../components/AdminShortcuts.vue"

const leads = ref([])
const loading = ref(true)
const search = ref("")

// 🔥 FETCH LIVE LEADS
function fetchLeads() {
  const leadsRef = dbRef(db, "leads")

  onValue(leadsRef, (snapshot) => {
    const data = snapshot.val()

    if (!data) {
      leads.value = []
      loading.value = false
      return
    }

    leads.value = Object.entries(data).map(([id, value]) => ({
      id,
      ...value
    }))

    leads.value.sort((a, b) => b.createdAt - a.createdAt)

    loading.value = false
  })
}

onMounted(fetchLeads)


// 🔍 SEARCH FILTER
const filteredLeads = computed(() => {
  if (!search.value) return leads.value

  return leads.value.filter((lead) =>
    lead.navn?.toLowerCase().includes(search.value.toLowerCase()) ||
    lead.telefon?.includes(search.value)
  )
})


// 📊 STATUS UPDATE
function updateStatus(id, status) {
  const leadRef = dbRef(db, `leads/${id}`)

  update(leadRef, {
    status,

    ...(status === "kontaktet" && { kontaktDato: Date.now() }),
    ...(status === "opfoelgning" && { opfoelgDato: Date.now() })
  })
}


// 💰 TILBUD STATUS
function setTilbudStatus(id, value) {
  const leadRef = dbRef(db, `leads/${id}`)

  update(leadRef, {
    status: "tilbud",
    tilbudStatus: value
  })
}


// 📝 NOTESYSTEM
function addNote(leadId, text) {
  if (!text) return

  const notesRef = dbRef(db, `leads/${leadId}/notes`)
  const newNoteRef = push(notesRef)

  set(newNoteRef, {
    text,
    createdAt: Date.now()
  })
}
</script>


<template>
  <section class="admin-layout">

    <!-- LEFT SIDEBAR -->
    <aside class="sidebar">
      <AdminShortcuts />
    </aside>

    <!-- MAIN CONTENT -->
    <main class="content">

      <h1>Leads (CRM)</h1>

      <!-- 🔍 SEARCH -->
      <input
        v-model="search"
        placeholder="Søg navn eller telefon..."
        class="search"
      />

      <p v-if="loading">Indlæser leads...</p>

      <div v-else class="lead-grid">

        <div v-for="lead in filteredLeads" :key="lead.id" class="lead-card">

          <div class="header">
            <h2>{{ lead.navn }}</h2>

            <span class="status" :class="lead.status || 'ny'">
              {{ lead.status || 'ny' }}
            </span>
          </div>

          <p>
            <strong>Telefon:</strong>
            <a :href="`tel:${lead.telefon}`">📞 {{ lead.telefon }}</a>
          </p>

          <p><strong>Porttype:</strong> {{ lead.porttype }}</p>
          <p><strong>Resultat:</strong> {{ lead.resultat }}</p>

          <p v-if="lead.anbefaling">
            <strong>Anbefaling:</strong><br />
            {{ lead.anbefaling }}
          </p>

          <div class="status-buttons">
            <button @click="updateStatus(lead.id, 'kontaktet')">Kontaktet</button>
            <button @click="updateStatus(lead.id, 'opfoelgning')">Opfølgning</button>
            <button @click="updateStatus(lead.id, 'tilbud')">Tilbud</button>
          </div>

          <div v-if="lead.status === 'tilbud'" class="offer-buttons">
            <button @click="setTilbudStatus(lead.id, 'accepteret')">
              Accepteret
            </button>

            <button @click="setTilbudStatus(lead.id, 'afslaaet')">
              Afslået
            </button>
          </div>

          <p v-if="lead.kontaktDato">
            📞 Kontaktet: {{ new Date(lead.kontaktDato).toLocaleString() }}
          </p>

          <p v-if="lead.opfoelgDato">
            🔁 Opfølgning: {{ new Date(lead.opfoelgDato).toLocaleString() }}
          </p>

          <p v-if="lead.tilbudStatus">
            💰 Tilbud: {{ lead.tilbudStatus }}
          </p>

          <div class="notes-section">
            <input
              v-model="lead.newNote"
              placeholder="Skriv note..."
              class="note-input"
            />

            <button @click="addNote(lead.id, lead.newNote); lead.newNote = ''">
              Tilføj note
            </button>
          </div>

          <div v-if="lead.notes" class="notes-list">

            <h4>Notes</h4>

            <div
              v-for="note in Object.values(lead.notes).sort((a,b) => b.createdAt - a.createdAt)"
              :key="note.createdAt"
              class="note-item"
            >
              <p>{{ note.text }}</p>
              <small>{{ new Date(note.createdAt).toLocaleString() }}</small>
            </div>

          </div>

          <details>
            <summary>Se kundens svar</summary>
            <pre class="answers">{{ lead.svar }}</pre>
          </details>

          <p>
            <a :href="`tel:${lead.telefon}`">📞 Ring op</a>
          </p>

        </div>

      </div>
    </main>

  </section>
</template>


<style scoped>

.admin-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

/* LEFT SIDEBAR */
.sidebar {
  width: 250px;
  flex-shrink: 0;
  border-right: 1px solid #eee;
  padding: 1rem;
}

/* RIGHT CONTENT */
.content {
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
}
.admin-leads {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  overflow-x: hidden;
}

.search {
  padding: 0.6rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.lead-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.lead-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  background: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status {
  padding: 4px 8px;
  border-radius: 6px;
  color: white;
  font-size: 12px;
}

.status.ny { background: orange; }
.status.kontaktet { background: blue; }
.status.opfoelgning { background: purple; }
.status.tilbud { background: green; }

.status-buttons,
.offer-buttons {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.status-buttons button,
.offer-buttons button {
  padding: 4px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.notes-section {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.note-input {
  flex: 1;
  padding: 0.4rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.notes-list {
  margin-top: 1rem;
  border-top: 1px solid #eee;
}

.note-item {
  background: #f6f6f6;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
}

.answers {
  background: #f5f5f5;
  padding: 0.5rem;
  border-radius: 6px;
}
</style>