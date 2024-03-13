<script setup>

import { RouterLink, RouterView } from 'vue-router';
import Footer from '../src/components/Footer.vue'
import { RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";

</script>

<template>

<Header/>
  <RouterView />
  <Footer /> 

</template>

<style scoped>
</style>
