<script setup>
</script>

<template>
  <section class="foursteps">
    <h2 class="title">Det er nemt at bestille en port fra NASSAU</h2>

    <div class="steps-grid">
  <div class="step step1">
    <div class="number">1</div>
    <div>
      <h3>Vælg din porttype</h3>
      <p>Find den port, der passer til dit behov i webshoppen, og se modellerne for både private og erhverv. Det giver et hurtigt overblik over, hvad der matcher din bygning.</p>
    </div>
  </div>

  <div class="step step2">
    <div class="number">2</div>
    <div>
      <h3>Tilpas design og funktion</h3>
      <p>Vælg farve, størrelse og udstyr, så porten passer præcist til dit udtryk. Du kan tilføje isolering, automatik og sikkerhed efter behov.</p>
    </div>
  </div>

  <div class="step step3">
    <div class="number">3</div>
    <div>
      <h3>Få rådgivning og tilbud</h3>
      <p>En konsulent hjælper med at afklare mulighederne og giver et skræddersyet tilbud. Du får samtidig klarhed over levering og tidsplan.</p>
    </div>
  </div>

  <div class="step step4">
    <div class="number">4</div>
    <div>
      <h3>Montering og service</h3>
      <p>Porten installeres af erfarne montører, så alt fungerer fra første dag. Efterfølgende kan du få service og vedligeholdelse, så porten holder i mange år.</p>
    </div>
  </div>
</div>

  </section>
</template>


<style scoped>
.foursteps {
  padding: 6rem 0;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--color-black);
  text-align: left;
}

/* GRID LAYOUT MED AREAS */
.steps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;

  /* Desktop rækkefølge */
  grid-template-areas:
    "step1 step2"
    "step3 step4";
}

/* Lodret linje i midten */
.steps-grid::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: var(--color-neutral-dark);
}

/* Tildel grid-areas */
.step1 { grid-area: step1; }
.step2 { grid-area: step2; }
.step3 { grid-area: step3; }
.step4 { grid-area: step4; }

/* Step layout */
.step {
  display: flex;
  gap: 1.2rem;
}

.number {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  min-width: 32px;
}

.step h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: .3rem;
}

.step p {
  font-size: 1rem;
  line-height: 1.55;
  color: var(--color-black);
}

/* MOBILVISNING */
@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 2rem;

    /* Mobil rækkefølge: 1, 2, 3, 4 */
    grid-template-areas:
      "step1"
      "step2"
      "step3"
      "step4";
  }

  .steps-grid::before {
    display: none;
  }

  .foursteps {
    padding: 4rem 0;
  }
}

</style>
