<script setup>
defineProps(["employee"]);
</script>

<template>
  <div class="card">
    <div class="card-content">

      <!-- Text links -->
      <div class="info">
        <h3 class="name">{{ employee.name }}</h3>
        <p class="job">{{ employee.job }}</p>

        <p class="label">Afdeling:</p>
        <p class="value">{{ employee.department || "Servicekontrakter" }}</p>

        <p class="label">Telefon:</p>
        <p class="value">{{ employee.phone }}</p>

        <p class="label">Email:</p>
        <p class="value">{{ employee.email }}</p>
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
  font-size: 16px;
  font-weight: 550;
  color: var(--color-black);
  margin-bottom: 4px;
  text-transform: uppercase;
}

.job {
  font-size: 12px;
  color: var(--color-neutral-dark);
  margin-bottom: 12px;
}

.label {
  font-size: 10px;
  font-weight: 550;
  color: var(--color-neutral-dark);
  margin-top: 6px;
}

.value {
  font-size: 12px;
  color: var(--color-black);
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
