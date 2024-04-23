<script setup>
import ExplorerCategory from "../components/ExploreCategory.vue";
import Banner from "@/components/Banner.vue";
import Slider from "@/components/Slider.vue";
</script>

<template>
    <main>
        <Slider />
        <Card/>
        <ExplorerCategory/>
        
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
