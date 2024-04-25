<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import DelateProductAlert from "../alerts/DeleteProductAlert.vue";

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES_S3;
const uriProduct = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

const imageDirectory = ref("");
const isLoading = ref(true);

function findImageForProduct(product) {
	const image = product.images.find((img) => img.mainImage === true);
	if (image == undefined) {
		const defaultImage = "placeholder-image.jpg";
		return defaultImage;
	}
	return image.imageName;
}

onMounted(async () => {
	imageDirectory.value = uri + "/" + findImageForProduct(props.product);
	isLoading.value = false;
});

const ConfirmationDeleteAlert = ref(false);

const showConfirmation = () => {

	ConfirmationDeleteAlert.value = true;
}

const refuse = () => {
	ConfirmationDeleteAlert.value = false;
};

</script>

<template>
	<article>
		<DelateProductAlert :show="ConfirmationDeleteAlert" :product="product" @cancel="refuse"/>
		<v-card class="mx-auto card-body" theme="dark">
			<v-img
			class="image"
			:style="{
				'background-image': 'url(' + imageDirectory + ')',
			}"
				:alt="product.productName"
				>
				<div class="card-options">
					<button @click="showConfirmation">X</button>
				</div>
			</v-img>
			<div class="product-data">
				<v-card-title class="product-name">{{
					product.productName
				}}</v-card-title>
				<v-card-title class="price">{{ product.price }} €</v-card-title>
			</div>
			
		</v-card>
	</article>
</template>

<style scoped lang="scss">
.card-options {
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
	
	> button {
		font-size: large;
		background-color: $primary-color;
		width: 3rem;
		height: 3rem;
		border-radius: 0.5rem;
	}
}

article {
	
	width: fit-content;
	transition: transform 0.2s ease-in-out;
	filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.357));
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
</style>
