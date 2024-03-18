<!-- <script setup>
import { useArticleStore } from "@/stores/article";
import { useRouter } from 'vue-router';
import { defineEmits } from 'vue';

const router = useRouter()
const store = useArticleStore()

store.getArticles()

const emit = defineEmits(['open-form']);

const editArticle = () => {
 emit('open-form');
};

const deleteArticle = async (id) => {
    const isDeleted = await store.deleteArticle(id)

    if (isDeleted) {
        store.articles.pop()
    }

}
</script>  -->

<template>
  <div>

    <button @click="editArticle">
      <img  src="/icons/editIcon.svg" />
    </button>

    <button @click="deleteArticle">
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