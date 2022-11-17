<script setup lang="ts">
defineProps<{
  action?: Function;
  variant?: String;
}>();
</script>

<template>
  <button @click.prevent="action" class="btn" :class="variant">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 10px;
  width: 100px;
  border: none;
  border-radius: 15px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: Bahnschrift, serif;
  cursor: pointer;
}
.green {
  background: #44bd32;
}
.red {
  background: #e84118;
}
.blue {
  background: #0097e6;
}
</style>
