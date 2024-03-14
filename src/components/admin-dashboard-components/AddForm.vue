<script setup>
import { ref } from 'vue';

const props = defineProps({
  onClose: Function
});

const titulo = ref('');
const precio = ref('');
const categoria = ref('');
const imagenes = ref(null);
const descripcion = ref('');

const closeForm = () => {
  props.onClose();
}

const submitForm = () => {
 // lógica para manejar el envío del formulario
 console.log('Formulario enviado:', { titulo: titulo.value, precio: precio.value, categoria: categoria.value, imagenes: imagenes.value, descripcion: descripcion.value });
};

const handleFileUpload = (event) => {
 imagenes.value = event.target.files;
};
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
        <h1>Añadir</h1>

        <section>

          <div class="first-row">

            <div class="title-container">
              <p>Título</p>
              <input type="text" class="form-control" id="title" v-model="titulo" placeholder="Título">
            </div>

            <div class="price-container">
              <p>Precio</p>
              <input type="number" class="form-control" id="price" v-model="precio" placeholder="Precio">
            </div>

          </div>

          <div class="categories-container">
            <p>Categoría</p>
            <select id="categories" v-model="categories" placeholder="Seleccione categoría">
              <option value="litophany">Litofanía</option>
              <option value="home">Hogar</option>
              <option value="geek">Geek</option>
            </select>

          </div>

        </section>
  

        <div class="images-container">
          <p>Imágenes</p>
          <input type="file" class="form-control-file" id="images">
        </div>

        <div class="description-container">
          <p>Descripción</p>
          <textarea class="form-control" id="description" rows="3" v-model="description" placeholder="Descripción..."></textarea>
        </div>
    
        <button @click="send">Enviar</button>
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
  width: 90rem;
  display: flex;
}

.button-container {
  display:flex;
  justify-content: end;
  button {
    width: auto;
    background-color: aquamarine;
  }
}
 form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 600px; 
  margin: 0 auto; 
  padding: 2rem;
  border-radius: 1rem;
  background-color:beige; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
 }

.first-row {
  display: flex;
  gap: 2rem;
  width: 70%;
  margin-bottom: 1rem;
    input {
      border: 1px solid black;
    }
  }

.title-container {
  width: 70%;
  background-color: chartreuse;
    input {
      width: 100%;
      height: 3rem ;
      border-radius: 0.5rem;
    }
  }

.price-container {
  width: 30%;
  background-color: coral;
    input {
      width: 100%;
      height: 3rem ;
      border-radius: 0.5rem;
    }
  }
 
.categories-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 1rem;
  background-color: darksalmon;
}

select {
  width: 100%;
  height: 3rem ;
  border-radius: 0.5rem;
  border: 1px solid black;
}

.images-container {
  background-color: cornflowerblue;
  margin-bottom: 1rem;
  input {
    border: 1px solid black;
    width: 100%;
    height: 5rem ;
    border-radius: 0.5rem;
  }
}

.description-container {
  width: 100%;
  height: 15rem;
  background-color: darkgoldenrod;
  textarea {
    width: 100%;
    height: 12rem ;
    border-radius: 0.5rem;
    border: 1px solid black;
  }
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 4rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

button {
  background-color: #AE81D1;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  width: 8rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 0 auto;
}

</style>