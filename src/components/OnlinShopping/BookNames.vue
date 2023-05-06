<template>
  <ul class="list-group row flex-row justify-content-center mt-5">
    <li class="list-group-item border-1 my-2 mx-2" style="width: 32rem" v-for="book in bookStore.books"
      v-bind:title="book.author" :key="book.isbn">
      {{ book.name }}
    </li>
  </ul>
</template>

<script>
import { useBookStore } from "@/pinia/store";
export default {
  data: () => ({
    bookStore: useBookStore()
  }),
}
</script>

<style></style>