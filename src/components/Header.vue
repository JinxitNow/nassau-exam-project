<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-container">

      <!-- Logo -->
      <a href="https://nassau.dk/" class="logo">
  <img src="/logo/nassau-logo-w.svg" alt="Nassau logo" />
</a>


      <!-- Navigation -->
    <nav :class="['nav', { open: menuOpen }]">
  <ul class="nav-list">

    <!-- PRODUKTER -->
    <li class="has-dropdown">
      <a href="/produkter">PRODUKTER</a>
      <ul class="dropdown">
        <li>Industriporte</li>
        <li>Garageporte</li>
        <li>Automatik & tilbehør</li>
        <li>Tekniske specifikationer</li>
        </ul>
    </li>

    <!-- SERVICE -->
    <li class="has-dropdown">
      <a href="/service">SERVICE & REPARATION</a>
      <ul class="dropdown">
        <li>Bestil service</li>
        <li>Bestil reparation</li>
        <li>Ofte stillede spørgsmål</li>
        <li>Find din lokale portkonsulent</li>
      </ul>
    </li>

    <!-- RESSOURCER -->
    <li class="has-dropdown">
      <a href="/ressourcer">RESSOURCER</a>
      <ul class="dropdown">
        <li>Brochurer & videoer</li>
        <li>Arkitektmateriale</li>
        <li>Downloads</li>
      </ul>
    </li>

    <!-- REFERENCER -->
    <li class="has-dropdown">
      <a href="/referencer">REFERENCER</a>
      <ul class="dropdown">
        <li>Garageport galleri</li>
        <li>Industriport galleri</li>
        <li>Cases</li>
        <li>Kundeanmeldelser</li>
      </ul>
    </li>

    <!-- OM NASSAU -->
    <li class="has-dropdown">
      <a href="/om-nassau">OM NASSAU</a>
      <ul class="dropdown">
        <li>Hvem er NASSAU?</li>
        <li>Historien</li>
        <li>Organisation</li>
        <li>Miljøpolitik</li>
        <li>Job</li>
        <li>Nyheder</li>
      </ul>
    </li>

    <!-- WEBSHOP -->
    <li class="has-dropdown">
      <a href="/webshop">WEBSHOP</a>
      <ul class="dropdown">
        <li>Garageport webshop</li>
        <li>Industriport webshop</li>
        <li>Tilbehør webshop</li>
      </ul>
    </li>

  </ul>
</nav>


      <!-- Right icons -->
      <div class="header-actions">

        <div class="icon">
          <img src="/icons/shoppingbasket.svg" alt="Indkøbskurv" />
        </div>

        <div class="icon icon-flag">
          <img src="/icons/flag-danish.svg" alt="Sprog" />
        </div>

      </div>

      <!-- Burger -->
      <button class="burger" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>
</template>

<style scoped>

/* (MOBILVISNING)*/

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
}

/* Dropdown base */
.dropdown {
  display: none;
  position: absolute;
  background: var(--color-primary);
  padding: 12px 0;
  list-style: none;
  margin: 0;
  border: 1px solid rgba(255,255,255,0.1);
  min-width: 220px;
  z-index: 999;
}

.dropdown li {
  padding: 8px 16px;
  color: var(--color-white);
  font-size: 14px;
  white-space: nowrap;
}

.dropdown li:hover {
  background: rgba(255,255,255,0.1);
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

/* BURGER*/

.burger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  margin-left: 20px;
}

.burger span {
  width: 24px;
  height: 2px;
  background-color: var(--color-white);
}

/*NAV MOBILE*/

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
  max-height: 1500px;
}

.nav-list {
  margin: 0;
  padding: 0 1.5rem 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-list li a {
  color: var(--color-white);
  font-size: 14px;
  font-weight: 550;
  letter-spacing: 0.5px;
}

/* FLAG*/

.icon-flag {
  display: none;
}

/* Mobil: dropdowns vises som almindelige lister */
@media (max-width: 1023px) {
  .dropdown {
    display: block;
    padding-left: 20px;
  }

  .dropdown li {
    padding: 6px 0;
    font-size: 13px;
    color: var(--color-white);
  }
}


/*DESKTOP */

@media (min-width: 1024px) {

  .burger {
    display: none;
  }

  .icon-flag {
    display: block;
  }

  /* HEADER ROW STRUCTURE */
  .header-container {
    display: flex;
    align-items: center;
  }

  /* LOGO VENSTRE */
  .logo {
    flex: 0 0 auto;
  }

  /* NAV MIDT */
  .nav {
    position: static;
    flex: 1;
    display: flex;
    justify-content: flex-end; /* flytter menupunkter mod højre */
    background: transparent;
    max-height: none;
    overflow: visible;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin: 0;
    padding: 0 40px 0 0;
  }

  /* ICONS FAST HØJRE */
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
    margin-left: 1px;
  }

  .logo img {
    height: 42px;
  }
}

/* Desktop hover */
@media (min-width: 1024px) {
  .has-dropdown {
    position: relative;
  }

  .has-dropdown:hover .dropdown {
    display: block;
  }
}

</style>