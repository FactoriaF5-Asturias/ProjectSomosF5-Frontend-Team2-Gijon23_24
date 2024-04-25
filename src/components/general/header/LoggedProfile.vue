<script setup>
import { ref } from 'vue';
import { useAuthStore } from './../../../stores/AuthStore';
import LogOutAlert from '@/components/alerts/LogOutAlert.vue';

const authStore = useAuthStore();

const usernameCleaned = ref('');
const ConfirmationLogOutAlert = ref(false);

const showConfirmation = () => {

  ConfirmationLogOutAlert.value = true;
}

const refuse = () => {
  ConfirmationLogOutAlert.value = false;
};

function cleanUsername(email) {
    const cleaned = email.replace(/@.*/, "");
    usernameCleaned.value = cleaned;
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
    <button @click="showConfirmation">
      <p class="mobile">Cerrar sesión</p>
      <img class="desk" src="/icons/log-out-icon.svg" alt="">
    </button>

    <LogOutAlert :show="ConfirmationLogOutAlert" :product="product" @cancel="refuse"/>
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
  transition: all 0.3s ease-in-out;

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

a:hover, button:hover{
  color: #fff;
  background-color: #484848;
}

button {
  height: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease-in-out;

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