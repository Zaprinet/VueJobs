<script setup>
import { computed } from "vue";



const props = defineProps({
  salaryRange: String, // Parent will pass the salary string (e.g., "300-500")
});

const convertedSalary = (str) => {
  let strArr = str.split("-");
  let firstAmount = strArr[0];
  let secondAmount = strArr[1];

  const rate = 1700;


  let convertedA = () => {
    let nairaAmountA = firstAmount * rate;

    if (nairaAmountA >= 1000 && nairaAmountA < 1000000) {
      return(nairaAmountA / 1000) + 'k';
    } else if (nairaAmountA >= 1000000 && nairaAmountA < 1000000000) {
      return(nairaAmountA / 1000000) + 'M'
    } else if (nairaAmountA < 1000) {
      return nairaAmountA
    }
  } 


  let convertedB = () => {
    let nairaAmountB = secondAmount * rate;

    if (nairaAmountB >= 1000 && nairaAmountB < 1000000) {
      return(nairaAmountB / 1000) + 'k';
    } else if (nairaAmountB >= 1000000 && nairaAmountB < 1000000000) {
      return(nairaAmountB / 1000000) + 'M'
    }
  }
  return `₦${convertedA()} - ₦${convertedB()}`;
};

const displayedSalary = computed(() => {
  return convertedSalary(props.salaryRange);
});
</script>

<template>
    {{ displayedSalary }}
</template>
