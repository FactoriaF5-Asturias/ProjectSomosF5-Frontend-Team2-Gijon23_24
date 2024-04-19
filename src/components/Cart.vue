<script setup>
    
    
</script> 

<template>
    <section class="cart">
        <h1>Mi Carrito</h1>
        <div class="main">

            <div class="container articles">
                <div class="article ">
                    <img class="article_img" src="../../public/images/8Star_DragonBall_1.png" alt="" width="150">
                    <div class="description">
                        <h2>Articulo</h2>
                        <p class="small">Lorem ipsum dolor sit amet.</p>
                        <div class="count_art">
                            <button class="button_cont" onclick="increment()">+</button>  
                            <p id="counting">1</p>
                            <button class="button_cont" onclick="decrement()">-</button>  
                        </div>
                    </div>
                    <div class="price">
                        <h2>19,99€</h2>
                    </div>
                   
                </div>
                
                <div class="article ">
                    <img class="article_img" src="../../public/images/8Star_DragonBall_1.png" alt="" width="150">
                    <div class="description">
                        <h2>Articulo</h2>
                        <p class="small">Lorem ipsum dolor sit amet.</p>
                        <div class="count_art">
                            <button class="button_cont" onclick="increment()">+</button>  
                            <p id="counting">1</p>
                            <button class="button_cont" onclick="decrement()">-</button>  
                        </div>
                    </div>
                    <div class="price">
                        <h2>19,99€</h2>
                    </div>
                </div>
                
                
                
            </div>
            <div class="container_sub">
                <div class="des_sub">
                    <p>Subtotal(2 Articulos)</p>
                    <p>49,98€</p>
                    <button class="button">Tramitar Pedido</button>
                </div>
            </div>
            
        </div>
        </section>
   

  
</template>

<style lang="scss" scoped>


    .main{
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .cart{
        
        
        width: 100%;
        background-color: #252525;
        color: white;
        
        
        h1{
            font-size: 30px;
            padding: 3%;
        }

        .articles{
            
            width: 80%;
            background-color: rgb(49 48 48);
            border-radius: 5px;
            color:#fff; 
            padding: 3%; 
            margin: 0 auto; 
            padding: 1%;
        }

        .container {  
           display: block;
           width: 80%;
           
        }

        .description{
            width: 100%;
            padding: 1%;
            margin-left: 5%;
            
        }
        
        .article {  
            display: inline-flex;
            padding: 5%;
            width: 100%;

            h2{
                font-size: 20px;
            }
        }
        .price{
            width: 30%;
        }
        .count_art{
            width: 20%;
            height: 20px;
            display: inline-flex;
            margin-top: 20%;


            .button_cont{
                width: 10px;
                height: 10px;
                background-color: #252525;
                padding: 10px;
                border-radius: 2px;

                
            }
            #counting{
                padding: 20%;
                width: 10%;
                height: 10px;
            }
        }


        .article_img{
            border-radius: 5px;
        }

        .container_sub{
            width: 45%;
            height: 120px;
            background-color: rgb(49, 48, 48);
            border-radius: 5px;
            text-align: center;
            padding: 6%;
            
            .des_sub p{
                margin-top: 6%;
            }

            .button{
                width: 90%;
                height: 25px;
                padding: 6%;
                border-radius: 2px;
                background-color: #B976ED;
                margin-top:8%;
            }
        }
        
    }
    

</style>