import axios from "axios";
import { defineStore } from "pinia";

export const useBookStore = defineStore("items", {
  state: () => ({ books: [], wishlist: [] }),
  actions: {
    async findAll() {
      const res = await axios.get("http://localhost:3000/books");
      this.books = await res.data;
    },
    addedToWishlist(book) {
      const findBook = this.wishlist.find(
        (ele) => ele.isbn === book.isbn,
      );
      if (findBook) return;
      this.wishlist.push(book);
    },
    removeFromWishlist(isbn) {
      this.wishlist.splice(
        this.wishlist.findIndex((ele) => ele.isbn === isbn),
        1,
      );
    },
    currencyFormatter(value) {
      return Intl.NumberFormat("ar-SA", {
        style: "currency",
        currency: "SAR",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
});
