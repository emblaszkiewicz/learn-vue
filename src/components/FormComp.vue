<script setup lang="ts">
import { ref } from "vue";
import ButtonComp from "@/components/ButtonComp.vue";
import { usePostsStore } from "@/stores/PostsStore";

const postStore = usePostsStore();
const title = ref<string>("");
const author = ref<string>("");
const category = ref<string>("");
const content = ref<string>("");
const handleSubmit = (): void => {
  const post = {
    title: title.value,
    author: author.value,
    category: category.value,
    content: content.value,
  };
  postStore.add(post);
};
</script>

<template>
  <form class="form">
    <label>Title</label>
    <input class="input" placeholder="Enter title..." v-model="title" />
    <label>Author</label>
    <input class="input" placeholder="Enter author..." v-model="author" />
    <label>Category</label>
    <select class="select" v-model="category">
      <option>Sport</option>
      <option>Culture</option>
      <option>Music</option>
    </select>
    <label>Content</label>
    <textarea
      class="content"
      placeholder="Enter content..."
      v-model="content"
    />
    <ButtonComp variant="green" :action="handleSubmit">Add post</ButtonComp>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.input {
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  outline: none;
}
.select {
  width: 410px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
  outline: none;
}
.content {
  width: 400px;
  height: 200px;
  resize: none;
  border: none;
  border-radius: 5px;
  padding: 10px 0 0 10px;
  outline: none;
}
</style>
