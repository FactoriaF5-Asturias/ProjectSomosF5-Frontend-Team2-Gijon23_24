<template>
  <div>
    <h1>Mis Favoritos</h1>
    <div v-for="product in favoriteproducts" :key="product.id">
      <h2>{{ product.title }}</h2>
      <button @click="toggleFavorite(product)">
        {{ isFavorite(product) ? 'Eliminar de favoritos' : 'Agregar a favoritos' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const favoriteproducts = ref([]);
const profileId = 'user_id';

const loadFavoriteProducts = async () => {
  try {
    const response = await axios.get(`/api/profiles/${profileId}`);
    if (response.status === 200) {
      favoriteproducts.value = response.data;
    } else {
      console.error('Error al obtener la lista de favoritos');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

const toggleFavorite = async (product) => {
  try {
    if (isFavorite(product)) {
      await removeFromFavorites(product);
    } else {
      await addToFavorites(product);
    }
  } catch (error) {
    console.error('Error al cambiar el estado de favoritos:', error);
  }
};

const removeFromFavorites = async (product) => {
  try {
    const response = await axios.put(`/api/profiles/update-favorites/${product.id}`, {
      profileId,
      isFavorite: false
    });
    if (response.status === 200) {
      favoriteproducts.value = response.data.favorites;
      
    } else {
      console.error('Error al actualizar la lista de favoritos');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

const addToFavorites = async (product) => {
  try {
    const response = await axios.post(`/api/profiles/update-favorites`, {
      productId: product.id,
      profileId
    });
    if (response.status === 200) {
      favoriteproducts.value.push(product);
    } else {
      console.error('Error al agregar el producto a favoritos');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

const isFavorite = (products) => {
  return favoriteproducts.value.some(favorite => favorite.id === product.id);
};

onMounted(loadFavoriteProducts);
</script>

<style scoped>
body {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #252525;
}

img {
  width: 50%;
}

div {
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 6.5rem;
  

  hr {
    width: 80%;
  }

  h1 {
    color:blueviolet;
    font-size: 4rem;
    font-weight: 800;
  }

  p {
    font-size: 2rem;
    color: white;
    text-align: center;
  }

  a {
    padding: 1.1rem;
    background-color:#252525;
    border-radius: 5px;
    font-size: 2rem;
    color: white;
    transition: all 200ms ease-in-out;
    width: 16rem;
    text-align: center;
  }

  a:hover {
    transform: scale(1.1);
  }
}
</style>