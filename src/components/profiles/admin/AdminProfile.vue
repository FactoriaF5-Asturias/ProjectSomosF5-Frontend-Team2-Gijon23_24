<script setup>
import SuccessPopup from '@/components/general/header/SuccessPopup.vue';
import ErrorPassword from '@/components/general/header/ErrorPassword.vue';
import SuccessChangePassword from '@/components/general/header/SuccessChangePassword.vue';
import ErrorChangePassword from '@/components/general/header/ErrorChangePassword.vue';

import { ref } from 'vue';
import axios from 'axios';

const newPassword = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);

const successVisible = ref(false);
const successChangePasswordVisible = ref(false);
const errorPasswordVisible = ref(false);
const errorChangePasswordVisible = ref(false);
const errorMessage = ref('');

const passwordConfirmation = () => {
  if (newPassword.value === confirmPassword.value) {
    successVisible.value = true;
    erroPasswordVisible.value = false;
    setTimeout(() => {
      successVisible.value = false;
    }, 10000);

  } else {
    errorMessage.value = "Las contraseñas no coinciden";
    errorPasswordVisible.value = true;
    successVisible.value = false;
    setTimeout(() => {
      errorPasswordVisible.value = false;
    }, 10000);
  }
};
//     errorMessage.value = true;
//     successVisible.value = false;
//     setTimeout(() => {
//       errorVisible.value = false;
//     }, 10000);
//   }
// }

// const uri = import.meta.env.VITE_API_ENDPOINT_USERS;


const changePassword = async () => {
  try {
    if (newPassword.value !== confirmPassword.value) {
      errorPasswordVisible.value = true;
      errorMessage.value = "Las contraseñas no coinciden";

      // successVisible.value = false;
      // errorVisible.value = true;
      setTimeout(() => {
        errorPasswordVisible.value = false;
      }, 5000);
      return;
    }

    const encodedPassword = btoa(newPassword.value);

    const data = {
      password: newPassword.value
    }
    const credentials = {
      withCredentials: true
    }
    const response = await axios.put(`http://localhost:8080/api/v1/users/updatePassword/1`, data, credentials);

    console.log(response)

    if (response.status === 202) {
      successChangePasswordVisible.value = true;
      setTimeout(() => {
        successChangePasswordVisible.value = false;
        clearFormFields();
      }, 10000);
    } else {
      errorChangePasswordVisible.value = true;
      setTimeout(() => {
        errorChangePasswordVisible.value = false;
      }, 10000);
    }
  } catch (error) {
    console.error(error);
  }
};

const cancelData = () => {
  newPassword.value = "";
  confirmPassword.value = "";
};

const clearFormFields = () => {
  newPassword.value = "";
  confirmPassword.value = "";
};

//      if (response.status === 202) {
//        console.log('El cambio de contraseña se ha realizado con éxito.');
//        successChangePasswordVisible.value = true;
//        setTimeout(() => {
//         successChangePasswordVisible.value = false;
//          closeForm();
//        }, 10000);
//      } else {
//        console.log('Error al realizar el cambio de contraseña.');
//        errorChangePasswordVisible.value = true; 
//        setTimeout(() => {
//          errorChangePasswordVisible.value = false;
//        }, 10000);
//      }
//      }

//   } catch (error) {
//     console.error(error);
//   }
// };

// const cancelData = () => {
//   newPassword.value = "";
//   confirmPassword.value = "";
// };

</script>

<template>

  <body>
    <div>

  <!-- Alerta de éxito cuando las contraseñas coinciden -->
  <SuccessPopup :show="successVisible" message="Las contraseñas coinciden" />

<!-- Alerta de error cuando las contraseñas no coinciden -->
<ErrorPassword :show="errorPasswordVisible" :message="errorMessage" @close="errorPasswordVisible = false" />

<!-- Alerta de éxito cuando se cambia la contraseña con éxito -->
<SuccessChangePassword :show="successChangePasswordVisible" message="El cambio de contraseña se ha realizado con éxito" />

<!-- Alerta de error al cambiar la contraseña -->
<ErrorChangePassword :show="errorChangePasswordVisible" message="Error al cambiar las contraseñas" @close="errorChangePasswordVisible = false" />


      <!-- <SuccessPopup :show="successVisible" message= "Las contraseñas coinciden" />
      <ErrorPassword :show="errorVisible" :message= "Las contraseñas no coinciden" @close="errorVisible = false" />
      <SuccessChangePassword :show="successVisible" message= "El cambio de contraseña se ha realizado con éxito" />
      <ErrorPassword :show="errorVisible" :message= "Error al cambiar las contraseñas" @close="errorVisible = false" /> -->


      <div class="user-profile">
        <h1>PERFIL DEL ADMINISTRADOR</h1>
      </div>

      <div class=" modal-container">

        <div class="logo-container">
          <img class="image-logo" src="/images/logo.svg" alt="logo-profile">
          <h2>Bienvenido Andrés</h2>
        </div>

        <form @submit.prevent="changePassword">

          <div class="input-box">
            <label for="newPassword">Contraseña</label>
            <input type="password" id="newPassword" v-model="newPassword" required>
          </div>

          <div class="input-box">
            <label for="confirmPassword">Confirmar Contraseña</label>
            <input :type="showPassword ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword"
              @input="passwordConfirmation" required>
          </div>

          <div class="check-box">
            <input type="checkbox" id="showPassword" v-model="showPassword">
            <label for="showPassword">Mostrar Contraseña</label>
          </div>

          <div class="btns-container">
            <button id="cancel" @click="cancelData()">Cancelar</button>
            <button type="submit" id="save">Guardar</button>
          </div>

        </form>



      </div>
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

.check-box {
  display: flex;
  flex-direction: row;
  gap: 1rem;

}

#showPassword {
  height: 2rem;
  width: 2rem;
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