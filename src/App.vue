<script setup>
import { RouterView } from "vue-router";
import Header from "./components/general/Header.vue";
import Footer from './components/Footer.vue';
import Space from './components/general/Space.vue';
import { useAuthStore } from "./stores/AuthStore";
import { useProductsStore } from "./stores/productStore";
import { useCartStore } from "./stores/CartStore";
import { useFavoritesStore } from "./stores/FavoritesStore";
import { useProfileStore } from "./stores/ProfileStore";

const store1 = useAuthStore()
const store2 = useProductsStore()
const store3 = useCartStore()
const store4 = useFavoritesStore()
const store5 = useProfileStore()
</script>

<template>
  
  <Header />
  <Space />
  <RouterView />
  <Footer />  

</template>

<style scoped>
</style>
