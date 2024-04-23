<template>
  <div id="home-detail" class="product-detail">
    <div class="goback">
      <button class="goback" @click="goBack"></button>
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
        {{ product.price }}<span style="font-size: 1.5rem">€</span>
      </h2>
      <p>
        {{ product.productDescription }}
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
      <FavoriteHeart :key="id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import FavoriteHeart from "@/components/favorite/FavoriteHeart.vue";
import axios from "axios";
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFavoritesStore } from '@/stores/FavoritesStore';

const favoritesStore = useFavoritesStore();
let id;
const router = useRouter();
const route = useRoute();

id = route.params.id_product;

const product = ref({
  productName: '',
  price: '',
  description: '',
  image: '',
  additionalImages: []
});
const cantidad = ref(1);
let selectedThumbnail = '';
const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;
const imageDirectory = ref('');
const defaultImage = '../../../public/images/banner-logo.svg';
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get(`https://api-printgo.factoriaf5asturias.org/api/v1/products/${id}`);
    product.value = response.data;
    if (products && products.length > 1) {
  // Accede al elemento en la posición 1 del array products
}

    imageDirectory.value = `${uri}/${findImageForProduct(product.value)}`;
    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
});

function sumarCantidad() {
  cantidad.value++;
}

function restarCantidad() {
  if (cantidad.value > 1) {
    cantidad.value--;
  }
}

function findImageForProduct(product) {
  const image = product.images.find(img => img.mainImage === true);
  return image ? image.imageName : defaultImage;
}

async function changeMainImage(image) {
  imageDirectory.value = `${uri}/${image}`;
  selectedThumbnail = image;
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#home-detail{
   min-height:100vh;
   background-color:#252525;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   overflow: hidden;
}


.goback {
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back-up-double' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23a905b6' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 14l-4 -4l4 -4' /%3E%3Cpath d='M8 14l-4 -4l4 -4' /%3E%3Cpath d='M9 10h7a4 4 0 1 1 0 8h-1' /%3E%3C/svg%3E");
   width: 75px;
   height: 55px;
   cursor: pointer;
   margin-left: 2%;


   
 
}

 
.detail-image-container {
   display: grid;
   grid-template-rows: 1fr 0.2fr;
   width: 50%;
   margin-left: 8%;
   margin-top: 0.5%;
}

.detail-mainImage-container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 10% 0% 5% 2%;
}

.detail-mainImage-container img {
   width: 60%;
   border-radius: 5%;
   box-shadow: 6px 8px 10px 2px black;
   background: none;
}
.detail-miniPics-container {
   display: flex;
   justify-content: center; 
   margin: 1rem 0; 
 }
 
 .detail-miniPics-container img {
   width: 95px; 
   height: auto; 
   margin-right: 10px;
   border-radius: 5%;
   box-shadow: 6px 8px 10px 2px black;
   cursor: pointer;
 }
 
 .detail-miniPics-container img.active {
   border: 2px solid violet;
   
 }
 



.detail-text-container {
   width: 50%;
   height: 60%;
   margin: 4% 6% 0% 5%;
   padding: 1.5%;
   border-radius: 1%;
   box-shadow: 6px 8px 10px 2px black;
   background:#252525;
}

.detail-text-container h3 {
   margin:2rem;
   font-size:xx-large;
   border-bottom: 2px solid white;
   color: white;
   

}
.detail-text-container h2{
   font-size: large;
   color:white;
   margin-left: 2rem;
   
}

.detail-text-container p {
   font-size: large;
   margin-top: 2rem;
   margin-left: 2rem;
   color: white;
   border-bottom: 2px solid white;
}
#home-detail {
   
    

   .añadirCarrito-container {
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 2rem; 
     margin-left: 36rem;
  
     
     
   }
 
   .añadirCarrito {
     padding: 1.5rem 14rem;
     font-size: larger;
     background-color:#cd9af3;
     color: #FFFFFF;
     border-radius: 5px;
     box-shadow: 6px 8px 10px 2px black;
     border: none;
     transition: all 0.2s ease;
     cursor: pointer;
     font-weight: bold;
     margin-bottom: 2rem;
     margin-top: 2rem;
   
   }
   .añadirCarrito:hover {
      color: #47589D;
    } 
 }



 

 
 .añadirCarrito-container {
   position: absolute; 
   bottom: 15rem; 
   left: 54%;
   transform: translateX(-50%); 
   
 }

 .añadirFavorito{
   color:#cd9af3;
   position: relative;
   left: 80%;
   font-size:xx-large;
   transform: translateY(-196%);
 }
 .añadirFavorito:hover{
   color:red;
   transition: 1s;
 }
 .cantidad-container {
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.cantidad-container input {
   width: 50px;
   text-align: center;
   margin-right: 6rem; 
}

.cantidad-container button {
   width: 30px;
   height: 30px;
   background-color:#cd9af3;
   border: none;
   cursor: pointer;
   transition: background-color 0.3s ease;
   margin-left: 2rem;
   margin-bottom: 1rem;
   
}

.cantidad-container button:hover {
   background-color: #aaa;
}


.cantidad-input {
   color:#FFFFFF;
   font-size: medium;
}
.label{
   color: #FFFFFF;
   font-size: medium;
}
</style>
