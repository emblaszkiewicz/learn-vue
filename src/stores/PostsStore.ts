import { defineStore } from "pinia";
import { generateId } from "@/utils/generateId";
type TPost = {
  id: string;
  author: string;
  title: string;
  category: string;
  content: string;
};

export const usePostsStore = defineStore("PostsStore", {
  state: () => {
    return {
      posts: <TPost[]>[],
    };
  },
  actions: {
    getAll() {
      return this.posts;
    },
    getById(payload: string) {
      return this.posts.find((post) => post.id === payload);
    },
    getByCategory(payload: string) {
      return this.posts.filter((post) => post.category === payload);
    },
    add(payload: any) {
      this.posts.push({
        id: generateId(),
        ...payload,
      });
    },
    delete(payload: number) {
      this.posts.splice(payload, 1);
    },
  },
});
