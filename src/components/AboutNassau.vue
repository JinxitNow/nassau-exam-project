<script setup>
// Her skriver du logik, imports, variabler osv.
</script>

<template>
  <!-- Her skriver du HTML-strukturen -->
  <section class="about">
    <h1>DANSK PRODUCERET <br> PORT FRA NASSAU</h1>

    <div class="video-link">
      <a href="https://youtu.be/yOa5zWFCdxM">
        <img src="/public/img/produktions thumbnail.webp" alt="video thumbnail" class="video-thumb">
      </a>
    </div>

    <div class="about-p">
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
    </div>

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

.about-p {
  margin-left: 20px;
}

.video-link {
  display: inline-block;
  text-decoration: none;
  margin-left: 20px;
}

.video-thumb {
  width: 300px;
  height: auto;
  transition: 0.25s ease;
  cursor: pointer;
}


.info-bokse {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ikon + tekst på samme linje */
.boks {
  display: flex;
  align-items: center;
  gap: 16px;
}

.boks img {
  width: 83px;
  height: 83px;
  flex-shrink: 0;
  margin-left: 20px;
}

.boks p {
  margin: 0;
  line-height: 1.4;
  max-width: 280px;
}

/* Desktop: 3 kolonner */
@media (min-width: 1024px) {

  /* Hele sektionen */
  .about {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    padding: 40px 20px;
  }

  /* Overskrift */
  .about h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  /* Video */
  .video-link {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }

  .video-thumb {
    width: 100%;
    max-width: 609px;
  }

  /* Tekst */
  .about-p {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.6;
    font-size: 18px;
  }

  /* Knap */
  .cta {
    display: inline-block;
    margin: 30px auto;
  }

  /* Ikoner */
  .info-bokse {
    display: flex;
    justify-content: center;
    gap: 200px;
    margin-top: 40px;
    flex-direction: row; /* 3 i række */
  }

  .boks {
    max-width: 250px;
    text-align: center;
    flex-direction: column;
  }

  .boks img {
    width: 143px;
    height: 142px;
    margin: 0 auto 10px;
  }

  .boks p {
    max-width: 250px;
    margin: 0 auto;
  }
}

</style>
