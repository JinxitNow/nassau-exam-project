<script setup>
defineProps(["pin"]);
</script>

<template>
  <img
    class="pin"
    :src="'/icons/pin-red.svg'"
    :style="{ left: pin.x + '%', top: pin.y + '%' }"
    alt="pin"
  />
</template>

<style scoped>
.pin {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  width: 18px;   /* juster størrelse */
  height: auto;
}
</style>
