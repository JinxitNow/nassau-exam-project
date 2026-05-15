<script setup>
defineProps(["employee"]);
</script>

<template>
  <div
    class="pin"
    :style="{ left: employee.x + '%', top: employee.y + '%' }"
  >
    📍
  </div>
</template>

<style scoped>
.pin {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  font-size: 24px;
}
</style>
