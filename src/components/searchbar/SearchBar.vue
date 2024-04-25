<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');

// const normalizeText = (text) => {
//   return text
//     .replace(/[áÁ]/g, 'a')
//     .replace(/[éÉ]/g, 'e')
//     .replace(/[íÍ]/g, 'i')
//     .replace(/[óÓ]/g, 'o')
//     .replace(/[úÚ]/g, 'u')
//     .toLowerCase();
// };

const searchProducts = async () => {
  try {
    //const normalizedSearchTerm = normalizeText(name.value);
    //console.log('Término de búsqueda:', normalizedSearchTerm);
    //router.push({ name: 'results', query: { name: normalizedSearchTerm } });
   router.push({ name: 'results', query: { name: name.value } });

  } catch (error) {
    console.error('Error al buscar productos:', error);
  }
}

</script>

<template>

  <div class="search-container">

    <input type="text" class="input" v-model="name" placeholder="Buscar producto...">

    <div class="btn-container">
      <button class="btn" @click="searchProducts"><img src="/icons/search-icon.svg" alt=""></button>
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
  font-size: 1.5rem;
  color: white;
  border-bottom: 1px solid white;
 
}

.btn {
  width: 3rem;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn > img {
  width: 100%;
}

.search-container .btn:hover {
  color: #fff;
  background-color: grey;
}

</style>