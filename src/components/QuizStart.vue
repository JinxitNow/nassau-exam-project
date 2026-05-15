<script setup>
import { computed } from "vue"
import { useQuizStore } from "@/store/quizStore"
import { quizQuestions } from "@/data/portquestions.js"
import { porte } from "@/data/porte.js"
import { filtrerPorte } from "@/utils/filterPorte.js"

const quiz = useQuizStore()

// Aktuelt spørgsmål
const currentQuestion = computed(() => {
  return quizQuestions[quiz.currentStep - 1]
})

// Skal vi vise resultat?
const showResult = computed(() => {
  return quiz.currentStep > quizQuestions.length
})

// Filtrer porte baseret på svar
const matchendePorte = computed(() => {
  return filtrerPorte(porte, quiz.answers)
})

function selectAnswer(option) {
  quiz.setAnswer(currentQuestion.value.key, option.value)
  quiz.nextStep()
}
</script>


<template>
  <section class="quiz-start">

    <!-- SPØRGSMÅL -->
    <div v-if="!showResult" class="question-box">
      <h2>{{ currentQuestion.question }}</h2>

      <div class="options">
        <button
          v-for="opt in currentQuestion.options"
          :key="opt.label"
          class="option-btn"
          @click="selectAnswer(opt)"
        >
          {{ opt.label }}
        </button>
      </div>
    </div>

    <!-- RESULTAT -->
    <div v-else class="result-box">
      <h2>Dine anbefalede porte</h2>

      <div v-if="matchendePorte.length === 0">
        <p>Du skal tale med en af vores konsulenter, da dine ønsker og behov ikke ligger inden for standarden. Vores konsulenter sidder klar på telefonnr. 6362 2346</p>
      </div>

      <div v-else class="result-list">
        <div
          v-for="port in matchendePorte"
          :key="port.id"
          class="result-card"
        >
          <h3>{{ port.navn }}</h3>
          <p>Type: {{ port.type }}</p>
          <p>Hastighed: {{ port.regler.hastighed }}</p>
          <p>Isolering:
            <span v-if="port.regler.isolering">Ja</span>
            <span v-else>Nej</span>
          </p>
        </div>
      </div>
       <!-- ⭐ PRØV IGEN KNAP -->
  <button class="retry-btn" @click="quiz.reset()">
  Prøv igen
</button>

    </div>

  </section>
</template>

<style scoped>
.quiz-start {
  padding: 2rem;
}

.question-box, .result-box {
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
  color: white;
  cursor: pointer;
}

.result-list {
  display: grid;
  gap: 1rem;
}

.result-card {
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.retry-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
