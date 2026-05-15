<script setup>
import Hero from "@/components/Hero.vue"
import Foursteps from '@/components/FourSteps.vue'
import Quiz from '@/components/Quiz.vue'
import Slideshow from "@/components/Slideshow.vue"
import VideoGallery from "@/components/VideoGallery.vue"
import NewsSection from "@/components/NewsSection.vue"
import ChatBubble from "@/components/ChatBubble.vue"
import NewsBar from "../components/NewsBar.vue"
</script>

<template>
  <section class="home">
    <NewsBar />
    <Hero />
     <ChatBubble />
     <!-- WRAPPER TIL FOURSTEPS + QUIZ -->
    <div class="steps-quiz-wrapper">
      <Foursteps />
      <Quiz />
    </div>
    <Slideshow />
    <VideoGallery />
    <NewsSection />
  </section>
</template>


<style scoped>
.steps-quiz-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 6rem auto;
  padding: 2rem 2;
  max-width: 1200px;
}

@media (max-width: 768px) {
  .steps-quiz-wrapper {
    grid-template-columns: 1fr;
    margin: 3rem 0;
    padding: 1rem 0;
  }
}

</style>