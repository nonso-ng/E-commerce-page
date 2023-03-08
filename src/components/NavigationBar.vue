<template>
  <div class="navbar">
    <div class="top-left">
      <img src="../assets/logo.svg" />
      <div class="list">
        <ul style="color: #68707d;">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>

    <div class="top-right">
      <img class="cart" style="height: 20px; width: 20px;" src="../assets/icon-cart.svg" />
      <img class="avatar" src="../assets/image-avatar.png" />
    </div>
  </div>
  <hr />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.3% 0% 1.3% 0%;
}

.top-left{
    display: flex;
    align-items: center;
}

.top-left img{
    align-items: center;
}
.top-right{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40%;
 
}

 .cart {
  margin-bottom: 4px;
  filter: invert(1%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
  cursor: pointer;
}
.avatar{
  width: 40%;
  height: 40%;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.4s all ease;
}
.avatar:hover{
  border: 2px solid hsl(26, 100%, 55%);
  border-radius: 50%;

}

.list ul {
  display: flex;
  font-family: 'Kumbh Sans', sans-serif;
  margin-left: 20%;
}
.list ul li {
  margin-right: 18%;
  list-style: none;
}


</style>
