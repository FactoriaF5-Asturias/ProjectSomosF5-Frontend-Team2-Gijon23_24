<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { useCartStore } from "./../stores/CartStore";

const store = useCartStore();

const router  = useRouter();
const route = useRoute();

const goback = () => {
  window.history.length  > 1 ? history.go(-1) :  router.push('/');
}

const addCart = () => {

  let productData = {
    id: product.id,
    name: product.productName,
    price: changePrice(product.price),
  };

  store.addToCart(product, productData);

  console.log(store.items)
}

let product = reactive({
  id: '',
  productName: '',
  price: '',
  description: '',
  image: '',
  additionalImages: []
});

console.log(product.additionalImages);

const cantidad = ref(1);

function sumarCantidad() {
  cantidad.value++;
}
function restarCantidad() {
  if (cantidad.value > 1) {
    cantidad.value--;
  }
}
let selectedThumbnail = '';
const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;
const url = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

const imageDirectory = ref('');
const defaultImage = '../../../public/images/banner-logo.svg';
const isLoading = ref(true);

onMounted(async () => {
  const id = route.params.id_product;
  const response = await axios.get(`${url}/${id}`);
  product = response.data;
  selectedThumbnail = product.additionalImages[0];
  imageDirectory.value = uri + "/" + findImageForProduct(product);
});


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

function changePrice(decimalPrice) {

  let priceString = decimalPrice.toString();
  let [integerPart, decimalPart] = priceString.split('.');
  let priceInteger = parseInt(integerPart) * 100 + (decimalPart ? parseInt(decimalPart) : 0);
  
  console.log('precio:' + priceInteger )
  return priceInteger;
}
</script>

<template>
  <div class="product-detail">
    <div class="product-detail-container">
      
          <div class="goback">
            <button class="goback" @click="goback"></button>
          </div>
          
          <div class="detail-image-container">

            <img :src="imageDirectory" alt="Main image" />
            <div>
              <img :src="imageDirectory" alt="Miniatura" @click="changeMainImage(imageDirectory)" :class="{ 'active': imageDirectory === selectedThumbnail }" />
              <img v-for="(image, index) in product.additionalImages" :key="index" :src="image" alt="Miniatura" @click="changeMainImage(image)" :class="{ 'active': image === selectedThumbnail }" />
            </div>
    
          </div>
      
          <div class="detail-text-container">
            <h3>
              {{ product.productName }}
            </h3>
            <h2>
              {{ product.price }}
              <span>€</span>
            </h2>
            <hr>
            <p>
              {{ product.productDescription}}
            </p>
            <hr>
            <div class="add-container">
              <button class="add-cart" @click="addCart">Añadir al carrito</button>
              <button class="heart"><i class="fas fa-heart"></i></button>
            </div>
          </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

.product-detail {
  padding: 4rem 0;
  background-color:#252525;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

.product-detail-container {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.goback {
   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back-up-double' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23a905b6' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M13 14l-4 -4l4 -4' /%3E%3Cpath d='M8 14l-4 -4l4 -4' /%3E%3Cpath d='M9 10h7a4 4 0 1 1 0 8h-1' /%3E%3C/svg%3E");
   width: 75px;
   height: 55px;
   cursor: pointer;
   margin-left: 2%;
}

.detail-image-container {
  width: 100%;

  > img {
    width: 100%;
    border-radius: 5px;
  }

  > div {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    > img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
}

.detail-text-container {
  font-size: 1.8rem;
  color: white;
  margin-top: 3rem;
}

h3 {
  font-size: 3rem;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 400;
}

hr {
  color: white;
  margin: 3rem 0;
}

.add-container {
  display: flex;
  gap: 2rem;

  button {
    background-color: $primary-color;
    border-radius: 10px;
    height: 5rem;
    padding: 0.5rem;
  }

  .heart {
    background-color: transparent;
  }
}

@media (min-width: 1000px) {

.product-detail-container {
  width: 90%;
  justify-content: space-around;
  gap: 1rem;
  flex-direction: row;
}

.detail-image-container {
  width: 40%;
}

.detail-text-container {
  width: 40%;
  font-size: 1.8rem;
  color: white;
  margin-top: 3rem;
}

h3 {
  font-size: 3rem;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 400;
}

}
</style>
