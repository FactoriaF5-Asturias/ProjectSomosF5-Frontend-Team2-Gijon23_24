<script setup>
import { useAuthStore } from '@/stores/AuthStore';

const props = defineProps({
    show: Boolean
});

const authStore = useAuthStore();
const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

const emit = defineEmits(['cancel']);

const refuse = () => {
    emit('cancel');
};

const accept = () => {
    userLogout()
    router.push('/');
};

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
    <div v-if="props.show" class="popup-container" @click.stop>
        <div class="confirmation-content">
            <h1>¿Seguro que desea cerrar su sesión?</h1>
            <section>
                <button @click="accept">Sí</button>
                <button @click="refuse">No</button>
            </section>
        </div>
    </div>
</template>


<style scoped lang="scss">
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.209);
  justify-content: center;
  align-items: center;
}

.confirmation-content {
  max-width: 30rem;
  color: black;
  height: 20rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  z-index: 9999;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
section {
    display: flex;
    justify-content: space-between;
}

button {
    background-color: $primary-color;
    width: 40%;
    border-radius: 7px;
    color: white;
    height: 4rem;
}

</style>