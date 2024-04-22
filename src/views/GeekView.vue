<script setup>
import { onMounted, ref } from 'vue';
import Card from './../components/card/Card.vue';
import axios from 'axios';
  
const Geek = ref([]);
const isLoaded = ref(false);

async function fetchGeekProducts() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_PRODUCTS}/getManyByCategoryName/Zona Geek`);
    Geek.value = response.data;
    isLoaded.value = true;
  } catch (error) {
    console.error('Error al obtener productos de zona geek:', error);
  }
}

onMounted(() => {
  fetchGeekProducts();
})

</script>

<template>
  <body>
    <div>
      <h1>Geek</h1>
      <hr>
      <section>
        <Card :product="product" v-for="product in Geek" :key="product.id" v-if="isLoaded" />
      </section>     
    </div>
  </body>
</template>
  
<style scoped lang="scss">
body {
    background-color: $primary-background;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  }
</style>
  
  