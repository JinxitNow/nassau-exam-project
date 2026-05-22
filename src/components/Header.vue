<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-container">

      <!-- Logo -->
     <a href="https://nassau-exam.web.app/" class="logo">
  <img src="/logo/nassau-logo-w.svg" alt="Nassau logo" />
</a>


      <!-- Navigation -->
    <nav :class="['nav', { open: menuOpen }]">
  <ul class="nav-list">

    <!-- PRODUKTER -->
    <li class="has-dropdown">
      <a href="https://nassau-exam.web.app/">PRODUKTER</a>
      <ul class="dropdown">
        <li>Industriporte</li>
        <li>Garageporte</li>
        <li>tilbehør & ekstraudstyr</li>
        </ul>
    </li>

      <!-- SERVICE -->
    <li class="has-dropdown">
      <a href="https://nassau-exam.web.app/">SERVICE & REPARATION</a>
      <ul class="dropdown">
        <li>Bestil service</li>
        <li>Bestil reparation</li>
        </ul>
    </li>

       <!-- REFERENCER -->
    <li class="has-dropdown">
        <a href="https://nassau-exam.web.app/">REFERENCER</a>
      <ul class="dropdown">
        <li>Garageport galleri</li>
        <li>Industriport galleri</li>
        <li>Cases</li>
        <li>Kundeanmeldelser</li>
        <li>Brancheløsninger</li>
      </ul>
    </li>

   <!-- RESSOURCER -->
    <li class="has-dropdown">
        <a href="https://nassau-exam.web.app/">PRODUKTMATERIALE</a>
      <ul class="dropdown">
        <li>Brochurer & videoer</li>
        <li>Arkitektmateriale</li>
        <li>Downloads</li>
        <li>Tekniske specifikationer </li>
        </ul>
    </li>

         <!-- OM NASSAU -->
    <li class="has-dropdown">
        <a href="https://nassau-exam.web.app/">OM NASSAU</a>
      <ul class="dropdown">
        <li>Hvem er NASSAU?</li>
        <li>Historien</li>
        <li>Organisation</li>
        <li>Miljøpolitik</li>
        <li>Job</li>
        <li>Nyheder</li>
        <li>FAQ</li>
      </ul>
    </li>

     <!-- WEBSHOP -->
    <li class="has-dropdown">
        <a href="https://nassau-exam.web.app/">WEBSHOP</a>
      <ul class="dropdown">
        <li>Garageport webshop</li>
        <li>Industriport webshop</li>
        <li>Tilbehør webshop</li>
      </ul>
    </li>

    <!--KONTAKT -->
    <li class="has-dropdown">
        <a href="https://nassau-exam.web.app/">KONTAKT</a>
      <ul class="dropdown">
        <li>Find din lokale port konsulent </li>
        <li>Kontakt mig </li>
        <li>Find os </li>
      </ul>
    </li>

  </ul>
</nav>


      <!-- ICONER -->
      <div class="header-actions">

        <div class="icon">
          <img src="/icons/shoppingbasket.svg" alt="Indkøbskurv" />
        </div>

        <div class="icon icon-flag">
          <img src="/icons/flag-danish.svg" alt="Sprog" />
        </div>

      </div>

      <!-- BURGERMENU -->
      <button class="burger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>
</template>

<style scoped>

/* MOBILE FIRST*/

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: var(--color-primary);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}

/* CONTAINER*/

.header-container {
  display: flex;
  align-items: center;
  min-height: 80px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
}

@media (min-width: 768px) {
  .header-container {
    padding-left: 3.8rem;
    padding-right: 3.8rem;
    min-height: 88px;
  }
}

/* LOGO*/

.logo img {
  height: 40px;
  width: auto;
  display: block;
}

/* HEADER ACTIONS*/

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.header-actions .icon img {
  height: 22px;
  width: auto;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.header-actions .icon:hover {
  opacity: 0.7;
}

/*FLAG*/

.icon-flag {
  display: none;
}

/* BURGERMENU*/

.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;
}

.burger span {
  width: 24px;
  height: 2px;
  background-color: var(--color-white);
}

/*MOBILE NAVIGATION*/

.nav {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--color-primary);

  max-height: 0;
  overflow: hidden;

  transition: max-height 0.35s ease;
}

.nav.open {
  max-height: 2000px;
}

.nav-list {
  margin: 0;
  padding: 0 1.5rem 20px;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-list > li {
  width: 100%;
}

.nav-list li a {
  display: block;
  padding: 10px 0;

  color: var(--color-white);
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 0.5px;
  text-decoration: none;
}

/* MOBILE DROPDOWNS*/

.dropdown {
  display: block;
  position: static;

  background: transparent;
  border: none;

  margin: 0;
  padding: 0 0 0 20px;

  list-style: none;
  min-width: unset;
}

.dropdown li {
  padding: 6px 0;

  color: var(--color-white);
  font-size: 13px;

  white-space: normal;
}

.dropdown li:hover {
  background: transparent;
}

/* DESKTOP*/

@media (min-width: 1024px) {

  /* BURGER HIDDEN */
  .burger {
    display: none;
  }

  /* VIS FLAG */
  .icon-flag {
    display: block;
  }

  /* HEADER STRUCTURE */
  .header-container {
    display: flex;
    align-items: center;
  }

  /* LOGO */
  .logo {
    flex: 0 0 auto;
  }

  /* NAV */
  .nav {
    position: static;

    flex: 1;

    display: flex;
    justify-content: flex-end;

    background: transparent;

    max-height: none;
    overflow: visible;
  }

  .nav-list {
    flex-direction: row;
    align-items: center;

    gap: 32px;

    margin: 0;
    padding: 0 40px 0 0;
  }

  .nav-list > li {
    width: auto;
  }

  .nav-list li a {
    padding: 30px 0;
    font-size: 14px;
  }

  /* DROPDOWN */
  .has-dropdown {
    position: relative;
  }

  .dropdown {
    display: none;

    position: absolute;
    top: 100%;
    left: 0;

    background: var(--color-primary);

    border: 1px solid rgba(255,255,255,0.1);

    padding: 12px 0;
    min-width: 240px;

    z-index: 999;
  }

  .dropdown li {
    padding: 10px 16px;
    font-size: 14px;
    white-space: nowrap;
  }

  .dropdown li:hover {
    background: rgba(255,255,255,0.1);
  }

  .has-dropdown:hover .dropdown {
    display: block;
  }

  /* HEADER ACTIONS */
  .header-actions {
    flex: 0 0 auto;

    margin-left: auto;
    padding-right: 40px;

    display: flex;
    align-items: center;
    gap: 16px;
  }

  .header-actions .icon img {
    height: 22px;
  }

  /* LOGO */
  .logo img {
    height: 42px;
  }
}

</style>