<template>
    <main class="flex  ">
        <Navbar />
        <section class=" w-[80%] m-auto rounded-lg p-4 shadow-lg  bg-white bg-opacity-20 ">
            <form @submit.prevent="updatePost(form)" method="put" class="flex flex-col bg-[#9191E9]   px-8 py-4 justify-around items-center" enctype="multipart/form-data">
                <!-- hidden input for the method -->
                <input type="hidden" name="_method" value="PUT">
            <input type="file" id="file-upload" name="image" class="hidden bg-white" v-on:change="uploadimage" >
                <label for="file-upload" class="z-20 flex flex-col-reverse  bg-white  items-center justify-center w-40 h-40 rounded-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center  text-black">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
            
            <label for="title" class="text-black font-semibold">Title</label>
            <input type="text" v-model="form.title" class="w-[70%] py-2 rounded" name="title" placeholder="Insert the Title of the Offre ">
            <div v-if="errors.title">
                <span class="text-red-500">{{ errors.title }}</span>
            </div>
            <label for="description" class="text-black font-semibold">Description</label>
            <input type="text" v-model="form.description" name="description" class="w-[70%] h-20 py-2 rounded items-start" placeholder="a little description">
            <div v-if="errors.description">
                <span class="text-red-500">{{ errors.description }}</span>
            </div>
            <label for="tag" class="text-black font-semibold">Tag</label>
            <input type="text" v-model="form.tag"   name="tag" class="w-[70%] py-2 rounded" placeholder="Put The tags of the poste">
             <div v-if="errors.tag">
                <span class="text-red-500">{{ errors.tag }}</span>
             </div>
            <label for="city" class="text-black font-semibold">City</label>
            <input type="text" v-model="form.city" name="city" class="w-[70%] py-2 rounded" placeholder="Insert the city ">
            <div v-if="errors.city">
                <span class="text-red-500">{{ errors.city }}</span>
            </div>
            <label for="type" class="text-black font-semibold">Type</label>
            <input type="text" v-model="form.type_of_post" name="type_of_post" class="w-[70%] py-2 rounded" placeholder=" What is the type of the job (exemple : CDI/PFE) ">
            <div v-if="errors.type">
                <span class="text-red-500">{{ errors.type }}</span>
            </div>
            <button type="submit" class="bg-[#531CB3] mt-4 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#531CB3] hover:bg-opacity-80">
                Update Offre
            </button>
        </form>
        </section>
    </main>


</template>
<script setup>
// updatePost

import Navbar from '@/components/Companies/Navbar.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive , ref } from 'vue';

//update a offre
const router = useRouter();
console.log(router.currentRoute.value.params.id);
let id = router.currentRoute.value.params.id;
let image ="";
let form = reactive({
    title: '',
    description: '',
    tag: '',
    city: '',
    type_of_post: '',
    image: '',
});
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
//get the offre with the id
const getPost = async () => {
    const id = router.currentRoute.value.params.id;
    axios.get("http://127.0.0.1:8000/api/V1/posts/"+id)
    .then((res) => {
        form.title = res.data.data.title;
        form.description = res.data.data.description;
        form.tag = res.data.data.tag;
        form.city = res.data.data.city;
        form.type_of_post = res.data.data.type_of_post;
        form.image = res.data.data.image;
    })
    .catch((err) => {
        console.log(err);
    });
};
getPost();
// update a offre function with the id 
const updatePost = async () => {
    const id = router.currentRoute.value.params.id;
    axios.put("http://127.0.0.1:8000/api/V1/posts/"+id , form)
    .then((res) => {
        form.title = res.data.data.title;
        form.description = res.data.data.description;
        form.tag = res.data.data.tag;
        form.city = res.data.data.city;
        form.type_of_post = res.data.data.type_of_post;
        form.image = res.data.data.image;
    })
    .catch((err) => {
        console.log(err);
    });
    // const id = router.currentRoute.value.params.id;
    // try{
    //     await axios.put("http://127.0.0.1:8000/api/V1/posts/" +id ,Response.data.data).then((res) => {
    //         console.log(res);
    //     });
    //    await router.push('/companies/offres');
    // }
    // catch(err){
    //     // if(err.response.status === 422){
    //     //     errors.value = err.response.data.errors;
    //     // }
    // }

};
   
    // const id = router.currentRoute.value.params.id;
    // let formData = new FormData();
    // formData.append('title', form.title);
    // formData.append('description', form.description);
    // formData.append('tag', form.tag);
    // formData.append('city', form.city);
    // formData.append('type_of_post', form.type_of_post);
    // formData.append('image', form.image);
    // console.log(formData);
    // axios.put("http://127.0.0.1:8000/api/V1/posts/" + id, formData)
        
    //     .then((res) => {
    //             Swal.fire({
    //                     icon: 'success',
    //                     title: 'Success!',
    //                     text: 'the offre has been updated successfully',
    //                     confirmButtonText: 'Ok'
    //                     }).then((result) => {
    //                     if (result.isConfirmed) {
    //                         window.location.href = '/myCompany'; 
    //                     } 
    //                     });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         if(err.response.status == 400){
    //             errors.value = err.response.data.errors;
    //         }
    //         });
    //     };

</script>