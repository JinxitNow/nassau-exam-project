<script setup>
</script>

<template>
  <footer class="kontakt">
    <div class="kolonne">
      <h2>KONTAKT</h2>
      <p>NASSAU Door A/S</p>
      <p>Krogagervej 2</p>
      <p>5750 Ringe</p>
      <br>
      <p>Tlf.nr. 62 62 23 46</p>
      <p>E-mail: info@nassau.dk</p>
    </div>

    <div class="kolonne">
      <h2>VAGTCENTRAL/SERVICE/RESERVEDEL</h2>
      <h1>70 70 23 46</h1>
      <h2>KUNDESERVICE</h2>
      <h1>62 62 23 46</h1>
    </div>

    <div class="SoMe">
      <h2>SOCIALE MEDIER</h2>
      <img src="/icons/icon-facebook.svg" alt="facebook logo">
      <img src="/icons/icon-linkedin.svg" alt="linkedin logo">
      <img src="/icons/icon-youtube.svg" alt="youtube logo">
      <img src="/icons/icon-instagram.svg" alt="instagram logo">
      <img src="/icons/icon-houzz.svg" alt="houzz logo">
    </div>
    
    <div class="Nyttige links">
      <h2>NYTTIGE LINKS</h2>
      <p>FAQ</p>
      <p>Jobs hos NASSAU</p>
      <p>Hvem er NASSAU</p>
    </div>

    <div class="Internal links">
      <h2>INTERNAL LINKS</h2>
      <p>Privacy Policy</p>
      <p>Salgs- og leveringsbetingelser erhverv</p>
      <p>Salgs- og leveringsbetingelser privat</p>
      <p>Generelle vilkår og handelsbetingelser</p>
    </div>

    <p>©NASSAU Door A/S, Part of ASSA ABLOY © ASSA ABLOY ｜ CVR: 34391513 ｜ NASSAU-Portal</p>

  </footer>
</template>

<style scoped> 
/*mobil*/
.kontakt {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background-color: var(--color-primary);
  padding: 20px;
  width: 100vw;
  margin-left: calc(-1 var(--body-padding, 1.5rem));
  margin-right: calc(-1 * var(--body-padding, 1.5rem));
}

.kontakt h1 {
  color: var(--color-white);
}

.kontakt h2 {
  color: var(--color-white);
}

.kontakt p {
  color: var(--color-white);
}
.kolonne p {
  margin: 4px 0;
}
/*desktop*/
@media (min-width: 768px) {
  .kontakt {
    margin-left: calc(-1 * 3.8rem);
    margin-right: calc(-1 * 3.8rem);
  }
}
</style>
