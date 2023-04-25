<template>
    <main class=" flex md:overflow-y-scroll scrollbar-hidden">
        <Navbar/>
        
        <section class="w-full md:w-[80%] bg-white mx-auto md:m-auto h-auto md:h-[90vh] rounded-lg p-4 shadow-lg overflow-y-scroll scrollbar-hidden">
  <!-- button to add new offre -->
  <div class="flex justify-end my-4">
    <button class="bg-[#9191E9] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#9191E9] hover:bg-opacity-80">
      <a href="/add-offre">Add New Offre</a>
    </button>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full table-auto my-auto">
      <thead>
        <tr class="bg-[#9191E9] text-white uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Title</th>
          <th class="py-3 px-6 text-center">Description</th>
          <th class="py-3 px-6 text-center">City</th>
          <th class="py-3 px-6 text-left">Type of Offre</th>
          <th class="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- loop to show all the data -->
        <tr v-for="offre in offres" :key="offre.id" class="border-b border-gray-200 hover:bg-[#9191E9] hover:bg-opacity-20">
          <td class="py-3 px-6 text-left">
            <div class="flex items-center font-medium">
              {{ offre.title }}
            </div>
          </td>
          <td class="py-3 px-6 text-left">
            <div class="flex items-center font-medium">
              {{ offre.description }}
            </div>
          </td>
          <td class="py-3 px-6 text-left">
            <div class="flex items-center font-medium">
              {{ offre.city }}
            </div>
          </td>
          <td class="py-3 px-6 text-left">
            <div class="flex items-center font-medium">
              {{ offre.type_of_post }}
            </div>
          </td>
          <td class="py-3 px-6 text-center">
            <div class="flex item-center justify-center">
              <div class="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                <RouterLink :to="{name: 'edit-offre', params: {id: offre.id}}">
                  <i class="fa-solid fa-pen"></i>
                </RouterLink>
              </div>
              <button type="submit" class="w-4 mr-2 transform hover:text-red-500 hover:scale-110" @click="deletePost(offre.id)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

    </main>
</template>
<script setup>
import Navbar from '@/components/Companies/Navbar.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive , ref } from 'vue';
// create a post
const router = useRouter();
//showing all the posts
const posts = ref([]);
const errors = ref([]);
const offres = ref([]);
const user_id = localStorage.getItem('id');
//get the offre id to delete it


const loadPosts = async () => {
  try {
    const {data:res} = await axios.get('http://127.0.0.1:8000/api/V1/myPosts', {
      params: {
        user_id: user_id
      }
    });
    offres.value = res;
    
  } catch (err) {
    console.log(err);
  }
};
loadPosts();
// 



const deletePost = async (id) => {
    if(confirm('Are you sure you want to delete this post?')){
    //   console.log(id);
    axios.delete('http://127.0.0.1:8000/api/V1/posts/'+id)
        .then(res => {
            
           //sweet alert to show the message that the post is deleted
           Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'the offre has been added successfully',
                confirmButtonText: 'Ok'
                }).then((result) => {
                if (result.isConfirmed) {
                    loadPosts();
                }
                });
           
        })
        .catch(err => {
            console.log(err);
        })
            

    }
};  


</script>

