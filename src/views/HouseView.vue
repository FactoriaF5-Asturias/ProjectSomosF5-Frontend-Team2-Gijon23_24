<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import HouseCardContainer from '../components/card/HouseCardContainer.vue';

const homeProducts = ref([]);

async function fetchHouseProducts() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_PRODUCTS}/getManyByCategoryName/Para hogar`);
        homeProducts.value = response.data;
        console.log(response.data);
    } catch (error) {
        console.error('Error al obtener productos para el hogar:', error);
    }
}

onMounted(() => {
    fetchHouseProducts();
});
</script>


<template>
  
    <HouseCardContainer />
</template>

<style scoped>
body {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #252525;
}

img {
  width: 50%;
}

div {
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 6.5rem;

  hr {
    width: 80%;
  }

  h1 {
    color: white;
    font-size: 4rem;
    font-weight: 800;
  }

  p {
    font-size: 2rem;
    color: white;
    text-align: center;
  }

  a {
    padding: 1.1rem;
    background-color:#252525;
    border-radius: 5px;
    font-size: 2rem;
    color: white;
    transition: all 200ms ease-in-out;
    width: 16rem;
    text-align: center;
  }

  a:hover {
    transform: scale(1.1);
  }
}
</style>