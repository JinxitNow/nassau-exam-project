<script setup>
// reiner UI-Component
</script>

<template>
  <section class="news-section">

    <!-- HEADER -->
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
        <a class="news-link" href="https://www.jobindexarkiv.dk/arkiv/vis/r13775193">Læs mere om jobbet her →</a>
      </div>

      <!-- CARD 2 -->
      <div class="news-card">
        <div class="news-img-wrapper">
          <img src="/img/news2.webp" alt="Nyhed 2" class="news-img" />
        </div>
        <p class="news-headline">Nye ledhejseporte til Odense Havn</p>
        <a class="news-link" href="https://nassau.dk/ledhejseporte-odense-havn/?_gl=1*546vyn*_up*MQ..&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWWntv4taNUZUgkhbIJzj43yLvvJXA_f4dJFUsUynNPnbiunziOjiSYaAnNwEALw_wcB&gbraid=0AAAAAD5WBjE4e8j3bZAAgGV3_OTeiMlq2">Læs mere her →</a>
      </div>

      <!-- CARD 3 -->
      <div class="news-card hide-mobile">
        <div class="news-img-wrapper">
          <img src="/img/news3.webp" alt="Nyhed 3" class="news-img" />
        </div>
        <p class="news-headline">NASSAU lavenergiport kampagne</p>
        <a class="news-link" href="https://nassau.dk/lavenergi-kampagne/?_gl=1*1ye4n75*_up*MQ..&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWWntv4taNUZUgkhbIJzj43yLvvJXA_f4dJFUsUynNPnbiunziOjiSYaAnNwEALw_wcB&gbraid=0AAAAAD5WBjE4e8j3bZAAgGV3_OTeiMlq2">Læs mere her →</a>
      </div>

      <!-- CARD 4 -->
      <div class="news-card hide-mobile">
        <div class="news-img-wrapper">
          <img src="/img/news4.webp" alt="Nyhed 4" class="news-img" />
        </div>
        <p class="news-headline">NASSAU leverer 91 ledhejseporte</p>
        <a class="news-link" href="https://nassau.dk/91-nassau-ledhejseporte-til-lagerhotel/?_gl=1*1ye4n75*_up*MQ..&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWWntv4taNUZUgkhbIJzj43yLvvJXA_f4dJFUsUynNPnbiunziOjiSYaAnNwEALw_wcB&gbraid=0AAAAAD5WBjE4e8j3bZAAgGV3_OTeiMlq2">Læs mere her →</a>
      </div>

    </div>

    <!-- BUTTON -->
    <div class="news-btn-wrapper">
      <a class="cta news-btn" href="https://nassau.dk/om-nassau/nyheder/?_gl=1%2A546vyn%2A_up%2AMQ..&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWWntv4taNUZUgkhbIJzj43yLvvJXA_f4dJFUsUynNPnbiunziOjiSYaAnNwEALw_wcB&gbraid=0AAAAAD5WBjE4e8j3bZAAgGV3_OTeiMlq2">SE ALLE NYHEDER</a>
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

/* Hide card 3 + 4 on mobile */
.hide-mobile {
  display: none;
}

/* IMAGE WRAPPER */
.news-img-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.news-headline {
  margin: 8px 0 4px 0;
  font-weight: 700;
}

/* LINK STYLE (same as video section) */
.news-link {
  font-size: 12px;
  color: var(--color-black);
  cursor: pointer;
  font-style: italic;
  text-decoration: none;
  transition: 0.2s ease;
}

.news-link:hover {
  text-decoration: underline;
  opacity: 1;
}

/* BUTTON */
.news-btn-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

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

  /* Show all cards */
  .hide-mobile {
    display: block;
  }

  .news-btn {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 240px;
  }
}
</style>
