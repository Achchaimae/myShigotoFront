<template>
    <main>
      <Navbar />
      <section>
        <form @submit.prevent="register" method="post" class="text-black flex flex-col w-[50%] gap-4 p-8 rounded-lg mx-auto bg-[#CFCFFA] items-center justify-around" enctype="multipart/form-data">
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
  
          <!-- for FirstName -->
          <div class="relative ">
            <input autocomplete="off" id="FirstName" v-model="form.FirstName"  type="text"
              class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="Enter Your First Name" />
            <label for="FirstName"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your First Name</label>
          </div>
                 <!-- for LastName -->
                 <div class="relative ">
                    <input autocomplete="off" id="LastName" v-model="form.LastName" type="text"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Last Name" />
                    <label for="LastName"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Last Name</label>
                </div>

                <!-- for email -->
                <div class="relative ">
                    <input autocomplete="off" id="email" v-model="form.email" type="email"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address" />
                    <label for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                        Address</label>
                </div>

                 <!-- for Password -->
                 <div class="relative ">
                    <input autocomplete="off" id="Password" v-model="form.password" type="Password"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Password" />
                    <label for="Password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Password</label>
                </div>

                <!-- for Password -->
                <div class="relative ">
                    <input autocomplete="off" id="ConfirmPassword" v-model="form.confirm_password" type="password"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Confirm Your Password" />
                    <label for="ConfirmPassword"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Your Password</label>
                </div>

                <!-- for Phone -->
                <div class="relative ">
                    <input autocomplete="off" id="Phone" v-model="form.phone" type="tel"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Phone Number" />
                    <label for="Phone"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Phone Number</label>
                </div>

                <!-- for Adreesse -->
                <div class="relative ">
                    <input autocomplete="off" id="Adresse" v-model="form.address" type="Adresse"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your Adresse" />
                    <label for="Adresse"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your Adresse</label>
                </div>

                <!-- for City -->
                <div class="relative ">
                    <input autocomplete="off" id="City" type="text" v-model="form.city"
                        class="peer placeholder-transparent h-10 py-4   w-[40vw] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter Your City" />
                    <label for="City"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter Your City</label>
                </div>

               

                
                <button class="bg-[#531CB3] px-4 py-2 rounded-full text-white"  >
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
    role: 'user',
});

let errors = ref('');
const uploadimage = (e) => {
    form.image = e.target.files[0];
    console.log(form.image);
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

        })
        .catch((err) => {
            console.log(err.response.data.message);
            errors.value = err.response.data.message;
        });
};


</script>