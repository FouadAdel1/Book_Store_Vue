<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container px-5 p-2">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" @click.prevent="componentName = 'Home'">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="componentName = 'About'">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="componentName = 'Contact'">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <keep-alive>
      <component :is="componentName" />
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/Dynamic/Home.vue'
import About from '@/components/Dynamic/About.vue'
import Contact from '@/components/Dynamic/Contact.vue'
export default {
  data: () => ({
    componentName: 'Home'
  }),
  components: {
    Home,
    About,
    Contact
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  top: -60px;
}
</style>