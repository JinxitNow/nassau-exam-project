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
    <ChatBubble />
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
    { 
      title: 'LEDHEJSEPORT', 
      text: 'En ledhejseport består af vandrette sektioner, der kører lodret op under loftet. Det er den mest almindelige porttype – stabil, pladsbesparende og velegnet til både private og erhverv.', 
      image: '/img/ledhejseporte.png' 
    },
    { 
      title: 'GARAGEPORT', 
      text: 'En garageport er i praksis også en ledhejseport, bare til private hjem. Den giver nem adgang til garagen, god isolering og kan tilpasses i farver, vinduer og design.', 
      image: '/img/garageport.png' 
    },
    { 
      title: 'LAVENERGIPORT', 
      text: 'En lavenergipo​rt er en ekstra godt isoleret ledhejseport, der holder bedre på varmen. Den er ideel til opvarmede garager, værksteder eller bygninger hvor energiforbruget betyder noget.', 
      image: '/img/lavenergiport.jpg'
    },
    { 
      title: 'HURTIGPORT', 
      text: 'En hurtigport er en ledhejseport, der åbner og lukker meget hurtigt. Den bruges især i industri, hvor man vil undgå træk, holde på varmen og sikre hurtig trafik ind og ud.', 
      image: '/img/hurtigport.jpg'
    },
    { 
      title: 'MIX/MIX INSU PORT', 
      text: 'En Mix/Mix Insu port er en robust ledhejseport, hvor man kombinerer materialer for at få både styrke og god isolering. Den bruges ofte i erhverv, hvor porten skal holde til meget.', 
      image: '/img/mix.jpg'
    },
    { 
      title: 'PANORAMAPORT', 
      text: 'En panoramaport er en ledhejseport med store glasfelter, der giver masser af lys og et moderne udtryk. Perfekt til showrooms, værksteder eller steder hvor man vil kunne se ind og ud.', 
      image: '/img/panorama.jpg'
    }
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
  margin: 0;
  padding: 0;
  max-width: 1400px;
}

@media (max-width: 768px) {
  .steps-quiz-wrapper {
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
  }
}

.expert-map-wrapper {
  display: flex;
  gap: 3rem;
}

@media (max-width: 768px) {
  .expert-map-wrapper {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>