<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const interval = ref(-1);
const value = ref(0);

const startInterval = () => {
 interval.value = setInterval(() => {
    if (value.value === 100) {
      value.value = 0;
    } else {
      value.value += 10;
    }
 }, 1000);
};

onMounted(startInterval);

onBeforeUnmount(() => {
 clearInterval(interval.value);
});
</script>

<template>
 <div class="text-center">
    <v-progress-circular
      :model-value="value"
      :rotate="360"
      :size="100"
      :width="15"
      color: $primary-color;
    >
      <template v-slot:default> {{ value }} % </template>
    </v-progress-circular>
 </div>
</template>

<style scoped>
.v-progress-circular {
 margin: 1rem;
}
</style>