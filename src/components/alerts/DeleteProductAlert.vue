<script setup>
import axios from 'axios';
const props = defineProps({
    show: Boolean,
    product: Object
});

const emit = defineEmits(['cancel']);

const refuse = () => {
    emit('cancel');
};

const accept = () => {
    deleteProduct(props.product.id)
    emit('cancel');
};

const uriProduct= import.meta.env.VITE_API_ENDPOINT_PRODUCTS;

async function deleteProduct(id) {
	try {
		const response = await axios.delete(
			uriProduct + `/${id}`,
			{},
			{
				withCredentials: true,
			}
		);
		return response.status;
	} catch (error) {
		console.error("Error deleting products:", error);
		throw error;
	}
}
</script>

<template>
    <div v-if="props.show" class="popup-container" @click.stop>
        <div class="confirmation-content">
            <h1>¿Seguro que desea borrar <b>"{{ product.productName }}"</b>?</h1>
            <section>
                <button @click="accept">Sí</button>
                <button @click="refuse">No</button>
            </section>
        </div>
    </div>
</template>


<style scoped lang="scss">
.popup-container {
  position: fixed;
  z-index: 888;
  display: flex;
  background-color: rgba(0, 0, 0, 0.209);
  justify-content: center;
  align-items: center;
}

.confirmation-content {
  max-width: 30rem;
  color: black;
  height: 20rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.776);
  z-index: 9999;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
section {
    display: flex;
    justify-content: space-between;
}

button {
    background-color: $primary-color;
    width: 40%;
    border-radius: 7px;
    color: white;
    height: 4rem;
}

</style>