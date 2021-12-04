<template>
<img src="../assets/resta.png" alt="img">
<Header />
<div class="form">
    <div class="signUp">
        <h1>Add Restaurant In The List</h1>
        <div class="feild">
            <label for="">Enter Your Restaurant's Name</label><br />
            <input type="text" name="name" v-model="restaurant.name" />
        </div>
        <div class="feild">
            <label for="">Enter Your Restaurant's Address</label><br />
            <input type="text" name="address" v-model="restaurant.address" />
        </div>
        <div class="feild">
            <label for="">Enter Your Restaurant's Contact </label><br />
            <input type="number" name="contact" v-model="restaurant.contact" />
        </div>
        <button type="button" v-on:click="addRestaurant">Save</button>
    </div>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: 'Add',
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            alert('Add to list')
            const result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status == 201) {
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    },
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
    }
}
</script>

<style scoped>
img {
    width: 100px;
}

.form {
    width: 50%;
    margin: -5% 0 0 25%;
}

.form .signUp {
    width: 100%;
    background: rgb(231, 230, 230);
    border-radius: 10px;
}

.form .signUp h1 {
    color: rgb(73, 73, 73);
    margin-top: 100px;
    padding: 50px 0 10px 10%;
}

.form .signUp .feild {
    margin-left: 0px;
    margin-top: 20px;
}

.form .signUp .feild label {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 10px 10%;
    color: rgb(73, 73, 73);
}

.form .signUp .feild input {
    width: 80%;
    height: 35px;
    border: none;
    border-radius: 8px;
    margin-left: 10%;
}

.form .signUp button {
    margin: 30px 0 20px 10%;
    padding: 10px 30px;
    font-size: 18px;
    color: #fff;
    background: rgb(73, 73, 73);
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
}

.form .signUp button:hover {
    color: #fff;
    background: rgb(190, 189, 189);
}
</style>
