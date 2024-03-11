<script setup>



</script>
<template>

    <div>
        <v-card v-for="(beach, index) in beaches" :key="index" class="mx-auto" max-width="400">
            <v-img class="align-end text-white" height="200" :src="beach.image" cover>
                <v-card-title>{{ beach.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                Number {{ index + 1 }}
            </v-card-subtitle>

            <v-card-text>
                <div>{{ beach.location }}</div>
                <div>{{ beach.description }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange">
                    Share
                </v-btn>

                <v-btn color="orange">
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
    <template>
  <v-card
    class="mx-auto"
    height="200"
    image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    max-width="200"
    theme="dark"
    title="Card title"
  ></v-card>
</template>





</template>


<style lang="scss"></style>