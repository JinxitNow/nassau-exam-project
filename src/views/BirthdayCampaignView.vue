<script setup>
function playVideo(event) {
  const wrapper = event.currentTarget.parentElement
  const overlay = wrapper.querySelector(".video-overlay")
  const iframe = wrapper.querySelector("iframe")

  overlay.style.display = "none"

  const baseUrl = iframe.src.split("?")[0]
  iframe.src = `${baseUrl}?autoplay=1&muted=0&controls=1&modestbranding=1&rel=0`
}
</script>

<template>
  <div class="campaign">

    <!-- ========================= -->
    <!-- HERO SECTION -->
    <!-- ========================= -->
    <section class="hero">

      <div class="hero-content">
        <h1>NASSAU FYLDER 56 ÅR 🎉</h1>

        <p class="hero-text">
          Siden 1970 har NASSAU leveret danskproducerede porte i høj kvalitet.  
          I år fejrer vi vores 56-års fødselsdag <br> 
          – og du er inviteret med!
        </p>

        <button class="cta">LÆS MERE OM NASSAU</button>
      </div>

      <div class="hero-image-wrapper">
        <img src="/img/nassau-birthday.svg" alt="Hero Grafik" class="hero-img" />
      </div>

    </section>

    <!-- ========================= -->
    <!-- VIDEO + TEXT SECTION -->
    <!-- ========================= -->
    <section class="video-section">

      <!-- TEXT LINKS -->
      <div class="video-text">
        <h2>EN DAG HOS NASSAU</h2>

        <p>
          I anledning af vores fødselsdag bad vi hele NASSAU‑teamet om  
          at dele et billede af deres arbejdsplads.
        </p>

        <p>
          Fra produktionen til kontoret – vores medarbejdere er kernen  
          i vores 56 års succes.
        </p>

        <button class="cta small">SE TEAMETS BILLEDER</button>
      </div>

      <!-- VIDEO RECHTS -->
      <div class="video-wrapper">

        <!-- BALLOONS -->
        <img src="/img/balloon.svg" class="balloon balloon-top-right" alt="Ballon" />
        <img src="/img/balloon.svg" class="balloon balloon-bottom-left" alt="Ballon" />

        <!-- OVERLAY -->
        <div class="video-overlay" @click="playVideo($event)">
          <div class="play-button"></div>
        </div>

        <!-- YOUTUBE IFRAME -->
        <iframe
          class="video-frame"
          src="https://www.youtube.com/embed/s_dWRm39qII?autoplay=0&muted=1&controls=0&modestbranding=1&rel=0"
          title="NASSAU Video"
          allowfullscreen
        ></iframe>

      </div>

    </section>

    <!-- ========================= -->
    <!-- USP SECTION -->
    <!-- ========================= -->
    <section class="usp-section">

      <div class="usp">
        <img src="/icons/placeholder.svg" alt="Icon" class="icon" />
        <h3>Siden 1970</h3>
        <p>Kvalitet, erfaring og dansk håndværk i mere end 50 år.</p>
      </div>

      <div class="usp">
        <img src="/icons/placeholder.svg" alt="Icon" class="icon" />
        <h3>Hurtig levering</h3>
        <p>Garageporte leveres på kun 2–3 uger – hver gang.</p>
      </div>

      <div class="usp">
        <img src="/icons/placeholder.svg" alt="Icon" class="icon" />
        <h3>Dansk kvalitet</h3>
        <p>Produceret i Danmark med fokus på holdbarhed og sikkerhed.</p>
      </div>

    </section>

    <!-- ========================= -->
    <!-- GALLERY SECTION -->
    <!-- ========================= -->
    <section class="gallery">

      <h2>ET GLIMT AF NASSAU</h2>
      <p class="gallery-sub">
        En samling af øjeblikke fra vores medarbejdere og produktion.
      </p>

      <div class="gallery-grid">
        <img src="/icons/placeholder.svg" alt="Gallery" />
        <img src="/icons/placeholder.svg" alt="Gallery" />
        <img src="/icons/placeholder.svg" alt="Gallery" />
        <img src="/icons/placeholder.svg" alt="Gallery" />
        <img src="/icons/placeholder.svg" alt="Gallery" />
        <img src="/icons/placeholder.svg" alt="Gallery" />
      </div>

    </section>

  </div>
</template>

<style scoped>
/* ========================= */
/* MOBILE FIRST */
/* ========================= */

.cta,
.cta:focus,
.cta:active {
  outline: none;
  box-shadow: none;
  border: none;
}


.campaign {
  padding: 1.5rem;
}

/* HERO */
.hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.hero h1 {
    color: var(--color-cta-red);
    font-size: 42px;
}

.hero-content {
  order: 1;
}

.hero-image-wrapper {
  order: 2;
  display: flex;
  justify-content: flex-end;
}

.hero-img {
  width: 130%;
  max-width: none;
  transform: translateX(5%);
}

/* VIDEO SECTION */
.video-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* ⭐ Fester Abstand zwischen Hero und Video */
  margin-top: 48px;
  margin-bottom: 3rem;
}

/* VIDEO WRAPPER */
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: visible;
  border-radius: 10px;
}

/* IFRAME */
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
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
}

/* PLAY BUTTON */
.play-button {
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}

.play-button::after {
  content: "";
  position: absolute;
  left: 26px;
  top: 20px;
  width: 0;
  height: 0;
  border-left: 26px solid var(--color-primary);
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
}

/* BALLOONS */
.balloon {
  position: absolute;
  width: 120px;
  height: 120px;
  pointer-events: none;
  opacity: 1;
  z-index: 4;
}

.balloon-top-right {
  top: -50px;
  right: -50px;
  transform: rotate(12deg);
}

.balloon-bottom-left {
  bottom: -50px;
  left: -50px;
  transform: rotate(-10deg);
}

/* VIDEO TEXT */
.video-text h2 {
  font-size: 20px;
  margin-bottom: 0.6rem;
  color: var(--color-cta-red);
}

.video-text p {
  font-size: 14px;
  margin-bottom: 0.8rem;
}

/* ========================= */
/* DESKTOP */
/* ========================= */
@media (min-width: 768px) {

  /* HERO DESKTOP */
  .hero {
    flex-direction: row;
    align-items: center;
    text-align: left;

    width: 100vw;
    margin-left: calc(-1 * var(--body-padding, 3.8rem));
    margin-right: calc(-1 * var(--body-padding, 3.8rem));
    padding-left: var(--body-padding, 3.8rem);
  }

  .hero-content {
    flex: 1;
  }

  .hero-image-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .hero-img {
    width: 180%;
    transform: translateX(0%);
  }

  /* VIDEO DESKTOP */
  .video-section {
    flex-direction: row;
    align-items: center;

    /* Desktop Abstand */
    margin-top: 150px;
  }

  /* TEXT LINKS */
  .video-text {
    flex: 1;
    padding-right: 2rem;
  }

  /* VIDEO RECHTS */
  .video-wrapper {
    flex: 1;
  }

  .balloon {
    width: 160px;
    height: 160px;
  }

  .balloon-top-right {
    top: -70px;
    right: -70px;
  }

  .balloon-bottom-left {
    bottom: -70px;
    left: -70px;
  }
}
</style>
