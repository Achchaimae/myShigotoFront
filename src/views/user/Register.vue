<template>
    <main>
      <Navbar />
      <section>
        <form @submit.prevent="register" method="post" class="text-black flex flex-col w-[50%] gap-4 p-4 rounded-lg mx-auto bg-[#CFCFFA] items-center justify-center" enctype="multipart/form-data">
          <!-- user image -->
          <div x-data="{photoName: null, photoPreview: null}" class="col-span-6 ml-2 sm:col-span-4 md:mr-3">
            <!-- Photo File Input -->
            <input type="file" @change="previewPhoto" v-on:change="uploadimage" ref="photo" class="hidden">
  
            <label class="block text-gray-700 text-sm font-bold mb-2 text-center" for="photo">
              Profile Photo <span class="text-red-600"></span>
            </label>
  
            <div class="text-center">
              <!-- Current Profile Photo -->
              <div class="mt-2" x-show="! photoPreview">
                <img src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" class="w-40 h-40 m-auto rounded-full shadow">
              </div>
              <!-- New Profile Photo Preview -->
              <div class="mt-2" x-show="photoPreview">
                <span class="block w-40 h-40 rounded-full m-auto shadow" x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'" style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');">
                </span>
              </div>
              <button type="button" class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3" @click.prevent="$refs.photo.click()">
                Select New Photo
              </button>
            </div>
          </div>
          <div class="flex flex-row justify-between gap-3 flex-wrap">
             <!-- for FirstName -->
            <div class="relative ">
                <input autocomplete="off" id="FirstName" v-model="form.FirstName"  type="text"
                class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Enter Your First Name" />
                <label for="FirstName"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your First Name</label>
            </div >
                <!-- for error message -->
            <div v-if="errors.FirstName">
                <p class="text-red-500 text-sm">{{ errors.FirstName }}</p>

            </div>
             <!-- for LastName -->
                 <div class="relative ">
                    <input autocomplete="off" id="LastName" v-model="form.LastName" type="text"
                        class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Last Name" />
                    <label for="LastName"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Last Name</label>
                </div>

          </div>
          
                <!-- for email -->
                <div class="relative ">
                    <input autocomplete="off" id="email" v-model="form.email" type="email"
                        class="peer placeholder-transparent h-10 py-4   w-[41vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address" />
                    <label for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                        Address</label>
                </div>
                <!-- for Phone -->
                <div class="relative ">
                    <input autocomplete="off" id="Phone" v-model="form.phone" type="tel"
                        class="peer placeholder-transparent h-10 py-4   w-[41vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Phone Number" />
                    <label for="Phone"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Phone Number</label>
                </div>
                <div class="flex flex-row justify-between gap-3 flex-wrap">
                    <!-- for Password -->
                    <div class="relative ">
                        <input autocomplete="off" id="Password" v-model="form.password" type="Password"
                            class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                            placeholder="Enter Your Password" />
                        <label for="Password"
                            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Password</label>
                    </div>

                    <!-- to confirm Password -->
                    <div class="relative ">
                        <input autocomplete="off" id="ConfirmPassword" v-model="form.confirm_password" type="password"
                            class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                            placeholder="Confirm Your Password" />
                        <label for="ConfirmPassword"
                            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Your Password</label>
                    </div>
                </div>
                <div class="flex flex-row justify-between gap-3 flex-wrap">
                    <!-- for Adreesse -->
                        <div class="relative ">
                            <input autocomplete="off" id="Adresse" v-model="form.address" type="Adresse"
                                class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder="Enter Your Adresse" />
                            <label for="Adresse"
                                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Adresse</label>
                        </div>

                        <!-- for City -->
                        <div class="relative ">
                            <input autocomplete="off" id="City" type="text" v-model="form.city"
                                class="peer placeholder-transparent h-10 py-4   w-[20vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                placeholder="Enter Your City" />
                            <label for="City"
                                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your City</label>
                        </div>
                       
                </div>
                <!-- for status Apprenant/ Company -->
            <div>
                <select v-model="form.status" @change="check" id="status" name="status" class="w-[41vw] h-10 border-2 border-gray-300 rounded-md">
                    <!-- option to show what to do and cant be selected -->
                    <option disabled selected>Choose your position</option>
                    <option value="user">Apprenant</option>
                    <option value="company">Company</option>
                </select>
            </div>
            <!-- upload validation document hidden by default and shown when user select company -->
            
            <div  :class="show ? 'block' : 'hidden'">
                <input type="file" @change="document_validation" class="hidden" id="image" name="image" >

                <label for="image" class="bg-[#531CB3] hover:bg-[#46149d]  px-4 py-2 rounded-lg text-white">Upload your validation document</label>
            </div>
            <!-- loading animation -->
            <div class="flex items-center justify-center space-x-2" bis_skin_checked="1" :class="load ? 'block' : 'hidden'">
                <div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
                <div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
                <div class="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400" bis_skin_checked="1"></div>
	        </div>
               

                
                <button class="bg-[#531CB3] hover:bg-[#46149d] px-4 py-2 rounded-full text-white"  >
                    Register
                </button>
            </form>
        </section>        
    </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive, ref } from "vue";

const router = useRouter();
let image = "";

let form = reactive({
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    image: null,
    confirm_password: '',
    phone: '',
    address: '',
    city: '',
    role: 'apprenant',
    document_validation: '',
    status :''

});
//id the status is company show the upload document
const show = ref(false);
const load = ref(false);

const document_validation = (e) => {
    //while the the file is uploading show the loading animation 
    load.value = true;
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ffxhctpj');
    axios.post('https://api.cloudinary.com/v1_1/dzb9272df/upload', formData)
        .then(response => {
            form.document_validation = response.data.secure_url;
            //after the file is uploaded hide the loading animation
            load.value = false;
        })


};



const errors = ref({});
const uploadimage = (e) => {
    form.image = ""
            let file = e.target.files[0];
            let formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'ffxhctpj');
            axios.post('https://api.cloudinary.com/v1_1/dzb9272df/upload', formData)
                .then(response => {
                    form.image = response.data.secure_url;
                    console.log(form.image)

                })
};
const register = async () => {
    const formData = new FormData();
    formData.append('FirstName', form.FirstName);
    formData.append('LastName', form.LastName);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('confirm_password', form.confirm_password);
    formData.append('address', form.address);
    formData.append('city', form.city);
    formData.append('role', form.role);
    formData.append('phone', form.phone);
    formData.append('image', form.image);
    formData.append('document_validation', form.document_validation);
    formData.append('status', form.status);

        await axios.post("http://127.0.0.1:8000/api/register", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'You have been registered successfully',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/login'; // Replace with your login page URL
                }
            });
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    
};

const check = () => {
    if (form.status == "company") {
        show.value = true;
    } else {
        show.value = false;
    }
};


</script>