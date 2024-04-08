 <script setup>
import { ref } from 'vue';
import { useProductsStore } from "../stores/ProductStore";
import CarouselCard from './card/CarouselCard.vue';


const productStore = useProductsStore();
const products = ref([]) 


const getProducts = async ()=> {
    try {
    await productStore.fetchProducts();
    
    products.value = productStore.products.reverse()
    .slice(0, 10);

} catch (error) {
    console.error("No se consiguieron los datos:",error)
}}
getProducts();
</script>

<template>
    <v-slide-group prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" show-arrows class="slideGroup">
       <v-slide-group-item class="slideCard" v-for="product in products" >

    
    <CarouselCard id="card" :product="product"></CarouselCard>
        
         
       </v-slide-group-item>
    </v-slide-group>
   </template>
<style lang="scss" scoped>

.slideGroup {
    align-self: center;
    background-color: rgba(33, 33, 33, 1);
    color:gray;
    font-size:  4em;
   
   }
   #card{
    filter: drop-shadow(1px 14px 9px #000000);;
   }
   

   </style> 