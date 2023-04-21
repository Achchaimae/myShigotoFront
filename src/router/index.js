
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
import apply from '@/views/user/ApplyForm.vue'
import CompanyProfile from '@/views/company/CompanyProfile.vue'

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
        component: Login,
        meta : {
            AlreadyLogin : true
        }
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
        meta : {
            AlreadyLogin : true
        }
    },
    {
        path: '/Jobs',
        name : 'Jobs',
        component: Jobs
    },
    {
        path : '/Messages',
        name : 'Messages',
        component : Messages,
        meta : {
            requiresAuth : true
        }
    },
    {
        path : '/myCompany',
        name : 'myCompany',
        component : myCompany,
        meta : {
            companyAuth : true
        }
    },
    {
        path : '/ChatCompany',
        name : 'ChatCompany',
        component : ChatCompany,
        meta : {
            companyAuth : true
        }
    },
    {
        path: '/Application',
        name: 'Application',
        component: application,
        meta : {
            companyAuth : true
        }
    },
    {
        path: '/SuperAdmin',
        name: 'SuperAdmin',
        component: superAdmin,
        meta : {
            superadmin : true
        }
    },
    {
        path: '/add-offre',
        name: 'add-offre',
        component: addoffre,
       meta : {
            companyAuth : true
        }
        
    },
    {
        path :'/edit-offre/:id',
        name : 'edit-offre',
        companyAuth : editoffre
    },
    {
        path: '/apply/:id',
        name: 'Apply',
        component: apply
    }, 


];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(localStorage.getItem('token') == null) {
            next({
                path: '/Login',
                params: { nextUrl: to.fullPath }
            })
        } else if (localStorage.getItem('role') == 'apprenant') {
            next()
        }
    } else if(to.matched.some(record => record.meta.superadmin)) {
        if(localStorage.getItem('token') == null) {
            next({
                path: '/Login',
                params: { nextUrl: to.fullPath }
            })
        } else if (localStorage.getItem('role') == 'superadmin') {

            next()
        }
        else{
            next({
                path: '/Login',
                params: { nextUrl: to.fullPath }
            })
        }
    }
    else if(to.matched.some(record => record.meta.companyAuth)) {
        if(localStorage.getItem('token') == null) {
            next({
                path: '/Login',
                params: { nextUrl: to.fullPath }
            })
        } else if (localStorage.getItem('role') == 'company') {
            next()
        }
        else{
            next({
                path: '/Login',
                params: { nextUrl: to.fullPath }
            })
        }
    }
     else {
        next()
    }
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.AlreadyLogin)) {
        if(localStorage.getItem('token') == null) {
            next()
        } else {
            next({ name: 'Home' })
        }
    } else {
        next()
    }
})




export default router;