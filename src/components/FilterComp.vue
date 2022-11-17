<script setup lang="ts">
import { usePostsStore } from "@/stores/PostsStore";
import { ref, watch } from "vue";
import PostBox from "@/components/PostBox.vue";

const posts = ref<never[]>([]);
const category = ref<string>("");
const postStore = usePostsStore();
const getPosts = (): void => {
  posts.value = postStore.getByCategory(category.value);
};
watch(category, getPosts);
</script>

<template>
  <select v-model="category" class="select">
    <option>Sport</option>
    <option>Culture</option>
    <option>Music</option>
  </select>
  <section v-if="posts" class="container">
    <PostBox v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<style scoped>
.select {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
  outline: none;
  margin: 20px 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 30px;
}
</style>
