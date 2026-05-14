<script setup>
import Hero from "@/components/Hero.vue"
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
    <Slideshow />
    <VideoGallery />
    <NewsSection />
  </section>
</template>
