<script setup>
</script>

<template>
    
  <div class="galery">
    <h1 class="text-center">Explora nuestras categorías</h1>
    <span class="line"></span>
    <div class="container_images">
        <router-link to="/lithophane" class="image">
            <img src="/images/litofanias.png" alt="">
            <h2 class="category_title">Litofanias</h2>
            <div class="overlay"></div> 
        </router-link>
        <router-link to="/house" class="image">
            <img src="/images/hogar.png" alt="">
            <h2 class="category_title">Hogar</h2>
            <div class="overlay"></div>
        </router-link>
        <router-link to="/geek" class="image">
            <img src="/images/geek.png" alt="">
            <h2 class="category_title">Geek</h2>
            <div class="overlay"></div>
        </router-link>
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
            font-size: 3rem;
            padding: 2rem;
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
        flex-direction: row;
        gap: 1rem;
        margin: auto;
        justify-content: space-around;
        padding: 5%;
    }

    .container_images  .image{
        // width: 32%;
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
 @media (max-width:700px) {
    .container_images{
        flex-wrap: wrap;
    }

 }

</style>