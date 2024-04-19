<script setup>
import { ref } from 'vue';
import axios from 'axios';

const navbarVisible = ref(true);
const products = ref([]);

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
        products.value = response.data; // Suponiendo que el endpoint devuelve una lista de productos
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

</script>
