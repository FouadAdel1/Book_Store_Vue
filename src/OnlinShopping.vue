<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container px-5 p-2">
        <a class="navbar-brand" href="#">Book Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page" href="#">Book Names</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/books" class="nav-link" href="#">Book Store</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/books/wishlist" class="nav-link" href="#">Wish List</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { useBookStore } from './pinia/store'
export default {
  data: () => ({
    bookStore: useBookStore()
  }),
  beforeMount() {
    this.bookStore.findAll()
  }
}

</script>

<style></style>


