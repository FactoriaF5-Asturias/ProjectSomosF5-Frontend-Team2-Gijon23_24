<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './../../../stores/AuthStore'
import HeaderButtons from './HeaderButtons.vue'
import LoggedProfile from './LoggedProfile.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue'

const authStore = useAuthStore();
const router = useRouter();
const burger = ref(false);

function openBurger() {
    burger.value = true;
}

function closeBurger() {
    burger.value = false;
}

router.beforeEach((to, from, next) => {
    closeBurger();
    next();
});
</script>

<template>
  <nav>
    <LoggedProfile v-if="authStore.isAuthenticated" />
    <HeaderButtons v-if="!authStore.isAuthenticated" />
    <button @click="openBurger()">
        <img src="/icons/burger-icon.svg" alt="">
    </button>
    <ol @click="closeBurger()" :class="{ 'show': burger }" class="burger-label">
        <div @click.stop>
            <button @click="closeBurger()"><img src="/icons/icon-cross.svg" alt=""></button>
                <router-link to="/favorites" exact-active-class="active">
					<div>
						<img src="/icons/icon-heart.svg" alt="" />
						<p>Favoritos</p>
					</div>
				</router-link>
                <hr>
				<router-link to="/cart" exact-active-class="active">
					<div>
                        <img src="/icons/icon-shopping-cart.svg" alt="">
                        <p>Carrito</p>
					</div>
				</router-link>
                <hr>
                <router-link to="/dashboard" exact-active-class="active" v-if="authStore.userRole == 'ROLE_ADMIN'">
                    <div>
                        <img src="/icons/admin-icon.svg" alt="">
                        <p>Dashboard</p>
                    </div>
                </router-link>
                <hr v-if="authStore.userRole == 'ROLE_ADMIN'">
                <div class="mobile">
                    <SearchBar/>
                </div>
        </div>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
nav {
    display: flex;
    align-items: center;
    gap: 1rem;
}

button {
    border-radius: 10px;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;

    img {
        height: 5rem;
    }
}

button:hover {
    background-color: #464646;
}

.mobile {
    color: white;
    display: none;
}

ol {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;

    > div {
        height: fit-content;
        background-color: rgba(31, 31, 31, 0.923);
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 14rem;
        align-items: center;

        > button {
            height: 6rem;
            position: absolute;
            top: 2.3rem;
            right: 2.1rem;
            padding: 1.4rem;
    
            > img {
                height: 3rem;
            }
        }
    }
}

ol.show {
    height: 100vh;
}

a, .mobile {
    display: flex;
    font-weight: 200;

    div {
        height: 7rem;
        width: 80%;
        text-align: center;
        margin: auto;
        display: flex;
        gap: 2rem;
        align-items: center;
        color: white;
    }
    img {
        height: 3.4rem;
    }
    p {
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
    }
}

hr {
    width: 80%;
    border: none;
    height: 1px;
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
}

.active {
    font-weight: 700;
}

.mobile {
    padding-bottom: 3rem;
}
@media (min-width: 1000px) {
    
    nav {
        display: none;
    }
}
</style>