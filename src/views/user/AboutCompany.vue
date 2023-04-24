
<template>
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

    <main class="profile-page">
        <section class="relative block h-500-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          ">
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style="transform: translateZ(0px)">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
            <div class="container mx-auto px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-between">
                            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="relative">
                                    <img alt="..." :src="mycompany.image"
                                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px ">
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-6 px-3 mt-32 sm:mt-0">
                                    <button 
                                        @click="createConversation(id)"
                                        class="bg-[#531CB3] active:bg-[#531CB3] uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                        type="button">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <h3 class="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                {{ mycompany.FirstName }} {{ mycompany.LastName }}
                            </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                {{ mycompany.address }}
                            </div>
                            <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i> {{ mycompany.email }}
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-phone mr-2 text-lg text-blueGray-400"></i> {{ mycompany.phone }}
                            </div>
                            <div>
                                <span class="text-blueGray-600 mr-2"><i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    {{ mycompany.city }}</span>

                            </div>
                        </div>
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Our IT company specializes in providing custom software development services to clients across a wide range of industries. With a focus on innovation and customer satisfaction, we work closely with our clients to understand their unique needs and develop tailored solutions that meet their goals. Our team of experienced developers and designers use the latest technologies and best practices to deliver high-quality software that is reliable, scalable, and secure. We pride ourselves on our commitment to delivering projects on time and within budget, while maintaining the highest standards of quality and service. Our portfolio includes successful projects for leading companies in healthcare, finance, retail, and more, and we are proud to have received numerous awards and certifications for our work.
                                    </p>
                                    <!-- <a href="#comment" class="font-normal text-[#531CB3]">Show more</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script setup>
import { defineProps } from "vue";
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

const  userId =localStorage.getItem('id');
    const token = localStorage.getItem('token');
const createConversation= (id) => {
  
      if(userId){

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
      }else {
        //push to login
        router.push('/login')
      }
    };
loadInfo();
</script>
  