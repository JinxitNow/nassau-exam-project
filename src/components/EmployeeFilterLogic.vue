<script setup>
import { ref, computed, onMounted } from "vue";
import { loadEmployees } from "@/services/firebaseEmployees";
import LocalExpert from "@/components/LocalExpert.vue";

// Props von HomeView
const props = defineProps({
  pin: String,        // Pin von der Karte
  zipcode: String,    // PLZ vom User
  job: String         // privat / erhverv / service
});

// Alle Mitarbeiter aus Firebase
const allEmployees = ref([]);

// Mitarbeiter laden
onMounted(() => {
  loadEmployees((list) => {
    allEmployees.value = list;
  });
});

// ⭐ NEU: PLZ → Pin (finale Version)
function getPinFromZip(zip) {
  const z = Number(zip);

  // København
  if (z >= 1000 && z <= 2999) return "pin_storkoebenhavn";

  // Nordsjælland
  if (z >= 3000 && z <= 3699) return "pin_nordsjaelland";

  // Bornholm
  if (z >= 3700 && z <= 3799) return "pin_bornholm";

  // Midtsjælland
  if (z >= 4000 && z <= 4999) return "pin_midtsjaelland";

  // Fyn
  if (z >= 5000 && z <= 5999) return "pin_fyn";

  // Sønderjylland
  if (z >= 6000 && z <= 6999) return "pin_soenderjylland";

  // Sydjylland
  if (z >= 7000 && z <= 7999) return "pin_sydjylland";

  // Østjylland
  if (z >= 8000 && z <= 8999) return "pin_ostjylland";

  // Nordjylland
  if (z >= 9000 && z <= 9999) return "pin_nordjylland";

  return null;
}

// ⭐ Gefilterte Mitarbeiter
const filteredEmployees = computed(() => {
  let result = allEmployees.value;

  // 1) PLZ → Pin
  if (props.zipcode) {
    const pin = getPinFromZip(props.zipcode);
    if (pin) {
      result = result.filter(e =>
        e.pinIds?.includes(pin) || e.pinIds?.includes("all")
      );
    }
  }

  // 2) Pin-Klick
  if (props.pin) {
    result = result.filter(e =>
      e.pinIds?.includes(props.pin) || e.pinIds?.includes("all")
    );
  }

  // 3) Job-Filter → customerType
  if (props.job) {
    result = result.filter(e => e.customerType === props.job);
  }

  return result;
});
</script>

<template>
  <LocalExpert :employees="filteredEmployees" />
</template>
