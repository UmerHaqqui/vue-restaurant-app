<template>
  <img src="../assets/resta.png" alt="img" width="100px" />
  <Header />
      <div class="feild">
  <h2>Order</h2>

            <input type="text" name="address" v-model="menus.dish" /> <br>
            <input type="text" name="address" v-model="menus.quantity" /> <br>
            <input type="text" name="address" v-model="menus.price" /> <br>
            <button type="button" v-on:click="book">Place Your Order Now</button>
        </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
// import { BASE_URL } from '@/config/config'
// import orderSrv from '@/services/orders/orders.js'

export default {
  name: "orders",
  components: {
    Header,
  },
  data() {
    return {
      menus: {
        dish: '',
        quantity: '',
        price: '',
      },
    };
  },
  methods: {
    async book() {
        this.$router.push({
            name: "Home",
          });
    },
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/menus/" + this.$route.params.id);
    this.menus = result.data
  },
};
</script>

<style scoped>
img {
  width: 100px;
}
.feild{
    width: 40%;
    margin: auto;
    border-radius: 5px;

}
h2{
    margin-bottom: 20px;
    color: rgb(85, 84, 84);
}
.feild input{
    width: 100%;
    font-size: 20px;
    background: rgb(240, 238, 238);
    border: none;
    padding: 20px;
    text-align: center;
}
button{
    width: 107.5% ;
    margin-top: 20px;
    border: none;
    font-weight: 600;
    font-size: 23px;
    height: 50px;
    background: rgb(73, 73, 73);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    background: rgb(146, 146, 146);
}
</style>
