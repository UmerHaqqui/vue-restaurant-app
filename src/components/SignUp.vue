<template>
<img src="../assets/resta.png" alt="">
<div class="form">
    <div class="signUp">
        <h1>Sign Up</h1>
        <div class="feild">
            <label for="">Name</label><br />
            <input type="text" v-model="name" />
        </div>
        <div class="feild">
            <label for="">Email</label><br />
            <input type="text" v-model="email" />
        </div>
        <div class="feild">
            <label for="">Password</label><br />
            <input type="Password" v-model="password" />
        </div>
        <!-- <div class="feild">
            <label for="">Confirm Password</label><br />
            <input type="Password" v-model="ConfirmPassword" />
        </div> -->
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/Login">Go To Login Page</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            ConfirmPassword: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name, 
                email: this.email,
                password: this.password,
                ConfirmPassword: this.ConfirmPassword
            });
            // console.log(result);
            if (result.status == 201) {
                alert('Sign Up Done')
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'Login'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Login'})
        }        
    }
};
</script>

<style scoped>
img {
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
}

.form {
    width: 30%;
    margin: auto;
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
