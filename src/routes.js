import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import { createRouter, createWebHistory } from 'vue-router'
import RestaurantDetail from './components/RestaurantDetail'
import menus from './components/menus.vue'
import orders from './components/orders.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: 'Login',
        component: Login,
        path: '/Login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/Add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/Update/:id'
    },
    {
        name: 'RestaurantDetail',
        component: RestaurantDetail,
        path: '/restaurant/:id'
    },
    {
        name: 'menus',
        component: menus,
        path: '/menus'
    }
    ,
    {
        name: 'orders',
        component: orders,
        path: '/orders/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;