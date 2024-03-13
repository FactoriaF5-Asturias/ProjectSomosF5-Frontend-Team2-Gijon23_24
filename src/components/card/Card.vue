<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductsStore } from '../../stores/fakeStore'; 



const productsStore = useProductsStore(); 
const products= productsStore.products
const allProducts = ref(productsStore.products); 
const showDescription = ref(null);
const itemsPerPage = 4;


const currentPage = ref(1);
const pages = computed(() => Math.ceil(allProducts.value.length / itemsPerPage)); 

const router = useRouter();

const changePage = (page) => {
 if (page >= 1 && page <= pages.value) {
   currentPage.value = page;
 }
}


const sendDetailArticle = (id) => {
 router.push({ name: 'Details', params: { id: id } });
}


</script>
<template>
    <div>
       <v-card v-for="(product, index) in products" :key="index" class="mx-auto" max-width="200" theme="dark">
         <v-img class="align-end text-white" height="200" :src="product.image" cover>
           <v-card-title>{{ product.title }}</v-card-title>
         </v-img><v-card-text>
         <div v-if="showDescription === index">
          <div> {{ product.description }}</div>
         
        </div>
         </v-card-text>
         <v-card-actions>
         
           <v-btn color="orange">
             Explore
           </v-btn>
         </v-card-actions>
       </v-card>
    </div>
   </template>




<style lang="scss"></style>

