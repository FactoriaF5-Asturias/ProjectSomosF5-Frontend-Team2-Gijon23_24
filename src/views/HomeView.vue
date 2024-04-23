<script setup>
import ExplorerCategory from "../components/ExploreCategory.vue";
import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";
import SearchBar from '@/components/searchbar/SearchBar.vue';
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
        <router-link to="/admin/profile">perfil</router-link>
        
      
    </main>
</template>

<style lang="scss" scoped></style>
