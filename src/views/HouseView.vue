<script setup>
import { onMounted, ref, computed } from 'vue';
import Card from './../components/card/Card.vue';
import axios from 'axios';

const Hogar = ref([]);
const isLoaded = ref(false);
const currentPage = ref(1);
const ProductsPerPage = 15;

const totalPages = computed(() => Math.ceil(Hogar.value.length / ProductsPerPage));

async function fetchHouseProducts() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_PRODUCTS}/getManyByCategoryName/Para Hogar`);
        Hogar.value = response.data;
        isLoaded.value = true;
    } catch (error) {
        console.error('Error al obtener productos de hogar:', error);
    }
}

onMounted(() => {
    fetchHouseProducts();
});

const paginatedProducts= computed(() => {
  const startIndex = (currentPage.value - 1) * ProductsPerPage;
  return Hogar.value.slice(startIndex, startIndex + ProductsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
    <body>
      <div>
        <h1>Hogar</h1>
        <hr>
        <section>
          <div v-if="paginatedProducts.length">
              <Card :product="product" v-for="product in paginatedProducts" :key="product.id" v-if="isLoaded" />
          </div>
        </section>
        <div id="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :disabled="currentPage === page">Página {{ page }}</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
      </div>
    </body>
</template>
  

<style scoped lang="scss">
body {
    background-color: $primary-background;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      margin-top: 3rem;
      width: 85%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      font-weight: 200;
      font-family: "Poppins", sans-serif;
    }
  }
  h1 {
    font-size: 4rem;
  }
  section {
    text-align: center;

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
    }
  }
</style>