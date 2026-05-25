<script setup>
// Her skriver du logik, imports, variabler osv.
import { ref } from 'vue'

const activeCategory = ref('privat')
</script>

<template>
  <!-- Her skriver du HTML-strukturen -->
    <div class="titles">
      <h1 class="title-erhverv" :class="{ active: activeCategory === 'erhverv' }" @click="activeCategory = 'erhverv'">ERHVERV</h1>
      <h1 class="title-privat" :class="{ active: activeCategory === 'privat' }" @click="activeCategory = 'privat'">PRIVAT</h1>
    </div>

    <!--privat--> 
   <section class="kategori-grid-privat" v-show="activeCategory === 'privat'">
    
    <div class="card">
      <img src="/public/img/category1.jpg.webp" alt="farveprøver">
      <h3>FARVEPRØVER</h3>
    </div>

    <div class="card">
      <img src="/public/img/category2.webp" alt="Kataloger">
      <h3>KATALOGER</h3>
    </div>

    <div class="card">
      <img src="/public/img/category3.webp" alt="Galleri">
      <h3>GALLERI</h3>
    </div>

    <div class="card">
      <img src="/public/img/category4.webp" alt="FAQ">
      <h3>FAQ</h3>
    </div>
   </section>

   <!--erhverv-->
   <section class="kategori-grid-erhverv" v-show="activeCategory === 'erhverv'">

    <div class="card">
      <img src="/public/img/Branche.webp" alt="Branche">
      <h3>BRANCHE</h3>
    </div>

    <div class="card">
      <img src="/public/img/Kataloger.webp" alt="Kataloger">
      <h3>KATALOGER</h3>
    </div>

    <div class="card">
      <img src="/public/img/Galleri.webp" alt="Galleri">
      <h3>GALLERI</h3>
    </div>

    <div class="card">
      <img src="/public/img/category4.webp" alt="FAQ">
      <h3>FAQ</h3>
    </div>
   </section>
</template>

<style scoped>
/* Her skriver du styling kun for denne komponent */

.kategori-grid-privat {
  background-color: var(--color-primary);
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 154px);
  gap: 20px;
  justify-content: center;
}

.kategori-grid-erhverv {
  background-color: var(--color-primary);
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 154px);
  gap: 20px;
  justify-content: center;
}

.kategori-grid-privat[style*="display: none"],
.kategori-grid-erhverv[style*="display: none"] {
  display: none !important;
}

/* Titlerne øverst */
.titles {
  background-color: var(--color-primary);

  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;

  display: flex;
  padding: 20px;
}

.titles h1 {
  position: relative;
  cursor: pointer;
  margin-left: 65px;
}

.titles h1.active::after {
  content: "";
  position: absolute;
  bottom: -5px; /* afstand til teksten */
  left: 0;
  width: 100%;
  height: 3px;
  background: white;
}

.title-erhverv,
.title-privat {
  color: var(--color-white);
}

/* Cards */
.card {
  width: 154px;
  background: white;
  text-align: center;
  padding-bottom: 10px;
  
}

/* Billederne bliver firkantede og fylder hele cardet */
.card img {
  width: 154px;
  height: 125px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

/* Teksten */
.card h3 {
  margin-top: 10px;
  background: none;
  color: black;
}

/* TABLET + DESKTOP */
@media (min-width: 768px) {
  .kategori-grid-privat {
    grid-template-columns: repeat(4, 312px);
  }

  .kategori-grid-erhverv {
    grid-template-columns: repeat(4, 312px);
  }

  .titles {
    grid-column: span 4;
    display: flex;
    justify-content: left;
    gap: 40px;
  }

  .card img {
    width: 312px;
    height: 252px;
  }

  .card {
    width: 312px;
    background: white;
    text-align: center;
    padding-bottom: 10px;
  }
}
</style>
