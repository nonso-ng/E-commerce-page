
  
<script>
export default{
  props:["boy"]
}

</script>

<template>
  <div class="hero">
    <div class="hero-left">
      <img
        style="width: 75%; height: 75%; border-radius: 2%"
        src="../assets/image-product-1.jpg"
      />
      <div class="hero-thumbnail">
        <img src="../assets/image-product-1-thumbnail.jpg" />
        <img src="../assets/image-product-2-thumbnail.jpg" />

        <img src="../assets/image-product-3-thumbnail.jpg" />

        <img src="../assets/image-product-4-thumbnail.jpg" />
      </div>
    </div>
    <div class="hero-right">
      <h5>
        SNEAKER COMPANY
      </h5>
      <h1 style="font-weight: 800; margin-bottom: 30px; font-size: 45px">
        Fall Limited Edition<br />Sneakers
      </h1>
      <p style="color: #68707d; margin-bottom: 20px; line-height: 1.5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div class="price">
        <h2>$125.00</h2>
        <h4>50%</h4>
        <h1>{{ boy }}</h1>
      </div>
      <h4 style="color: #68707d; margin-bottom: 30px"><del>$250.00</del></h4>
      <div class="cart">
        <h2 class="decrea" @click="store.methods.decreaseCount">-</h2>
        <div class="count">{{ store.state.counter }}</div>
        <h2 class="increa" @click="store.methods.increaseCount">+</h2>
        <button class="btn">
          <img class="broke" src="../assets/icon-cart.svg" />
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store')
</script>










<style scoped>
.hero {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  font-family: "Kumbh Sans", sans-serif;
}

.hero-left {
  margin: 10% 0% 0% 20%;
}
.hero-thumbnail {
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-top: 5%;
}

.hero-thumbnail img {
  width: 20%;
  height: 20%;
  border-radius: 10%;
  transition: 0.4s all ease;
  border: 2px solid #ffffff;
}

.hero-thumbnail img:hover {
  border: 2px solid hsl(26, 100%, 55%);
  background-color: #ffffff;
  opacity: 0.6;
}

.hero-right {
  margin: 20% 25% 0 10%;
}
.hero-right h5{
  color: hsl(26, 100%, 55%);
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 20px;

}
/* style="
          color: hsl(26, 100%, 55%);
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        " */
.hero-right .price {
  display: flex;
  margin-bottom: 10px;
}

.price h4 {
  display: flex;
  color: hsl(26, 100%, 55%);
  background-color: hsl(25, 100%, 94%);
  align-items: center;
  padding: 0% 1.5% 0% 1.5%;
  border-radius: 7px;
  margin-left: 5%;
}
.cart {
  display: flex;
}
.cart button {
  background-color: hsl(26, 100%, 55%);
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  margin-left: 20px;
  font-family: "Kumbh Sans", sans-serif;
}
.cart .increa {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fd;
  height: 50px;
  width: 50px;
  color: hsl(26, 100%, 55%);
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
}

.cart .count {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fd;
  height: 50px;
  width: 50px;
  color: black;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
}

.cart .decrea {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fd;
  height: 50px;
  width: 50px;
  color: hsl(26, 100%, 55%);
  border-radius: 12px 0 0 12px;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
}
</style>

