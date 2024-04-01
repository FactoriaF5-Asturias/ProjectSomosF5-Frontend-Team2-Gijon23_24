<script setup>

</script>

<template>
    <form class="formulario">
       <div class="form-group">
         <label for="nombre">Nombre</label>
         <input type="text" id="nombre" v-model="nombre" />
       </div>
       <div class="form-group">
         <label for="email">Email</label>
         <input type="email" id="email" v-model="email" />
       </div>
       <div class="form-group">
         <label for="direccion">Dirección</label>
         <input type="text" id="direccion" v-model="direccion" />
       </div>
       <div class="form-group">
         <label for="provincia">Provincia</label>
         <input type="text" id="provincia" v-model="provincia" />
       </div>
       <div class="form-group">
         <label for="cp">C.P.</label>
         <input type="text" id="cp" v-model="cp" />
       </div>
       <div class="form-group">
         <label for="ciudad">Ciudad</label>
         <input type="text" id="ciudad" v-model="ciudad" />
       </div>
    </form>
   </template>

   <style lang="scss" scoped>
   
   .formulario {
    width: 50rem;
    margin: 0 auto;
   }
   
   .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
   }
   
   .form-group label {
    margin-bottom: 0.5rem;
   }
   
   .form-group input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
   }
   
   /* Estilos para los campos de C.P. y ciudad en la misma fila */
   .form-group:nth-child(4),
   .form-group:nth-child(5) {
    display: flex;
    justify-content: space-between;
    width: 100%;
   }
   
   .form-group:nth-child(4) input,
   .form-group:nth-child(5) input {
    width: 45%; /* Ajusta el ancho para que la suma total sea 50rem */
   }

</style>
   
   









  
  

