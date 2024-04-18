<script setup>

import ImagesService from '../../services/ImagesService';
import { useProductsStore } from '../../stores/productStore';

const productsStore = useProductsStore();

const imagesService = new ImagesService();

const props = defineProps({
   product: Object
})

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;
const imageDirectory = uri + "/" + findImageForProduct(props.product);

   
function findImageForProduct(product) {
   const image = product.images.find(img => img.mainImage === true);
      return image.imageName
      
}


</script>
<template>
   <v-container class="container">
      <v-card class="mx-auto card" theme="dark" height="235" width="240">
         <v-img class="align-end text-white" height="200" :src="imageDirectory" cover>
            <v-btn color="white" icon="/icons/icon-heart.svg" size="small" class="heart" variant="text"> <img
                  src="/icons/icon-heart.svg" alt="heart"></v-btn>
         </v-img>
         <v-card-title class="pl-1">{{ product.productName }}</v-card-title>
         <v-card-title class="price">{{ product.price }} €</v-card-title>
      </v-card>
   </v-container>
</template>


<style scoped lang="scss">
.heart {
   position: absolute;
   top: 1rem;
   right: 1rem;
   background-color: none;
   border: none;
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
