<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

let searchQuery = '';

const search = () => {
    router.push({ name: 'results', query: { q: searchQuery.value } });
};

</script>

<template>

    <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Buscar producto">
        <ul>
            <li v-for="product in filteredProducts" :key="product.id">{{ product.name }}</li>
        </ul>
    </div>

    <button @click="search">Buscar</button>



</template>

<style lang="scss" scoped>

.search-bar {
    background-color: aqua;
    height: 100px;
    width: 350px;
    border-color: black;
}

</style>