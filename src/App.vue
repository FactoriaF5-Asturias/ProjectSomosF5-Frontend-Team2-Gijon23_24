<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";
import Custome from"../src/components/Custome.vue";
import Footer from '../src/components/Footer.vue';
</script>

<template>

<Header/>
  <RouterView />
  <Custome/>
  <Footer /> 

</template>

<style scoped>
</style>
