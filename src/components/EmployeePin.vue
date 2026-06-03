<script setup>
const props = defineProps({
  pin: {
    type: Object,
    required: true
  }
})

// Genererer et pænt alt-tag ud fra pin.id
const altText = `Kortmarkør for område: ${props.pin.id
  .replace("pin_", "")
  .replaceAll("_", " ")}`;
</script>

<template>
  <img
    class="pin"
    :src="'/icons/pin-red.svg'"
    :style="{ left: pin.x + '%', top: pin.y + '%' }"
    :alt="altText"
  />
</template>

<style scoped>
.pin {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  width: 18px;
  height: auto;
}
</style>
