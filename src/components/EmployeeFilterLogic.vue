<script setup>
import { ref, computed, onMounted } from "vue";
import { loadEmployees } from "@/services/firebaseEmployees";
import LocalExpert from "@/components/LocalExpert.vue";

// Props von HomeView
const props = defineProps({
  pin: String,
  zipcode: String,
  job: String   // <- kommt von MapSection (privat / erhverv / service)
});

// Alle Mitarbeiter aus Firebase
const allEmployees = ref([]);

// Mitarbeiter laden
onMounted(() => {
  loadEmployees((list) => {
    allEmployees.value = list;
  });
});

// PLZ → Pin
function getPinFromZip(zip) {
  const z = Number(zip);

  if (z >= 1000 && z <= 2999) return "pin_koebenhavn";
  if (z >= 3000 && z <= 3699) return "pin_koebenhavn";
  if (z >= 3700 && z <= 3799) return "pin_bornholm";
  if (z >= 4000 && z <= 4999) return "pin_midtsjaelland";
  if (z >= 5000 && z <= 5999) return "pin_midt_fyn";
  if (z >= 6000 && z <= 6999) return "pin_aabenraa";
  if (z >= 7000 && z <= 7999) return "pin_esbjerg";
  if (z >= 8000 && z <= 8999) return "pin_aarhus";
  if (z >= 9000 && z <= 9999) return "pin_aalborg";

  return null;
}

// Gefilterte Mitarbeiter
const filteredEmployees = computed(() => {
  let result = allEmployees.value;

  // 1) PLZ → Pin
  if (props.zipcode) {
    const pin = getPinFromZip(props.zipcode);
    if (pin) {
      result = result.filter(e => e.pinId === pin || e.pinId === "all");
    }
  }

  // 2) Pin-Klick
  if (props.pin) {
    result = result.filter(e => e.pinId === props.pin || e.pinId === "all");
  }

  // 3) Job-Filter → customerType!
  if (props.job) {
    result = result.filter(e => e.customerType === props.job);
  }

  // 4) NEU: Keine Begrenzung mehr
  return result;
});
</script>

<template>
  <LocalExpert :employees="filteredEmployees" />
</template>
