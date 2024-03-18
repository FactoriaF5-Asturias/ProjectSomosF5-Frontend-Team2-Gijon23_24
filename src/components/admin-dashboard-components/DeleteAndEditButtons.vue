 <script setup>
import EditForm from '@/components/admin-dashboard-components/EditForm.vue';
import { ref } from 'vue';
import { useProductStore } from "@/stores/product";
import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';

const router = useRouter()
const store = useArticleStore()

store.getArticles()

//abrir y cerrar formulario
let showEditForm = ref(false);

const openEditForm = () => {
  showEditForm.value = true;
};


const closeEditForm = () => {
  showEditForm.value = false;
};


//Borrar el producto
const deleteProduct = async (id) => {
    const isDeleted = await store.deleteProduct(id)

    if (isDeleted) {
        store.products.pop()
    }

}
</script>  

<template>
  <div>

    <button @click="openEditForm">
      <img  src="/icons/editIcon.svg" />
    </button>
    <EditForm v-if="showEditForm" @close="closeEditForm" />

    <button @click="deleteProduct(product.id)">
      <img src="/icons/deleteIcon.svg" /> 
    </button>

  </div>
</template>

<style lang="scss" scoped>

div {
    display: flex;
    gap:0.5rem;
}

img {
    width: 2.5rem;
    height: 2.5rem;
}

</style>