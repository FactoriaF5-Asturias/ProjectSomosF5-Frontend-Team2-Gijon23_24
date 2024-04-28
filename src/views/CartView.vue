<script setup>
import { ref, watchEffect, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/CartStore';
import CartCard from './../components/payments/stripe/CartCard.vue';
import { useRouter } from 'vue-router';

const store = useCartStore();
const router = useRouter();

const countArticles = ref(0);
const totalPrice = ref(0);

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

const payWithStripe = () => {
    if (Object.keys(productCounts.value).length > 1) {
        router.push('/stripe-checkout');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const uniqueProducts = computed(() => {
    const uniqueIds = [...new Set(store.cart.map(product => product.id))];
    return uniqueIds.map(id => store.cart.find(product => product.id === id));
});

onMounted(() => {
    scrollToTop();
});
</script>

<template>
    <body>
        <div>

            <h1>Mi carrito</h1>
            <hr>
            <div class="container">
                <div id="products_content">
                    <CartCard v-if="uniqueProducts.length" v-for="(product) in uniqueProducts" :key="product.id" :product="product" :count="productCounts[product.id]" />
                    <span v-if="!uniqueProducts.length">
                <img src="/icons/warning-icon.svg" alt="warning icon">
                <p>"Aún no has añadido productos a tu carrito"</p></span>
                </div>
                
                <div id="payment">
                    <h2>Subtotal ({{ countArticles }} artículos)</h2>
                    <p id="price">{{ totalPrice.toFixed(2) }} €</p>
                    <button @click="payWithStripe">Tramitar el pago</button>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped lang="scss">
body {
    padding: 4rem 0;
    background-color: $primary-background;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;

    > div {
      width: 85%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      font-weight: 200;
      font-family: "Poppins", sans-serif;
    }
}

.container {
    display: grid;
    grid-template-columns: 65% 35%;

}

span {
    display: flex;
    padding: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #808080;

      p {
        font-size: 1.5rem;
        text-align: center;
      }
      
      img {
        width: 3rem;
      }
    }

hr {
    color: white;
    margin: 0 0 2rem 0;
}

h1 {
    margin-left: 4rem;
    font-size: 3rem;
}
#products_content {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    
}

#payment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 14rem;
    width: 100%;
    border-radius: 15px;
    padding: 2rem;
    font-weight: 600;
    right: 0;
    margin: 1rem;
    font-size: 2rem;
    background-color: #2B2B2B;

    p {
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

@media (max-width: 1000px) {
    .container {
    display: grid;
    grid-template-columns: 1fr;
    background-color: $primary-background;
}

}
</style>