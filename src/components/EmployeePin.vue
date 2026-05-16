<script setup>
defineProps(["pin"]);
</script>

<template>
  <div
    class="pin"
    :style="{ left: pin.x + '%', top: pin.y + '%' }"
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
