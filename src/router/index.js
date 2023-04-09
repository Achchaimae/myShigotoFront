
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/Home.vue'
import Company from '@/views/user/Companies.vue'
import Login from '@/views/user/Login.vue'
import Register from '@/views/user/Register.vue'
import Jobs from '@/views/user/Jobs.vue'
import Messages from '@/views/user/Messages.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Company',
        name: 'Company',
        component: Company 
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
        path: '/Jobs',
        name : 'Jobs',
        component: Jobs
    },
    {
        path : '/Messages',
        name : 'Messages',
        component : Messages



        
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;