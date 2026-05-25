<script setup>
// reiner UI-Component
</script>

<template>
  <!-- Wrapper entfernt globales body-padding -->
  <section class="hero-wrapper">
    <section class="hero">

      <!-- ============================
           MOBILE VERSION
      ============================ -->
      <div class="hero-mobile">

        <!-- LEFT IMAGE -->
        <div class="hero-mobile">

  <a href="https://nassau.dk/webshop/" class="hero-mobile-box">
    <img src="/img/herol.webp" alt="Privat" class="hero-mobile-img" />
    <h1 class="hero-title-mobile">PRIVAT</h1>
  </a>

  <a href="https://nassau.dk/webshop/ledhejseport/1/" class="hero-mobile-box">
    <img src="/img/heror.webp" alt="Erhverv" class="hero-mobile-img" />
    <h1 class="hero-title-mobile">ERHVERV</h1>
  </a>

</div>

      </div>

      <!-- ============================
           DESKTOP VERSION
      ============================ -->
      <div class="hero-desktop">

        <!-- LEFT SIDE -->
        <div class="hero-desktop-box">
          <img src="/img/herol.webp" alt="Privat" class="hero-desktop-img" />

          <div class="hero-desktop-content center-content">
            <h1 class="hero-title-desktop">Privat</h1>
            <a class="cta" href="https://nassau.dk/webshop/">GÅ TIL GARAGEPORT WEBSHOP</a>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="hero-desktop-box">
          <img src="/img/heror.webp" alt="Erhverv" class="hero-desktop-img" />

          <div class="hero-desktop-content center-content">
            <h1 class="hero-title-desktop">Erhverv</h1>
            <a class="cta" href="https://nassau.dk/webshop/ledhejseport/1/">GÅ TIL INDUSTRIPORTE WEBSHOP</a>
          </div>
        </div>

      </div>

    </section>
  </section>
</template>

<style scoped>
/* ============================
   HERO WRAPPER — entfernt globales body padding
============================ */

.hero-wrapper {
  width: 100vw;
  position: relative;

  /* Mobile: body padding = 1.5rem */
  margin-left: calc(-1 * 1.5rem);
  margin-right: calc(-1 * 1.5rem);
}

@media (min-width: 768px) {
  .hero-wrapper {
    /* Desktop: body padding = 3.8rem */
    margin-left: calc(-1 * 3.8rem);
    margin-right: calc(-1 * 3.8rem);
  }
}

/* ============================
   MOBILE FIRST
============================ */

.hero {
  width: 100%;
}

/* MOBILE: two images side by side */
.hero-mobile {
  display: flex;
  width: 100%;
}

.hero-mobile-box {
  display: block;
  position: relative;
  width: 50%;
  aspect-ratio: 715 / 471;
  text-decoration: none;
}

.hero-mobile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-title-mobile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: var(--color-white);
  text-transform: uppercase;
  line-height: 1.1;
  text-align: center;
}



/* DESKTOP HIDDEN ON MOBILE */
.hero-desktop {
  display: none;
}

.hero-title-link {
  color: inherit;
  text-decoration: none;
}

/* ============================
   DESKTOP VERSION
============================ */
@media (min-width: 768px) {
  .hero-mobile {
    display: none;
  }

  .hero-desktop {
    display: flex;
    width: 100%;
    height: 471px; /* exakt wie dein Bild */
  }

  .hero-desktop-box {
    width: 50%;
    position: relative;
    overflow: hidden;
  }

  .hero-desktop-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* CENTER CONTENT (Text + Button) */
  .center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    text-align: center;
  }

  .hero-title-desktop {
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 96px;
    font-weight: 700;
    color: var(--color-white);
    text-transform: capitalize;
    line-height: 1;
    text-shadow: 0 4px 18px rgba(0, 0, 0, 0.55);

  }
}
</style>
