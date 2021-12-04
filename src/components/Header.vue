<template>
  <div class="nav">
    <router-link to="/" >Home</router-link>
    <router-link to="/Add" >Add Restaurant</router-link>
    <router-link to="/menus" >Menu</router-link>
    <!-- <router-link to="/orders" >Order Your Meal</router-link> -->

    <a href v-on:click="logout">LogOut</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      alert("Logout Done");
      localStorage.clear();
      this.$router.push({
        name: "Login"
      });
    },
  },
};
</script>

<style scoped>
.nav {
  position: absolute;
  top: 6%;
  right: 0%;
}
.nav a {
  text-decoration: none;
  color: rgb(54, 54, 54);
  font-size: 23px;
  font-weight: 600;
  margin-right: 40px;
  padding: 5px;
}
.nav a:hover {
  background: rgb(218, 217, 217);
}
</style>