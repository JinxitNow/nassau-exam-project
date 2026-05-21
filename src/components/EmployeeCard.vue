<script setup>
defineProps(["employee"]);
</script>

<template>
  <div class="card">
    <div class="card-content">

      <!-- TEXT -->
      <div class="info">

        <h2 class="name">{{ employee.name }}</h2>

        <p class="job">{{ employee.job }}</p>

        <div class="details">

          <div class="row">
            <p class="label">Afdeling:</p>
            <p class="value">
              {{ employee.department || "Servicekontrakter" }}
            </p>
          </div>

          <div class="row">
            <p class="label">Telefon:</p>
            <p class="value">{{ employee.phone }}</p>
          </div>

          <div class="row">
            <p class="label">Email:</p>
            <p class="value">{{ employee.email }}</p>
          </div>

        </div>

      </div>

      <!-- IMAGE -->
      <div class="image-wrapper">
        <img
          :src="employee.imageUrl || '/placeholder-person.png'"
          alt="employee photo"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>

/* ============================
   CARD
============================ */
.card {
  width: 100%;
  height: 190px;

  background-color: var(--color-neutral-light);

  border-radius: 12px;
  padding: 16px;

  display: flex;

  overflow: hidden;

  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* ============================
   CONTENT
============================ */
.card-content {
  display: flex;
  width: 100%;
  gap: 12px;
}

/* ============================
   TEXT AREA
============================ */
.info {
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;

  min-width: 0;
}

/* ============================
   NAME
============================ */
.name {
  margin: 0 0 6px 0;

  font-size: 16px;

  font-weight: 700;

  line-height: 1.05;

  text-transform: uppercase;

  word-break: break-word;
}

/* ============================
   JOB
============================ */
.job {
  margin: 0 0 12px 0;

  font-size: 14px;
  font-weight: 400;

  line-height: 1.1;
}

/* ============================
   DETAILS
============================ */
.details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ============================
   ROWS
============================ */
.row {
  display: flex;

  align-items: baseline;

  gap: 4px;

  line-height: 1.2;
}

/* ============================
   LABELS
============================ */
.label {
  margin: 0;

  font-weight: 700;

  white-space: nowrap;

  font-size: 12px;
}

/* ============================
   VALUES
============================ */
.value {
  margin: 0;

  color: #333;

  min-width: 0;

  word-break: break-word;

  font-size: 12px;
}

/* ============================
   IMAGE
============================ */
.image-wrapper {
  width: 85px;

  display: flex;
  align-items: center;

  flex-shrink: 0;
}

.image-wrapper img {
  width: 100%;

  aspect-ratio: 3 / 4;

  object-fit: cover;

  border-radius: 10px;

  display: block;
}

/* ============================
   MOBILE FIRST (max 768px)
============================ */
@media (max-width: 768px) {

  .card {
    height: auto;              /* Karte darf wachsen */
    padding: 12px;
  }

  .card-content {
    flex-direction: column;    /* Bild unter/über Text */
    gap: 12px;
  }

  .image-wrapper {
    width: 100px;              /* etwas kleiner */
    margin: 0 auto;            /* zentriert */
  }

  .info {
    justify-content: flex-start;
  }

  .name {
    font-size: 15px;
  }

  .job {
    font-size: 13px;
    margin-bottom: 8px;
  }

  .row {
    gap: 6px;
    line-height: 1.2;
  }

  .label,
  .value {
    font-size: 13px;
  }
  
}

@media (max-width: 768px) {

  .card {
    height: auto; /* Karte darf wachsen */
  }

  .card-content {
    flex-direction: row;   /* ⭐ Bild bleibt rechts */
    align-items: flex-start;
  }

  .image-wrapper {
    width: 70px;           /* ⭐ etwas kleiner für Mobile */
  }

  .name {
    font-size: 14px;
  }

  .job {
    font-size: 13px;
  }

  .label,
  .value {
    font-size: 13px;
  }
}


</style>