<template>
  <div class="navbar">
    <div class="top-left">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        size="lg"
        class="toggle"
        @click="handleShow"
      />
      <img src="../assets/logo.svg" />
      <div class="list" v-show="show">
        <ul style="color: #68707d">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div class="mobile-list" v-show="close">
        <ul>
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="close-menu"
            style="color: black; font-size: 2rem"
            @click="handleClose"
          />
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
  data() {
    return {
      show: true,
      close: false,
    };
  },

  methods: {
    handleClose() {
      this.close = !this.close;
    },
    handleShow() {
      this.close = true;
    },
  },

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
.list-mobile ul .close-menu {
  display: flex;
}

.mobile-list {
  display: none;
}

@media (max-width: 800px) {
  .navbar {
    position: sticky;
    top: 0;
    background-color: white;
  }
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

  .list {
    display: none;
  }
  .mobile-list {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 155vh;
    position: absolute;
    width: 100vw;
    top: -100%;
    padding: 0;
    z-index: 500;
    margin: 0;
  }
  .mobile-list ul {
    flex-direction: column;
    margin-left: 0;
    background-color: white;
    justify-content: flex-start;
    width: 60vw;
    height: 145vh;
    padding-left: 6vw;
    padding-top: 10vh;
    font-family: "Kumbh Sans", sans-serif;
  }
  .mobile-list ul .close-menu {
    display: flex;
    width: 10%;
    margin-top: -6vh;
    margin-bottom: 9vh;
  }
  .mobile-list ul li {
    font-weight: 700;
    color: black;
    list-style: none;
    margin-bottom: 20%;
  }
  .top-left {
    position: relative;
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

.list ul li {
  margin-right: 18%;
  list-style: none;
}
</style>
