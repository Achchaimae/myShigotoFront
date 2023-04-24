<template>
    <div class="mt-8 flex justify-center">
      <button type="button" class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center" @click="searchPosts('UI')">
        UX/UI
      </button>
      <button type="button" class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center" @click="searchPosts('Web Developer')">
        Web Developer
      </button>
      <button type="button" class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center" @click="searchPosts('Data Science')">
        Data Science
      </button>
    </div>
  </template>
  
  <script setup>
    import axios from 'axios';
  
    const searchPosts = async (tag) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/V1/posts/tag/${tag}`);
        const posts = response.data;
       const data=posts[0];
        console.log(data);

        
        
      } catch (error) {
        // alert('Something went wrong')
        console.error(error);
      }
    };
  </script>
  