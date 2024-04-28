<script setup>
import Card from "@/components/card/Card.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { useFavoritesStore } from "@/stores/FavoritesStore";
import { onMounted, ref, computed } from "vue";
import axios from "axios";

const authStore = useAuthStore();
const favoritesStore = useFavoritesStore();

const Favorites = ref([]);
const isLoaded = ref(false);
const currentPage = ref(1);
const ProductsPerPage = 12;
const totalPages = computed(() => Math.ceil(Favorites.value.length / ProductsPerPage));

async function getProfileData(email) {
  const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

  try {
    const response = await axios.get(`${uri}/profiles/getByEmail/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    favoritesStore.isLoaded = true;
    let content = response.data;
    favoritesStore.favoriteProducts = content.favorites;

    Favorites.value = content.favorites;
    isLoaded.value = true;

  } catch (error) {
    console.error("Error al conseguir los datos del producto", error);
    throw error;
  }
}

onMounted(async () => {
  await getProfileData(authStore.username);
});


const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * ProductsPerPage;
    return Favorites.value.slice(startIndex, startIndex + ProductsPerPage);
});

const nextPage = () => {
    currentPage.value = Math.min(currentPage.value + 4, totalPages.value);
    scrollToTop();
};

const prevPage = () => {
    currentPage.value = Math.max(currentPage.value - 4, 1);
    scrollToTop();
};

const changePage = (page) => {
    currentPage.value = page;
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const visiblePages = computed(() => {
    const pagesToShow = 4;
    const visible = [];
    const startPage = Math.max(1, currentPage.value);
    for (let i = startPage; i < startPage + pagesToShow && i <= totalPages.value; i++) {
        visible.push(i);
    }
    return visible;
});
</script>

<template>
<body>
  <div>
      <h1>Mis favoritos</h1>
      <hr>
      <section>
          <div v-if="paginatedProducts.length">
            <Card :product="product" v-for="product in paginatedProducts" :key="product.id" v-if="isLoaded" />
          </div>
          <span v-if="!paginatedProducts.length">
            <img src="/icons/warning-icon.svg" alt="warning icon">
            <p>"Aún no has añadido productos a favoritos"</p></span>
      </section>
      <div v-if="paginatedProducts.length > 1" id="pagination">
          <button class="pagination-arrow" @click="prevPage" :disabled="currentPage <= 1"> << </button>
          <button v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{ 'active-page': currentPage === page }">{{ page }}</button>
          <button class="pagination-arrow" @click="nextPage" :disabled="currentPage >= totalPages"> >> </button>
      </div>
  </div>
</body>
</template>

<style scoped lang="scss">
body {
    padding: 4rem 0;
    background-color: $primary-background;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;

    > div {
      width: 85%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: white;
      font-weight: 200;
      font-family: "Poppins", sans-serif;
    }
  }
  h1 {
    font-size: 4rem;
  }
  hr {
    margin: 0 0 2rem 0;
  }
  section {
    align-items: center;

    span {
    display: flex;
    padding: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #808080;
    
    p {
        font-size: 1.5rem;
        text-align: center;
      }
      
      img {
        width: 3rem;
      }
    }

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
    }
  }

#pagination {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-weight: 600;
}

button {
  transition: transform 0.2s ease-in-out;
  min-width: 5rem;
  min-height: 5rem;
  background-color: grey;
  border-radius: 4px;
  font-size: 1.3rem;
}
button:hover {
  transform: translate(0, -3px);
}

.pagination-arrow {
  background-color: rgb(77, 77, 77);
}
.active-page {
  background-color: $primary-color;
}
</style>
