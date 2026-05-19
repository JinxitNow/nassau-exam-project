<script setup>
// Her skriver du logik, imports, variabler osv.
</script>

<template>
  <!-- Her skriver du HTML-strukturen -->
  <section class="About">
    <h1>DANSK PRODUCERET <br> PORT FRA NASSAU</h1>

    <p>NASSAU har siden 1970 produceret ledhejseporte af højeste kvalitet. 
      Efter stor forespørgsel producerer NASSAU nu også Garageporte til private. 
      De mange års erfaring gør, at NASSAU har høj kvalitet i alle led i tilblivelsen af din port. 
      Teknisk assistance i planlægningsfasen, kvalitetskontrol i produktionen, 
      montage udført af dygtige montører og løbende support, service og vedligeholdelse af din port, 
      sikrer den optimale oplevelse igennem hele portens levetid.
    </p>
    <p> Design, Kvalitet og Rådgivning er nøgleordene bag de bedste garageporte og Industriporte på markedet. 
      Så ligegyldigt om du skal bruge en port til lade, porte til en hal, 
      garageport eller andre produkter i forbindelse med din port, 
      handler du direkte hos NASSAU som producent uden forstyrrende mellemled. 
      Dette kommer dig til gode som kunde, da du altid kan tage fat i NASSAU for at få hjælp til din port, ligegyldigt, 
      hvilket problem at du måtte have.
    </p><br>

    <a class="cta" href="#">LÆS MERE OM NASSAU</a> <br><br>
    <section class="info-bokse">
      <div class="boks">
        <img src="/icons/truck-circle.svg" alt="lanstbil chirkel"> 
        <p>VI LEVERER INDUSTRIPORTE PÅ 4 – 5 OG GARAGEPORTE PÅ KUN 2 – 3 </p>
      </div>

      <div class="boks">
        <img src="/icons/port-circle.svg" alt="port chirkel">
        <p>HURTIG PORTESERVICE, REPERATION, LEVERING OG PROFESSIONEL MONTERING AF DIN NYE PORT</p>
      </div>

      <div class="boks">
        <img src="/icons/ribbon-circle.svg" alt="ribbon chirkel">
        <p>DANMARKS FØRENDE PRODUCENT AF LEDHEJSEPORTE, LAVENERGIPORTE OG HURTIGPORTE – DANSK KVALITET</p>
      </div>

    </section>
  </section>
</template>

<style scoped>
/* Her skriver du styling kun for denne komponent */
.info-bokse {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ikon + tekst på samme linje */
.boks {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.boks img {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.boks p {
  margin: 0;
  line-height: 1.4;
}

/* Desktop: 3 kolonner */
@media (min-width: 900px) {
  .info-bokse {
    flex-direction: row;
    justify-content: space-between;
  }

  .boks {
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 280px;
  }
}

</style>
