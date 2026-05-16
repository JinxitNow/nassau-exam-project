<script setup>
defineProps(["employee"]);
</script>

<template>
  <div class="card">
    <div class="card-content">

      <!-- Text links -->
      <div class="info">
        <h2 class="name">{{ employee.name }}</h2>

        <!-- Jobtitel: bold + weniger Abstand -->
        <p class="job">{{ employee.job }}</p>

        <div class="row">
          <p class="label">Afdeling:</p>
          <p class="value">{{ employee.department || "Servicekontrakter" }}</p>
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

      <!-- Bild rechts -->
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
.card {
  width: 100%;
  background-color: var(--color-neutral-light);
  border-radius: 8px;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
}

/* Textbereich */
.info {
  flex: 1;
}

.name {
  margin-bottom: 2px; /* enger */
  text-transform: uppercase;
}

/* Jobtitel: bold + enger Abstand */
.job {
  margin-bottom: 10px; /* enger */
  font-weight: 600;     /* bold */
}

/* Label + Value in einer Zeile */
.row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.label {
  margin: 0;
}

.value {
  margin: 0;
}

/* Bildbereich */
.image-wrapper {
  width: 90px;
  height: 90px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
