<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import BackToTop from "@/components/BackToTop.vue"
import ChatBubble from "@/components/ChatBubble.vue"
import CookieBanner from "@/components/CookieBanner.vue"
import NewsBar from "./components/NewsBar.vue"
import Hero from "./components/Hero.vue"
import Slideshow from "./components/Slideshow.vue"
import NewsSection from "./components/NewsSection.vue"
import VideoGallery from "./components/VideoGallery.vue"


</script>

<template>
  <NewsBar />
  <Header />
<Hero/>
<Slideshow/>
<VideoGallery/>
<NewsSection/>

  <!-- Her skifter routeren mellem HomeView, BirthdayCampaignView osv. -->
  <router-view />

  <Footer />

  <BackToTop />
  <ChatBubble />
  <CookieBanner />
</template>
