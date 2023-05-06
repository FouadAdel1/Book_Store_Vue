<template>
  <div class="card d-flex justify-content-center align-items-center m-auto mt-5 py-4" style="width: 38rem;">
    <h1>{{ counter }}</h1>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <div class="d-flex justify-content-around">
        <a href="#" class="btn btn-success fs-4" @click.prevent="counter++">+</a>
        <a href="#" class="btn btn-danger fs-4" @click.prevent="counter--">-</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ counter: 0 })
}
</script>

<style></style>