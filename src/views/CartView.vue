<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useCartStore } from '@/stores/CartStore';
import CartCard from './../components/payments/stripe/CartCard.vue';
import { useRouter } from 'vue-router';

const store = useCartStore();
const router = useRouter();

const countArticles = ref(0);
const totalPrice = ref(0);

const payWithStripe = () => {
    router.push('/stripe-checkout');
}

const productCounts = ref({});

watchEffect(() => {
    productCounts.value = {};

    countArticles.value = store.cart.length;
    totalPrice.value = store.cart.reduce((total, product) => total + product.price, 0);

    store.cart.forEach(product => {
        if (product.id in productCounts.value) {
            productCounts.value[product.id]++;
        } else {
            productCounts.value[product.id] = 1;
        }
    });
});

const uniqueProducts = computed(() => {
    const uniqueIds = [...new Set(store.cart.map(product => product.id))];
    return uniqueIds.map(id => store.cart.find(product => product.id === id));
});
</script>

<template>
    <body>
        <h1>Mi carrito</h1>
        <div class="container">
            <div id="products_content">
                <CartCard v-for="(product) in uniqueProducts" :key="product.id" :product="product" :count="productCounts[product.id]" />
            </div>
            <div id="payment">
                <p>Subtotal ({{ countArticles }} artículos)</p>
                <p id="price">{{ totalPrice.toFixed(2) }} €</p>
                <button @click="payWithStripe">Tramitar el pago</button>
            </div>
        </div>
    </body>
</template>

<style scoped lang="scss">
body {
    color: white;
    background-color: $primary-background;
}

.container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: $primary-background;
}
@media (max-width: 768px) {
    
}
h1 {
    margin-left: 4rem;
    font-size: 3rem;
}
#products_content {
    width: 70%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

#payment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 14rem;
    border-radius: 15px;
    padding: 2rem;
    right: 0;
    margin: 2rem;
    background-color: #2B2B2B;

    p {
        font-size: 2rem;
        font-weight: 200;
    }

    button {
        background-color: $primary-color;
        width: 100%;
        border-radius: 10px;
        height: 40%;
        font-size: 2rem;
    }
}
</style>
