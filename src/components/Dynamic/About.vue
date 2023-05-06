<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://m.media-amazon.com/images/I/51UNGhBV7OL._SX330_BO1,204,203,200_.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://m.media-amazon.com/images/I/410Dh43MRXL._SX258_BO1,204,203,200_QL70_ML2_.jpg"
          class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://m.media-amazon.com/images/I/4164GkhDBXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  img{
    height: 700px;
    object-fit: cover;
  }
</style>