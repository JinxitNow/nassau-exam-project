<script setup>
import { computed } from "vue"
import { useQuizStore } from "@/store/quizStore"
import { quizQuestions } from "@/data/portquestions.js"
import { porte } from "@/data/porte.js"
import { filtrerPorte } from "@/utils/filterPorte.js"

const quiz = useQuizStore()

const currentQuestion = computed(() => {
  return quizQuestions[quiz.currentStep - 1]
})

const showResult = computed(() => {
  return quiz.currentStep > quizQuestions.length
})

const matchendePorte = computed(() => {
  return filtrerPorte(porte, quiz.answers)
})

function selectAnswer(option) {
  quiz.setAnswer(currentQuestion.value.key, option.value)
  quiz.nextStep()
}

function goBack() {
  if (quiz.currentStep > 1) {
    quiz.currentStep--
  }
}
</script>

<template>
  <section class="quiz-start">
    <div class="quiz-container">

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

        <!-- BILLEDE UNDER SVARMULIGHEDERNE -->
        <div v-if="currentQuestion.image" class="question-image">
          <img :src="currentQuestion.image" alt="Illustration" />
        </div>

        <!-- TILBAGE-LINK -->
        <button
          v-if="quiz.currentStep > 1"
          class="back-btn"
          @click="goBack"
        >
          ← Tilbage
        </button>
      </div>

      <!-- RESULTAT -->
      <div v-else class="result-box">
        <h2>Dine anbefalede porte</h2>

        <div v-if="matchendePorte.length === 0">
          <p>
            Du skal tale med en af vores konsulenter, da dine ønsker og behov
            ikke ligger inden for standarden. Vores konsulenter sidder klar på
            telefonnr. 6362 2346
          </p>
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
            <p>
              Isolering:
              <span v-if="port.regler.isolering">Ja</span>
              <span v-else>Nej</span>
            </p>
          </div>
        </div>

        <button class="retry-btn" @click="quiz.reset()">
          Prøv igen
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
.quiz-start {
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}

/* Container med grå kant */
.quiz-container {
  background: var(--color-neutral-light);
  padding: 1.5rem;
  border-radius: 14px;
  max-width: 700px;
  width: 100%;
}

/* Spørgsmål og resultat */
.question-box,
.result-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Svarmuligheder */
.options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.option-btn {
  padding: 0.9rem 1rem;
  border-radius: 6px;
  border: none;
  background: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;
  transition: 0.2s ease;
}

.option-btn:hover {
  opacity: 0.85;
}

.question-image {
  width: 100%;
  aspect-ratio: 16 / 9; /* eller 4/3, 3/2, 1/1 – hvad du ønsker */
  overflow: hidden;
  border-radius: 8px;
  background: #ddd; /* valgfrit fallback */
}

.question-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* beskærer pænt */
  display: block;
}



/* Tilbage-knap */
.back-btn {
  background: none;
  border: none;
  padding: 0;
  color: var(--color-primary);
  cursor: pointer;
  width: fit-content;
  text-align: left;
}

.back-btn:hover {
  text-decoration: underline;
}

/* Resultatkort */
.result-list {
  display: grid;
  gap: 1rem;
}

.result-card {
  padding: 1rem;
  background: var(--color-white);
  border-radius: 8px;
}

/* Prøv igen */
.retry-btn {
  margin-top: 1.5rem;
  padding: 0.9rem 1.2rem;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Desktop */
@media (min-width: 768px) {
  .quiz-container {
    padding: 2rem 2.5rem;
  }

  .result-list {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
