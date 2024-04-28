<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from "./../../stores/AuthStore";
import HeaderButtons from "./header/HeaderButtons.vue";
import LoggedProfile from "./header/LoggedProfile.vue";
import FactoriaAlert from "./../alerts/FactoriaAlert.vue";
import Navbar from "./header/Navbar.vue";
import Sidebar from "./header/Sidebar.vue";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();
const authStore = useAuthStore();

const cartProductsCount = ref(cartStore.getItems.length);

watch(() => cartStore.getItems.length, (newCount) => {
  cartProductsCount.value = newCount;
});
</script>

<template>
	<header>
		<FactoriaAlert />

		<div>
			<router-link to="/" id="logotype_container">
				<img class="mobile" src="/images/logotype-responsive.svg" alt="PrintGo logotype"/>
				<img class="desk" src="/images/logotype-printgo.svg" alt="PrintGo logotype"/>
			</router-link>

			<div id="actions_container">
				<router-link to="/dashboard" exact-active-class="active" v-if="authStore.userRole == 'ROLE_ADMIN'">
					<div>
                        <img src="/icons/admin-icon.svg" alt="">
                        <p>Dashboard</p>
					</div>
				</router-link>
				<router-link to="/favorites">
					<div>
						<img src="/icons/icon-heart.svg" alt="" />
						<p>Favoritos</p>
					</div>
				</router-link>

				<router-link to="/cart">
					<div>
						<div id="cart-container">
							<img src="/icons/icon-shopping-cart.svg" alt="">
							<span> {{ cartProductsCount }} </span>
						</div>
					<p>Carrito</p>
					</div>
				</router-link>

				<HeaderButtons v-if="!authStore.isAuthenticated" />
				<LoggedProfile v-if="authStore.isAuthenticated" />
			</div>
			<Sidebar />
		</div>
		<Navbar />

	</header>
</template>

<style lang="scss" scoped>
header {
	font-family: "Poppins", sans-serif;
	position: fixed;
	width: 100%;
	z-index: 100;

	> div {
		background-color: $primary-background;
		height: 10rem;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		filter: drop-shadow(0px 10px 0.5rem rgba(0, 0, 0, 0.31));
	}
}

#logotype_container {
	height: 100%;
	display: flex;
	align-items: center;

	> img {
		height: 80%;
	}
}

#actions_container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	a > div {
		gap: 1rem;
		display: flex;
		align-items: center;
		padding: 0.8rem;
		transition: all 200ms ease-in-out;
		border-radius: 5px;

		p {
			font-weight: 300;
			color: $light-font;
			font-size: 1.4rem;
		}

		img {
			height: 3rem;
		}
	}

	a:hover > div {
		background-color: rgb(72, 72, 72);
	}
}
#cart-container {

	span  {
		background-color: red;
		border-radius: 100%;
		padding: 0.5rem;
		color: white;
		font-weight: 700;
	}
}
.mobile {
		display: none;
	}
@media (max-width: 1000px) {

	.desk {
		display: none;
	}

	.mobile {
		display: inline-block;
	}

	#actions_container {
		display: none;
	}

	header > div {
		gap: 2rem;
	}
}
</style>