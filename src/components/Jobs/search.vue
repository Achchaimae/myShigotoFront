
<template>
<div class="relative text-gray-600 w-full sm:w-[70%]">
    <input 
    type="search" 
    v-model="searchValue" 
    @submit="search"
    placeholder="Job title or keyword"
    class="bg-white h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none" />
    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve" width="512px" height="512px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
    </button>
</div>
</template>
<script setup>
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SearchCard from '@/components/Jobs/SearchCard.vue'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
//get the value from the search input
const searchValue = ref("");

// console.log('tesssst');

//search function
const search = () => {
    // console.log(searchValue.value);
   
    router.push({ name: 'search', params: { searchValue: searchValue.value } });
    searchPosts(searchValue.value);
    // console.log(searchValue.value);


};
const router = useRouter();

const searchPosts = async (title) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/V1/posts/search/${searchValue}`);

    data.value = response.data;
    console.log(data.value);
  } catch (error) {
   
    console.error(error);
  }
};
// to get how much hour ago the post was created
const formatDate = (date) => {
  return dayjs(date).fromNow();
};

// function to get the full URL of an image
const getImageUrl = (imageName) => {
  return `http://localhost:8000/storage/${imageName}`;
};

const obj = reactive({
  cards: [],
});
</script>