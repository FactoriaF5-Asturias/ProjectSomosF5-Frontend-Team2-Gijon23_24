<template>
    <div class="product-detail">
      <Header />
      <div class="product-info">
        <div class="product-image">
          <img :src="selectedImage" alt="Product Image" @mouseover="changeImage(index)" v-for="(image, index) in images" :key="index">
        </div>
        <div class="product-description">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price }}</p>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/general/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        product: {
          name: 'Product Name',
          description: 'Product Description',
          price: 'Product Price',
        },
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        selectedImage: 'image1.jpg'
      };
    },
    methods: {
      changeImage(index) {
        this.selectedImage = this.images[index];
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  .product-detail {
    /* Estilos para el contenedor principal de la página */
  }
  .product-info {
    /* Estilos para el contenedor de información del producto */
  }
  .product-image {
    /* Estilos para el contenedor de la imagen del producto */
  }
  .product-description {
    /* Estilos para el contenedor de la descripción del producto */
  }
  </style>
  
  