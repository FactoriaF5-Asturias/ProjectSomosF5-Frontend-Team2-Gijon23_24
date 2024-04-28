<script setup>
import { useFavoritesStore } from '@/stores/FavoritesStore';
import { useAuthStore } from '@/stores/AuthStore';

const props = defineProps({
 product: {
    type: Object,
    required: true,
 },
 isFavorite: Boolean,
});

const emit = defineEmits(['update:isFavorite']);

const authStore = useAuthStore();
const store = useFavoritesStore();

async function addFavorites(product) {
 try {
    if (authStore.isAuthenticated === true) {
      if (props.isFavorite === true) {
        await store.removeFromFavorites(product);
        emit('update:isFavorite', false);
      } else {
        await store.addToFavorites(product);
        emit('update:isFavorite', true);
      }
      console.log('Productos de favoritos', store.favoriteProducts);
    }
 } catch (error) {
    console.error('Error al agregar el producto a favoritos:', error);
 }
}
</script>

<template>
      <span class="heart-icon" @click="addFavorites(product.id)"></span>
</template>

<style scoped lang="scss">
span {
  width: 4rem;
	content: url(/icons/heart-icon.svg);
	transition: all 0.3s ease-in-out;
	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.864)) opacity(0.6);
}

span:hover {
  width: 4.1rem;
	filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.755)) opacity(1);
	content: url(/icons/heart-fill-icon.svg);
}

.heart-icon {
  filter: opacity (0.5);

}
</style>