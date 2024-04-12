<script setup>
    
    
</script> 

<template>
    <section class="carrito">
        <h1>Mi Carrito</h1>

        
            <div class="container articulos">
                <div class="articulo1 ">
                    <img class="articulo_img" src="../../public/images/8Star_DragonBall_1.png" alt="" width="150">
                    <div class="descripcion">
                        <h2>Articulo</h2>
                        <p class="small">Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>
                 
            </div>
           
       
    </section>
   

  
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .carrito{
       
        width: 100%;
        background-color: #252525;
        color: white;
        font-family: "Poppins", sans-serif;
        
        h1{
            font-size: 30px;
            padding: 3%;
        }

        .articulos{
            width: 50%;
            background-color: rgb(49 48 48);
            border-radius: 5px;
            color:#fff; 
            padding: 3%; 
            margin: 0 auto; 
        }

        .container {  
            display: grid;
            grid-template-columns: 300px 1fr;
            grid-template-rows: 1fr 1fr;
            grid-auto-rows: 1fr;
            gap: 0px 10px;
            grid-auto-flow: row;
            justify-content: space-around;
            align-content: space-around;
            grid-template-areas:
                "articulo1 articulo1"
                ". .";
        }

        .articulo1 { 
            grid-area: articulo1; 

            h2{
                font-size: 20px;
            }
        }


        .articulo_img{
            border-radius: 5px;
        }


    }
    

</style>