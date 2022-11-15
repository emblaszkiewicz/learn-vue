<script setup lang="ts">
import type { TData } from "@/types/types";
defineProps<{
  data?: TData[];
}>();
</script>

<template>
  <section>
    <article class="userBox" v-for="item in data" :key="item.id">
      <span>{{ item.name }}</span>
      <span>{{ item.username }}</span>
      <span>{{ item.email }}</span>
    </article>
  </section>
</template>

<style scoped>
.userBox {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid mediumseagreen;
  max-width: 350px;
  margin: 0 auto;
}
</style>
