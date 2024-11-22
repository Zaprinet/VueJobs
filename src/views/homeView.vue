<script setup>
import hero from '@/components/hero.vue';
import homecards from '@/components/homecards.vue';
import jobListings from '@/components/jobListings.vue';

</script>

<template>
   <hero/>
  <homecards/>
  <jobListings :limit="3" :showButton="true"/>
</template>