<script setup>
</script>

<template>
  <section class="foursteps">
    <h1>Det er nemt at bestille en port fra NASSAU</h1>

    <div class="steps-grid">

      <div class="step step1">
        <div>
          <h2>1. Vælg din porttype</h2>
          <p>Find den port, der passer til dit behov i webshoppen, og se modellerne for både private og erhverv. Det giver et hurtigt overblik over, hvad der matcher din bygning.</p>
        </div>
      </div>

      <div class="step step2">
        <div>
          <h2>2. Tilpas design og funktion</h2>
          <p>Vælg farve, størrelse og udstyr, så porten passer præcist til dit udtryk. Du kan tilføje isolering, automatik og sikkerhed efter behov.</p>
        </div>
      </div>

      <div class="step step3">
        <div>
          <h2>3. Få rådgivning og tilbud</h2>
          <p>En konsulent hjælper med at afklare mulighederne og giver et skræddersyet tilbud. Du får samtidig klarhed over levering og tidsplan.</p>
        </div>
      </div>

      <div class="step step4">
        <div>
          <h2>4. Montering og service</h2>
          <p>Porten installeres af erfarne montører, så alt fungerer fra første dag. Efterfølgende kan du få service og vedligeholdelse, så porten holder i mange år.</p>
        </div>
      </div>

    </div>
  </section>
</template>


<style scoped>
.foursteps {
  padding: 1rem 0;
}

/* GRID LAYOUT */
.steps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;

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

/* Grid areas */
.step1 { grid-area: step1; }
.step2 { grid-area: step2; }
.step3 { grid-area: step3; }
.step4 { grid-area: step4; }

/* Step layout */
.step {
  display: flex;
  gap: 1.2rem;
}

/* MOBIL */
@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 2rem;

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
