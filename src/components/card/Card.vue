<script setup>
import { onMounted, ref } from 'vue';

import FavoriteHeart from '../favorite/FavoriteHeart.vue';



const props = defineProps({
 product: {
    type: Object,
    required: true,
 },
})

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;
const imageDirectory = ref('');
const defaultImage = '../../../public/images/banner-logo.svg';

const isLoading = ref(true);

function findImageForProduct(product) {
   const image = product.images.find(img => img.mainImage === true);
   return image.imageName ? image.imageName : defaultImage;
};

onMounted(async () => {

   await new Promise(resolve => setTimeout(resolve, 2000));
   imageDirectory.value = uri + "/" + findImageForProduct(props.product);
   isLoading.value = false;
});






</script>
<template>
   <section>
      <router-link :to="{ path: `/Detail/${product.id}` }">
        <v-container>
          <v-skeleton-loader type="card" :loading="isLoading" transition="fade-transition" theme="dark">
            <v-card class="mx-auto card" theme="dark">
              <v-img class="align-end text-white" height="200" width="400" :src="imageDirectory" cover :alt="product.productName">
              </v-img>
              <v-card-title class="pl-1">{{ product.productName }}</v-card-title>
              <v-card-title class="price">{{ product.price }} €</v-card-title>
            </v-card>
          </v-skeleton-loader>
        </v-container>
      </router-link>
      <FavoriteHeart :product="product" class="heart"/>
   </section>
  </template>


<style scoped lang="scss">
.heart {
   border: 2px solid #CBBB9D;
   transition: border .15s ease-out, background .15s ease-out;
   border-radius: 50%;
   width: 4rem;
   height: 4rem;
   text-align: center;
   line-height: 1.2em;
   background: rgba(0, 0, 0, .8);
   top: -36rem;
   left: 20rem;
   display: flex;
   cursor: pointer;
   transition: color-fill 0.3s ease;

   &:hover {
      background-color: darken($primary-color, 10%);
   }

   &:active {
      background-color: darken($primary-color, 20%);
   }
}

.price {
   position: absolute;
   bottom: 0.5rem;
   right: 1rem;
   display: flex;
   color: #FFFFFF;

   img {
      margin-left: 5px;
      color: #FFFFFF;
   }
}
</style>
