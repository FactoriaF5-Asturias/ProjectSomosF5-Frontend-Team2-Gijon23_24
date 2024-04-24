<script setup>
import { ref } from 'vue';
import { useAuthStore } from './../../../stores/AuthStore';

const authStore = useAuthStore();
const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const usernameCleaned = ref('');

function cleanUsername(email) {
    const cleaned = email.replace(/@.*/, "");
    usernameCleaned.value = cleaned;
}

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

cleanUsername(authStore.username);
</script>

<template>
  <div>
    <router-link to="/user/profile" v-if="authStore.userRole == 'ROLE_USER'">
      <img id="photo" src="/icons/icon-user.svg" alt="user icon">
      <p> {{ usernameCleaned }} </p>
    </router-link>
    <router-link to="/admin/profile" v-if="authStore.userRole == 'ROLE_ADMIN'">
      <img id="photo" src="/icons/icon-user.svg" alt="user icon">
      <p> {{ usernameCleaned }} </p>
    </router-link>
    
    <hr class="mobile">
    <button @click.prevent="userLogout()">
      <p class="mobile">Cerrar sesión</p>
      <img class="desk" src="/icons/log-out-icon.svg" alt="">
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
    height: 5rem;
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

a {
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem ;
  max-width: 18rem;

  img {
    height: 54px;
    border: 2px solid white;
    border-radius: 100%;
  }

  p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
}
}

a:hover{
  color: #fff;
  background-color: #3C3057;
}

button {
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    height: 3rem;
  }
}
.desk {
  display: none;
}
@media (max-width: 1000px) {
  
  .mobile {
    display: none;
  }

  .desk {
  display: block;
}

  a {
    img {
      height: 45px;
    }
  }
}
</style>