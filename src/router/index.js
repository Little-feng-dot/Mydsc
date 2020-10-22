import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Home from '../views/Home/Home.vue'
import Cart from '../views/Cart/Cart.vue'
import Category from '../views/Category/Category.vue'
import Mine from '../views/Mine/Mine.vue'
import Discover from '../views/Discover/Discover.vue'
import Search from '../views/Search/Search.vue'
import Index from '../views/Home/children/Index'
import Electric from '../views/Home/children/Electric'
import Clothing from '../views/Home/children/Clothing'
import Bags from '../views/Home/children/Bags'
import Phone from '../views/Home/children/Phone'
import Computer from '../views/Home/children/Computer'
import Furniture from '../views/Home/children/Furniture'
import MakeUp from '../views/Home/children/MakeUp'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import GoodList from '../views/GoodList/GoodList'
import Detail from '../views/Detail/Detail'
import SearchList from '../views/Search/SearchList'



const routes = [{
        path: '/Cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/Category/:cid',
        name: 'Category',
        component: Category
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        children: [{
                path: 'Index',
                component: Index
            },
            {
                path: 'Electric',
                component: Electric
            },
            {
                path: 'Clothing',
                component: Clothing
            },
            {
                path: 'Bags',
                component: Bags
            },
            {
                path: 'Phone',
                component: Phone
            },
            {
                path: 'Computer',
                component: Computer
            },
            {
                path: 'Furniture',
                component: Furniture
            },
            {
                path: 'MakeUp',
                component: MakeUp
            },
            {
                path: "/Home",
                redirect: "/Home/index"
            }
        ]
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/Discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/Search',
        name: 'Search',
        component: Search
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/GoodList/:gid',
        name: 'GoodList',
        component: GoodList
    },
    {
        path: '/Detail/:did',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/SearchList/:keywords',
        name: 'SearchList',
        component: SearchList
    },
    {
        path: "/",
        redirect: "/Home"
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router