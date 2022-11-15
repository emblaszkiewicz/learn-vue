<script setup lang="ts">
import type { TData } from "@/types/types";
import { ref } from "vue";
import ButtonComp from "@/components/ButtonComp.vue";
import BoxComp from "@/components/BoxComp.vue";
import ModalComp from "@/components/ModalComp.vue"

const data = ref<TData[]>();
const showModal = ref(false);
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  data.value = await res.json();
};
const clearData = () => {
  data.value = undefined;
};
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <h1>Learn Vue!</h1>
  <section>
    <ButtonComp :action="fetchData">Fetch data!</ButtonComp>
    <ButtonComp :action="clearData">Clear data!</ButtonComp>
    <ButtonComp :action="toggleModal">Show modal!</ButtonComp>
  </section>
  <BoxComp :data="data" />
  <ModalComp :showModal="showModal" v-if="showModal" @close="toggleModal" />
</template>

<style scoped>
</style>
