<script setup>
import Card from './card/Card.vue';
import { ref } from 'vue';
import {useProductsStore} from "./../stores/productStore";

const productStore = useProductsStore();
const products = ref([]) 


const getProducts = async ()=> {
    try {
    await productStore.fetchProducts();
    
    products.value = productStore.products.reverse()
    .slice(0, 15);

} catch (error) {
    console.error("No se consiguieron los datos:",error)
}}
getProducts();

</script>

<template>
    <div>
        <h1>Novedades</h1>
        <v-slide-group prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" show-arrows class="slideGroup">
            <v-slide-group-item v-for="product in products" :key="product.id" class="card-container">
                <div class="slideCard">
                    <Card :product="product"/>
                </div>
            </v-slide-group-item>
        </v-slide-group>
    </div>
</template>

<style lang="scss" scoped>
.slideGroup {
    color: white;
    display: flex;
}

.slideCard {
    display: flex;
    align-items: center;
    padding: 1rem;
}

div {
    font-family: "Poppins", sans-serif;
    background-color:$primary-background;
    color: white;
    font-size: 3rem;
    padding-top: 1rem;

    h1 {
        margin-left: 6rem;
        margin-bottom: 0.5rem;
        margin-top: 3rem;
        font-weight: 200;
    }
}
</style> 