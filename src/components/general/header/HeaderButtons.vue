<script setup>

</script>

<template>
  <div>
    <button>
      Iniciar sesión
    </button>

    <button>
      Registrarse
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  gap: 1rem;
}
button {
    border: 2px solid $primary-color;
    height: 5rem;
    text-align: center;
    border-radius: 5px;
    padding: 0 2rem;
    font-size: 2rem;
    color: $primary-color;
    font-family: "Poppins", sans-serif;
    transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: $primary-color;
  color: $light-font;
}

</style>