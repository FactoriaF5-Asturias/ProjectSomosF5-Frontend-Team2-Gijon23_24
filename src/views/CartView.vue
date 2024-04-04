<script setup>

</script>

<template>
    <body>
        <img src="/images/website-mantenimiento.jpg" alt="">
        <div>
            <h1>En construccion</h1>
            <hr>
            <p>Lamentablemente, nuestra página aún está en construcción y algunas secciones pueden no estar disponibles temporalmente. Estamos trabajando arduamente para completarla lo antes posible y brindarles la mejor experiencia posible.</p>
            <router-link to="/"> Volver al inicio </router-link>
        </div>
    </body>
</template>

<style scoped lang="scss">

body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: $primary-background;
}

img {
    width: 50%;
}

div {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    hr {
        width: 80%;
    }

    h1 {
        color: white;
        font-size: 4rem;
        font-weight: 800;
    }

    p {
        font-size: 2rem;
        color: white;
        text-align: center;
    }

    a {
        padding: 1.1rem;
        background-color: $primary-color;
        border-radius: 5px;
        font-size: 2rem;
        color: white;
        transition: all 200ms ease-in-out;
        width: 16rem;
        text-align: center;
    }

    a:hover {
        transform: scale(1.1);
    }
}
</style>