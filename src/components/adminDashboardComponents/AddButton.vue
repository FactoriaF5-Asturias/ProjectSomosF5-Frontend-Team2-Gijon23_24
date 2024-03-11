<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToForm = () => {
 
  router.push('/add-event') 
}
</script>

<template>
    <v-btn class="d-flex" id="send"  @click="goToForm"> + Anadir nuevo artículo</v-btn>
</template>

<style lang="scss" scoped>

.v-btn {
    background-color: #AE81D1;
}

</style>