<script setup lang="ts">
defineProps({
  action: Function,
});
</script>

<template>
  <button class="btn" @click="action">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  margin: 20px 10px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: mediumseagreen;
  color: #ffffff;
  cursor: pointer;
}
</style>
