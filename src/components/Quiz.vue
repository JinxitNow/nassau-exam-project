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
      <p>Svar på 10 korte spørgsmål <br> og find den rigtige port.</p>

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

.quiz-content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: var(--color-white);
}

.quiz-content p {
  font-size: 0.95rem;
  line-height: 1.45;
  margin: 0;
  opacity: 0.95;
  color: var(--color-white);
}

.quiz-btn {
  background: white;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1rem;
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
    padding: 3.5rem 3.5rem;
    border-radius: 12px;
    position: relative;
    color: var(--color-white);
  }

  /* H2-container (den hvide boks) */
  .quiz-content h2 {
    background: var(--color-white);
    color: var(--color-primary);
    padding: 0.8rem 1.2rem;
    border-radius: 6px;
    text-align: center;
    max-width: 290px;
    width: 100%;       
    margin: 8rem auto 1rem; /* centrerer boksen */
    font-size: 16px;          /* global h2 desktop */
    font-weight: 550;
    text-transform: uppercase;
  }

  /* Tekstcontainer */
  .quiz-content {
    width: 100%;
    max-width: 270px;
    padding: 0;
    background: none;
    backdrop-filter: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;   
    margin-top: -4rem;
  }

  .quiz-content p {
    font-size: 14px;
    color: var(--color-white);
    opacity: 0.95;
    margin: 0 0 0.8rem 0;
  }

  .quiz-btn {
    background-color: var(--color-white);
    color: var(--color-primary);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;   /* global h2 desktop */
    font-weight: 550;
    text-transform: uppercase;
    line-height: 1.3;
    padding: 14px 26px;
    width: fit-content;
    transition: 0.2s ease;
    margin-top: 1rem;
  }

  .quiz-btn:hover {
    text-decoration: underline;
    background: var(--color-white);
  }
}

</style>

