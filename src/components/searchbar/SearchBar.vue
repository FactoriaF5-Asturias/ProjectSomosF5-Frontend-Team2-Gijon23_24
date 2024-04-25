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
    <div class="input-container">
      <input type="text" class="input" v-model="name" placeholder="Buscar producto...">
      <button class="btn" @click="searchProducts"><img src="/icons/search-icon.svg" alt=""></button>
    </div>
   
  </div>
  
</template>

<style lang="scss" scoped>
.search-container {
  width: fit-content;
  height: 4rem;
  border-bottom: 1px solid white;
  position: relative;
}

.input-container {
  position: relative;
}

.input {
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  background: transparent;
  outline: none;
}

.btn {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
  cursor: pointer;
}
// .search-container {
//   width: fit-content;
//   height: 4rem;
//   border-bottom: 1px solid white;
// }

// .input-container {
//   display: flex;
//   align-items: center;
// }

// .input {
//   flex: 0 0 20px; /* Ancho pequeño para el input */
//   padding: 1rem;
//   font-size: 1.5rem;
//   color: white;
//   border: none; /* Remove border from input */
//   background: transparent; /* Make input transparent */
// }

// .input {
//   flex: 1;
//   padding: 1rem;
//   font-size: 1.5rem;
//   color: white;
//   border: none; /* Remove border from input */
//   background: transparent; /* Make input transparent */
// }

// .btn {
//   width: 3rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
// }

// .search-container .input {
//   width: auto;
//   padding: 1rem;
//   font-size: 1.5rem;
//   color: white;
// }

// .btn {
//   width: 3rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;
// }

// .btn {
//   flex: 1; /* El botón ocupa todo el espacio restante */
//   border: none;
//   background: transparent;
//   cursor: pointer;
// }

.btn > img {
  width: 100%;
}

.search-container .btn:hover {
  color: #fff;
  background-color: grey;
}

</style>