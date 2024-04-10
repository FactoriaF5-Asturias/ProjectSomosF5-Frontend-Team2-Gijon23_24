<script setup>
import { ref } from 'vue';
import axios from 'axios';

const navbarVisible = ref(true);
const litofaniaProducts = ref([]);
const houseProducts = ref([]);
const geekProducts = ref([]);

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        navbarVisible.value = false;
    } else {
        navbarVisible.value = true;
    }

    lastScrollTop = currentScrollTop;
});

async function fetchProducts(category) {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/products/getManyByCategoryName?categoryName=${category}`);
        
        if (category === 'litophane') {
            litofaniaProducts.value = response.data;
        } else if (category === 'house') {
            houseProducts.value = response.data;
        } else if (category === 'geek') {
            geekProducts.value = response.data;
        }
        
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}
</script>

<template>
    <nav :class="{ 'navbar-hidden': !navbarVisible }">
        <router-link to="/" exact-active-class="active" class="link">Inicio</router-link>
        <router-link  to ="/lithophane" @click="fetchProducts('litophane')" exact-active-class="active" class="link">Litofanía</router-link>
        <router-link to="/house" @click="fetchProducts('house')" exact-active-class="active" class="link">Hogar</router-link>
        <router-link to="/geek" @click="fetchProducts('geek')" exact-active-class="active" class="link">Geek</router-link>
    </nav>
    <main>
        <div v-if="litofaniaProducts.length">
            <h2>Litofanía</h2>
            <ul>
                <li v-for="product in litofaniaProducts" :key="product.id">{{ product.name }}</li>
            </ul>
        </div>
        <div v-if="houseProducts.length">
            <h2>Hogar</h2>
            <ul>
                <li v-for="product in houseProducts" :key="product.id">{{ product.name }}</li>
            </ul>
        </div>
        <div v-if="geekProducts.length">
            <h2>Geek</h2>
            <ul>
                <li v-for="product in geekProducts" :key="product.id">{{ product.name }}</li>
            </ul>
        </div>
    </main>
</template>

<style scoped lang="scss">
.navbar {
    transition: transform 0.8s ease-in-out;
}

.navbar-hidden {
    display: none;
}

nav {
    background-color: $primary-background;
    height: 6rem;
    padding-left: 7rem;
    display: flex;
    align-items: center;
    gap: 3rem;
}

.active {
    color: $primary-color;
}
</style>
