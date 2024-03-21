<template>
    <div class="product-detail">
      <div class="product-info">
        <div class="product-image">
          <img :src="selectedImage" alt="Product Image">
        </div>
        <div class="product-minipics">
          <img v-for="(image, index) in images" :key="index" :src="image" @mouseover="changeImage(image)">
        </div>
        <div class="product-description">
          <h2>{{ product.name }}</h2>
          <p>{{ product.details }}</p>
          <p>Price: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const product = {
    name: 'Product Name',
    details: 'Product Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: '$20'
  };
  
  const images = ['/public/images/estatua.png', '/public/images/banner-logo.svg', '/public/images/Logo3d.png'];
  let selectedImage = images[0];
  
  const changeImage = (image) => {
    selectedImage = image;
    
  };
  </script>
  
  <style scoped lang="scss">
  .product-detail {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url('https://ih1.redbubble.net/cover.4092629.2400x600.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px; 
  }
  
  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%; 
    margin-top: 50px; 
  }
  
  .product-image img {
    width: 100%; 
    border-radius: 5px;
    box-shadow: 6px 8px 10px 2px #0a142b;
  }
  
  .product-minipics {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    
  }
  
  .product-minipics img {
    width: 60px; 
    margin: 0 10px; 
    cursor: pointer; 
    border-radius: 5px;
    box-shadow: 6px 8px 10px 2px #0a142b;
  }
  
  .product-description {
    margin-top: 5%; 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-bottom: 2px solid;
    margin-bottom: 5%;

   
  }
  
  .product-description h2 {
    font-size: 30px;
  }
  
  .product-description p {
    font-size: 20px; 
  }
  </style>
  