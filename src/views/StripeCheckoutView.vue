<script setup>
import { ref, onMounted, reactive } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import StripeService from "@/services/StripeService";
import StripeMessages from "@/components/payments/stripe/StripeMessages.vue";
import { useCartStore } from './../stores/CartStore';

// const items = ref([]);

// console.log('item despues' + items)

const store = useCartStore();
// const cart = reactive({
//   items: items
// });


const service = new StripeService();
const isLoading = ref(false);
const messages = ref([]);
let stripe;
let elements;
let appearance;

onMounted(async () => {

  const items = ref([]);

  const cart = reactive({
  items: items
});

  const storeItems = store.getItems;
  items.value.push(...storeItems);

  const publishableKey = import.meta.env.VITE_APP_STRIPE_PK;
  stripe = await loadStripe(publishableKey);
  elements = stripe.elements();

  console.log('item recogido' + items.value)
  return items.value;
});

const handleSubmit = async () => {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const clientSecret = (await service.post(cart)).clientSecret;
  console.log("Client secret:", clientSecret);

  elements = stripe.elements({ clientSecret, appearance });
  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/return`
    }
  });

  if (error) {
    messages.value.push(error.message);
  } else {
    messages.value.push("Payment successful!");
  }

  isLoading.value = false;
};
</script>
<template>
  <main>
    <h1>Payment</h1>

    <form
      id="payment-form"
      @submit.prevent="handleSubmit"
    >
      <div id="link-authentication-element" />
      <div id="payment-element" />
      <button
        id="submit"
        :disabled="isLoading"
      >
        Pay now
      </button>
      <StripeMessages :messages="messages" />
    </form>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  padding: 8% 0 2% 0;
  
}
main {
  background-color: white;
}

#payment-element, #link-authentication-element {
  width: 50%;
  margin: auto;
}

button {
  background-color: $primary-color;
  padding: 1rem;
  border-radius: 1rem;
  margin-left: 25%;
  margin-top: 2%;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10%;
}
</style>