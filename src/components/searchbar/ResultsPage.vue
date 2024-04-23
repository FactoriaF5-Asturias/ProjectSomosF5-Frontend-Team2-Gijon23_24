<script setup>

const props = defineProps(['results']);

</script>

<template>
   <div class="results-container">
    <h2>Resultados de la búsqueda:</h2>
    <div class="cards-container">
      <div class="card" v-for="product in results" :key="product.id">
        <img :src="product.imageUrl" alt="Product Image">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Precio: {{ product.price }}</p>
      </div>
    </div>
  </div>
     <!-- <div>
    <h2>Resultados de la búsqueda...</h2>
    <ul v-if="searchResults.length > 0">
      <li v-for="product in searchResults" :key="product.id">{{ product.name }}</li>
    </ul>
    <p v-else>No se encontraron resultados.</p>
    <p v-if="error">{{ error }}</p>
  </div> -->
  </template>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(25% - 20px); /* Ancho de cada tarjeta */
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

.card img {
  width: 100%;
  height: auto;
}
</style>