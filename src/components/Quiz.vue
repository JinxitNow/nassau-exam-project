<script setup>

const emit = defineEmits(["startQuiz"])

function startQuiz() {
  emit("startQuiz")
}
</script>

<template>
  <section class="quiz">
    <div class="quiz-image"></div>
    <div class="quiz-content">
      <h2>Ved du ikke hvilken port der passer til dig?</h2>
      <p>Svar på nogle korte spørgsmål <br> og find den rigtige port.</p>

      <button class="quiz-btn" @click="startQuiz">
        Tag testen nu
      </button>
    </div>
  </section>
</template>



<style scoped>
/* MOBILE FIRST */
.quiz {
  display: flex;
  flex-direction: row;
  background: var(--color-primary);
  border-radius: 12px;
  overflow: hidden;
  color: var(--color-white);
 }

/* Billede til venstre på mobil */
.quiz-image {
  width: 30%;
  background-image: url('/img/quiz1.webp');
  background-size: cover;
  background-position: center;
}

/* Tekst til højre på mobil */
.quiz-content {
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  }

/* H2 og P arver global typografi */
.quiz-content h2,
.quiz-content p {
  color: var(--color-white);
}

.quiz-btn {
  background: var(--color-white);
  color: var(--color-primary);
  padding: 0.7rem 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
  transition: 0.2s ease;
}

.quiz-btn:hover {
  text-decoration: underline;
  background: var(--color-neutral-light)
}


/* DESKTOP */
@media (min-width: 768px) {

  .quiz {
    flex-direction: column;
    background-image: url('/img/quiz1.webp');
    background-size: 200%;
    background-position: center;
    border-radius: 12px;
    position: relative;
  }

  .quiz-image {
    display: none;
  }

  /* H2 i hvid boks */
  .quiz-content h2 {
    background: var(--color-white);
    color: var(--color-primary);
    padding: 0.8rem 1.2rem;
    border-radius: 6px;
    text-align: center;
    max-width: 290px;
    margin: 8rem auto 1rem;
  }

  .quiz-content {
    width: 100%;
    max-width: 270px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -4rem auto 0;
  }

  .quiz-content p {
    color: var(--color-white);
    opacity: 0.95;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .quiz-btn {
    background-color: var(--color-white);
    color: var(--color-primary);
    border-radius: 6px;
    padding: 14px 26px;
    margin-top: 1rem;
    font-size: 16px;
    font-weight: 700;
  }

  .quiz-btn:hover {
    background: var(--color-white);
    text-decoration: underline;
  }
}
</style>

