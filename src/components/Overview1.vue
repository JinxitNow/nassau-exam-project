<script setup>
// Her skriver du logik, imports, variabler osv.
</script>

<template>
  <!-- Her skriver du HTML-strukturen -->
   <section class="kategori-grid">
    <h2 class="title erhverv">ERHVERV</h2>

    <h2 class="title privat">PRIVAT</h2>

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
  grid-template-columns: 1fr;
  gap: 20px;
}

.kategori-title {
  color: white;
  margin-top: 20px;
}

.card {
  
  overflow: hidden;
  text-align: center;
  padding-bottom: 15px;
  
}

.card img {
  width: 154px;
  height: 125px;
  object-fit: cover;
}

.card h3 {
  margin-top: -7px;
  background: white;
}


</style>
