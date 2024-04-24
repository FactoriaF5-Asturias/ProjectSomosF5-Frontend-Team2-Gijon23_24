<script setup>
import { useAuthStore } from "./../../stores/AuthStore";
import HeaderButtons from "./header/HeaderButtons.vue";
import LoggedProfile from "./header/LoggedProfile.vue";
import FactoriaAlert from "./../alerts/FactoriaAlert.vue";
import Navbar from "./header/Navbar.vue";
import Sidebar from "./header/Sidebar.vue";

const authStore = useAuthStore();
</script>

<template>
	<header>
		<FactoriaAlert />

		<div>
			<div id="logotype_container">
				<img class="mobile" src="/images/logotype-responsive.svg" alt="PrintGo logotype"/>
				<img class="desk" src="/images/logotype-printgo.svg" alt="PrintGo logotype"/>
			</div>

			<div id="actions_container">
				<router-link to="/dashboard" exact-active-class="active">
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
					<img src="/icons/icon-shopping-cart.svg" alt="">
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
