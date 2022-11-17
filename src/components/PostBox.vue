<script setup lang="ts">
import ButtonComp from "@/components/ButtonComp.vue";
import { usePostsStore } from "@/stores/PostsStore";
const postStore = usePostsStore();
const props = defineProps({
  post: Object,
  index: Number,
});
</script>

<template>
  <article class="box">
    <h2>{{ props.post.title }}</h2>
    <p><span>Author: </span>{{ props.post.author }}</p>
    <p><span>Category: </span>{{ props.post.category }}</p>
    <p>{{ props.post.content.substring(0, 10) }}...</p>
    <section class="buttons">
      <ButtonComp
        variant="green"
        :action="() => $router.push(`/post/${post.id}`)"
        >Read more</ButtonComp
      >
      <ButtonComp variant="red" :action="() => postStore.delete(index)"
        >Delete
      </ButtonComp>
    </section>
  </article>
</template>

<style scoped>
.box {
  position: relative;
  width: 260px;
  height: 250px;
  background: #718093;
  border-radius: 10px;
  padding: 5px 25px;
}
.buttons {
  display: flex;
  gap: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
}
</style>
