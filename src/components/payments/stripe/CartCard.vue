<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  product: Object,
  count: Number
});

const uri = import.meta.env.VITE_API_ENDPOINT_IMAGES_S3;

const imageDirectory = ref("");
const isLoading = ref(true);

function findImageForProduct(product) {
	const image = product.images.find((img) => img.mainImage === true);
	if (image == undefined) {
		const defaultImage = "placeholder-image.jpg";
		return defaultImage;
	}
	return image.imageName;
}

onMounted(async () => {
	imageDirectory.value = uri + "/" + findImageForProduct(props.product);
	isLoading.value = false;
});

</script>

<template>
  <article>
    <div>
      <div class="image-container" :style="{
						'background-image': 'url(' + imageDirectory + ')',
					}"
					:alt="product.productName" alt=""></div>
      <div id="product_data">
        <h1> {{ product.productName }}</h1>
        <h2>{{ product.productDescription }}</h2>
      </div>
    </div>
    <div>
      <div class="price-container">
        <p>{{ product.price }}</p>
        <p>€</p>

      </div>
      <div class="count-container">
        <h3>x</h3>
        <h3>{{ count }}</h3>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">

article {
  width: 100%;
  background-color: #2B2B2B;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 15px;
  justify-content: space-between;
  color: white;

  > div {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
  }

}
.image-container {
  background-color: $primary-background;
  background-position: center;
  background-size: contain;
  height: 12em;
  width: 12rem;
  border-radius: 10px;
}
#product_data {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h1 {
  font-size: 2rem;
}

h2, h3 {
  font-size: 1.5rem;
  font-weight: 200;
}

.count-container, .price-container {
  display: flex;
}

p {
  align-content: center;
  font-size: 2rem;
  font-weight: 600;
}

@media (max-width: 1000px) {

  article {
  padding: 1.5rem;
  gap: 1.5rem;

  > div {
    gap: 2.5rem;
  }

}

.image-container {
  height: 6em;
  max-width: 6rem;
}

#product_data {
  gap: 1rem;
}

h2, h3 {
  font-size: 1rem;
}

p, h1 {
  font-size: 1.5rem;
}

}

</style>