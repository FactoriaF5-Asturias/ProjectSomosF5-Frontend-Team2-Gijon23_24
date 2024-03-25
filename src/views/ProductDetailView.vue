<script setup></script>
<template>
    <div id="home-detail">
        <button class="back-button" onclick="goBack()"><span class="arrow-left"></span></button>
        <div class="detail-image-container">
            <div class="detail-mainImage-container">
                <img src="/public/images/estatua.png" alt="">
            </div>
            <div class="detail-miniPics-container">
                <img src="/public/images/estatua.png" alt="">
                <img src="/public/images/Logo3d.png" alt="Tanjiro's plush height">
                <img src="/public/images/PrintGo.svg" alt="kid having fun with Tanjiro's plush">
            </div>
        </div>

        <div class="detail-text-container">
            <h3>Nombre Producto<br></h3>
            <h2>14,99€<br></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum necessitatibus reprehenderit quidem esse est, veniam temporibus placeat sunt officiis. Alias nihil placeat excepturi, quisquam earum maxime eos harum inventore.</p>

            <div class="añadirCarrito-container">
              <button class="añadirCarrito">Añadir al carrito</button>
            </div>
        </div>
      </div>
    
  </template>
  

  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import '/src/assets/scss/ProductDetail.scss';
  </style>