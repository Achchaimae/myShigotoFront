<template>
    <main>
        <div class="m-4 flex  justify-around gap-4 flex-wrap">
            <CompanyCard v-for="card in company" 
            :key="card.id"
            :CompanyName="card.FirstName" 
            :CompanyLogo="card.image"
            :CompanyLocation="card.city" 
            :id="card.id"
            />
        </div>
    </main>
</template>
<script setup>
import CompanyCard from '@/components/Company/CompanyCard.vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive , ref , onMounted} from 'vue';

const router = useRouter();
//showing all the companies
const companies = ref([]);
const errors = ref([]);
const company = ref([]);

const loadPosts = async () => {
try {
  const res = await axios.get('http://127.0.0.1:8000/api/showCompany');
  const data = res.data;
  company.value = data.data;
  
} catch (err) {
  errors.value.push(err);
}
};

onMounted(loadPosts);


const obj = reactive({
    cards : [],
})

</script>