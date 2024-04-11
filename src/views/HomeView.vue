<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import ExplorerCategory from '../components/ExploreCategory.vue';
import Banner from "@/components/Banner.vue";
import Card from '@/components/card/Card.vue';
import Slider from '@/components/Slider.vue';

const products = ref([]);
const router = useRouter();

// async function fetchProducts(category) {
//     try {
//         const response = await axios.get(`http://localhost:8080/api/v1/products/getManyByCategoryName/${category}`);
//         products.value = response.data; // Suponiendo que el endpoint devuelve una lista de productos
//     } catch (error) {
//         console.error('Error al obtener productos:', error);
//     }
// }

// // Llamar a fetchProducts cuando la página se monta y cada vez que cambie la ruta
// const fetchProductsByRoute = async () => {
//     const category = router.currentRoute.value.params.category;
//     await fetchProducts(category);
// };

// fetchProductsByRoute();

// Escuchar cambios en la ruta y actualizar productos
router.afterEach(() => {
    fetchProductsByRoute();
});
</script>

<template>
    <main>
        <Slider />
        <Card/>
        <ExplorerCategory/>
        <!-- Mostrar productos obtenidos -->
        <div v-if="products.length">
            <h2>Productos</h2>
            <ul>
                <li v-for="product in products" :key="product.id">{{ product.name }}</li>
            </ul>
        </div>
        
        <div v-else>
            <p>No se encontraron productos.</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>


