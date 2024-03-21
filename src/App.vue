<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/general/Header.vue";
import Footer from '../src/components/Footer.vue';
import ProductDetailView from './views/ProductDetailView.vue';
</script>

<template>


<Header />
  <ProductDetailView /> 
<Footer /> 

</template>

<style scoped>
</style>
