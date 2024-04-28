<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import FavoriteHeart from "@/components/favorite/FavoriteHeart.vue";
import { useFavoritesStore } from '@/stores/FavoritesStore';
import { useAuthStore } from '@/stores/AuthStore';
import NotLoggerAlert from "@/components/alerts/NotLoggerAlert.vue";
import AddToCartAlert from "./../components/alerts/AddCartAlert.vue";

const router  = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const store = useFavoritesStore();

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES_S3;
const url = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

const imageDirectory = ref('');
const isLoading = ref(true);
const ConfirmationCartAlert = ref(false);
const notLogged = ref(false);

const isFavorite = ref(false);

const goback = () => {
  window.history.length  > 1 ? history.go(-1) :  router.push('/');
}

const showConfirmation = () => {
  if (authStore.isAuthenticated) {
    ConfirmationCartAlert.value = true;
  } else {
    notLogged.value = true;
  }
}

const cancelAlert = () => {
    ConfirmationCartAlert.value = false;
    notLogged.value = false;
};

let product = reactive({
  id: '',
  productName: '',
  price: '',
  description: '',
  images: []
});

let sortedImages = reactive({})

console.log(product.additionalImages);

function findImageForProduct(product) {
	const image = product.images.find((img) => img.mainImage === true);
	if (image == undefined) {
		const defaultImage = "placeholder-image.jpg";
		return defaultImage;
	}
	return image.imageName;

}

const changeMainImage = (image) => {
  imageDirectory.value = uri + "/" + image.imageName;
}

onMounted(async () => {

  const id = route.params.id_product;
  const response = await axios.get(`${url}/${id}`);
  product = response.data
  sortedImages = product.images.sort((a, b) => a.id - b.id)
  Object.assign(product, response.data);

  console.log(product)

  imageDirectory.value = uri + "/" + findImageForProduct(product);

  if (authStore.isAuthenticated) {
    await store.loadFavorites(authStore.username);
    if (store.favoriteProducts.some(favorite => favorite.id === product.id)) {
      isFavorite.value = true;
      console.log('si');
    } else {
      isFavorite.value = false;
      console.log('no');
    }
    changeHeart();
 } else {
  console.log('no se cargan los favoritos')
 }

 isLoading.value = false;
});

const handleFavoriteUpdate = (newValue) => {
 isFavorite.value = newValue;
 changeHeart();
};

function changeHeart() {
 const span = document.querySelector(`.favorite`);

 if (!isFavorite.value) {
    span.style.content = 'url(/icons/heart-icon.svg)';
 } else {
    span.style.content = 'url(/icons/heart-fill-icon.svg)';
 }
}
</script>


<template>

  <div class="product-detail">
    <div class="product-detail-container">
      
      <AddToCartAlert :show="ConfirmationCartAlert" :product="product" @cancel="cancelAlert" />
      <NotLoggerAlert :show="notLogged" @cancel="cancelAlert" />
          <div class="goback">
            <button class="goback" @click="goback"></button>
          </div>
          
          <div class="detail-image-container">

            <img :src="imageDirectory" alt="Main image" />
            <div>
              <img v-for="(image, index) in sortedImages" :key="index" :src="uri + '/' + image.imageName" alt="Miniatura"  @click="changeMainImage(image)"/>
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
              <button class="add-cart" @click="showConfirmation">Añadir al carrito</button>
              <FavoriteHeart class="favorite" :product="product" :isFavorite="isFavorite" @update:isFavorite="handleFavoriteUpdate" />
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
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    > img {
      border-radius: 5px;
      width: 100%;
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

