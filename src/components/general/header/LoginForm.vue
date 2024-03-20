<script setup>
import { ref } from 'vue'
import axios from 'axios';

const props = defineProps({
  onClose: Function
});

const closeForm = () => {
  props.onClose()
}

const uri = 'http://localhost:8080/api/v1';

const username1 = ref('');
const password1 = ref('');

console.log(username1.value)
console.log(password1.value)

const submitForm = async () => {
      try {
        const response = await axios.get(`${uri}/login`, {
          auth: {
            username: username1.value,
            password: password1.value
          },
          withCredentials: true
        },
        );
        const data = response.data;
        console.log(data)
        success.value = true;
        return data;
      } catch (error) {
        console.error(error);
      }
};

</script>

<template>
  <div>
    
    <div class="modal" @click="closeForm">
        <div class="modal_container" @click.stop>
          <section class="form_container">
                <form @submit.prevent="submitForm">
                    <h1>¡Bienvenido!</h1>
                    <div>
                      <div class="input_box">
                          <label>Nombre de usuario:</label>
                          <input v-model="username1" type="text" placeholder="nombre de usuario" required>
                      </div>
                      <div class="input_box">
                          <label>Contraseña:</label>
                          <input v-model="password1" type="password" placeholder="contraseña" required>
                          <a href="">¿has olvidado tu contraseña?</a>
                      </div>
                      <div class="submit_container">
                          <button type="submit" >Enviar</button>
                      </div>
                    </div>
                </form>
            </section>
    
            <section id="welcome_image">
                <div id="button_container">
                  <button @click.stop="closeForm">
                    <img src="/icons/icon-cross.svg" alt="cross icon">
                  </button>
                </div>
                <div id="images_container">
                  <img src="/images/logo.svg" alt="">
                  <img src="/images/PrintGo.svg" alt="">
                  <p>Haciendo tangible lo inimaginable.</p>
                </div>
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
  border-radius: 10px 0 0 10px;
}

#welcome_image {
  background-color: $primary-background;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

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

  #images_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    img {
    width: 60%;
    }
    p {
      color: $light-font;
      font-size: 2rem;
      font-weight: 300;
      font-family: "Poppins", sans-serif;
    }
  }
}

.form_container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

form {
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    button {
    color: white;
    background-color: $primary-color;
    height: 3.8rem;
    text-align: center;
    width: 15rem;
    border-radius: 10px;
    font-size: 1.6rem;
  }
  }

  h1 {
    font-weight: 600;
    text-align: center;
    font-size: 3rem;
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
</style>../../../stores/AuthStore