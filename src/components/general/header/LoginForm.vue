<script setup>

const props = defineProps({
  onClose: Function
});

const closeForm = () => {
  props.onClose();
}

// submitForm
</script>

<template>
<div class="modal" @click="closeForm">
    <div class="modal_container" @click.stop>
        <section class="form_container">
            <form @submit.prevent="submitForm">
                    <h1>¡Unete a nosotros!</h1>
                    <div class="input_box">
                    <label>Email:</label>
                    <input type="email" placeholder="correo electrónico">
                </div>
                <div class="input_box">
                    <label>Contraseña:</label>
                    <input type="password" placeholder="contraseña" v-model="password" required>
                </div>
                <div class="submit_container">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>

        <section id="welcome_image">
            <button @click.stop="closeForm">
                    <img src="/icons/icon-cross.svg" alt="cross icon">
            </button>
            <img src="/images/logo.svg" alt="">
            <img src="/images/PrintGo.svg" alt="">
            <p>Haciendo tangible lo inimaginable.</p>
        </section>
    </div>
</div>
</template>

<style scoped lang="scss">
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.modal_container {
  height: 60rem;
  width: 90rem;
  display: flex;
}

section {
  background-color: white;
  width: 50%;
  border-radius: 10px 0 0 10px;
}

#welcome_image {
  background-color: $primary-background;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  img {
    width: 60%;
  }
  p {
    color: $light-font;
    font-size: 2rem;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
  }

  > button {
    display: flex;
    justify-content: end;
    width: 4rem;
  }
}

.form_container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

form {
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  button {
    color: black;
    background-color: $primary-color;
    height: 3.8rem;
    text-align: center;
    width: 15rem;
    border-radius: 10px;
    font-size: 1.6rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
  }
}

.input_box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.3rem;
  }

  input {
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border: 1px solid gray;
    border-radius: 5px;
  }
}
</style>