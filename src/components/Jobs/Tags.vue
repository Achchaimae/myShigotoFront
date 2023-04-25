<template>
  <div class="mt-8 flex justify-center">
    <button type="button"
      class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center"
      @click="searchPosts('UI')">
      UX/UI
    </button>
    <button type="button"
      class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center"
      @click="searchPosts('Web')">
      Web Developer
    </button>
    <button type="button"
      class="rounded-full px-4 mr-2 bg-[#9191E9] w-24 justify-center text-white p-2  leading-none flex items-center"
      @click="searchPosts('Java')">
      Java
    </button>
  </div>

  <h1 class="text-4xl font-bold px-4  w-full" v-if="data.length > 0">Searched By Tag</h1>
  <div class="flex justify-around gap-4 flex-wrap text-white ">
    <tagCard v-for="card in data" :Offreid="card.id" :CompanyName="card.title" :CompanyLogo="getImageUrl(card.image)"
      :OffreName="card.title" :OffreDesciption="card.description" :createdAt="formatDate(card.created_at)" />
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import tagCard from '@/components/Jobs/tagCard.vue'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const router = useRouter();
//showing all the posts
const posts = ref([]);
const errors = ref([]);
const data = ref([]);
const searchPosts = async (tag) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/V1/posts/tag/${tag}`);
    data.value = response.data;
    console.log(data.value);
  } catch (error) {
    // alert('Something went wrong')
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
  