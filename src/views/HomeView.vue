<script setup>
import { ref } from "vue"

import Hero from "@/components/Hero.vue"
import Foursteps from '@/components/FourSteps.vue'
import Quiz from '@/components/Quiz.vue'
import QuizStart from "@/components/QuizStart.vue"
import CustomerReviews from "@/components/CustomerReviews.vue"
import Slideshow from "@/components/Slideshow.vue"
import VideoGallery from "@/components/VideoGallery.vue"
import NewsSection from "@/components/NewsSection.vue"
import ChatBubble from "@/components/ChatBubble.vue"
import NewsBar from "../components/NewsBar.vue"
import About from "../components/AboutNassau.vue"
import Overview from "../components/Overview1.vue"

// NEU:
import MapSection from "@/components/MapSection.vue"
import EmployeeFilterLogic from "@/components/EmployeeFilterLogic.vue"
import Overview1 from "../components/Overview1.vue"
import DoorOverview from "../components/DoorOverview.vue"

// Quiz state
const showQuiz = ref(false)

// Filter-States (werden an EmployeeFilterLogic weitergegeben)
const selectedPin = ref(null)
const selectedZip = ref(null)
const selectedJob = ref(null)
</script>

<template>
  <section class="home">

    <NewsBar />
    <Hero />
    <section class="section"><ChatBubble /></section>

    <section class="section">
      <div class="steps-quiz-wrapper">
        <Foursteps />
        <Quiz v-if="!showQuiz" @startQuiz="showQuiz = true" />
        <QuizStart v-else />
      </div>
    </section>

    <section class="section">
      <div class="expert-map-wrapper">
        <EmployeeFilterLogic
          :pin="selectedPin"
          :zipcode="selectedZip"
          :job="selectedJob"
        />
        <MapSection
          @pin-selected="selectedPin = $event"
          @zipcode-selected="selectedZip = $event"
          @job-selected="selectedJob = $event"
        />
      </div>
    </section>

    <section class="section"><Overview1 /></section>
    <section class="section"><About /></section>

    <section class="section">
      <DoorOverview :doors="[
        { title: 'GARAGEPORT', text: 'En garageport er ...', image: '/images/garageport.webp' },
        { title: 'LAVENERGIPORT', text: 'En lavenergipo...' },
        { title: 'HURTIGPORT', text: 'En hurtigport ...' },
        { title: 'LEDHEJSEPORT', text: 'En ledhejseport ...', image: '/images/ledhejseport.webp' },
        { title: 'MIX/MIX INSU PORT', text: 'Mix/Mix Insu ...' },
        { title: 'PANORAMAPORT', text: 'En panoramaport ...' }
      ]" />
    </section>

    <section class="section"><CustomerReviews /></section>
    <section class="section"><Slideshow /></section>
    <section class="section"><VideoGallery /></section>
    <section class="section"><NewsSection /></section>

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