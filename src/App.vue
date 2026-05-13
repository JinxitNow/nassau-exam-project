<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import BackToTop from "@/components/BackToTop.vue"
import CookieBanner from "@/components/CookieBanner.vue"
import NewsBar from "@/components/NewsBar.vue"
</script>

<template>
  <div id="app">
    <NewsBar />
    <Header />

    <!-- Hier erscheinen HomeView, BirthdayCampaignView usw. -->
    <router-view />

    <Footer />
    <BackToTop />
    <CookieBanner />
  </div>
</template>
