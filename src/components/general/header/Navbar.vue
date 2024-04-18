<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const navbarVisible = ref(true);

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        navbarVisible.value = false;
    } else {
        navbarVisible.value = true;
    }

    lastScrollTop = currentScrollTop;
});

</script>

<template>
    <nav :class="{ 'navbar-hidden': !navbarVisible }">
        <router-link to="/" exact-active-class="active" class="link">Inicio</router-link>
        <router-link to="/lithophane" exact-active-class="active" class="link">Litofanía</router-link>
        <router-link to="/house" exact-active-class="active" class="link">Hogar</router-link>
        <router-link to="/geek" exact-active-class="active" class="link">Geek</router-link>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    transition: transform 0.8s ease-in-out;
}

.navbar-hidden {
    display: none;
}

nav {
    background-color: $primary-background;
    height: 6rem;
    padding-left: 7rem;
    display: flex;
    align-items: center;
    gap: 3rem;

    .link {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 0.3s ease;
        
        &:hover {
            color: $primary-color;
        }
    }
}

.active {
    color: $primary-color;
}
</style>
