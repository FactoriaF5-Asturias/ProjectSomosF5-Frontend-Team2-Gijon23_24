<script setup>
import SuccessPopup from './SuccessPopup.vue';
import ErrorPassword from './ErrorPassword.vue';
import {  ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  onClose: Function
});

const closeForm = () => {
  props.onClose();
}

const emailInput = ref('');
const usernameInput = ref('');
const passwordInput = ref('');
const confirmationInput = ref('');

const message = ref('');
const successVisible = ref(false);
const errorVisible = ref(false);

const passwordConfirmation = () => {
  if (passwordInput.value === confirmationInput.value) {
    message.value = "Las contraseñas coinciden.";
  } else {
    message.value = "Las contraseñas no coinciden.";
  }
}

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const submitForm = async () => {
  try {
    if (passwordInput.value !== confirmationInput.value) {
      successVisible.value = false;
      errorVisible.value = true;
      setTimeout(() => {
        errorVisible.value = false;
      }, 4000);
      return;
    }

    const encodedPassword = btoa(passwordInput.value);

    const response = await axios.post(`${uri}/users/register`, {
      username: usernameInput.value,
      password: encodedPassword,
      email: emailInput.value,
    });

    if (response.status === 200) {
      console.log('El usuario se ha registrado correctamente.');
      successVisible.value = true;
      setTimeout(() => {
        successVisible.value = false;
        closeForm();
      }, 10000);
    } else {
      console.log('Error al registrar el usuario.');
    }
  } catch (error) {
    console.error(error);
  }
};

</script>

<template>
  <div>
    <SuccessPopup :show="successVisible" />
    <ErrorPassword :show="errorVisible" />

    <div class="modal" @click="closeForm">
        <div class="modal_container" @click.stop>

          <section>
            <img src="/images/logo.svg" alt="">
            <img src="/images/PrintGo.svg" alt="">
            <p>Haciendo tangible lo inimaginable.</p>
          </section>

          <section class="form_container">
            <div id="button_container">
              <button @click.stop="closeForm">
                <img src="/icons/icon-cross.svg" alt="cross icon">
              </button>
            </div>
            <form @submit.prevent="submitForm">
                <h1>¡Unete a nosotros!</h1>
                <div>
                  <div class="input_box">
                      <label>Email:</label>
                      <input type="email" placeholder="correo electrónico" v-model="emailInput" required>
                  </div>
                  <div class="input_box">
                      <label>Nombre de usuario:</label>
                      <input type="text" placeholder="nombre de usuario" v-model="usernameInput" required>
                  </div>
                  <div class="input_box">
                      <label>Contraseña:</label>
                      <input type="password" placeholder="contraseña" v-model="passwordInput" required>
                  </div>
                  <div class="input_box">
                      <label>Confirme la contraseña:</label>
                      <input type="password" placeholder="confirme la contraseña" v-model="confirmationInput" @input="passwordConfirmation" required>
                      <span>{{ message }}</span>
                  </div>
                  <div id="terms">
                    <input type="checkbox" name="terms" required/>
                    <label for="terms">Acepto los términos y condiciones</label>
                  </div>
                  <div class="submit_container">
                    <button type="submit">Enviar</button>
                  </div>
                </div>
            </form>
          </section>
          
        </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
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

section {
  background-color: white;
  width: 50%;
  border-radius: 0 10px 10px 0;
}

section:first-child {
  background-color: $primary-background;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  img {
    width: 60%;
  }
  p {
    color: $light-font;
    font-size: 2rem;
    font-weight: 300;
  }
}

.form_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    width: 100%;
    display: flex;
    justify-content: end;
      
    button {
      margin: 2rem 2rem 0 0;
    }
    img {
      width: 2.5rem;
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  button {
    color: white;
    background-color: $primary-color;
    height: 3.8rem;
    text-align: center;
    width: 15rem;
    border-radius: 10px;
    font-size: 1.6rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
  }
}

.input_box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.3rem;
  }
  input {
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border: 1px solid gray;
    border-radius: 5px;
  }
}
#terms {
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
}
</style>