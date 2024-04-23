<template>
  <div>
    <h1>Mis Favoritos</h1>
    <CardUnic v-for="product in favoriteProducts" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import CardUnic from '@/components/card/CardUnic.vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useFavoritesStore } from '@/stores/FavoritesStore';
import axios from 'axios';
import { onMounted } from 'vue';

const authStore = useAuthStore();
const favoritesStore = useFavoritesStore();

onMounted(() => {
  loadFavoriteProducts();
});

const loadFavoriteProducts = async () => {
  try {
    const response = await fetchFavoriteProducts(authStore.username);
    if (response.status === 200) {
      favoritesStore.setFavoriteProducts(response.data);
    } else {
      console.error('Error al obtener la lista de favoritos');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};


</script>

<style scoped>
</style>
