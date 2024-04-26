<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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

const updatePlaceholder = () => {
  const isMobile = window.innerWidth <= 1000; 
  const inputElement = document.querySelector('.input');

  if (inputElement) {
    if (isMobile) {
      inputElement.setAttribute('placeholder', 'Buscar...'); 
    } else {
      inputElement.setAttribute('placeholder', 'Buscar producto...'); 
    }
  } else {
    console.warn('No se encontró el campo de entrada.');
  }
}

onMounted(() => {
  window.addEventListener('resize', updatePlaceholder);
});

onUnmounted(() => {
  window.removeEventListener('resize', updatePlaceholder);
});

updatePlaceholder();

</script>

<template>

  <div class="search-container">
    <div class="input-container">
      <input type="text" class="input" v-model="name" :placeholder="placeholderText">
      <button class="btn" @click="searchProducts"><img src="/icons/search-icon.svg" alt=""></button>
    </div>
   
  </div>
  
</template>

<style lang="scss" scoped>

.search-container {
  width: auto;
  height: 4rem;
  border-bottom: 1px solid white;
  display: flex; 
  align-items: center;
}

.input-container {
  flex: 1;
  display: flex; 
}

.input {
  flex: 1;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  background: transparent;
  outline: none;
}

.btn {
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.btn > img {
  width: 100%;
}

.search-container .btn:hover {
  color: #fff;
  background-color: grey;
}

@media (max-width: 1000px) {

  .search-container {
    flex-direction: column;
    align-items: stretch;
  }

  .input-container {
    width: 100%; 
    margin-bottom: 1rem; 
    position: relative;
  
  }

 .input {
    flex: 1;
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    border: none;
    background: transparent;
    outline: none;
  }

 .btn {
    position: absolute; 
    top: 0; 
    right: 0;
    height: 100%;
    width: 3rem; 
    border: none;
    background: transparent;
    cursor: pointer;
}

.btn > img {
    width: 100%; 
  }

}

</style>