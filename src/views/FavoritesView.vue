<template>
  
  <h1>Mis Favoritos</h1>
  <section>
    <div>
    <Card
      v-for="product in favoritesStore.favoriteProducts"
      :key="product.id"
      :product="product"
      v-if="favoritesStore.isLoaded"
    />
  </div>
  <div id="pagination">
            <button class="pagination-arrow" @click="prevPage" :disabled="currentPage <= 1"> << </button>
            <button v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{ 'active-page': currentPage === page }">{{ page }}</button>
            <button class="pagination-arrow" @click="nextPage" :disabled="currentPage >= totalPages"> >> </button>
          </div>
  </section>
</template>

<script setup>
import Card from "@/components/card/Card.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { useFavoritesStore } from "@/stores/FavoritesStore";
import { onMounted, ref } from "vue";
import axios from "axios";

const authStore = useAuthStore();
const favoritesStore = useFavoritesStore();

async function getProfileData(email) {
  let content = ref("");
  const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

  try {
    const response = await axios.get(`${uri}/profiles/getByEmail/${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    favoritesStore.isLoaded = true;
    content = response.data;
    favoritesStore.favoriteProducts = content.favorites;
    console.log(favoritesStore.favoriteProducts);
  } catch (error) {
    console.error("Error al conseguir los datos del producto", error);
    throw error;
  }

  return { content };
}

onMounted(() => {
  getProfileData(authStore.username);
});
</script>

<style scoped lang="scss">

body{
  background-color: #252525;
}


 div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 85%;
  color: white;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
}


h1 {
  font-size: 4rem;
  margin: 2%;
}
section {
    text-align: center;

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
        gap: 2rem;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 2%;
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
