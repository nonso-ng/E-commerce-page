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
      <img src="../assets/icon-cart.svg" />
      <img style="width: 40%; height: 40%" src="../assets/image-avatar.png" />
    </div>
  </div>
  <hr />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-left{
    display: flex;
    align-items: center;
}

.top-left img{
    align-items: center;
}

.list ul {
  display: flex;
  font-family: 'Kumbh Sans', sans-serif;
}
.list ul li {
  margin-right: 18%;
  list-style: none;
}
</style>
