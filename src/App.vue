<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import Books from "./views/Books/Books-List.vue";
import { ref } from "vue";
const visability = ref(false);
const toggle = (): void => {
  visability.value = !visability.value;
};
</script>

<template>
  <h1>Vue learn!</h1>
  <button @click="toggle">Show books!</button>
  <Books v-if="visability" />
</template>

<style scoped></style>
