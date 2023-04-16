
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/Home.vue'
import Company from '@/views/user/Companies.vue'
import Login from '@/views/user/Login.vue'
import Register from '@/views/user/Register.vue'
import Jobs from '@/views/user/Jobs.vue'
import Messages from '@/views/user/Messages.vue'
import myCompany from '@/views/company/myCompany.vue'
import ChatCompany from '@/views/company/CompanyChat.vue'
import application from '@/views/company/Application.vue'
import superAdmin from '@/views/SuperAdmin.vue'
import addoffre from '@/views/company/Gestion/AddOffre.vue'
import editoffre from '@/views/company/Gestion/EditOffre.vue'


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
    },
    {
        path : '/myCompany',
        name : 'myCompany',
        component : myCompany
    },
    {
        path : '/ChatCompany',
        name : 'ChatCompany',
        component : ChatCompany
    },
    {
        path: '/Application',
        name: 'Application',
        component: application
    },
    {
        path: '/SuperAdmin',
        name: 'SuperAdmin',
        component: superAdmin
    },
    {
        path: '/add-offre',
        name: 'add-offre',
        component: addoffre
    },
    {
        path :'/edit-offre/:id',
        name : 'edit-offre',
        component : editoffre
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;