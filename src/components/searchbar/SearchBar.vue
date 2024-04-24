<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');

const searchProducts = async () => {
  try {
   
  router.push({ name: 'results', query: { name: name.value } });

  } catch (error) {
    console.error('Error al buscar productos:', error);
  }
}

</script>

<template>

  <div class="search-container">

    <input type="text" class="input" v-model="name" placeholder="Buscar producto por nombre...">

    <div class="btn-container">
      <button class="btn" @click="searchProducts">Buscar</button>
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