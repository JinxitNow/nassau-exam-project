<script setup>
import Hero from "@/components/Hero.vue"
import Slideshow from "@/components/Slideshow.vue"
import VideoGallery from "@/components/VideoGallery.vue"
import NewsSection from "@/components/NewsSection.vue"
import ChatBubble from "@/components/ChatBubble.vue"
</script>

<template>
  <section class="home">
    <Hero />
     <ChatBubble />
    <Slideshow />
    <VideoGallery />
    <NewsSection />
  </section>
</template>
