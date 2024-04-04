<script setup>
import { RouterView } from "vue-router";
import Header from "./components/general/Header.vue";
</script>

<template>

  <Header />

  <RouterView />

  <Footer/>

</template>

<style scoped>
.wrapper {
  font-size: 1.5rem;
}
</style>
