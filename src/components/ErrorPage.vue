<template>
  <div>
    <h3>
      Oopss! This page no longer exist, go back to
      <router-link :to="{ name: 'home' }">Home Page</router-link>
    </h3>
    <img src="../assets/error.png" />
  </div>
</template>

<style scoped>
h3 {
  margin-top: 20px;
}
img {
  background-size: cover;
  max-width: 100vw;
  max-height: 90vh;
}
</style>
