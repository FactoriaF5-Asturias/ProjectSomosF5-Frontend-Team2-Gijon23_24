<script setup>
import { ref } from 'vue';

const titulo = ref('');
const precio = ref('');
const categoria = ref('');
const imagenes = ref(null);
const descripcion = ref('');

const submitForm = () => {
 // lógica para manejar el envío del formulario
 console.log('Formulario enviado:', { titulo: titulo.value, precio: precio.value, categoria: categoria.value, imagenes: imagenes.value, descripcion: descripcion.value });
};

const handleFileUpload = (event) => {
 imagenes.value = event.target.files;
};
</script>

<template>

<form @submit.prevent="submitForm">
  <div class="titleForm">
        <h1>Añadir</h1>
  </div>

    <div class="form-row-1">
      <div class="form-group-1">
        <p>Título</p>
        <input type="text" class="form-control" id="title" v-model="titulo">
      </div>
      <div class="form-group-2">
        <p>Precio</p>
        <input type="number" class="form-control" id="price" v-model="precio">
      </div>
    </div>

    <div class="form-row-2">
      <p>Categoría</p>
      <select class="form-control" id="categorie" v-model="categorie" placeholder="Seleccione categoría">
        <option value="categorie1">Litofanía</option>
        <option value="categorie2">Hogar</option>
        <option value="categorie2">Geek</option>
      </select>
    </div>
    <div class="form-row-3">
      <P>Imágenes</P>
      <input type="file" class="form-control-file" id="images">
    </div>

    <div class="form-row-4">
      <P>Descripción</P>
      <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
    </div>
    <button type="submit" class="btn">Enviar</button>
 </form>

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');




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

   .form-row-1 {
    display: flex;
    gap: 2rem;
    width: 70%;
    margin-bottom: 1rem;
    input {
      border: 1px solid black;

    }
   }

   .form-group-1 {
    width: 70%;
    background-color: chartreuse;
    input {
      width: 100%;
      height: 2.5rem ;
      border-radius: 0.5rem;
    }
   }

   .form-group-2 {
    width: 30%;
    background-color: coral;
    input {
      width: 100%;
      height: 2.5rem ;
      border-radius: 0.5rem;
    }
   }
 
   .form-row-2 {
     display: flex;
     flex-direction: column;
     width: 70%;
     background-color: darksalmon;
     input {
      border: 1px solid black;
     width: 100%;
      height: 3.5rem ;
      border-radius: 0.5rem;
    }
  }

  .form-row-3 {
    background-color: cornflowerblue;
    input {
      border: 1px solid black;
     width: 100%;
      height: 3.5rem ;
      border-radius: 0.5rem;
    }
  }

  .form-row-4 {
    width: 100%;
    height: 10rem;
    background-color: darkgoldenrod;
    textarea {
     width: 100%;
      height: 9rem ;
      border-radius: 0.5rem;
      border: 1px solid black;
    }
  }



  h1 {
   font-family: "Poppins", sans-serif;
   font-size: 4rem;
   margin-top: 3rem;
   margin-bottom: 3rem;
   display: flex;
   justify-content: center;
  }

  .btn {
    background-color: #AE81D1;
    

  }




</style>