<template>
    <div>
      <button class="añadirFavorito" @click="addFavorites(product.id)">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { useFavoritesStore } from '@/stores/FavoritesStore';
  import { useAuthStore } from '@/stores/AuthStore';
  
  const props = defineProps({
 product: {
    type: Object,
    required: true,
 },
})
  const store = useFavoritesStore();
  

  
  async function addFavorites  (product)  {
    try {
      await store.addToFavorites(product);
      console.log('Producto agregado a favoritos',store.favoriteProducts);
    } catch (error) {
      console.error('Error al agregar el producto a favoritos:', error);
    }
  };

  </script>
  
  


  
<style scoped lang="scss">

// .añadirFavorito{

// }
 

 </style>

 