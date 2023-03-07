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
      <p>SNEAKER COMPANY</p>
      <h2>Fall Limited Edition<br />Sneakers</h2>
      <p>
        These low profile Sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div class="price">
        <h2>$125.00</h2>
        <h3>50%</h3>
      </div>
      <div class="cart">
        <div>-</div>
        <div>0</div>
        <div>+</div>
        <button class="btn">
            <img class="broke" src="../assets/icon-cart.svg"/>
            Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
}

.hero-left {
  margin: 10% 0% 0% 10%;
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
}

.hero-right .price{
    display: flex;
    
}
.price h3{
    color: hsl(26, 100%, 55%);
    background-color: hsl(25, 100%, 94%);
}
.cart{
    display: flex;
}
.cart button{
    background-color:hsl(26, 100%, 55%) ;
    width: 280px;
    height: 50px;
    border: none;
    border-radius: 12px;
    color: white;
}


</style>
