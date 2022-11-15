<script setup lang="ts">
import ButtonComp from "@/components/ButtonComp.vue";

const emit = defineEmits(["close"])
const handleClose = () => {
  emit("close");
};
</script>

<template>
  <section class="modal">
    <h1>Modal!</h1>
    <ButtonComp :action="handleClose">Close modal!</ButtonComp>
  </section>
</template>

<style scoped>
.modal {
  width: 500px;
  height: 500px;
  background: darkgrey;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
}
</style>