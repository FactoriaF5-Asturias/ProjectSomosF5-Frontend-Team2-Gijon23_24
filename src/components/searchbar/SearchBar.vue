<script setup>
// import { ref, computed, onMounted } from 'vue';
// import axios from 'axios';

// const products = ref([]);
// const searchByName = ref('');

// const fetchProducts = async () => {
//   try {
//     const response = await axios.get(`https://api-printgo.factoriaf5asturias.org/api/v1/products`);
//     products.value = response.data;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };

// onMounted(fetchProducts);

// const filteredProducts = computed(() => {
//   if (!searchByName.value) {
//     return products.value;
//   }
//   const searchTerm = searchByName.value.toLowerCase();
//   return products.value.filter(product => product.name.toLowerCase().includes(searchTerm));@input="searchProducts"@click="searchProducts"
// });
</script>

<template>

  <div class="search-container">
    <input type="text" class="input" v-model="searchTerm" placeholder="Buscar producto por nombre...">

    <div class="btn-container">
      <button class="btn">Buscar</button>
    </div>


  </div>

</template>


<style lang="scss" scoped>

.search-container {
  position: relative;
  width: 50rem;
  height: 4rem;
  margin: 5rem;
}

.search-container .input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-right: 145px;
  border-radius: 3px;
  font-size: 1.5rem;
}

.search-container .btn {

  position: absolute;
  top: 0;
  right: 0;
  width: 9rem;
  height: 100%;
  background: $primary-color;
  font-size: 1.8rem;
  color: white;
  border-radius: 0 4px 4px 0;
  z-index: 1;
  cursor: pointer;
}

.search-container .btn:hover {
  color: #fff;
  background-color: #3C3057;
}

</style>