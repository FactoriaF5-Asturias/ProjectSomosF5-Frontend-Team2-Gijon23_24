<script setup>

</script>

<template>
  <div class="modal">
    <div class="user-profile">
      <h1>PERFIL DE USUARIO</h1>
    </div>

    <div class=" modal-container">

      <div class="logo-container">
        <img class="image-logo" src="/images/logo.svg" alt="logo-profile">
      </div>

      <form @submit.prevent="submitForm">

        <div class="input-box">
          <label>Nombre y Apellidos</label>
          <input type="text" id="name" v-model="name">
        </div>

        <div class="input-box">
          <label>E-Mail</label>
          <input type="text" id="email" v-model="email">
        </div>

        <div class="input-box">
          <label>Teléfono</label>
          <input type="text" id="phone" v-model="phone">
        </div>

        <div class="input-box">
          <label>Dirección</label>
          <input type="text" id="address" v-model="address">
        </div>

        <div class="input-box-2">
          <label>C. P.</label>
          <input type="text" id="postal-code" v-model="postalCode">
          <label>Ciudad</label>
          <input type="text" id="city" v-model="city">
        </div>


        <div class="input-box">
          <label>Provincia</label>
          <input type="text" id="province" v-model="province">
        </div>

        <div class="btns-container">
          <button id="cancel" @click="cancelData()">Cancelar</button>
          <button id="save" @click="saveData()">Guardar</button>
        </div>
      </form>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.modal {
  background-color: #CBABE4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80rem;
  width: 60rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  background-color: white;
}

.user-profile {
  display: flex;
  justify-content: center;
  margin: 3rem 0 5rem 0;
}

h1 {
  font-weight: 600;
  text-align: center;
  font-size: 4rem;
  color: $primary-background;
  font-family: "Poppins", sans-serif;
}

.logo-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

.image-logo {
  height: 13rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.second-row {
  display: flex;
  flex-direction: row;
}

.input-box-2 {

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 2rem;

  label {
    font-size: 2rem;
    margin-top: 1rem;
    margin-right: 1rem;

  }

  #postal-code {
    width: 10rem;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border: 1px solid gray;
    border-radius: 0.5rem;

  }

  #city {
    width: 15rem;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
  }
}

.btns-container {
  margin-top: 4rem;
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