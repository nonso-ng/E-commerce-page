<template>
  <div class="navbar">
    <div class="top-left">
      <font-awesome-icon icon="fa-solid fa-bars" size="lg" class="toggle" />
      <img src="../assets/logo.svg" />
      <div class="list">
        
        <ul style="color: #68707d">
          <font-awesome-icon icon="fa-solid fa-xmark" class="close-menu"  style="color: black; font-size: 2rem; "/>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>

    <div class="top-right">
      <div class="cart-display">
        <img
          class="cart"
          style="height: 25px; width: 25px"
          src="../assets/icon-cart.svg"
        />
        <div class="top-right-display">{{ loadedCount }}</div>
      </div>

      <img class="avatar" src="../assets/image-avatar.png" />
    </div>
  </div>
  <hr />
</template>

<script>

import useCounter from "../composables/counter";
export default {
  setup() {
    const { loadedCount } = useCounter();

    return { loadedCount };
  },
 
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.3% 0% 1.3% 0%;
}

.top-left {
  display: flex;
  align-items: center;
}

.top-left img {
  align-items: center;
}
.top-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
}
.toggle {
  display: none;
}
ul .close-menu{
  display: none;
}

@media (max-width: 800px) {
  .toggle {
    display: flex;
    margin-left: 25px;
    margin-right: 10px;
  }
  .cart-display {
    display: none;
  }
  .avatar {
    width: 10%;
    height: 10%;
  }
}
.cart-display {
  display: flex;
}
.top-right-display {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(26, 100%, 55%);
  color: white;
  width: 20px;
  height: 20px;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 500;
  font-size: small;
  border-radius: 45%;
  position: relative;
  right: 10px;
}

.cart {
  margin-bottom: 4px;
  filter: invert(1%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
    contrast(100%);
  cursor: pointer;
}
.avatar {
  width: 30%;
  height: 30%;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.4s all ease;
}
.avatar:hover {
  border: 2px solid hsl(26, 100%, 55%);
  border-radius: 50%;
}

.list ul {
  display: flex;
  font-family: "Kumbh Sans", sans-serif;
  margin-left: 20%;
}
@media (max-width: 800px) {
  .list {
    display: none;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .5);
    min-height: 100vh;
    position: absolute;
    width: 100vw;
    top: -100%;
    padding: 0;
    z-index: 500;
    margin: 0;
  }
  .list ul{
    flex-direction: column;
    gap: 5vh;
    
    margin-left: 0;
    background-color: white;
    justify-content: flex-start;
    width: 60vw;
    height: 90vh;
    padding-left:6vw ;
    padding-top: 10vh;
   
  }
  ul .close-menu{
    display: none;
    width: 10%;
    margin-top: -7vh;
    margin-bottom: 6vh;
    
  }
  li{
    font-weight: 700;
    color: black;
  }
  .top-left{
    position: relative;
  }
}
.list ul li {
  margin-right: 18%;
  list-style: none;
}
</style>
