<template>
  <div>
    <h1>Mis Favoritos</h1>

    
    <Card v-for="product in favoritesStore.favoriteProducts" :key="product.id" :product="product"  v-if="favoritesStore.isLoaded" />
    
</div>


</template>

<script setup>
import Card from '@/components/card/Card.vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useFavoritesStore } from '@/stores/FavoritesStore';
import { onMounted ,ref} from 'vue';
import axios from 'axios';

const authStore = useAuthStore();
const favoritesStore = useFavoritesStore();





async function getProfileData(email) {
let content = ref('')
const uri = import.meta.env.VITE_API_ENDPOINT_GENERAL;

	try {
		const response = await axios.get(
      `${uri}/profiles/getByEmail/${email}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}
    );
 
    favoritesStore.isLoaded=true
    content = response.data
    favoritesStore.favoriteProducts=content.favorites
    console.log(favoritesStore.favoriteProducts)
 
	} catch (error) {
		console.error("Error al conseguir los datos del producto", error);
		throw error;
	}

  return { content }
}



onMounted(() => {
  getProfileData(authStore.username)
});




</script>


<style scoped lang="scss">
body {
    padding: 4rem 0;
    background-color: $primary-background;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    text-align: center;

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