<script setup>
// Her skriver du logik, imports, variabler osv.
</script>

<template>
  <!-- Her skriver du HTML-strukturen -->
   <section class="kategori-grid">

    <div class="titles">
      <h1 class="title-erhverv">ERHVERV</h1>
      <h1 class="title-privat">PRIVAT</h1>
    </div>
    
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
</template>

<style scoped>
/* Her skriver du styling kun for denne komponent */

.kategori-grid {
  background-color: var(--color-primary);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 154px);
  gap: 20px;
  justify-content: center;
}

/* Titlerne øverst */
.titles {
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
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



</style>
