<script setup>

const props = defineProps({
    show: Boolean,
});

const emit = defineEmits(['cancel']);

const accept = () => {
    emit('cancel');
};

</script>

<template>
    <div v-if="props.show" class="popup-container" @click.stop>
        <div class="alert-content">
            <div>
                <img src="/icons/warning-icon.svg" alt="">
                <h1>Debe iniciar sesión para poder realizar esta acción</h1>
            </div>
            <section>
                <button @click="accept">Ok</button>
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

.alert-content {
  max-width: 30rem;
  text-align: center;
  height: 15rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

}
section {
    display: flex;
    justify-content: space-between;
}
img {
    width: 4rem;
}

button {
    background-color: $primary-color;
    width: fit-content;
    padding: 0 2rem;
    border-radius: 7px;
    color: white;
    height: 3rem;
}

</style>