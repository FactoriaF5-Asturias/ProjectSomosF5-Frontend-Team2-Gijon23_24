<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import ExplorerCategory from '../components/ExploreCategory.vue';
import Banner from "@/components/Banner.vue";
// import Card from '@/components/card/Card.vue';
import Slider from '@/components/Slider.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

const products = ref([]);
const router = useRouter();


router.afterEach(() => {
    fetchProductsByRoute();
});
</script>

<template>
    <main>
       
        <Slider />

        <Card/>
        <ExplorerCategory/>
        <SearchBar />

        <div v-if="products.length">
            <h2>Productos</h2>
            <ul>
                <li v-for="product in products" :key="product.id">{{ product.name }}</li>
            </ul>
        </div>
        
      
    </main>
</template>

<style lang="scss" scoped>
</style>


