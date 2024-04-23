<script setup>
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { ref } from 'vue';

let showRegisterForm = ref(false);
let showLoginForm = ref(false);

const openRegisterForm = () => {
  showRegisterForm.value = true;
  showLoginForm.value = false;
};

const openLoginForm = () => {
  showLoginForm.value = true;
  showRegisterForm.value = false;
};

const closeForm = () => {
  showRegisterForm.value = false;
  showLoginForm.value = false;
};
</script>

<template>
  <div class="buttons_container">
    <div>
      <button @click="openLoginForm()">
        Iniciar sesión
      </button>
  
      <button @click="openRegisterForm()">
        Registrarse
      </button>
    </div>

    <div class="forms_container">
      <RegisterForm v-if="showRegisterForm" @close="closeForm"/>
      <LoginForm v-if="showLoginForm" @close="closeForm"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  gap: 1rem;
}
button {
    border: 2px solid $primary-color;
    height: 5rem;
    text-align: center;
    border-radius: 5px;
    padding: 0 2rem;
    font-size: 2rem;
    color: $primary-color;
    transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: $primary-color;
  color: $light-font;
}
.buttons_container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttons_container {
  position: relative;
}

</style>