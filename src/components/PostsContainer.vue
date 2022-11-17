<script setup lang="ts">
import PostBox from "@/components/PostBox.vue";
import { usePostsStore } from "@/stores/PostsStore";
import { onMounted, ref } from "vue";

const posts = ref<never[]>([]);
const postStore = usePostsStore();
onMounted((): void => {
  posts.value = postStore.getAll();
});
</script>

<template>
  <section class="container">
    <PostBox
      v-for="(post, index) in posts"
      :key="post.id"
      :index="index"
      :post="post"
    />
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 30px;
}
</style>
