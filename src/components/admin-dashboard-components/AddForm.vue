<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';

const router = useRouter()

const props = defineProps({
  onClose: Function
});
const imageMainProduct = ref(null);
const productName = ref('');
const price = ref('');
const categoryId = ref('1');

const productDescription = ref('');

const closeForm = () => {
  props.onClose();
}

const resetForm = () => {

  imageProduct.value = '';
  productName.value = '';
  price.value = '';
  categoryId.value = '1';
  productDescription.value = '';
}



const productList = ref([])


const addProduct = async () => {

  try {

    const uri = import.meta.env.VITE_APP_API_ENDPOINT

    const data = {
      imageMainProduct: imageProduct.value,
      productName: productName.value,
      price: price.value,
      categoryId: categoryId.value,
      productDescription: productDescription.value,
      
    }

    const config = {
      withCredentials: true,
    }

    const response = await axios.post(uri + '/products', data, config)
    const status = await response.status
    
    if (status == 201) {
      router.push("/dashboard") //dashboard de admin
    }

  } catch (error) {
    throw new Error('Error calling api: ' + error)
  }

}

// const handleFileUpload = (event) => {
//   imagenes.value = event.target.files;
// };
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

        <h1>Añadir nuevo producto</h1>
        <div class="divMain">

          <div class="image-main">
            <label>Imagen Principal</label>
            <input title=" " type="file" class="form-control-file" id="images">
          </div>
          <section>

            <div class="first-row">

              <div class="title-container">
                <label>Título</label>
                <input type="text" class="form-control" id="title" v-model="titulo" placeholder="Título">
              </div>

              <div class="price-container">
                <label>Precio</label>
                <input type="number" class="form-control" id="price" v-model="precio" placeholder="Precio">
              </div>

            </div>

            <div class="categories-container">
              <label>Categoría</label>
              <select id="categories" v-model="categories" placeholder="Seleccione categoría">
                <option value="home">Hogar</option>
                <option value="geek">Geek</option>
                <option value="litophany">Litofanía</option>
              </select>

            </div>

          </section>
        </div>

        <div class="images-container">
          <label for="file-upload" class="custom-file-upload">Imágenes</label>
          <input type="file" class="form-control-file" id="file-upload">
        </div>

        <div class="description-container">
          <label>Descripción</label>
          <textarea class="form-control" id="description" rows="3" v-model="description"
            placeholder="Descripción..."></textarea>
        </div>

        <div class="btns-actions">
          <button id="reset" @click="resetForm()">Borrar</button>
          <button  id="send" @click="addProduct()">Enviar</button>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
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

.image-main {
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
</style>