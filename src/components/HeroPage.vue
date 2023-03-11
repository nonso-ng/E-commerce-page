
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
        
      </div>
      <h4 style="color: #68707d; margin-bottom: 30px"><del>$250.00</del></h4>
      <div class="cart">
        <button class="decrea" @click="$store.commit('decreaseCount')">-</button>
        <div class="count">{{ $store.state.count }}</div>
        <button class="increa" @click="$store.commit('increaseCount')">+</button>
        <button class="btn" @click="$store.commit('resetCount')">
          <img class="broke"  src="../assets/icon-cart.svg" />
        <div>  Add to cart</div>
        </button>
      </div>
      <div class="set-value">
        <input type="number" v-model="$store.state.anotherCount"  placeholder="Set Number"/>
        <button @click="$store.commit('setValue')">Add Number</button>
      </div>
   
    </div>
  </div>
</template>

<script setup>

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
  margin: 15% 25% 0 10%;
}
.hero-right h5{
  color: hsl(26, 100%, 55%);
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 20px;

}

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
.cart .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: hsl(26, 100%, 55%);
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  margin-left: 20px;
  font-family: "Kumbh Sans", sans-serif;
  padding-right: 45px;
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
  border: none;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 7px;
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
  border: none;
  cursor: pointer;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 7px;
}

.set-value{
  margin-top: 10px;
}
.set-value input{
 width: 150px;
 height: 50px;
 border-radius: 10px;
 padding-left: 5px;
 border-color: hsl(26, 100%, 55%) ;
 

}
.set-value button{
  background-color: hsl(26, 100%, 55%);
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  font-family: "Kumbh Sans", sans-serif;
}
</style>

