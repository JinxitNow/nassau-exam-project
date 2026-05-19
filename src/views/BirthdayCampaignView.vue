<script setup>
function playVideo(event) {
  const wrapper = event.currentTarget.parentElement
  const overlay = wrapper.querySelector(".video-overlay")
  const iframe = wrapper.querySelector("iframe")

  overlay.style.display = "none"

  const baseUrl = iframe.src.split("?")[0]
  iframe.src = `${baseUrl}?autoplay=1&muted=0&controls=1&modestbranding=1&rel=0`
}

import ChatBubble from "@/components/ChatBubble.vue"

</script>

<template>

  <div class="campaign">

    <!-- ========================= -->
    <!-- HERO SECTION -->
    <!-- ========================= -->
    <section class="hero">

      <div class="hero-content">
        <h1>NASSAU FYLDER 56 ÅR 🎉</h1>
        <h2>Dansk kvalitet siden 1970 — bygget på erfaring, innovation og tillid.</h2>
        <p class="hero-text">
        NASSAU fylder 56 år — og det er en milepæl, vi er stolte af.
        Siden 1970 har vi udviklet og produceret porte i dansk kvalitet, <br> skabt med præcision, erfaring og et stærkt fokus på holdbarhed.
        Gennem årene har vi udvidet vores sortiment, forbedret <br> vores teknologi og styrket vores service, men vores værdier er de samme: kvalitet, pålidelighed og godt håndværk.
        <br>I dag står NASSAU som en af branchens mest erfarne producenter<br> — og vi glæder os til at fortsætte rejsen sammen med vores kunder.</p>

       <a href="https://nassau.dk/om-nassau/historien-om-nassau-ledhejseporte/" class="cta">LÆS MERE OM NASSAUS HISTORIE</a>

      </div>

      <div class="hero-image-wrapper">
        <img src="/img/nassau-birthday.svg" alt="Hero Grafik" class="hero-img" />
      </div>

    </section>

<div class="floating-balloons">
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
  <img src="/img/balloon1.svg" class="float-balloon" />
</div>


<ChatBubble/>
    <!-- ========================= -->
    <!-- VIDEO + TEXT SECTION -->
    <!-- ========================= -->
    <section class="video-section">

      <!-- TEXT LINKS -->
      <div class="video-text">
        <h2>EN DAG HOS NASSAU</h2>

        <p>
          Hos NASSAU fejrer vi ikke kun vores 56 år — vi fejrer menneskene bag.
        Hver dag skaber vores medarbejdere værdi gennem deres faglighed, engagement og samarbejde.
        Derfor bad vi hele NASSAU‑teamet om at dele et øjeblik fra deres arbejdsdag: fra produktionen og logistikken til kontorerne, rådgivningen og servicebilerne.
        </p>
        <p>        
        Det giver et ærligt indblik i den hverdag, hvor kvalitet bliver til virkelighed, og hvor hver port er resultatet af mange menneskers indsats.
        Vi er stolte af vores historie, men endnu mere stolte af det fællesskab, der driver os fremad.
        </p>

        <p>Tak til alle medarbejdere, kunder og samarbejdspartnere, der har været med på rejsen — og som fortsat er med til at forme fremtiden for NASSAU.
</p>
               <a href="https://nassau.dk/referencer/garageport-inspiration/" class="cta small">SE MERE FRA NASSAU</a>

      </div>

      <!-- VIDEO RIGHT -->
      <div class="video-wrapper">

        <!-- BALLOONS -->
        <img src="/img/balloon1.svg" class="balloon balloon-top-right" alt="Ballon" />
        <img src="/img/balloon1.svg" class="balloon balloon-bottom-left" alt="Ballon" />

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

  <h1 class="usp-title">56 år NASSAU</h1>

  <div class="usp-section-row">

    <div class="usp">
      <img src="/icons/port-circle.svg" class="icon" />
      <h3>Siden 1970</h3>
      <p>Kvalitet, erfaring og dansk håndværk i mere end 50 år.</p>
    </div>

    <div class="usp">
      <img src="/icons/truck-circle.svg" class="icon" />
      <h3>Hurtig levering</h3>
      <p>Garageporte leveres på kun 2–3 uger – hver gang.</p>
    </div>

    <div class="usp">
      <img src="/icons/ribbon-circle.svg" class="icon" />
      <h3>Dansk kvalitet</h3>
      <p>Produceret i Danmark med fokus på holdbarhed og sikkerhed.</p>
    </div>

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
        <img src="/img/birthday1.webp" alt="Gallery" />
        <img src="/img/birthday2.webp" alt="Gallery" />
        <img src="/img/birthday3.webp" alt="Gallery" />
        <img src="/img/birthday4.webp" alt="Gallery" />
        <img src="/img/birthday5.webp" alt="Gallery" />
        <img src="/img/birthday6.webp" alt="Gallery" />
      </div>

    </section>

  </div>
</template>

<style scoped>

/* ========================= */
/* GLOBAL / MOBILE FIRST */
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

/* ========================= */
/* HERO */
/* ========================= */

.hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.hero h1 {
  color: var(--color-black);
}

.hero h2 {
  color: var(--color-cta-red);
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

/* ========================= */
/* VIDEO SECTION */
/* ========================= */

.video-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 48px;
  margin-bottom: 3rem;
}

.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: visible;
  border-radius: 10px;
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}

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
  border-left: 26px solid var(--color-primary);
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
}

.video-text p {
  margin-bottom: 0.8rem;
}

/* ========================= */
/* STATIC BALLOONS */
/* ========================= */

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

/* ========================= */
/* FLOATING BALLOONS */
/* ========================= */

.floating-balloons {
  position: absolute;
  bottom: -140px;
  left: 0;
  width: 100%;
  pointer-events: none;
  overflow: visible;
}

.float-balloon {
  position: absolute;
  width: 90px;
  opacity: 0;
  animation: balloonFloat 8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

.float-balloon:nth-child(1) { left: 55%; animation-delay: 0.2s; transform: scale(1.05); }
.float-balloon:nth-child(2) { left: 68%; animation-delay: 0.7s; transform: scale(0.95); }
.float-balloon:nth-child(3) { left: 78%; animation-delay: 0.4s; transform: scale(1.1); }
.float-balloon:nth-child(4) { left: 88%; animation-delay: 1.1s; transform: scale(0.9); }

@keyframes balloonFloat {
  0%   { transform: translateY(0) translateX(0); opacity: 0; }
  10%  { opacity: 1; }
  100% { transform: translateY(-950px) translateX(15px); opacity: 0; }
}

/* ========================= */
/* USP SECTION */
/* ========================= */

.usp-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 4rem;
  text-align: center;
}

.usp-title {
  font-weight: 700;
  color: var(--color-cta-red);
  margin-bottom: 1rem;
}

.usp {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
}

.usp .icon {
  width: 70px;
  height: 70px;
  margin-bottom: 1rem;
}

.usp h3 {
  margin: 0.5rem 0;
  color: var(--color-black);
}

.usp p {
  line-height: 1.4;
  color: var(--color-black);
}

/* ========================= */
/* GALLERY */
/* ========================= */

.gallery {
  text-align: center;
  margin-top: 4rem;
}

.gallery-sub {
  margin-bottom: 2rem;
  opacity: 0.8;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.gallery-grid img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}

/* ========================= */
/* GALLERY – TITLE LEFT */
/* ========================= */

.gallery h2,
.gallery-sub {
  text-align: left;
  margin-left: 0;
}


/* ========================= */
/* TABLET */
/* ========================= */

@media (min-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid img {
    height: 220px;
  }
}

/* ========================= */
/* DESKTOP */
/* ========================= */

@media (min-width: 768px) {

  /* HERO */
  .hero {
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100vw;
    margin-left: calc(-1 * var(--body-padding, 3.8rem));
    margin-right: calc(-1 * var(--body-padding, 3.8rem));
    padding-left: var(--body-padding, 3.8rem);
  }

  .cta {
    margin-top: 30px;
  }

  .hero-content {
    flex: 1;
  }

  .hero-image-wrapper {
    flex: 1;
    justify-content: flex-end;
  }

  .hero-img {
    width: 180%;
    transform: translateX(0%);
  }

  /* VIDEO */
  .video-section {
    flex-direction: row;
    align-items: center;
    margin-top: 150px;
  }

  .video-text {
    flex: 1;
    padding-right: 4rem;
  }

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

  /* USP */
  .usp-section {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  .usp-section-row {
    display: flex;
    justify-content: center;
    gap: 6rem;
  }

  .usp {
    max-width: 280px;
  }
}

/* ========================= */
/* DESKTOP LARGE */
/* ========================= */

@media (min-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-grid img {
    height: 260px;
  }
}

</style>
