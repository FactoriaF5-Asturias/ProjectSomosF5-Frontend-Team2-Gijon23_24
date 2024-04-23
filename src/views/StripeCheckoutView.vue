<script setup>
const clientSecret = (await service.post(cart.value)).clientSecret;
  console.log("Client secret:", clientSecret);

//   elements = stripe.elements({clientSecret, appearance});
//   const paymentElement = elements.create('payment');
//   paymentElement.mount("#payment-element");
//   const linkAuthenticationElement = elements.create("linkAuthentication");
//   linkAuthenticationElement.mount("#link-authentication-element");
//   isLoading.value = false;
// })

// const handleSubmit = async () => {
//   if (isLoading.value) {
//     return;
//   }

//   isLoading.value = true;

//   const { error } = await stripe.confirmPayment({
//     elements,
//     confirmParams: {
//       return_url: `${window.location.origin}/return`
//     }
//   })

//   if (error.type === "card_error" || error.type === "validation_error") {
//     messages.value.push(error.message);
//   } else {
//     messages.value.push("An unexpected error occured.");
//   }

//   isLoading.value = false;
// }

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