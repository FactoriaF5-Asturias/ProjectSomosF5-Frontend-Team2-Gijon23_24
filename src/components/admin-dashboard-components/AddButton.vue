<script setup>
import AddForm from '@/components/admin-dashboard-components/AddForm.vue'
import { ref } from 'vue';

let showAddForm = ref(false);

const openAddForm = () => {
  showAddForm.value = true;
};



const closeForm = () => {
  showAddForm.value = false;
};
</script>

<template>
    <div>
    <button  @click="openAddForm"> + Añadir nuevo artículo</button>
    <AddForm v-if="showAddForm" @close="closeForm"/>
</div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

button {
    background-color: #AE81D1;
    font-family: "Poppins", sans-serif;
    color: white;
    border-radius: 1rem;
    padding: 1rem 2rem;
}

</style>
