<template>
    <main>
        <div class="flex justify-around gap-4 flex-wrap">
            <JobCard v-for="card in offres"
                    :CompanyName="card.title"
                    :CompanyLogo="getImageUrl(card.image)"
                    :OffreName="card.title"
                    :OffreDesciption="card.description"
                    :createdAt="formatDate(card.created_at)" />
        </div>
    </main>

</template>
<script setup>
import JobCard from '@/components/Home/JobCard.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive , ref , onMounted} from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const router = useRouter();
//showing all the posts
const posts = ref([]);
const errors = ref([]);
const offres = ref([]);

const loadPosts = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/V1/posts');
    const data = res.data;
    offres.value = data.data;
    
  } catch (err) {
    errors.value.push(err);
  }
};
onMounted(loadPosts);

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