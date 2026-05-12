<script setup>
function playVideo(event) {
  const wrapper = event.currentTarget.parentElement
  const overlay = wrapper.querySelector(".video-overlay")
  const iframe = wrapper.querySelector("iframe")

  overlay.style.display = "none"

  // Autoplay aktivieren
  if (!iframe.src.includes("autoplay=1")) {
    iframe.src += iframe.src.includes("?") ? "&autoplay=1" : "?autoplay=1"
  }
}
</script>

<template>
  <section class="video-gallery">

    <!-- HEADER -->
    <div class="video-header">
      <h1 class="video-title">VIDEO GALLERI</h1>
      <h2 class="video-subtitle">SE VORES SENESTE VIDEOER HER</h2>
    </div>

    <!-- GRID -->
    <div class="video-grid">

      <!-- VIDEO CARD 1 -->
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-overlay" @click="playVideo($event)">
            <div class="play-button"></div>
          </div>

          <iframe
            class="video-frame"
            src="https://player.vimeo.com/video/975055988"
            title="Video 1"
            allowfullscreen
          ></iframe>
        </div>

        <p class="video-headline">The Nordic Barnhouse port</p>
        <a class="video-link">Se hele projektet her →</a>
      </div>

      <!-- VIDEO CARD 2 -->
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-overlay" @click="playVideo($event)">
            <div class="play-button"></div>
          </div>

          <iframe
            class="video-frame"
            src="https://player.vimeo.com/video/681303016"
            title="Video 2"
            allowfullscreen
          ></iframe>
        </div>

        <p class="video-headline">Nicolas Kiesas port fra NASSAU</p>
        <a class="video-link">Se Kiesas garage her →</a>
      </div>

      <!-- VIDEO CARD 3 -->
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-overlay" @click="playVideo($event)">
            <div class="play-button"></div>
          </div>

          <iframe
            class="video-frame"
            src="https://player.vimeo.com/video/974155291"
            title="Video 3"
            allowfullscreen
          ></iframe>
        </div>

        <p class="video-headline">Garageporte produceret i Danmark</p>
        <a class="video-link">Se mere →</a>
      </div>

      <!-- VIDEO CARD 4 -->
      <div class="video-card">
        <div class="video-wrapper">
          <div class="video-overlay" @click="playVideo($event)">
            <div class="play-button"></div>
          </div>

          <iframe
            class="video-frame"
            src="https://player.vimeo.com/video/961076345"
            title="Video 4"
            allowfullscreen
          ></iframe>
        </div>

        <p class="video-headline">Når standard ikke er nok – vi bygger efter dine mål</p>
        <a class="video-link">Se mere →</a>
      </div>

    </div>

    <!-- BUTTON -->
    <div class="video-btn-wrapper">
      <a class="cta video-btn">SE FLERE AF VORES VIDEOS</a>
    </div>

  </section>
</template>

<style scoped>
/* ============================
   MOBILE FIRST
============================ */

.video-gallery {
  width: 100%;
}

.video-header {
  text-align: left;
  margin-bottom: 20px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.video-card {
  text-align: left;
}

/* VIDEO WRAPPER */
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

/* VIDEO FRAME */
.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}

/* OVERLAY */
.video-overlay {
  position: absolute;
  inset: 0;
  background: transparent; /* kein Overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease;
  z-index: 2;
}

.video-overlay:hover {
  background: transparent; /* kein Hover-Dunkel */
}


/* PLAY BUTTON */
.play-button {
  width: 64px;
  height: 64px;
  background: var(--color-white);
  border-radius: 50%;
  position: relative;
}

.play-button::after {
  content: "";
  position: absolute;
  left: 24px;
  top: 18px;
  width: 0;
  height: 0;
  border-left: 22px solid var(--color-primary);
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
}

/* TEXT */
.video-headline {
  margin: 8px 0 4px 0;
  font-weight: 700;
}

.video-link {
  font-size: 12px;
  color: var(--color-black);
  cursor: pointer;
  font-style: italic;
}

/* BUTTON */
.video-btn-wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

.video-btn {
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
  .video-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .video-btn {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 240px;
  }
}
</style>
