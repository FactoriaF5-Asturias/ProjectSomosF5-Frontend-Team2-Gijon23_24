<script setup>

import { onMounted } from 'vue';
import { useProductsStore } from '../../stores/productStore';

const productsStore = useProductsStore();

onMounted(() => {
 productsStore.fetchProducts();
});






</script>
<template>
 <v-container class="container">
    <v-row class="row-card">
   
      <v-col class = "col-card" cols="3" v-for="product in productsStore.products" :key="product.id">
        <v-card class="mx-auto card" theme="dark">

         <v-img class="align-end text-white" height="200" :src="product.images" cover>
            
            <v-btn
              color="white"
              icon="/icons/icon-heart.svg"
              size="small"
               class="heart"
              variant="text"
            >     <img src="/icons/icon-heart.svg" alt="heart"  ></v-btn>
           
          </v-img>
          <v-card-title  class="pl-1">{{ product.productName}}</v-card-title>
          <v-card-title class="price">{{ product.price }} €</v-card-title>
       </v-card>
      </v-col>

    </v-row>
    </v-container>
   
   </template>

   
<style scoped lang="scss">
@import '../../assets/scss/main.scss';
.container{
   margin-top:2rem;
max-width: 100%;
.row-card{
   display: flex;
    gap: 1rem;
    justify-content: center;
    .col-card{
        
    max-width: 22%;
    }
}
}
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
