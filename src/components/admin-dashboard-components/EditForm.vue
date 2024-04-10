<script setup>
import { useContentStore } from "@/stores/ContentStore";
import axios from "axios";
import { ref, watchEffect, reactive } from "vue";
import { onMounted } from "vue";

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES;

const props = defineProps({
  onClose: Function,
  productId: Number
});


const closeForm = () => {
  props.onClose();
}

// Product data.

const product = ref();
const productName = ref('');
const price = ref('');
const categoryId = ref('');
const productDescription = ref('');

// Images.

const existingImages = ref([]);
const deletedImages = ref([]);
const addedImages = ref([]);
const imageDirectory = ref('');
const otherImagesDirectory = ref([])



function findImageForProduct(product) {
    const image = product.images.find(img => img.mainImage === true);
    return image.imageName
}

function findOtherImagesForProduct(product) {
    const images = product.images.filter(img => img.mainImage === false);
    console.log(images)
    return images
}

// Handle FILES upload.
const handleFilesChange = (event) => {
	selectedFiles.value = Array.from(event.target.files);
};

// Handle MAIN IMAGE upload.
const handleMainImageChange = (event) => {
	selectedMainImage.value = event.target.files[0];
};

// Get product data.

async function getProductData(id) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/products/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    existingImages.value = response.data.images
    product.value = response.data
    productName.value = response.data.productName;
    price.value = response.data.price;
    categoryId.value = response.data.categories[0].id;
    productDescription.value = response.data.productDescription;
    imageDirectory.value = uri + "/" + findImageForProduct(product.value);
    console.log(imageDirectory.value)
    otherImagesDirectory.value = findOtherImagesForProduct(product.value)
    console.log(otherImagesDirectory.value)
      
	} catch (error) {
		console.error("Error al conseguir los datos del producto", error);
		throw error;
	}
}

// Add deleted images to separate array.

const addDeletedImage = (imageId) => {
  const index = existingImages.value.findIndex(image => image.id === imageId);
  if (index !== -1) {
    const deletedImage = existingImages.value.splice(index, 1)[0];
    deletedImages.value.push(deletedImage);

  }
}

// API Calls handler.

async function handleUpdate() {
	try {
		await updateProduct(props.productId);
    await uploadImages(props.productId);
    await deleteImages(deletedImages)
		console.log("Producto actualizado exitosamente.");
	} catch (error) {
		console.error("Error al actualizar el producto", error);

		deleteProduct(productId);
	}
}

// Update product data.

async function updateProduct(id) {
	const data = {
		productName: productName.value,
		price: price.value,
		categoryId: categoryId.value,
		productDescription: productDescription.value,
	};
	try {
		const response = await axios.put(
			`http://localhost:8080/api/v1/products/${id}`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
		);
	} catch (error) {
		console.error("Error al actualizar datos del producto:", error);
		throw error;
	}
}

// Upload new images.

async function uploadImages(id) {
	let formData = new FormData();
	selectedFiles.value.forEach((file) => {
		formData.append("files", file);
	});
	formData.append("file", selectedMainImage.value);
	try {
		await axios.post(
			`http://localhost:8080/api/v1/images/uploadImages/1`,
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




onMounted(() => {
  getProductData(props.productId);
});


</script>

<template>

  <div class="modal" @click="closeForm">
    <div class="modal_container" @click.stop>

      <div id="button_container">
        <button @click.stop="closeForm">
          <img src="/icons/icon-cross.svg" alt="cross icon">
        </button>
      </div>

      <form @submit.prevent="submitForm">

        <h1>Editar producto</h1>
        <div class="divMain">

          <div class="image-main-container">
            <label>Imagen Principal</label>
            <div class="image-main">
              <article>
                <div class="delete-image" :style="{ 'background-image': 'url(' + imageDirectory + ')' }" ></div>
                <button @click="() => addDeletedImage()">Delete</button>
              </article>
            </div>
          </div>
          <section>

              <div class="first-row">

              <div class="title-container">
                <label>Título</label>
                <input type="text" class="form-control" id="title" v-model="productName" placeholder="Título"/>
              </div>

              <div class="price-container">
                <label>Precio</label>
                <input type="number" class="form-control" id="price" v-model="price" placeholder="Precio"/>
              </div>

            </div>

            <div class="categories-container">
              <label>Categoría</label>
              <select id="categories" v-model="categoryId" placeholder="Seleccione categoría">
                <option value=1>Hogar</option>
                <option value=2>Geek</option>
                <option value=3>Litofanía</option>
              </select>

            </div>

          </section>
        </div>

        <div class="existing-images">
          <article v-for="image in otherImagesDirectory" :key="image.id">
            <div class="delete-image" :style="{ 'background-image': `url('http://localhost:8080/api/v1/imgs/${image.imageName}')` }"></div>
            <button @click="() => addDeletedImage(image.id)">Delete</button>
          </article>
        </div>

        <div class="images-container">
          <label for="file-upload" class="custom-file-upload">Imágenes</label>
          <input type="file" class="form-control-file" id="file-upload"></input>
        </div>
        

        <div class="description-container">
          <label>Descripción</label>
          <textarea class="form-control" id="description" rows="3" v-model="productDescription"
            placeholder="Descripción..."/>
        </div>

        <div class="btns-actions">
          <button @click="updateProduct">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
  height: 60rem;
  width: 60rem;
  background-color: white;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  border-color: #AE81D1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#button_container {
  width: 100%;
  display: flex;
  padding: 3rem;
  justify-content: end;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
 
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  border-radius: 1rem;


}

.divMain {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.image-main-container {
  width: 30%;

  input {
    //border: 1px solid black;
    width: 100%;
    height: 8.7rem;
    border-radius: 0.5rem;
    background-color: #DDD8D8;
    font-family: "Poppins", sans-serif;
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
    background-color: #DDD8D8;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
}

.price-container {
  width: 30%;

  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    background-color: #DDD8D8;
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
  //border: 1px solid black;
  background-color: #DDD8D8;
  font-family: "Poppins", sans-serif;
}

.images-container {
  margin-bottom: 1rem;

  input {
    border: 1px solid black;
    width: 100%;
    height: 5rem;
    //border-radius: 0.5rem;
    background-color: #DDD8D8;
    font-family: "Poppins", sans-serif;
  }
}

.description-container {
  width: 100%;
  height: 15rem;

  textarea {
    width: 100%;
    height: 12rem;
    border-radius: 0.5rem;
    //border: 1px solid black;
    background-color: #DDD8D8;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  color:grey;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
}

label {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.btns-actions {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  button {
    background-color: #AE81D1;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: white;
    border-radius: 0.5rem;

    width: 8rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }

}

.delete-image {
  height: 8rem;
  width: 8rem;
  background-size: cover;
}

.existing-images {
  display: flex;
  gap: 2rem;
}
</style>