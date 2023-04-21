<template>
    <aside class="bg-[#9191E9]  w-[15%] flex flex-col  h-[100vh] sm:w-60 md-62  items-center text-white  ">
        <div class="px-5 py-3 flex flex-col justify-center items-center">
        <img src="@/assets/images/ana.jpg" class="w-16  rounded-full border-4 border-green-500 " alt="">
        <div class="font-[lobster] hidden sm:inline">Achchaimae Khalaf</div>
       
    </div>
    <ul class="w-full flex h-96 flex-col place-content-evenly">
       
            <a href="/myCompany" class="hover:bg-white hover:text-[#531CB3] p-2 ">
                <li>
                    <i class="fa-solid fa-briefcase px-5"></i>
                    <span class="hidden sm:inline">Posts</span>
                </li>
            </a>
            <a href="/ChatCompany" class="hover:bg-white hover:text-[#531CB3] p-2 ">
                <li>
                    
                    <i class="fa-solid fa-envelope px-5"></i>
                    <span class="hidden sm:inline">Messages</span>
                </li>
            </a>
            <a href="/Application" class="hover:bg-white hover:text-[#531CB3] p-2 ">
                <li>
                    <i class="fa-regular fa-file-lines px-5"></i>
                    <span class="hidden sm:inline">Application</span>
                </li>
            </a>

            <a href="" class="hover:bg-white hover:text-[#531CB3] p-2 relative top-48">
            <li>
                <i class="fa-solid fa-gear px-5"></i>
                    <span class="hidden sm:inline">Setting</span>
                </li>
            </a>
            <div @click="logout" class="hover:bg-white hover:text-[#531CB3] p-2 relative top-48">
          
                    <i class="fa-solid fa-sign-out px-5"></i>
                    <span class="hidden sm:inline">Logout</span>
               
            </div>
        
        
    </ul>
    </aside>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';

 //logout
const router = useRouter()
const logout = () => {
    localStorage.removeItem('token')
    //taostify to say that you are logged out
    toast.success('You are logged out')

    router.push('/login')
}


</script>
