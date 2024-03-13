<script setup>

</script>

<template>

  <modal>
    <form>

      <div class="titleForm">
        <h1>Añadir</h1>
      </div>

      <div class="imageTitle">
        <div class="imageMain">
          <p>Añadir imagen principal</p>
          <input type="image" class="input">
        </div>
      </div>

      <div class="details">
        <div class="title">
          <p>Título</p>
          <input type="text" class="input">
        </div>
        <div class="price">
          <p>Precio</p>
          <input type="text" class="input">
        </div>
      </div>

      <div class="categories">
        <p>Categorías</p>
        <select name="select">
          <option value="value1">Litofanía</option>
          <option value="value2">Hogar</option>
          <option value="value3">Geek</option>
        </select>
      </div>

      <div class="images">

      </div>

      <div class="description">
        <p>Descripción</p>
        <textarea></textarea>
      </div>

      <div class="send">
        <input type="submit" class="submitBtn" value="Sign up">
      </div>
    </form>
  </modal>
  
</template>

<style lang="scss" scoped>

// modal {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     background-color: rgba(0, 0, 0, 0.5);
//     z-index: 1000;
// }

// form {
//   height: 60rem;
//   width: 90rem;
//   display: flex;
// }

</style>