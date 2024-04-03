<script setup>
</script>
<template>
    <form>
			<div class="searchbar">
				<input
					type="text"
					class="text-input"
					placeholder="haz tu búsqueda aquí"
				/>
				<input type="submit" class="submit-button" />
			</div>
		</form>
</template>
<style lang="scss" scoped>

.searchbar {
	
	position: absolute;

	display: flex;
	justify-content: space-around;
	font-size: 2rem;
	.text-input {
		background-color: rgb(72, 10, 10);
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
	}}
</style>