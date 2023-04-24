<template>
  <main  class="flex flex-row sm:flex-row gap-4 scroll-none">
    <Navbar class="sm:w-[15]"/>
    <div class=" w-full sm:w-[80%] mt-2 m-auto h-[90vh] rounded-lg text-center">
      <div class="p-8 bg-white shadow mt-24 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2">
        
          <div class="relative">
            <div
              class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img :src="mycompany.image" alt=""  class="w-48 h-48 bg-indigo-100 mx-auto rounded-full object-contain shadow-2xl flex items-center justify-center ">
            </div>
          </div>

          <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              class="text-white py-2 px-4 uppercase rounded bg-[#9191E9] hover:bg-[#531CB3] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Update
            </button>
            <button
              class="text-white py-2 px-4 uppercase rounded bg-red-700 hover:bg-red-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Delete Account
            </button>
          </div>
        </div>

        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-gray-700">{{ mycompany.FirstName }}</h1>
          <p class="mt-8 text-gray-500">{{ mycompany.address }} , <span class="font-light text-gray-600 mt-3"> {{
            mycompany.city }} </span></p>

          <p class="mt-8 text-gray-500">{{ mycompany.email }}</p>
          <p class="mt-2 text-gray-500">{{ mycompany.phone }}</p>
        </div>

        <div class="mt-12 flex flex-col justify-center">
          <p class="text-gray-600 text-center font-light lg:px-16">
            Our IT company specializes in providing custom software development services to clients across a wide range of
            industries.
            With a focus on innovation and customer satisfaction,
            we work closely with our clients to understand their unique needs and develop tailored solutions that meet
            their goals.
            Our team of experienced developers and designers use the latest technologies and best practices to deliver
            high-quality software that is reliable,
            scalable, and secure. We pride ourselves on our commitment to delivering projects on time and within budget,
            while maintaining the highest standards of quality and service. Our portfolio includes successful projects for
            leading companies in healthcare, finance, retail, and more, and we are proud to have received numerous awards
            and certifications for our work.</p>
          <!-- <button
  class="text-indigo-500 py-2 px-4  font-medium mt-4"
>
  Show more
</button> -->
        </div>

      </div>
    </div>
  </main>
</template>
<script setup>
import { defineProps } from "vue";
//import the navbar
import Navbar from '@/components/Companies/Navbar.vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { reactive, ref, onMounted } from 'vue';
const router = useRouter()
//get the id from the route
const id = router.currentRoute.value.params.id;
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