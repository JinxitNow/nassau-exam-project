<script setup>
</script>

<template>
  <footer class="kontakt">
    <div class="kolonne">
      <p>KONTAKT</p>
      <p>NASSAU Door A/S</p>
      <p>Krogagervej 2</p>
      <p>5750 Ringe</p>
      <p>Tlf.nr. 62 62 23 46</p>
      <p>E-mail: info@nassau.dk</p>
    </div>

    <div class="kolonne">
      <p>VAGTCENTRAL/SERVICE/RESERVEDEL</p>
      <p>70 70 23 46</p>
      <p>KUNDESERVICE</p>
      <p>62 62 23 46</p>
    </div>
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
