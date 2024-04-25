<script setup>
import TermsPopup from './../../alerts/TermsPopup.vue'
import SuccessPopup from './SuccessPopup.vue'
import ErrorPassword from './ErrorPassword.vue'
import { ref } from 'vue';
import axios from 'axios';

const props = defineProps({
  onClose: Function,
  loginClick: Function
});

const emailInput = ref('');
const usernameInput = ref('');
const passwordInput = ref('');
const confirmationInput = ref('');
const message = ref('');
const successVisible = ref(false);
const errorVisible = ref(false);

const acceptedTerms = ref(false);
const termsPopupVisible = ref(false);

const closeForm = () => {
  props.onClose();
};

const passwordConfirmation = () => {
  if (passwordInput.value === confirmationInput.value) {
    message.value = "Las contraseñas coinciden.";
  } else {
    message.value = "Las contraseñas no coinciden.";
  }
};

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const submitForm = async () => {
  try {
    if (!acceptedTerms.value) {
      return;
    }

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

const toggleTermsPopup = () => {
  termsPopupVisible.value = !termsPopupVisible.value;
};

const LoginForm = () => {
  props.loginClick();
};
</script>

<template>
  <div>

    
    <SuccessPopup :show="successVisible" />
    <ErrorPassword :show="errorVisible" />
    
    <div class="modal" @click="closeForm">
      <TermsPopup v-if="termsPopupVisible" />
      <div class="modal_container" @click.stop>
        
        
        <section id="welcome_image">
                <div id="images_container">
                  <img src="/images/logo.svg" alt="">
                  <img src="/images/PrintGo.svg" alt="">
                  <p>Haciendo tangible lo inimaginable.</p>
                  <button @click="LoginForm">¿Ya tienes una cuenta?</button>
                </div>
          </section>

          <section class="form_container">
            <div id="button_container">
              <button @click.stop="closeForm">
                <img src="/icons/icon-cross.svg" alt="cross icon">
              </button>
            </div>
            <form @submit.prevent="submitForm">
                <h1>¡Unete a nosotros!</h1>
                <article>
                  <div class="input_box">
                      <label>Email:</label>
                      <input type="email" placeholder="email" v-model="usernameInput" required>
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
                    <input type="checkbox" @click="toggleTermsPopup" required/>
                    <label for="terms">Acepto los términos y condiciones</label>
                  </div>
                  <div class="submit_container">
                    <button type="submit">Enviar</button>
                  </div>
                </article>
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
  height: 90vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;

  .modal_container {
    height: 60rem;
    width: 90rem;
    display: flex;

    section {
      background-color: white;
      width: 50%;
      border-radius: 10px 0 0 10px;
    }

    #welcome_image {
      background-color: $primary-background;
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10%;
      flex-direction: column;
      gap: 3rem;

      #images_container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        font-size: 2rem;

        img {
          width: 40%;
        }

        p {
          color: $light-font;
          font-weight: 300;
        }

        button {
          padding: 1.3rem;
          border-radius: 10px;
          color: white;
          background-color: $primary-color;
        }
      }
    }

    .form_container {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 40%;
      flex-direction: column;
      gap: 3rem;
      height: 100%;
      width: 100%;

      h1 {
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
      }
      
      article {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          
          button {
            color: white;
            padding: 1.3rem;
            background-color: $primary-color;
            text-align: center;
            width: 15rem;
            border-radius: 10px;
            font-size: 2rem;
          }
        } 
      }
    }

    .input_box {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin: auto;
      width: fit-content;

      label {
        width: 100%;
        font-size: 1.3rem;
      }

      input {
        padding: 0.5rem 1rem;
        font-size: 1.8rem;
        border: 1px solid gray;
        border-radius: 5px;
      }
    }

    #button_container {
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
}

#terms {
  margin: auto;
  width: fit-content;
  flex-direction: row;
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
}


@media (max-width: 1000px) {
  .modal .modal_container {
    height: 90vh;
    width: 100vw;
    flex-direction: column-reverse;
    background-color: white;

    section {
      width: 100%;
      height: 50%;
      border-radius: 0;
    }

    #welcome_image {
      gap: 0;
      justify-content: center;
      border-radius: 10px 10px 0 0;
      padding-bottom: 0;
      
      #images_container {
        justify-content: space-between;
        height: 80%;

        img {
          width: 15rem;
        }
      }
    }
  }
  .modal .modal_container .form_container {
    gap: 0;
  }
}
</style>