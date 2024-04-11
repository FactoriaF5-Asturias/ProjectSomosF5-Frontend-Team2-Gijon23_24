<template>
  <div id="home-detail" class="product-detail">
    <div class="goback">
    <button class="goback" @click="goback"></button>
    </div>
  
    
    <div class="detail-image-container">
      <div class="detail-mainImage-container">
        <img :src="imageDirectory" alt="Main image" />
      </div>
      <div class="detail-miniPics-container">
      <img :src="imageDirectory" alt="Miniatura" @click="changeMainImage(imageDirectory)" :class="{ 'active': imageDirectory === selectedThumbnail }" />
      <img v-for="(image, index) in product.additionalImages" :key="index" :src="image" alt="Miniatura" @click="changeMainImage(image)" :class="{ 'active': image === selectedThumbnail }" />
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
        {{ product.productDescription}}
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
import axios from "axios";
import { onMounted, reactive, ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';

const goback = () => {
  window.history.length  > 1 ? history.go(-1) :  router.push('/');
}


const router  = useRouter();
console.log(router)
const route = useRoute();

let product = reactive({
  productName: '',
  price: '',
  description: '',
  image: '',
  additionalImages: []
});
const cantidad = ref(1);
let selectedThumbnail = '';
onMounted(async () => {
  const id = route.params.id_product;
  const response = await axios.get(`https://api-printgo.factoriaf5asturias.org/api/v1/products/${id}`);
  product = response.data;
  selectedThumbnail = product.additionalImages[0];
  imageDirectory.value = uri + "/" + findImageForProduct(product);
});
function sumarCantidad() {
  cantidad.value++;
}
function restarCantidad() {
  if (cantidad.value > 1) {
    cantidad.value--;
  }
}


const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;
const imageDirectory = ref('');
const defaultImage = '../../../public/images/banner-logo.svg';
const isLoading = ref(true);
function findImageForProduct(product) {
  const image = product.images.find(img => img.mainImage === true);
  return image.imageName ? image.imageName : defaultImage;
};

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  imageDirectory.value = uri + "/" + findImageForProduct(product);
  isLoading.value = false;
});
function changeMainImage(image) {
  imageDirectory.value = uri + "/" + image;
  selectedThumbnail = image;
}


</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import '/src/assets/scss/ProductDetail.scss';
</style>
