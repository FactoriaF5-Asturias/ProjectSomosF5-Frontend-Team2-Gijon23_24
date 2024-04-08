<script setup>
import AddForm from './AddForm.vue';
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
    <div class="btn-open">
    <button  @click="openAddForm"> + Añadir nuevo artículo</button>
    <AddForm v-if="showAddForm" @close="closeForm"/>
</div>
</template>

<style lang="scss" scoped>
.btn-open {
display: flex;
justify-content: end;
margin-top: 3rem;
margin-right: 4rem;
}

button {
    background-color: #AE81D1;
    color: white;
    border-radius: 1rem;
    padding: 1rem 2rem;
    
}

</style>
