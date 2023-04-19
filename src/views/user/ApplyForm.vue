<template>
  <main>
    <Navbar />
    <section>
      <div class="min-h-screen p-6  flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <h2 class="font-semibold text-xl text-gray-600 my-2">Apply for the Job</h2>
            <!-- <p class="text-gray-500 mb-6">Fill all the inputs and submit it.</p> -->

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <form class="lg:col-span-2" @submit.prevent="Apply" method="post">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="FirstName">First Name</label>
                      <input type="text" name="" v-model="form.FirstName" id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                    </div>
                    <div v-if="errors.FirstName">
                        <span class="text-red-500">{{ errors.FirstName }}</span>
                    </div>

                    <div class="md:col-span-5">
                      <label for="LastName">Last Name</label>
                      <input type="text" name="" v-model="form.LastName" id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                    </div>
                    <div v-if="errors.LastName">
                        <span class="text-red-500">{{ errors.LastName }}</span>
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input type="text" name="" v-model="form.email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                         placeholder="email@domain.com" />
                    </div>
                    <div v-if="errors.email">
                        <span class="text-red-500">{{ errors.email }}</span>
                    </div>

                    <div class="md:col-span-5">
                      <label for="Phone">Phone Number</label>
                      <input type="tel" v-model="form.phone" id="Phone" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                         placeholder="+212 555 555 555 " />
                    </div>
                    <div v-if="errors.Phone">
                        <span class="text-red-500">{{ errors.Phone }}</span>
                    </div>

                    <div class="md:col-span-5">
                      <label for="address">Address / Street</label>
                      <input type="text" name="" v-model="form.address"  id="address"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                        placeholder="708 Fairfield Dr.North Miami Beach, FL 33160" />
                    </div>
                    <div v-if="errors.address">
                        <span class="text-red-500">{{ errors.address }}</span>
                    </div>
                    <div class="md:col-span-5">
                      <label for="cv">cv</label>
                      <div class="flex w-full  items-center justify-center bg-grey-lighter">
                        <label
                          class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                          <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span class="mt-2 text-base leading-normal">Select a file</span>
                          <input type='file' @change="uploadFile" name="cv" class="hidden" />
                        </label>
                      </div>
                    </div>
                    <div v-if="errors.cv">
                        <span class="text-red-500">{{ errors.cv }}</span>
                    </div>
                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                      </div>
                    </div>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</main></template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { reactive,  ref } from "vue";
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css' 
const router = useRouter();
let image = "";
const form = ref({
  FirstName: "",
  LastName: "",
  email: "",
  phone: "",
  address: "",
  cv: "",
});
const errors = ref({});
const uploadFile = (e) => {
            let file = e.target.files[0];
            let formData = new FormData();
            console.log(file);
            formData.append('file', file);
            formData.append('upload_preset', 'ffxhctpj');
            axios.post('https://api.cloudinary.com/v1_1/dzb9272df/upload', formData)
                .then(response => {
                    
                  form.value.cv = response.data.secure_url;
                  console.log(response);

                })
};
const Apply = async () => {
  console.log(form.value.cv);
    const id = router.currentRoute.value.params.id;

    const formData = new FormData();
    formData.append("FirstName", form.value.FirstName);
    formData.append("LastName", form.value.LastName);
    formData.append("email", form.value.email);
    formData.append("phone", form.value.Phone);
    formData.append("address", form.value.address);
    formData.append("cv", form.value.cv);
    formData.append("post_id", id);
    
    await axios.post("http://127.0.0.1:8000/api/V1/applies", formData , {
        headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
      .then((res) => {
        createToast('the apply get accepted',
        {
        
        showIcon: 'true',
        type: 'success',
        position: 'bottom-left',
        })
        router.push("/jobs");
      })
      .catch((err) => {
        console.log(err);
      });
  };

</script>