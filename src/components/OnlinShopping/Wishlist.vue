<template>
  <div class="container d-flex justify-content-center align-items-center mt-5 pt-5 text-danger"
    v-if="!bookStore.wishlist.length">
    <h1>Sorry You Don't Have Wish List !</h1>
  </div>
  <table class="table my-5" v-if="bookStore.wishlist.length">
    <thead>
      <tr>
        <th scope="col">isbn</th>
        <th scope="col">name</th>
        <th scope="col">category</th>
        <th scope="col">pages</th>
        <th scope="col">author</th>
        <th scope="col">price</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book, index in bookStore.wishlist" :key="index">
        <th scope="row">{{ book.isbn }}</th>
        <td>{{ book.name }}</td>
        <td>{{ book.category }}</td>
        <td>{{ book.pages }}</td>
        <td>{{ book.author }}</td>
        <td>{{ currencyFormatter(book.price) }}</td>
        <td>
          <a href="#" class="btn btn-danger" @click.prevent="removeFromWishlist(book.isbn)">Remove</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useBookStore } from "../../pinia/store";
export default {
  data: () => ({
    bookStore: useBookStore(),
  }),
  methods: {
    removeFromWishlist(isbn) {
      this.bookStore.removeFromWishlist(isbn)
    },
    currencyFormatter(value) {
      return this.bookStore.currencyFormatter(value)
    },
  }
}
</script>

<style></style>