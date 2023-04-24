 <template>
    <aside class="bg-[#9191E9] w-15 sm:w-60 md:w-48 h-screen flex flex-col items-center text-white">
      <div class="px-5 py-3 flex flex-col justify-center items-center">
        <img :src="mycompany.image" class="w-16 h-16 rounded-full border-4 object-contain bg-white p-1 border-green-500" alt="">
        <div class="font-lobster hidden sm:inline">{{ mycompany.FirstName }}</div>
      </div>
      <ul class="w-full flex-1 flex flex-col justify-evenly">
        <a href="/myCompany" class="hover:bg-white hover:text-purple-500 p-2">
          <li class="flex items-center">
            <i class="fa-solid fa-briefcase px-5"></i>
            <span class="hidden sm:inline">Posts</span>
          </li>
        </a>
        <a href="/ChatCompany" class="hover:bg-white hover:text-purple-500 p-2">
          <li class="flex items-center">
            <i class="fa-solid fa-envelope px-5"></i>
            <span class="hidden sm:inline">Messages</span>
          </li>
        </a>
        <a href="/Application" class="hover:bg-white hover:text-purple-500 p-2">
          <li class="flex items-center">
            <i class="fa-regular fa-file-lines px-5"></i>
            <span class="hidden sm:inline">Application</span>
          </li>
        </a>
        <a href="" class="hover:bg-white hover:text-purple-500 p-2">
          <li class="flex items-center">
            <i class="fa-solid fa-gear px-5"></i>
            <span class="hidden sm:inline">
              <!-- Routerlink with id from local storage -->
              <router-link :to="{ name: 'CompanyProfile', params: { id: id }}">Profile</router-link>
            </span>
          </li>
        </a>
        <div @click="logout" class="hover:bg-white hover:text-purple-500 p-2 cursor-pointer">
          <li class="flex items-center">
            <i class="fa-solid fa-sign-out px-5"></i>
            <span class="hidden sm:inline">Logout</span>
          </li>
        </div>
      </ul>
    </aside>
  </template>
 

<script setup>

import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
import { defineProps } from "vue";
//import the navbar
import Navbar from '@/components/Companies/Navbar.vue'
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
const router = useRouter()
//get the id from the route


const id = localStorage.getItem('id');

 //logout

const logout = () => {
    localStorage.removeItem('token')
    //taostify to say that you are logged out
    toast.success('You are logged out')

    router.push('/login')
}




//data
const mycompany = reactive({
  FirstName: '',
  LastName: '',
  image: '',
  email: '',
  image: '',
  address: '',
  city: '',
  phone: '',

});

//show the company info
const loadInfo = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/show/' + id);
    const data = res.data;
    mycompany.FirstName = data.data.FirstName;
    mycompany.LastName = data.data.LastName;
    mycompany.email = data.data.email;
    mycompany.image = data.data.image;
    mycompany.phone = data.data.phone;
    mycompany.address = data.data.address;
    mycompany.city = data.data.city;
    console.log(mycompany.FirstName);
  } catch (err) {
    console.log(err);
  }
};

const userId = localStorage.getItem('id');
const token = localStorage.getItem('token');
const createConversation = (id) => {

  if (userId) {

    axios.post('http://127.0.0.1:8000/api/conversation', {
      client_id: userId,
      owner_id: id
    },
      {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      }
    )
      .then(() => router.push('/messages'))
  } else {
    //push to login
    router.push('/login')
  }
};
loadInfo();



</script>
