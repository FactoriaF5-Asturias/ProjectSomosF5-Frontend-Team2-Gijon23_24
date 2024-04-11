<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { onMounted, ref} from 'vue';
import { useRouter } from "vue-router";
import axios from "axios";
import axiosRetry from 'axios-retry';
	
const router = useRouter();
const store = useAuthStore();
const profileDetails = ref(null);

const id = ref(Number)
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const numberPhone = ref('');
const address = ref('');
const postalCode = ref('');
const city = ref('');
const province = ref('');

axiosRetry(axios, {
 retries: 3, 
 retryDelay: (retryCount) => {
    return retryCount * 1000; 
 },
 retryCondition: (error) => {
    return error.code === 'ERR_NETWORK';
 },
});

async function getProfileData(email) {
let content = ref('')

	try {
		const response = await axios.get(
      `http://localhost:8080/api/v1/profiles/getByEmail/${email}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
    );
    console.log(response.data)
    content = response.data
    console.log(content)
 
    id.value = response.data.id;
    firstName.value = response.data.firstName;
    lastName.value = response.data.lastName;
    numberPhone.value = response.data.numberPhone;
    address.value = response.data.address;
    postalCode.value = response.data.postalCode;
    city.value = response.data.city;
    province.value = response.data.province;
	} catch (error) {
		console.error("Error al conseguir los datos del producto", error);
		throw error;
	}

  return { content }
}

console.log(store.username)

onMounted(() => {
  getProfileData(store.username);
});

const cancelData = () => {
  	  firstName.value = "";
     lastName = '';
     numberPhone.value = "";
     address.value = "";
     postalCode.value = "";
     city.value = "";
     province.value = "";  
    };

 const saveData = async () => {
    // const uri = import.meta.env.VITE_APP_API_ENDPOINT;

      try {
        const data = {
          firstName: firstName.value,
          lastName: lastName.value,
          numberPhone: numberPhone.value,
          address: address.value,
          postalCode: postalCode.value,
          city: city.value,
          province: province.value,
        };

      // const config = {
      //     withCredentials: true,
      // };

      const response = await axios.put(`http://localhost:8080/api/v1/profiles/${id}`, data, {
        withCredentials: true,
      });
      console.log(response);

        if (response.status === 200) {
          location.reload();
          console.log(response.data);
        } else {
          console.error("Error al editar el perfil");
        }

     } catch (error) {
      if (!error.response) {
        console.error('Error de red:', error);
      } else {
        console.error('Error de respuesta:', error.response);
      }
    }
};

</script>

<template>

  <body>

      <div class="user-profile">
        <h1>PERFIL DE USUARIO</h1>
      </div>

      <div class=" modal-container">

        <div class="logo-container">
          <img class="image-logo" src="/images/logo.svg" alt="logo-profile">
        </div>

        <form @submit.prevent="submitForm">
          <p>{{ id }}</p>

          <div class="input-box">
            <label>Nombre</label>
            <input type="text" id="firstName" v-model="firstName"> 
          </div>

          <div class="input-box">
            <label>Apellidos</label>
            <input type="text" id="lastName" v-model="lastName">
          </div>

          <div class="input-box">
            <label>Teléfono</label>
            <input type="text" id="numberPhone" v-model="numberPhone">
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
            <button id="save" @click="saveData">Guardar</button>
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
}

.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85rem;
  width: 60rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  background-color: white;
  position: sticky;
  max-height: 90rem;
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
  margin-top: 2rem;
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
    font-size: 1.8rem;
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
  margin-top: 2rem;
  display: flex;
  gap: 4rem;

  button {
    background-color: $primary-color;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    color: white;
    border-radius: 0.5rem;

    width: 12rem;
    height: 4rem;
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