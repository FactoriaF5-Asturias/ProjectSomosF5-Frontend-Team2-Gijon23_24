<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
   product: {
      type: Object,
      required: true,
   },
})

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;

const imageDirectory = ref('');
const isLoading = ref(true); 

function findImageForProduct(product) {
   const image = product.images.find(img => img.mainImage === true);
   if (image == undefined) {
      const defaultImage = 'placeholder-image.jpg';
      return defaultImage;
   }
      return image.imageName
}

onMounted(async () => {
   imageDirectory.value = uri + "/" + findImageForProduct(props.product);
   isLoading.value = false; 
});

</script>

<template>
   <article>
      <router-link :to="{ path: `/Detail/${product.id}` }">
               <v-card class="mx-auto card-body" theme="dark">
                  <v-img class="image" :style="{ 'background-image': 'url(' + imageDirectory + ')' }" :alt="product.productName">
                  </v-img>
                  <div class="product-data">
                     <v-card-title class="product-name">{{ product.productName }}</v-card-title>
                     <v-card-title class="price">{{ product.price }} €</v-card-title> 
                  </div>
               </v-card>
      </router-link>
   </article>
</template>

<style scoped lang="scss">
article {
  transition: transform 0.2s ease-in-out;
}

article:hover {
   transform: translate(0, -10px);
}
.card-body {
   width: 28rem;
   color: white;
}
.image {
   height: 20rem;
   width: 100%;
   background-color: rgb(73, 73, 73);
   background-size: contain;
   background-position: center;
}
.product-data {
   display: flex;
   font-size: 1.3rem;
   background-color: $primary-background;
   font-family: "Poppins", sans-serif;
}
.product-name {
   width: 65%;
}
.price {
   width: 35%;
   text-align: end;
}
</style>
