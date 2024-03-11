<script setup></script>

<template>
	<section>
		<div class="logo-container">
			<img src="/images/banner-logo.svg" />
		</div>
		<h1>
			<span class="title-white">Print</span>
			<span class="title-purple">Go</span>
		</h1>
		<h2>Haciendo tangible lo inimaginable.</h2>
		<form>
			<div class="searchbar">
				<input type="text" />
				<input type="submit" />
			</div>
		</form>
	</section>
</template>

<style lang="scss" scoped>
h1 {
	font-size: 4rem;
	font-weight: 700;
	.title-white {
		color: white;
	}
	.title-purple {
		color: #d094ff;
	}
}
h2 {
	font-size: 2rem;
	font-weight: 500;
	color: white;
}
section {
	gap: 1rem;
	font-family: "Poppins", sans-serif;
	background-image: url(/images/banner_image.jpg);
	background-size: auto 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.logo-container {
	height: 30rem;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 100%;
		object-fit: contain;
	}
}
</style>
