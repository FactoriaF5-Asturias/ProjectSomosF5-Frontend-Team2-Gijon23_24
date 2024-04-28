<script setup>
import { onMounted, ref } from "vue";
import { useFavoritesStore } from '@/stores/FavoritesStore';
import { useAuthStore } from '@/stores/AuthStore';
import FavoriteHeart from "../favorite/FavoriteHeart.vue";

const props = defineProps({
 product: {
    type: Object,
    required: true,
 },
});

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES_S3;
const imageDirectory = ref("");
const isLoading = ref(true);

const authStore = useAuthStore();
const store = useFavoritesStore();

const isFavorite = ref(false);

onMounted(async () => {
 if (authStore.isAuthenticated && authStore.username !== '') {
    await store.loadFavorites(authStore.username);
    
    if (store.favoriteProducts.some(favorite => favorite.id === props.product.id)) {
      isFavorite.value = true;
      console.log('si');
    } else {
      isFavorite.value = false;
      console.log('no');
    }
    changeHeart();
 } else {
    console.log('Los favoritos no se han cargado todavía');
 }

 imageDirectory.value = uri + "/" + findImageForProduct(props.product);
 isLoading.value = false;
});

function changeHeart() {
 const span = document.querySelector(`.favorite-${props.product.id}`);

 if (!isFavorite.value) {
    span.style.content = 'url(/icons/heart-icon.svg)';
 } else {
    span.style.content = 'url(/icons/heart-fill-icon.svg)';
 }
}

function findImageForProduct(product) {
 const image = product.images.find((img) => img.mainImage === true);
 if (!image) {
    const defaultImage = "placeholder-image.jpg";
    return defaultImage;
 }
 return image.imageName;
}

function handleFavoriteUpdate(newValue) {
 isFavorite.value = newValue;
 changeHeart();
}
</script>

<template>
 <article>
    <div>
      <FavoriteHeart class="heart-icon" :class="'favorite-' + product.id" :key="product.id" :product="product" :isFavorite="isFavorite" @update:isFavorite="handleFavoriteUpdate" />
      <router-link :to="{ path: `/Detail/${product.id}` }">
        <v-card class="mx-auto card-body" theme="dark">
          <v-img
            class="image"
            :style="{
              'background-image': 'url(' + imageDirectory + ')',
            }"
            :alt="product.productName"
          >
          </v-img>
          <div class="product-data">
            <v-card-title class="product-name">{{
              product.productName
            }}</v-card-title>
            <v-card-title class="price"
              >{{ product.price }} €</v-card-title
            >
          </div>
        </v-card>
      </router-link>
    </div>
 </article>
</template>

<style scoped lang="scss">
article {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: transform 0.2s ease-in-out;
	filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.357));

	> div {
		width: fit-content;
		position: relative;
	}
}

article:hover {
	transform: translate(0, -10px);
}
.card-body {
	width: 28rem;
	color: white;
}
.image {
	height: 20rem;
	width: 100%;
	background-color: rgb(73, 73, 73);
	background-size: contain;
	background-position: center;
}
.product-data {
	display: flex;
	font-size: 1.3rem;
	background-color: $primary-background;
	font-family: "Poppins", sans-serif;
}
.product-name {
	width: 65%;
}
.price {
	width: 35%;
	text-align: end;
}
.heart-icon {
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 10;
}
</style>
