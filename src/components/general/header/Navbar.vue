<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

const navbarVisible = ref(true);

let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

const handleScroll = () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navbarVisible.value = false;
  } else {
    navbarVisible.value = true;
  }

  lastScrollTop = currentScrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav :class="{ 'navbar-hidden': !navbarVisible }">
      <div>
        <router-link to="/" exact-active-class="active" class="link">Inicio</router-link>
        <router-link to="/lithophane" exact-active-class="active" class="link">Litofanía</router-link>
        <router-link to="/house" exact-active-class="active" class="link">Hogar</router-link>
        <router-link to="/geek" exact-active-class="active" class="link">Geek</router-link>
      </div>
      <SearchBar />
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    transition: transform 3s ease-in-out;
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
    justify-content: space-between;
    div {
      display: flex;
      gap: 3rem;
    }
}

.active {
    color: $primary-color;
}
 
</style>
