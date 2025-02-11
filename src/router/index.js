// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

// 1) Define your route records
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    }
]

// 2) Create the router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
