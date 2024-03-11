<!-- 
<script setup>
import { useArticleStore } from "@/stores/article";
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useArticleStore()

store.getArticles()

const deleteArticle = async (id) => {
    const isDeleted = await store.deleteArticle(id)

    if (isDeleted) {
        store.articles.pop()
    }

}

const editArticle = async (id) => {
    router.push('/edit-article')

  
}
</script>  -->

<template>
    <button class="actionBtn"  @click="editArticle(article.id)">Editar</button>
    <button class="actionBtn"  @click="deleteArticle(article.id)">Borrar</button>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.actionBtn {
    background-color: #AE81D1;
    font-family: "Poppins", sans-serif;
    color: white;
    margin: 5px;
    border-radius: 2px;
}

</style>