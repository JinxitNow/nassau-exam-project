<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-container">

      <!-- Logo -->
      <a href="/" class="logo">
  <img src="/logo/nassau-logo-w.svg" alt="Nassau logo" />
</a>

      <!-- Navigation -->
      <nav :class="['nav', { open: menuOpen }]">
        <ul class="nav-list">
          <li><a href="/produkter">PRODUKTER</a></li>
          <li><a href="/service">SERVICE & REPARATION</a></li>
          <li><a href="/ressourcer">RESSOURCER</a></li>
          <li><a href="/referencer">REFERENCER</a></li>
          <li><a href="/om-nassau">OM NASSAU</a></li>
          <li><a href="/webshop">WEBSHOP</a></li>
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
  height: 18px;
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
    height: 18px;
    margin-left: 1px;
  }

  .logo img {
    height: 42px;
  }
}

</style>