<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import BackToTop from "@/components/BackToTop.vue"
import ChatBubble from "@/components/ChatBubble.vue"
import CookieBanner from "@/components/CookieBanner.vue"
</script>

<template>
  <Header />

  <!-- Her skifter routeren mellem HomeView, BirthdayCampaignView osv. -->
  <router-view />

  <Footer />

  <BackToTop />
  <ChatBubble />
  <CookieBanner />
</template>
