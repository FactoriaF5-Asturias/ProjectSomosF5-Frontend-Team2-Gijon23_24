<script setup>
import axios from 'axios';
import { useAuthStore } from './../../../stores/AuthStore';

const authStore = useAuthStore();

const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

// const userLogout = async () => {
//     try {
//         await axios.get("http://localhost:8080/api/v1/logout", {}, {withCredentials: true});
//         authStore.userRole = '';
//         authStore.username = '';
//         authStore.isAuthenticated = false;
//         console.log('ha funcionado adioos!!!!!!!', authStore.userRole, authStore.username, authStore.isAuthenticated);
//     } catch (error) {
//         console.error('Ha ocurrido un error durante el logout: ', error);
//         console.log(authStore.userRole, authStore.username, authStore.isAuthenticated);
        
//     }
// };

async function userLogout() {

try {
    const response = await fetch(uri + '/logout', {
        method: 'GET',
        credentials: 'include'
    });
    console.log("Logout successfull"); 
    authStore.userRole = '';
    authStore.username = '';
    authStore.isAuthenticated = false;
    return response.status
} catch (error) {
    throw new Error('Error occured during API fetch GET request while logout')
}

}

</script>

<template>
  <div>
    <router-link to="/user/profile">
    <img id="photo" src="/icons/icon-user.svg" alt="user icon">
      <p> {{ authStore.username }} </p>
    </router-link>
    <hr>
    <button @click.prevent="userLogout()">Cerrar sesión</button>
  </div>
</template>

<style scoped lang="scss">
div {
    height: 5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    gap: 1rem;
}
hr {
  transform: rotate(90deg);
  width: 4rem;
}
img {
  height: 54px;
  border: 2px solid white;
  border-radius: 100%;
}
a{
  color: #fff;
  background-color: #686868;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem ;
}
a:hover{
  color: #fff;
  background-color: #3C3057;
}
</style>