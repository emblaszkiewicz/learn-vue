<script setup lang="ts">
import { usePostsStore } from "@/stores/PostsStore";
import { onMounted, ref } from "vue";
import ButtonComp from "@/components/ButtonComp.vue";

const props = defineProps({
  id: String,
});
const post = ref<undefined | {}>({});
const postStore = usePostsStore();
onMounted((): void => {
  post.value = postStore.getById(props.id);
});
</script>

<template>
  <article class="article" v-if="post">
    <h1>{{ post.title }}</h1>
    <h2>Author: {{ post.author }}</h2>
    <h3>Category: {{ post.category }}</h3>
    <p>{{ post.content }}</p>
    <section class="buttons">
      <ButtonComp variant="blue">Edit</ButtonComp>
    </section>
  </article>
</template>

<style scoped>
.article {
  position: relative;
  max-width: 700px;
  margin: 60px auto 0 auto;
}
.buttons {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
