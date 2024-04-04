
<template>
  <div id="home-detail" class="product-detail">
    <v-btn icon @click="goBack">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
      <span class="arrow-left"></span>
    
    <div class="detail-image-container">
      <div class="detail-mainImage-container">
        <img src="/public/images/estatua.png" alt="detalles" />
      </div>
      <div class="detail-miniPics-container">
        <img src="/public/images/estatua.png" alt="detalles" />
        <img src="/public/images/Logo3d.png" alt="detalles" />
        <img src="/public/images/PrintGo.svg" alt="detalles" />
      </div>
    </div>
    
    <div class="detail-text-container">
      <h3 class="product-name">
        Nombre producto
        
      </h3>
      <h2>
        14,99<span style="font-size: 1rem">€ </span>
        
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum
        necessitatibus reprehenderit quidem esse est, veniam temporibus
        placeat sunt officiis. Alias nihil placeat excepturi, quisquam earum
        maxime eos harum inventore.
      </p>
    </div>
    <div class="añadirCarrito-container">
      <div class="cantidad-container">
      <label for="cantidad" class="label">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" v-model="cantidad" min="1" class="cantidad-input">
        <button type="button" class="btn-restar" @click="restarCantidad">-</button>
        <button type="button" class="btn-sumar" @click="sumarCantidad">+</button>
    </div>
      <button class="añadirCarrito">Añadir al carrito</button>
      <button class="añadirFavorito"><i class="fas fa-heart"></i></button>

   
    </div>
  </div>
</template>
<script setup>
import {ref,onMounted} from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router';
const route = useRoute();

// import useContentStore from '../stores/CallByIdstore';
// const content  =  useContentStore();
// let images = ref([]);


onMounted(async () => {
  const id = route.params.id_product;
  const response = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
  console.log(response)
});



const cantidad = ref(1);
function sumarCantidad(){
  cantidad.value++;
}
function restarCantidad(){
  if (cantidad.value > 1){
    cantidad.value--;
  }
}

function goBack() {
  window.history.length > 1 ? history.go(-1) : router.push('/');
}




</script>
  

  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import '/src/assets/scss/ProductDetail.scss';
  </style>