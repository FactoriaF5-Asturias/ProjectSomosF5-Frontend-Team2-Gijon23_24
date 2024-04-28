<script setup></script>

<template>
	<section>
	<div class="text-container">
		<h1>
			"Haciendo tangible lo inimaginable."
		</h1>
	</div>
</section>
</template>

<style lang="scss" scoped>

section {
  display: flex;
  align-items: center;
  justify-content: center;


  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
     ), url(/images/bunnerImage-2.jpg);

  height: 50vh;
  width: 100%;
  background-size: cover; 
  background-position:bottom; 
  
}

.text-container {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
}

h1 {
	font-size: 4rem;
	font-weight: 500;
  padding: 0.5rem;
	color: white;
   filter: drop-shadow(0 0 0.75rem black);
}

@media (min-width:1000px) {
  h1 {
    font-size: 5rem;
  }
}

</style>
