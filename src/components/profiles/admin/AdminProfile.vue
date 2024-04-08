<script setup>

</script>

<template>

  <body>

    <div class="user-profile">
      <h1>PERFIL DEL ADMINISTRADOR</h1>
    </div>

    <div class=" modal-container">

      <div class="logo-container">
        <img class="image-logo" src="/images/logo.svg" alt="logo-profile">
       <h2>Bienvenido Andrés</h2> 
    </div>

      <form @submit.prevent="submitForm">

        <div class="input-box">
          <label>Contraseña Antigüa</label>
          <input type="text" id="old-password" v-model="oldPassword">
        </div>

        <div class="input-box">
          <label>Contraseña</label>
          <input type="text" id="password" v-model="password">
        </div>

        <div class="input-box">
          <label>Confirma tu contraseña</label>
          <input type="text" id="confirm" v-model="confirm">
        </div>

        <div class="btns-container">
          <button id="cancel" @click="cancelData()">Cancelar</button>
          <button id="save" @click="saveData()">Guardar</button>
        </div>

      </form>

    </div>
  </body>

</template>

<style lang="scss" scoped>

body {
  background-color: #CBABE4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70rem;
  width: 60rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  background-color: white;
  position: sticky;
  max-height: 70rem;
  margin-bottom: 10rem;
}

.user-profile {
  display: flex;
  justify-content: center;
  margin: 20rem 0 5rem 0;
}

h1 {
  font-weight: 600;
  text-align: center;
  font-size: 5rem;
  color: $primary-background;
  font-family: "Poppins", sans-serif;
}

.logo-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.image-logo {
  height: 13rem;
  
}

h2 {
    font-family: "Poppins", sans-serif; 
    color: #3C3057; 
    font-size: 4rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 8rem;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
}

.input-box {
  display: flex;
  flex-direction: column;

  label {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 40rem;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
  }
}

.btns-container {
  margin-top: 2rem;
  display: flex;
  gap: 4rem;

  button {
    background-color: $primary-color;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: white;
    border-radius: 0.5rem;

    width: 12rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

   button:hover {
     background-color: #3C3057;
   }

   button:active {
     transform: scale(1.1);
   }
}
</style>