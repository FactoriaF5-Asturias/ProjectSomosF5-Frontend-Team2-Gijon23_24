<script setup></script>

<template>
	<section>
		<!-- <div class="logo-container">
			<img src="/images/banner-logo.svg" />
		</div>
		<h1>
			<span class="title-white">Print</span>
			<span class="title-purple">Go</span>
		</h1>
		<h2>Haciendo tangible lo inimaginable.</h2>
		<form>
			<div class="searchbar">
				<input
					type="text"
					class="text-input"
					placeholder="haz tu búsqueda aquí"
				/>
				<input type="submit" class="submit-button" />
			</div>
		</form> -->
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
	gap: 2rem;
	background-image: url(/images/banner_image.png);
	background-size: auto 80rem;
	background-position: center;
	object-fit: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	padding-top: 16rem;
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

.searchbar {
	display: flex;
	justify-content: space-around;
	font-size: 2rem;
	.text-input {
		background-color: white;
		width: 60rem;
		border-radius: 1.5rem 0 0 1.5rem;
		padding: 0 1rem;
		transition: 0.3s ease-in;
		&:focus {
			outline: none;
		}
	}
	.submit-button {
		background-color: #d094ff;
		color: white;
		padding: 1.5rem 3rem;
		border-radius: 0 1.5rem 1.5rem 0;
		transition: 0.1s ease-in;
		&:hover {
			background-color: #914ec4;
			color: white;
		}
		&:focus {
			outline: none;
		}
	}
}
</style>
