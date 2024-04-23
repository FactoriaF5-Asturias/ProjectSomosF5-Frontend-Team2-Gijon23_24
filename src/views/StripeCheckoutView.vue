<script setup>
import { ref, onMounted, reactive } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import StripeService from "@/services/StripeService";
import StripeMessages from "@/components/payments/stripe/StripeMessages.vue";
import { useCartStore } from './../stores/CartStore';

const items = ref([]);

console.log('arrays items contenedor!!!', items.value);

const store = useCartStore();

const cart = reactive({
});

const service = new StripeService();
const isLoading = ref(false);
const messages = ref([]);
let stripe;
let elements;
let appearance;


onMounted(async () => {
  
  const storeItems = store.getItems;
  items.value.push(...storeItems);

  cart.value = {items: items.value};

  const publishableKey = import.meta.env.VITE_APP_STRIPE_PK;
  stripe = await loadStripe(publishableKey);

  appearance = {
  theme: 'flat',
  variables: {
    fontFamily: ' "Gill Sans", sans-serif',
    fontLineHeight: '1.5',
    borderRadius: '10px',
    colorBackground: '#F6F8FA',
    accessibleColorOnColorPrimary: '#262626'
  },
  rules: {
    '.Block': {
      backgroundColor: 'var(--colorBackground)',
      boxShadow: 'none',
      padding: '12px'
    },
    '.Input': {
      padding: '12px'
    },
    '.Input:disabled, .Input--invalid:disabled': {
      color: 'lightgray'
    },
    '.Tab': {
      padding: '10px 12px 8px 12px',
      border: 'none'
    },
    '.Tab:hover': {
      border: 'none',
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
      border: 'none',
      backgroundColor: '#fff',
      boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
    },
    '.Label': {
      fontWeight: '500',
    }
  }
}

const clientSecret = (await service.post(cart.value)).clientSecret;
  console.log("Client secret:", clientSecret);

  elements = stripe.elements({ clientSecret, appearance });
  const paymentElement = elements.create('payment');
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");


  console.log('item recogido', items.value)
  console.log('final que envio', cart.value);
  return items.value;
});

const handleSubmit = async () => {

  if (isLoading.value) {
    return;
  }

  console.log('dentrooooooooooo que envio', cart.value);

  isLoading.value = true;
  
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/return`
    }
  });

  if (error) {
    messages.value.push(error.message);
  } else {
    console.log('geniaaaaal!!')
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