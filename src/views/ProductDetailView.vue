<script setup></script>
<template>
  <div id="home-detail" class="product-detail">
    <button class="back-button" onclick="goBack()">
      <span class="arrow-left"></span>
    </button>
    <div class="detail-image-container">
      <div class="detail-mainImage-container">
        <img src="/public/images/estatua.png" alt="detalles" />
      </div>
      <div class="detail-miniPics-container">
        <img src="/public/images/estatua.png" alt="detalles" />
        <img src="/public/images/Logo3d.png" alt="detalles" />
        <img src="/public/images/PrintGo.svg" alt="detalles" />
      </div>
    </div>
    <div class="detail-text-container">
      <h3 class="product-name">
        Nombre producto
        <button class="añadirFavorito"><i class="fas fa-heart"></i></button>
      </h3>
      <h2>
        14,99<span style="font-size: 1rem">€ </span>
        <s>19,99€</s>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum
        necessitatibus reprehenderit quidem esse est, veniam temporibus
        placeat sunt officiis. Alias nihil placeat excepturi, quisquam earum
        maxime eos harum inventore.
      </p>
    </div>
    <div class="añadirCarrito-container">
      <button class="añadirCarrito">Añadir al carrito</button>
    </div>
  </div>
</template>
  

  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import '/src/assets/scss/ProductDetail.scss';
  </style>