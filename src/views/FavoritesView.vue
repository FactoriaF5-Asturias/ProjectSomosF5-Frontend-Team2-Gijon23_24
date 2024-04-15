<template>
    <div>
      <button @click="toggleFavorite">{{ isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos' }}</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        isFavorite: false,
        productId: '',
        profileId: '',
      };
    },
    methods: {
      async toggleFavorite() {
        try {
          const response = await axios.put(`/api/profiles/update-favorites/${this.productId}`);
          if (response.status === 200) {
            const updatedProfile = response.data;
            console.log('Perfil actualizado:', updatedProfile);
            
            this.isFavorite = !this.isFavorite;
           
          } else {
            console.error('Error al actualizar la lista de favoritos');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud:', error);
        }
      }
    }
  };
  </script>
  
  

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