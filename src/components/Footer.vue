<script setup>
</script>

<template>
  <footer class="footer">
    <div class="row-1">
      <div class="footer-section kontakt">
       <h2>KONTAKT</h2>
       <p>NASSAU Door A/S</p>
       <p>Krogagervej 2</p>
       <p>5750 Ringe</p>
       <br>
       <p>Tlf.nr. 62 62 23 46</p>
       <p>E-mail: info@nassau.dk</p>
      </div>
    

      <div class="footer-section service">
        <h2>VAGTCENTRAL/SERVICE/
         RESERVEDEL</h2>
        <h1>70 70 23 46</h1> <br>
        <h2>KUNDESERVICE</h2>
        <h1>62 62 23 46</h1>
      </div>
    </div>

    <div class="footer-section sociale-medier">
      <h2>SOCIALE MEDIER</h2>
      <div class="icons">
        <a href="https://www.facebook.com/NASSAUDoorDK/"><img src="/icons/icon-facebook.svg" alt="facebook logo"></a>
        <a href="https://www.linkedin.com/company/nassau-door-as/"><img src="/icons/icon-linkedin.svg" alt="linkedin logo"></a>
        <a href="https://www.instagram.com/nassaugarageport/"><img src="/icons/icon-instagram.svg" alt="instagram logo"></a>
        <a href="https://www.youtube.com/channel/UCJ-bKdYHaI66fJCkhXVUsUQ"><img src="/icons/icon-youtube.svg" alt="youtube logo"></a>
        <a href="https://www.houzz.dk/eksperter/forhandlere-af-garageporte/nassau-door-a-s-pfvwdk-pf~1294416725"><img src="/icons/icon-houzz.svg" alt="houzz logo"></a>
      </div>
    </div>
    
    <div class="row-2"> 
      <div class="footer-section nyttige-links">
        <h2>NYTTIGE LINKS</h2>
        <ul>
          <li><a href="https://nassau.dk/kontakt-nassau-door/ofte-stillede-spoergsmaal-porte/">FAQ</a></li>
          <li><a href="https://nassau.dk/om-nassau/job/">Job hos NASSAU</a></li>
          <li><a href="https://nassau.dk/om-nassau/hvem-er-nassau/">Hvem er NASSAU</a></li>
        </ul>
      </div>

      <div class="footer-section internal-links">
        <h2>INTERNAL LINKS</h2>
        <p>Privacy Policy</p>
        <p>Salgs- og leveringsbetingelser erhverv</p>
        <p>Salgs- og leveringsbetingelser privat</p>
        <p>Generelle vilkår og handelsbetingelser</p>
      </div>
    </div>

   <div class="footer-bottom">
  <p>
    ©NASSAU Door A/S, Part of ASSA ABLOY © ASSA ABLOY ｜ 
    CVR: 34391513 ｜ 
    <RouterLink to="/dashboard">
  NASSAU-Portal
</RouterLink>
  </p>
</div>
  </footer>
</template>

<style scoped>
/* MOBIL FIRST */
.footer {
  /* fuld bredde ud over side-container */
  background-color: var(--color-primary);
  color: var(--color-white);
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  padding: 30px 20px;
}

.row-1,
.row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* SOCIALE MEDIER og COPYRIGHT står alene */
.footer-section,
.footer-bottom {
  margin-bottom: 30px;
}

/* sørg for at ALT tekst i footeren bliver hvid,
   også hvis du har global p { color: black; } */
.footer h1,
.footer h2,
.footer p,
.footer li,
.footer a {
  color: var(--color-white);
}

.footer-section {
  margin-bottom: 24px;
}

.footer-section h2 {
  margin-bottom: 8px;
}

.footer-section h1 {
  margin: 4px 0 8px;
}

.footer-section p {
  margin: 2px 0;
}

.footer-section li {
  margin: 4px 0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section a {
  text-decoration: none;
}

/* mobil */
.icons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.icons img {
  width: 38px;
  height: 38px;
}

.footer-bottom {
  padding-top: 14px;
  margin-top: 10px;
  font-size: 0.85rem;
  text-align: center;
}

/*desktop*//* desktop */
@media (min-width: 900px) {

  .row-1,
  .row-2 {
    display: contents;
  }

  .footer {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding: 60px 80px 40px;
    align-items: stretch; /* vigtig */
  }

  .footer-section {
    border-right: 1px solid var(--color-white);
    padding-right: 20px;
    height: 70%; /* vigtig - Har liger lavet dem lidt kortere*/
    display: flex;
    flex-direction: column;
  }

  /* en tilpassning sådan at service og kontakt er tættere på hinanden på desktop */
@media (min-width: 1200px) {
  .service {
    margin-left: -9rem;
  }
}

  .footer p {
  font-size: 13px; /* så det passer med at det er en linje */
   margin-bottom: 0.5rem; /* tilpasset sådan at har samme udtryk som kontakt delen */
}

 .footer ul li {
  font-size: 13px; /* same here */
   margin-bottom: 0.5rem; /* tilpasset sådan at har samme udtryk som kontakt delen */
}

.footer h1 {
  font-size: 30px; /* har også tilpasset den sådan at der igen er size difference som før vi skiftede h2s størrelse */
}

  .kontakt {
    border-right: none;
    padding-right: 0;
  }

  .kontakt p {
    margin-bottom: 0.5rem; /* har tilføget lidt space sådan at teksten har ca samme højde som sercice delen */
  }

  .internal-links {
    border-right: none;
  }

  .footer-bottom {
    grid-column: 1 / -1;
    margin-top: 40px;
    text-align: center;
    padding-top: 0;

    /* fjern linjen */
    border-top: none;
  }

  @media (min-width: 900px) {

  .icons {
    display: grid;
    grid-template-columns: repeat(3, 38px);
    gap: 8px;
  }

  .icons a:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .icons a:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .icons a:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .icons a:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }

  .icons a:nth-child(5) {
    grid-column: 3;
    grid-row: 2;
  }

}
}

</style>
