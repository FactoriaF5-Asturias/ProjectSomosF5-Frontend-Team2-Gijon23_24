<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { loadStripe } from "@stripe/stripe-js";
import StripeMessages from "@/components/payments/stripe/StripeMessages.vue";

const messages = ref([]);
const clientSecret = ref('');


const currentRoute = computed(() => {
  return useRoute().query;
});
clientSecret.value = currentRoute.value?.payment_intent_client_secret;

let stripe;

onMounted(async () => {
  const publishableKey = import.meta.env.VITE_APP_STRIPE_PK;   
  stripe = await loadStripe(publishableKey);

  const {error, paymentIntent} = await stripe.retrievePaymentIntent(
    clientSecret.value,
  );

  if (error) {
    messages.value.append(error.message);
  }
  messages.value.push(`Payment ${paymentIntent.status}: ${paymentIntent.id}`)
});

</script>

<template>
  <body>
    <main>
      <h1>Thank you for the purchase!</h1>
      <StripeMessages class="message"
        v-if="clientSecret"
        :messages="messages"
      />
    </main>
  </body>
</template>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-size: 3rem;
  margin: 5rem;
}

.message {
  text-align: center;
  margin: 5rem;
  font-size: 2rem;
}
</style>