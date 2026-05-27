<script setup>
function playYoutube(event) {
  const wrapper = event.currentTarget.parentElement
  const overlay = wrapper.querySelector(".video-overlay")
  const iframe = wrapper.querySelector("iframe")

  overlay.style.display = "none"

  // Base URL ohne Parameter
  const baseUrl = iframe.src.split("?")[0]

  // Autoplay aktivieren
  iframe.src = `${baseUrl}?autoplay=1&mute=0`
}
</script>

 <template>
  <section class="about">
    <h1>DANSK PRODUCERET PORT FRA NASSAU</h1>

    <div class="about-wrapper">

      <!-- ⭐ NEUES YOUTUBE-VIDEO MIT OVERLAY -->
      <div class="video-wrapper">
        <div class="video-overlay" @click="playYoutube($event)">
          <div class="play-button"></div>
        </div>

        <iframe
          class="video-frame"
          src="https://www.youtube.com/embed/yOa5zWFCdxM?controls=0&mute=1"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>

      <!-- TEXT -->
      <div class="about-p">
        <p>
          NASSAU har siden 1970 produceret ledhejseporte af højeste kvalitet. 
          Efter stor forespørgsel producerer NASSAU nu også Garageporte til private. 
          De mange års erfaring gør, at NASSAU har høj kvalitet i alle led i tilblivelsen af din port. 
          Teknisk assistance i planlægningsfasen, kvalitetskontrol i produktionen, 
          montage udført af dygtige montører og løbende support, service og vedligeholdelse af din port, 
          sikrer den optimale oplevelse igennem hele portens levetid.
        </p>

        <p>
          Design, Kvalitet og Rådgivning er nøgleordene bag de bedste garageporte og Industriporte på markedet. 
          Så ligegyldigt om du skal bruge en port til lade, porte til en hal, 
          garageport eller andre produkter i forbindelse med din port, 
          handler du direkte hos NASSAU som producent uden forstyrrende mellemled. 
          Dette kommer dig til gode som kunde, da du altid kan tage fat i NASSAU for at få hjælp til din port, 
          ligegyldigt hvilket problem du måtte have.
        </p>

        <a class="cta" href="https://nassau.dk/om-nassau/">LÆS MERE OM NASSAU</a>
      </div>
    </div>
</section>
    <!-- INFO-BOKSE -->
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

</template>


<style scoped>

.about {
  margin-bottom: 3rem;
}

.cta {
  margin-top: 1rem;
}

/* VIDEO – samme størrelse som original thumbnail */
.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 609px; /* ⭐ samme bredde som original */
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin-bottom: 1rem;
}

/* VIDEO FRAME */
.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
}

/* OVERLAY */
.video-overlay {
  position: absolute;
  inset: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease;
  z-index: 2;
}

/* PLAY BUTTON */
.play-button {
  width: 64px;
  height: 64px;
  background: var(--color-white);
  border-radius: 50%;
  position: relative;
}

.play-button::after {
  content: "";
  position: absolute;
  left: 24px;
  top: 18px;
  width: 0;
  height: 0;
  border-left: 22px solid var(--color-primary);
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
}

/* REST VON DEINEM ABOUT-CSS UNVERÄNDERT */
.video-link {
  display: inline-block;
  text-decoration: none;
  margin-left: 20px;
}

.info-bokse {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

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

/* Desktop */
@media (min-width: 1024px) {

  .about {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    margin-bottom: 8rem;
  }

  .about h1 {
    order: 1;
    white-space: nowrap;
    text-align: left;
    margin-bottom: 15px;
  }

  .about-wrapper {
    order: 2;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    max-width: 1600px;
  }

  .about-p {
    max-width: 700px;
    text-align: left;
    line-height: 1.6;
  }

  .cta {
    display: inline-block;
    margin-top: 20px;
  }

  .info-bokse {
    order: 3;
    display: flex;
    justify-content: center;
    gap: 250px;
    margin-top: 40px;
    flex-direction: row;
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
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .play-button {
    width: 90px;
    height: 90px;
  }

  .play-button::after {
    left: 34px;
    top: 26px;
    border-left: 32px solid var(--color-primary);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
}


</style>
