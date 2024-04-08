<template>
  <div id="home-detail" class="product-detail">
    <button class="goback" @click="goBack"></button>
    
    <div class="detail-image-container">
      <div class="detail-mainImage-container">
        <img :src="product.imageName" alt="Main image" />
      </div>
      <div class="detail-miniPics-container">
        <img v-for="(image, index) in product.additionalImages" :key="index" :src="image" alt="imagenes adicionales" />
      </div>
    </div>
    
    <div class="detail-text-container">
      <h3 class="product-name">
        {{ product.productName }}
      </h3>
      <h2>
        {{ product.price }}<span style="font-size: 3rem">€</span>
      </h2>
      <p>
        {{ product.description }}
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
import { ref, onMounted } from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router';


const route = useRoute();

let product = ref({
  productName: '',
  price: '',
  description: '',
  image: '',
  additionalImages: []
});
const cantidad = ref(1);

const uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

onMounted(async () => {
  const id = route.params.id_product;
  const response = await axios.get(`${uri}/${id}`);
  product.value = response.data; 
  
});

function sumarCantidad() {
  cantidad.value++;
}

function restarCantidad() {
  if (cantidad.value > 1) {
    cantidad.value--;
  }
}

function goBack() {
  window.history.length > 1 ? history.go(-1) : route.push('/');
}
</script>


<style lang="scss" scoped>
</style>
