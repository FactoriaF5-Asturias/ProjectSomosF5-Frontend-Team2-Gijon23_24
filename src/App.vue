<script setup>
import { RouterView } from "vue-router";
import Footer from './components/Footer.vue';
import Header from "./components/general/Header.vue";
import Space from './components/general/Space.vue';

</script>

<template>

  <Header />
  <Space />
  <RouterView />

  <Footer/>

</template>

<style scoped>
.wrapper {
  font-size: 1.5rem;
}
</style>
