 <script setup>
import Card from './card/Card.vue';
import { ref } from 'vue';
import {useProductsStore} from "./../stores/productStore";
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
        <router-link :to="'/Detail/' + product.id" v-for="product in products" :key="product.id">
            <v-slide-group-item class="slideCard">
                <CarouselCard :product="product"></CarouselCard>
            </v-slide-group-item>
        </router-link>
    </v-slide-group>
</template>
<style lang="scss" scoped>

.slideGroup {
    align-self: center;
    background-color: rgba(33, 33, 33, 1);
    color:gray;
    font-size:  4em;
    margin-top: 5.5rem;
   
   }
   #card{
    filter: drop-shadow(1px 14px 9px #000000);;
   }
   

   </style> 