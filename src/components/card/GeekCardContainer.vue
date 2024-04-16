
  
  <script setup>
  import { useProductsStore } from '@/stores/productStore';
import { onMounted, ref } from 'vue';
import ImagesService from '../../services/ImagesService';
import CardUnic from './CardUnic.vue';
import axios from 'axios';
  
const imagesService = new ImagesService();
const productsStore = useProductsStore();
let isLoaded = false



function findImageForProduct(product) {
  const image = product.images.find(img => img.mainImage === true);
  return image ? image.imageName : null;
} 
const Geek = ref([]);

async function fetchGeekProducts() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_PRODUCTS}/getManyByCategoryName/Zona Geek`);
    Geek.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener productos de zona geek:', error);
  }

}

onMounted(() => {
  fetchGeekProducts();
  isLoaded = true;
})
  </script>

<template>

  <v-container class="container">
    <v-row class="row-card">
      <v-col class="col-card" cols="3" v-for="product in Geek" :key="product.id">
        <CardUnic :product="product" v-if="isLoaded" />
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <style scoped lang="scss">
  @import '../../assets/scss/main.scss';
  
  .container {
    // margin-top: 2rem;
    max-width: 100%;
  
    .row-card {
      display: flex;
      gap: 1rem;
      justify-content: center;
  
      .col-card {
  
        max-width: 22%;
      }
    }
  }
  </style>
  
  