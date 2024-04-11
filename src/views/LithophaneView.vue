<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LitofaniaCardContainer from '@/components/card/LitofaniaCardContainer.vue';


const litofanias = ref([]);


async function fetchLitofanias() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_PRODUCTS}/getManyByCategoryName/litofanias`);
        litofanias.value = response.data;
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener productos de litofanías:', error);
    }
}


onMounted(() => {
    fetchLitofanias();
});
</script>

<template>
<!--     <div>
      <h1>Litofanías</h1>
       <div v-for="product in litofanias" :key="product.id_product">
        <h2>{{ product.product_name }}</h2>
        <p>{{ product.product_description }}</p>
        <p>Precio: {{ product.price }}</p>
        <div v-if="product.images.length > 0">
          <h3>Imágenes:</h3>
          <div v-for="(image, index) in product.images" :key="index">
            <img :src="image.url" :alt="product.product_name">
          </div>
        </div>
        <hr>
      </div>
    </div> --> 
    <LitofaniaCardContainer />
  </template>
  
  

<style scoped>
/* Estilos */
</style>
