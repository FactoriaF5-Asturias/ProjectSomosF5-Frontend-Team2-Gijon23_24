<script setup>
import { RouterView } from "vue-router";
import Header from "./components/general/Header.vue";
import Footer from './components/Footer.vue';
import Space from './components/general/Space.vue';
</script>

<template>
  
  <Header />
  <Space />
  <RouterView />
  <Footer /> 

</template>

<style scoped>
</style>
