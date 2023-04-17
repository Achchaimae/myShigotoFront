<template>
    <main class=" w-[80%] m-auto rounded-lg p-4 shadow-lg  bg-white bg-opacity-20 ">
        <form @submit.prevent="storePost" method="post" class="flex flex-col bg-[#9191E9]   px-8 py-4 justify-around items-center" enctype="multipart/form-data">
            <input type="file" id="file-upload" class="hidden bg-white" v-on:change="uploadimage" name="image" >
                <label for="file-upload" class="z-20 flex flex-col-reverse  bg-white  items-center justify-center w-40 h-40 rounded-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center  text-black">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
            
            <label for="title" class="text-black font-semibold">Title</label>
            <input type="text" v-model="form.title" name="title" class="w-[70%] py-2 rounded" placeholder="Insert the Title of the Offre ">
            <div v-if="errors.title">
                <span class="text-red-500">{{ errors.title }}</span>
            </div>
            <label for="description" class="text-black font-semibold">Description</label>
            <input type="text" v-model="form.description" name="description" class="w-[70%] h-20 py-2 rounded items-start" placeholder="Insert the instruction of the offre ...">
            <div v-if="errors.description">
                <span class="text-red-500">{{ errors.description }}</span>
            </div>
            <label for="tag" class="text-black font-semibold">Tag</label>
            <input type="text" v-model="form.tag" name="tag" class="w-[70%] py-2 rounded" placeholder="Put The tags of the poste">
             <div v-if="errors.tag">
                <span class="text-red-500">{{ errors.tag }}</span>
             </div>
            <label for="city" class="text-black font-semibold">City</label>
            <input type="text" v-model="form.city" name="city" class="w-[70%] py-2 rounded" placeholder="Insert the city ">
            <div v-if="errors.city">
                <span class="text-red-500">{{ errors.city }}</span>
            </div>
            <label for="type" class="text-black font-semibold">Type</label>
            <input type="text" v-model="form.type_of_post"  name="type_of_post" class="w-[70%] py-2 rounded" placeholder=" What is the type of the job (exemple : CDI/PFE) ">
            <div v-if="errors.type">
                <span class="text-red-500">{{ errors.type }}</span>
            </div>
            <button type="submit" class="bg-[#531CB3] mt-4 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#531CB3] hover:bg-opacity-80">
                Add Offre
            </button>
        </form>
    </main>
</template>
<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { reactive , ref } from 'vue';
const router = useRoute();
let image="";

let form = reactive({
    title: '',
    description: '',
    tag: '',
    city: '',
    type_of_post: '',
    image: 'null',
});
const errors = ref({});

const uploadimage = (e) => {
    form.image = e.target.files[0];
    // console.log(form.image);
};
const storePost = async (form) => {
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('tag', form.tag);
    formData.append('city', form.city);
    formData.append('type_of_post', form.type_of_post);
    formData.append('image', form.image);
    

    await axios.post("http://127.0.0.1:8000/api/V1/posts" , formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((response) => {
       console.log(response.data);
    })
    .catch((error) => {
        console.log(error.response.data.errors);
        errors.title = error.response.data.errors.title;
        errors.description = error.response.data.errors.description;
        errors.tag = error.response.data.errors.tag;
        errors.city = error.response.data.errors.city;
        errors.type_of_post = error.response.data.errors.type_of_post;
        errors.image = error.response.data.errors.image;
    });
};
</script>