<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useProductsStore } from "@/stores/productStore";

const store = useProductsStore()

const props = defineProps({
	onClose: Function,
});

const closeForm = () => {
	props.onClose();
};

const uri = import.meta.env.VITE_API_ENDPOINT_PRODUCTS;
const uriImagesS3 = import.meta.env.VITE_API_ENDPOINT_IMAGES_S3_UPLOAD;

const resetForm = () => {
	productName.value = "";
	price.value = "";
	categoryId.value = "";
	productDescription.value = "";
	selectedFiles.value = [];
};

const productId = ref();

// Form data.
const productName = ref("");
const price = ref("");
const categoryId = ref("");
const productDescription = ref("");
const selectedFiles = ref([]);
const selectedMainImage = ref();

// Handle FILES upload.
const handleFilesChange = (event) => {
	selectedFiles.value = Array.from(event.target.files);
};

// Handle MAIN IMAGE upload.
const handleMainImageChange = (event) => {
	selectedMainImage.value = event.target.files[0];
};

async function handlePost() {
	try {
		await createProduct();
		await uploadImages(productId.value);
		await store.fetchProducts()

		console.log("Proceso completado exitosamente.");
	} catch (error) {
		console.error("Error al crear el producto", error);

		deleteProduct(productId);
	}
}

async function createProduct() {
	const data = {
		productName: productName.value,
		price: price.value,
		categoryId: categoryId.value,
		productDescription: productDescription.value,
	};
	console.log(data);
	try {
		const response = await axios.post(
			uri,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
		productId.value = response.data.id;
		console.log(productId);
	} catch (error) {
		console.error("Error al crear el producto:", error);
		throw error;
	}
}

async function uploadImages(productId) {
	let formData = new FormData();
	selectedFiles.value.forEach((file) => {
		formData.append("files", file);
	});
	formData.append("file", selectedMainImage.value);
	try {
		await axios.post(
			uriImagesS3 + `/${productId}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
				withCredentials: true,
			}
		);

		console.log("Imágenes subidas exitosamente.");
	} catch (error) {
		console.error("Error al subir las imágenes:", error);

		await deleteProduct(productId);

		throw error;
	}
}

async function deleteProduct(productId) {
	try {
		await axios.delete(
			uri + `/${productId}`,
			{},
			{ withCredentials: true }
		);

		console.log("Producto borrado exitosamente.");
	} catch (error) {
		console.error("Error al borrar el producto:", error);

		throw error;
	}
}
</script>

<template>
	<div class="modal" @click="closeForm">
	  <div class="modal_container" @click.stop>
		<div id="button_container">
		  <button @click.stop="closeForm">
			<img src="/icons/icon-cross2.svg" alt="cross icon" />
		  </button>
		</div>
		<form @submit.prevent="submitForm">
		  <h1>Añadir nuevo producto</h1>
		  <div class="divMain">
			<div class="image-main">
			  <label for="file-upload" class="custom-file-upload">
				Imagen Principal
			  </label>
			  <div class="input-wrapper-1">
			  <input type="file" class="form-control-file" id="file" name="file" @change="handleMainImageChange" />
			  <span class="plus-symbol">+</span>
			</div>
			</div>
			<section>
			  <div class="first-row">
				<div class="title-container">
				  <label>Título</label>
				  <input type="text" class="form-control" id="title" v-model="productName" placeholder="Título" />
				</div>
				<div class="price-container">
				  <label>Precio</label>
				  <input type="number" class="form-control" id="price" v-model="price" placeholder="Precio" />
				</div>
			  </div>
			  <div class="categories-container">
				<label>Categoría</label>
				<select id="categories" v-model="categoryId" placeholder="Seleccione categoría">
				  <option value="1">Hogar</option>
				  <option value="2">Geek</option>
				  <option value="3">Litofanía</option>
				</select>
			  </div>
			</section>
		  </div>
		  <div class="images-container">
			<label for="file-upload" class="custom-file-upload">
			  Galería de imágenes
			</label>
			<div class="input-wrapper">
			  <input type="file" class="form-control-file" id="file-upload" name="selectedFiles" multiple @change="handleFilesChange" />
			  <span class="add-images">+ Añadir imágenes</span>
			</div>
		  </div>
		  <div class="description-container">
			<label>Descripción</label>
			<textarea class="form-control" id="description" rows="3" v-model="productDescription"
			  placeholder="Descripción..."></textarea>
		  </div>
		  <div class="btns-actions">
			<button id="reset" @click="resetForm()">Borrar</button>
			<button id="send" @click="handlePost()">Enviar</button>
		  </div>
		</form>
	  </div>
	</div>
  </template>
  <style lang="scss" scoped>
  .modal {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
  }
  .modal_container {
	height: 63rem;
	width: 60rem;
	background-color: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 6px solid $primary-color;
  }
  img {
	height: 3rem;
	width: 3rem;
  }
  #button_container {
	width: 100%;
	display: flex;
	padding-right: 1rem;
	margin-bottom: 6rem;
	justify-content: end;
  }
  form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	margin-bottom: 3rem;
	padding: 0 2rem 0 2rem;
	border-radius: 1rem;
  }
  .divMain {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
  }
  .image-main {
	width: 30%;
	.input-wrapper-1 {
	  width: 100%;
	  height: 9.2rem;
	  background-color: white;
	  border: 2px solid #422359;
	  border-radius: 0.5rem;
	  position: relative;
	}
	.input-wrapper-1 input {
	  position: relative;
	  z-index: 2;
	  opacity: 0;
	  width: 100%;
	  height: 100%;
	  cursor: pointer;
	}
	.plus-symbol {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  font-size: 3rem;
	  font-weight: bolder;
	  color: rgb(54, 54, 54);
	}
  }
  section {
	width: 100%;
  }
  .first-row {
	display: flex;
	gap: 2rem;
	width: 100%;
	margin-bottom: 1rem;
  }
  .title-container {
	width: 70%;
	input {
	  width: 100%;
	  height: 3rem;
	  border-radius: 0.5rem;
	  background-color: white;
	  border: 2px solid #422359;
	  font-size: 1rem;
	  font-weight: 300;
	  color: rgb(54, 54, 54);
	}
  }
  .price-container {
	width: 30%;
	input {
	  width: 100%;
	  height: 3rem;
	  border-radius: 0.5rem;
	  font-size: 1rem;
	  color: rgb(54, 54, 54);
	  font-weight: 300;
	  background-color: white;
	  border: 2px solid #422359;
	}
  }
  .categories-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
  }
  select {
	width: 100%;
	height: 3rem;
	border-radius: 0.5rem;
	background-color: white;
	border: 2px solid #422359;
  }
   .images-container {
	 display: flex;
	 flex-direction: column;
	 width: 100%;
	 margin-bottom: 1rem;
   }
	.input-wrapper {
	  position: relative;
	  width: 100%;
	  height: 5rem;
	  background-color: white;
	  border: 2px solid #422359 ;
	  border-radius: 0.5rem;
	}
	.input-wrapper input {
	  position: relative;
	  z-index: 2;
	  opacity: 0;
	  width: 100%;
	  height: 100%;
	  cursor: pointer;
	}
	.add-images {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  font-size: 1.8rem;
	  color: rgb(54, 54, 54);
	}
  .description-container {
	width: 100%;
	height: 15rem;
	textarea {
	  width: 100%;
	  height: 12rem;
	  border-radius: 0.5rem;
	  background-color: white;
	  border: 2px solid #422359;
	  font-size: 1rem;
	  color: rgb(54, 54, 54);
	  font-weight: 300;
	}
  }
  h1 {
	font-size: 4rem;
	font-weight: 500;
	color: #422359;
	margin-bottom: 4rem;
	display: flex;
	justify-content: center;
  }
  label {
	font-size: 1.3rem;
	color: #422359;
	font-weight: 400;
	margin-top: 1rem;
  }
  .btns-actions {
	display: flex;
	justify-content: center;
	gap: 6rem;
	margin-top: 2rem;
	button {
	  background-color: $primary-color;
	  font-size: 1.5rem;
	  color: white;
	  border-radius: 0.5rem;
	  width: 8rem;
	  height: 4rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  transition: ease-in-out 2s;
	}
	 button:hover {
	  background-color: #422359;
	}
  }
  .form-control {
	padding: 1rem;
  }
  </style>