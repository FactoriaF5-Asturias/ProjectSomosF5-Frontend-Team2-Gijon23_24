<script setup>

</script>

<template>
    
  <div class="galery">
    <h1 class="text-center">Explora nuestras categorías</h1>
    <span class="line"></span>
    <div class="container_images">
        <div class="image">
            <img src="../assets/img/litofanias.png" alt="">
            <h2 class="category_title">Litofanias</h2>
            <div class="overlay"></div> 
        </div>
        <div class="image">
            <img src="../assets/img/hogar.png" alt="">
            <h2 class="category_title">Hogar</h2>
            <div class="overlay"></div>
        </div>
        <div class="image">
            <img src="../assets/img/geek.png" alt="">
            <h2 class="category_title">Geek</h2>
            <div class="overlay"></div>
        </div>
    </div>
  </div>  
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


.galery{
    
    background-color: #B976ED;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    padding: 2%;
    
        h1{
            color: #fff;
            font-size: 30px;
            padding: 3%;
        }
        .line{
            position: relative;
            background-color: #fff;
            height: 1px ;
            width: 40%;
            margin: 0 auto;
            display: block;
        }
    
    
    .container_images{
        display: flex;
        width: 100%;
        margin: auto;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 5%;
    }

    .container_images  .image{
        width: 32%;
        position: relative;
        height: 400px;
        margin-bottom: 5px;
        
    }
    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    h2{
       
        font-size: 30px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
    }
    .category_title{
        z-index: 10;
    }
    .overlay{
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #fffbfb33;
        width: 100%;
        height: 0;
        transition: 0.4s ;
        overflow: hidden;
        backdrop-filter: blur(10px);
        border-radius: 5px;
    }
     
    .image:hover .overlay{
        height: 100%;
        text-decoration: underline;
        cursor: pointer;
    }
}
 @media screen and (max-width:1000px) {
    .container_images{
        width: 95%;
    }
 }
 @media screen and (max-width:700px) {
    .container_images{
        width: 90%;
    }
    .container_images .image{
        width: 48%;
    }
 }
 @media screen and (max-width:450px) {
    h1{
        font-size: 22px;
    }
    .container_images{
        width: 98%;
    }
    .container_images .image{
        width: 80%;
    }
 }
 
</style>