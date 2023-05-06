// const routes = [{
//   path:'/'
//   component``

import { createRouter, createWebHistory } from "vue-router";
import BookNames from "@/components/OnlinShopping/BookNames.vue";
import Books from "@/components/OnlinShopping/Books.vue";
import Wishlist from "@/components/OnlinShopping/Wishlist.vue";
const router = createRouter({
  routes: [
    { path: "/", component: BookNames },
    { path: "/books", component: Books },
    { path: "/books/wishlist", component: Wishlist },
  ],
  history: createWebHistory(),
});
export default router;
