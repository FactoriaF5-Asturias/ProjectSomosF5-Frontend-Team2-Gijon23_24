<script setup>
</script>

<template>
    <article>
        <img src="/images/factoria5-logo.png" alt="">
        <div>
            <p>"Este sitio es solo para fines educativos. No ingrese información personal ni realice pagos aquí."</p>
        </div>
    </article>
</template>

<style scoped lang="scss">
article {
    padding: 0 2rem;
    height: 10rem;
    background-color: #FF4700;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 80%;
    }

    p {
        margin-top: 0.5rem;
        font-size: 2.5rem;
        color: white;
        text-align: center;
    }
}
@media screen and (max-width: 1000px) {
    article {
        height: 10rem;

        img {
        height: 60%;
        }

        p {
            margin-top: 0.5rem;
            font-size: 1.5rem;
        }
    }
}
</style>