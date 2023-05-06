<template>
  {{ this.$route.fullPath === '/books' ? checkDisabled() : '' }}
  <div class="row mt-4 justify-content-center">
    <div class="card my-2 mx-2" style="width: 32rem" v-for="book in bookStore.books" :key="book.isbn">
      <img :src="book.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3 class="card-text my-3">name: {{ book.name }}</h3>
        <h3 class="card-text my-3">Category: {{ book.category }}</h3>
        <h3 class="card-text my-3">Author: {{ book.author }}</h3>
        <h3 class="card-text my-3">
          Price: {{ currencyFormatter(book.price) }}
        </h3>
        <h3 class="card-text my-3">ISBN: {{ book.isbn }}</h3>
        <h3 class="card-text my-3" :class="[book.pages < 50 ? 'less' : 'more']">
          Pages: {{ book.pages }}
        </h3>
        <div class="w-100 text-center">
          <a href="#" :id="book.isbn" class="btn btn-primary" @click.prevent="addedToWishlist($event, book)">
            Add To List
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from "../../pinia/store";
export default {
  data: () => ({
    bookStore: useBookStore()
  }),
  methods: {
    addedToWishlist(e, book) {
      this.bookStore.addedToWishlist(book)
      e.target.classList.add('disabled')
    },

    currencyFormatter(value) {
      return this.bookStore.currencyFormatter(value)
    },
    checkDisabled() {
      const buttons = document.getElementsByClassName('disabled')
      for (let index = 0; index < buttons.length; index++) {
        const book = this.bookStore.wishlist.find((ele) => ele.isbn === buttons[index].id)
        if (!book) buttons[index].classList.remove('disabled')
      }
      // buttons.forEach(button => {
      // });
    },
  }
}
</script>

<style>
img {
  height: 450px;
  object-fit: cover;
}

.less {
  color: #ffe000;
}

.more {
  color: #0a7cff;
}
</style>