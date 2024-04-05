<script setup>

import { useProductsStore } from '@/stores/ProductStore';
import { onMounted } from 'vue';
import ImagesService from '../../services/ImagesService';
import CardUnic from './CardUnic.vue';

const imagesService = new ImagesService();
const productsStore = useProductsStore();

onMounted(async () => {
  await productsStore.fetchProducts();
});

function findImageForProduct(product) {
  const image = product.images.find(img => img.mainImage === true);
  return image ? image.imageName : null;
}

</script>
<template>
  
  <v-container class="container">
    <v-row class="row-card">
      <v-col class="col-card" cols="3" v-for="product in productsStore.products" :key="product.id">
        <CardUnic :product="product" v-if="productsStore.isLoaded" />
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
