<template>
  <img src="../assets/resta.png" alt="img" />
  <Header />
  <h2>Hello {{ name }} ! Welcome to Our Restaurant Management App</h2>
  <table>
    <tr class="one">
      <td>No.</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td></td>
    </tr>
    <template class="two" v-for="item in restaurants" :key="item.id">
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td style="width: 120px">
          <router-link :to="'/Update/' + item.id">Update</router-link>
          <button type="button" v-on:click="deleteRestaurant(item.id)">
            Delete
          </button>
        </td>
      </tr>
    </template>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

import { BASE_URL } from "@/config/config";

import userSrv from "@/services/users/users";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  methods: {
    async deleteRestaurant(id) {
      console.log(BASE_URL);
      let result = await axios.delete(BASE_URL + "restaurant/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      console.log(BASE_URL);

      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({
          name: "SignUp",
        });
      }
      let result = await axios.get(BASE_URL + "restaurant");
      console.log(result);
      this.restaurants = result.data;
    },
    async srv() {
      let resp = await userSrv.all();
      console.log("srv", resp);
    },
  },
  mounted() {
    this.loadData();
    this.srv();
    console.log(process.env.VUE_APP_XYZ);
  },
};
</script>

<style scoped>
img {
  width: 100px;
}

h2 {
  margin-left: 20%;
  margin-top: 30px;
  color: rgb(51, 51, 51);
}

table {
  width: 60%;
  background: rgb(224, 222, 222);
  border: none;
  position: absolute;
  top: 30%;
  left: 20%;
}

tr td {
  padding: 10px;
  border: 1px solid #000 !important;
}

.one {
  background: rgb(116, 115, 115);
  color: rgb(51, 51, 51);
}

.one td {
  padding: 10px 0 10px 10px;
  color: #ddd;
  font-size: 18px;
  font-weight: 600;
}

.two td {
  padding: 10px 0 10px 10px;
  color: rgb(51, 51, 51);
  font-size: 16px;
}
button {
  background: rgb(51, 51, 51);
  color: #ddd;
  margin-right: 10px;
  float: right;
  border: none;
  padding: 4px;
  cursor: pointer;
}
button:hover {
  background: rgb(139, 139, 139);
}
</style>
