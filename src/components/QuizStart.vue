<script setup>
import { computed, ref } from "vue"
import { useQuizStore } from "@/store/quizStore"

import {
  FIRST_QUESTION,
  PORT_FLOWS,
  RESULT_TEXTS
} from "@/data/portQuestions.js"

import { db } from "@/firebase"
import { ref as dbRef, push, set } from "firebase/database"

const quiz = useQuizStore()

const customerName = ref("")
const customerPhone = ref("")

const callbackResults = [
  "garage_standard_opmaaling",
  "garage_special_montage_selv",
  "ledhejseport_montage_selv",
  "lavenergi_plads_under50",
  "lavenergi_montage_selv",
  "hurtig_montage_selv"
]

const currentFlow = computed(() => {
  if (!quiz.portType) return []
  return PORT_FLOWS[quiz.portType] || []
})

const currentQuestion = computed(() => {
  if (!quiz.portType) return FIRST_QUESTION
  if (quiz.resultKey) return null
  return currentFlow.value[quiz.currentStep] || null
})

const showResult = computed(() => {
  if (!quiz.portType) return false
  if (quiz.resultKey) return true
  return quiz.currentStep >= currentFlow.value.length
})

const resultText = computed(() => {
  if (!quiz.resultKey) return ""

  return (
    RESULT_TEXTS[quiz.resultKey] ||
    "Tak for dine svar. Kontakt en portkonsulent for en konkret anbefaling."
  )
})

const showCallbackForm = computed(() => {
  return callbackResults.includes(quiz.resultKey)
})

function selectAnswer(option) {
  if (!quiz.portType) {
    quiz.setPortType(option.value)
    return
  }

  const q = currentQuestion.value
  if (!q) return

  quiz.setAnswer(q.id, option.value)

  if (option.end && option.resultKey) {
    quiz.setResult(option.resultKey)
    return
  }

  quiz.nextStep()
}

async function sendContactRequest() {
  if (!customerName.value || !customerPhone.value) {
    alert("Udfyld venligst navn og telefonnummer.")
    return
  }

  try {
    const leadsRef = dbRef(db, "leads")
    const newLeadRef = push(leadsRef)

    await set(newLeadRef, {
      navn: customerName.value,
      telefon: customerPhone.value,

      porttype: quiz.portType,
      resultat: quiz.resultKey,
      anbefaling: resultText.value,

      svar: quiz.answers,

      createdAt: Date.now()
    })

    alert("Tak! Vi kontakter dig snarest.")

    customerName.value = ""
    customerPhone.value = ""

  } catch (error) {
    console.error("RTDB FEJL:", error)
    alert(error.message)
  }
}

function goBack() {
  const previousIndex = quiz.currentStep - 1
  const previousQuestion = currentFlow.value[previousIndex]

  if (!previousQuestion) return

  quiz.clearAnswer(previousQuestion.id)
  quiz.prevStep()
}

function resetQuiz() {
  quiz.reset()
  customerName.value = ""
  customerPhone.value = ""
}
</script>

<template>
  <section class="quiz-start">
    <div class="quiz-container">

      <!-- SPØRGSMÅL -->
      <div v-if="!showResult && currentQuestion" class="question-box">
        <h2>{{ currentQuestion.question }}</h2>

        <div class="options">
          <button
            v-for="opt in currentQuestion.options"
            :key="opt.label"
            class="option-btn"
            @click="selectAnswer(opt)"
            v-html="opt.label"
          ></button>
        </div>

        <div
          v-if="quiz.portType && quiz.currentStep > 0"
          class="back-link"
          @click="goBack"
        >
          ← Tilbage
        </div>
      </div>

      <!-- RESULTAT -->
      <div v-else class="result-box">
        <h2>RESULTAT</h2>

        <p v-if="resultText">
          {{ resultText }}
        </p>

        <p v-else>
          Tak for dine svar. Kontakt en portkonsulent for en konkret anbefaling.
        </p>

        <!-- KONTAKTFORMULAR -->
        <div v-if="showCallbackForm" class="opmaaling-form">
          <p>
            Udfyld formularen og bliv kontaktet af en portkonsulent inden for 3 hverdage.
          </p>

          <input
            type="text"
            v-model="customerName"
            placeholder="Dit navn"
            class="input-field"
          />

          <input
            type="tel"
            v-model="customerPhone"
            placeholder="Dit telefonnummer"
            class="input-field"
          />

          <button class="send-btn" @click="sendContactRequest">
            Send forespørgsel
          </button>
        </div>

        <button class="retry-btn" @click="resetQuiz">
          Prøv igen
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.quiz-start {
  padding: 2rem;
}

.quiz-container {
  max-width: 800px;
  margin: 0 auto;
}

.question-box,
.result-box {
  background-color: var(--color-neutral-light);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.option-btn {
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;
  text-align: left;
}

.retry-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.back-link {
  margin-top: 0.5rem;
  color: var(--color-primary);
  cursor: pointer;
  width: fit-content;
}

.opmaaling-form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.input-field {
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.send-btn {
  padding: 0.8rem 1.2rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>