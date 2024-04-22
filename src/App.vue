<script setup>
import { RouterView } from "vue-router";
import Header from "./components/general/Header.vue";
import Footer from './components/Footer.vue';
import Space from './components/general/Space.vue';


</script>

<template>

  <div>
    <router-link to="/">casa</router-link>
    <router-link to="/cart">carrito</router-link>
    <RouterView />
  </div>

    <!-- <Space />
  <RouterView />
  <Footer />  -->

</template>

<style scoped>
</style>
