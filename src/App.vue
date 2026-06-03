<script setup>
import { ref, onMounted } from "vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import BackToTop from "@/components/BackToTop.vue"
import CookieBanner from "@/components/CookieBanner.vue"

// Das neue Component
import ExternalLinkWarning from "@/components/ExternalLinkWarning.vue"

const warning = ref(null)

onMounted(() => {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a")
    if (!link) return

    const url = link.getAttribute("href")

    // interne Links ignorieren
    if (!url || url.startsWith("/") || url.startsWith("#")) return

    // externe Links abfangen
    e.preventDefault()
    warning.value.openWarning(url)
  })
})
</script>

<template>
  <div id="app">
    <ExternalLinkWarning ref="warning" />

    <Header />

    <main>
      <!-- Her kommer HomeView, About, osv. -->
      <router-view />
    </main>

    <CookieBanner />
    <Footer />
    <BackToTop />
  </div>
</template>

