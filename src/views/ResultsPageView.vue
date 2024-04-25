<script setup>
import Card from './../components/card/Card.vue';
import { onMounted, ref, computed, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const Results = ref([]);
const isLoaded = ref(false);
const currentPage = ref(1);
const ProductsPerPage = 25;
const totalPages = computed(() => Math.ceil(Results.value.length / ProductsPerPage));
const uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS_BYNAME
const search = ref('')


const fetchResultProducts = async () => {
  try {
    const name = route.query.name;
    const response = await axios.get(`${uri}/${name}`);
    Results.value = response.data;
    isLoaded.value = true;
     search.value = name;
    console.log(name);

  } catch (error) {
    console.error('Error al buscar productos:', error);
  }
}

onMounted(() => {
  fetchResultProducts();
});

watch(() => route.query.name, () => {
  fetchResultProducts();
});

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * ProductsPerPage;
  return Results.value.slice(startIndex, startIndex + ProductsPerPage);
});

const nextPage = () => {
  currentPage.value = Math.min(currentPage.value + 4, totalPages.value);
  scrollToTop();
};

const prevPage = () => {
  currentPage.value = Math.max(currentPage.value - 4, 1);
  scrollToTop();
};

const changePage = (page) => {
  currentPage.value = page;
  scrollToTop();
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const visiblePages = computed(() => {
  const pagesToShow = 4;
  const visible = [];
  const startPage = Math.max(1, currentPage.value);
  for (let i = startPage; i < startPage + pagesToShow && i <= totalPages.value; i++) {
    visible.push(i);
  }
  return visible;
});

const goback = () => {
  window.history.length  > 1 ? history.go(-1) :  router.push('/');
}

</script>

<template>

  <body>
    <div>
      <div id="home-detail" class="product-detail">
        <div class="goback">
          <button class="goback" @click="goback"></button>
        </div>
      </div>
      <h1>Resultado de la búsqueda: "{{ search }}"</h1>
      <hr>
      <section>
        <div v-if="paginatedProducts.length">
          <Card :product="product" v-for="product in paginatedProducts" :key="product.id" v-if="isLoaded" />
        </div>
      </section>
      <div id="pagination">
        <button class="pagination-arrow" @click="prevPage" :disabled="currentPage <= 1">
          << </button>
            <button v-for="page in visiblePages" :key="page" @click="changePage(page)"
              :class="{ 'active-page': currentPage === page }">{{ page }}</button>
            <button class="pagination-arrow" @click="nextPage" :disabled="currentPage >= totalPages"> >> </button>
      </div>
    </div>
  </body>
</template>

<style scoped lang="scss">
body {
  padding: 4rem 0;
  background-color: $primary-background;
  display: flex;
  flex-direction: column;
  align-items: center;

  >div {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
  }
}

.goback {
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back-up-double' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23a905b6' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 14l-4 -4l4 -4' /%3E%3Cpath d='M8 14l-4 -4l4 -4' /%3E%3Cpath d='M9 10h7a4 4 0 1 1 0 8h-1' /%3E%3C/svg%3E");
   width: 75px;
   height: 55px;
   cursor: pointer;
   margin-left: 2%;


   
 
}

h1 {
  font-size: 4rem;
}

hr {
  margin: 0 0 2rem 0;
}

section {
  text-align: center;

  >div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

#pagination {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-weight: 600;
}

button {
  transition: transform 0.2s ease-in-out;
  min-width: 5rem;
  min-height: 5rem;
  background-color: grey;
  border-radius: 4px;
  font-size: 1.3rem;
}

button:hover {
  transform: translate(0, -3px);
}

.pagination-arrow {
  background-color: rgb(77, 77, 77);
}

.active-page {
  background-color: $primary-color;
}

.goback {
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back-up-double' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23a905b6' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 14l-4 -4l4 -4' /%3E%3Cpath d='M8 14l-4 -4l4 -4' /%3E%3Cpath d='M9 10h7a4 4 0 1 1 0 8h-1' /%3E%3C/svg%3E");
   width: 75px;
   height: 55px;
   cursor: pointer;
   margin-left: 2%;
   background-color: transparent;


   
 
}
</style>