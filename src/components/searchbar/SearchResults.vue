<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const error = null;
const searchResults = [];

// Aquí puedes implementar la lógica para obtener los resultados de búsqueda del backend

const fetchSearchResults = async () => {
  try {
    const response = await axios.get(`URL_DEL_BACKEND/products`, {
      params: {
        q: route.query.q
      }
    });
    searchResults = response.data;
  } catch (error) {
    console.error('Error al obtener los resultados de búsqueda:', error);
    // Puedes manejar errores aquí, como mostrar un mensaje de error al usuario
  }
};
fetchSearchResults();









// utilizando la información de la ruta (route) y asignarlos a la variable searchResults
</script>





<template>
     <div>
    <h2>Resultados de la búsqueda...</h2>
    <ul v-if="searchResults.length > 0">
      <li v-for="product in searchResults" :key="product.id">{{ product.name }}</li>
    </ul>
    <p v-else>No se encontraron resultados.</p>
    <p v-if="error">{{ error }}</p>
  </div>
  </template>