<script setup>
import { useCartStore } from "./../../stores/CartStore";

const store = useCartStore();

const props = defineProps({
    show: Boolean,
    product: Object
});

const emit = defineEmits(['cancel']);

const cancelAddToCart = () => {
    emit('cancel');
};

function changePrice(decimalPrice) {
    let priceString = decimalPrice.toString();
    let [integerPart, decimalPart] = priceString.split('.');
    let priceInteger = parseInt(integerPart) * 100 + (decimalPart ? parseInt(decimalPart) : 0);

    return priceInteger;
}

const addCart = () => {
    let productData = {
        id: props.product.id,
        name: props.product.productName,
        price: changePrice(props.product.price),
    };

    store.addToCart(props.product, productData);

    cancelAddToCart()
}
</script>

<template>
    <div v-if="props.show" class="popup-container" @click.stop>
        <div class="confirmation-content">
            <h1>¿Quieres añadir <b>"{{ product.productName }}"</b> a tu carrito?</h1>
            <section>
                <button @click="addCart">Sí</button>
                <button @click="cancelAddToCart">No</button>
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
  z-index: 9999;
}

.confirmation-content {
  max-width: 30rem;
  text-align: center;
  line-height: 2rem;
  height: 20rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
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