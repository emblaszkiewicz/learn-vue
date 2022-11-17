import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SinglePost from "../views/SinglePost.vue";
import AddPost from "../views/AddPost.vue";
import EditPost from "../views/EditPost.vue";
import SortPage from "@/views/SortPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/post/:id",
      name: "post",
      component: SinglePost,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddPost,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditPost,
    },
    {
      path: "/sort",
      name: "sort",
      component: SortPage,
    },
  ],
});

export default router;
