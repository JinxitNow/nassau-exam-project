<script setup>
// reiner UI-Component
</script>

<template>
  <section class="news-section">

    <!-- TITEL + BESCHREIBUNG RECHTS -->
    <div class="news-header">
      <h1 class="news-title">PORT NYHEDER</h1>
      <h2 class="news-subtitle">FIND VORES PORT-NYHEDER OG MERE HER</h2>
    </div>

    <!-- GRID -->
    <div class="news-grid">

      <!-- CARD 1 -->
      <div class="news-card">
        <div class="news-img-wrapper">
          <img src="/img/news1.webp" alt="Nyhed 1" class="news-img" />
        </div>
        <p class="news-headline">NASSAU søger Servicekoordinator</p>
        <a class="news-link">Læs mere om jobbet her →</a>
      </div>

      <!-- CARD 2 -->
      <div class="news-card">
        <div class="news-img-wrapper">
          <img src="/img/news2.webp" alt="Nyhed 2" class="news-img" />
        </div>
        <p class="news-headline">Nye ledhejseporte til Odense Havn</p>
        <a class="news-link">Læs mere her →</a>
      </div>

      <!-- CARD 3 -->
      <div class="news-card">
        <div class="news-img-wrapper">
          <img src="/img/news3.webp" alt="Nyhed 3" class="news-img" />
        </div>
        <p class="news-headline">NASSAU lavenergiport kampagne</p>
        <a class="news-link">Læs mere her →</a>
      </div>

      <!-- CARD 4 -->
      <div class="news-card">
        <div class="news-img-wrapper">
          <img src="/img/news4.webp" alt="Nyhed 4" class="news-img" />
        </div>
        <p class="news-headline">NASSAU leverer 91 ledhejseporte</p>
        <a class="news-link">Læs mere her →</a>
      </div>

    </div>

    <!-- BUTTON -->
    <div class="news-btn-wrapper">
      <a class="cta news-btn">SE ALLE NYHEDER</a>
    </div>

  </section>
</template>

<style scoped>
/* ============================
   MOBILE FIRST
============================ */

.news-section {
  width: 100%;
}

/* HEADER rechtsbündig */
.news-header {
  text-align: left;
  margin-bottom: 20px;
}

/* GRID: 2 CARDS ON MOBILE */
.news-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

/* CARD */
.news-card {
  text-align: left;
}

/* BILD-WRAPPER: sorgt für gleiche Größe */
.news-img-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* füllt Box perfekt aus */
  display: block;
}

.news-headline {
  margin: 8px 0 4px 0;
  font-weight: 700;
}

.news-link {
  font-size: 12px;
  color: var(--color-black);
  cursor: pointer;
  font-style: italic;
}

/* BUTTON WRAPPER */
.news-btn-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

/* Button etwas kleiner auf Mobile */
.news-btn {
  padding: 8px 16px;
  font-size: 12px;
  color: var(--color-white);
  background-color: var(--color-primary);
  min-width: 180px;
}

/* ============================
   DESKTOP VERSION
============================ */
@media (min-width: 768px) {

  /* 4 CARDS ON DESKTOP */
  .news-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .news-btn {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 240px;
  }
}
</style>
