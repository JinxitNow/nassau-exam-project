<script setup>
import Hero from "@/components/Hero.vue"
import Foursteps from '@/components/FourSteps.vue'
import Quiz from '@/components/Quiz.vue'
import Slideshow from "@/components/Slideshow.vue"
import VideoGallery from "@/components/VideoGallery.vue"
import NewsSection from "@/components/NewsSection.vue"
import ChatBubble from "@/components/ChatBubble.vue"
import NewsBar from "../components/NewsBar.vue"

// NEU:
import MapSection from "@/components/MapSection.vue"
import EmployeeFilterLogic from "@/components/EmployeeFilterLogic.vue"

import { ref } from "vue"

// Filter-States (werden an EmployeeFilterLogic weitergegeben)
const selectedPin = ref(null)
const selectedZip = ref(null)
const selectedJob = ref(null)
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

    <!-- ⭐ NEUER BEREICH: MapSection + FilterLogic + LocalExpert -->
    <div class="expert-map-wrapper">

     <div class="expert-map-wrapper">

  <!-- TEXT + EMPLOYEE CARDS LINKS -->
  <EmployeeFilterLogic
    :pin="selectedPin"
    :zipcode="selectedZip"
    :job="selectedJob"
  />

  <!-- MAP RECHTS -->
  <MapSection
    @pin-selected="selectedPin = $event"
    @zipcode-selected="selectedZip = $event"
    @job-selected="selectedJob = $event"
  />

</div>

    </div>

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
  max-width: 1400px;
}

@media (max-width: 768px) {
  .steps-quiz-wrapper {
    grid-template-columns: 1fr;
    margin: 3rem 0;
    padding: 1rem 0;
  }
}

/* ⭐ Layout für LocalExpert + MapSection */
.expert-map-wrapper {
  display: flex;
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  .expert-map-wrapper {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
