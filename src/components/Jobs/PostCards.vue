<template>
    <main>
        <div class="flex justify-around gap-4 flex-wrap">
            <JobCard v-for="card in obj.cards" :CompanyName="card.CompanyName" :CompanyLogo="card.CompanyLogo" :OffreName="card.OffreName" :OffreDesciption="card.OffreDesciption" />
        </div>
    </main>

</template>
<script setup>
import JobCard from '@/components/Home/JobCard.vue'
import { reactive } from 'vue'

const obj = reactive({
    cards : [
        {CompanyName: 'Oracle', CompanyLogo: 'src/assets/images/Oracle.png', OffreName: 'Web Developer', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'Google', CompanyLogo: 'src/assets/images/Google.png', OffreName: 'UX/UI', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'Meta', CompanyLogo: 'src/assets/images/Meta.png', OffreName: 'Big Data', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'Microsoft', CompanyLogo: 'src/assets/images/Microsoft.png', OffreName: 'Data Science', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'Meta', CompanyLogo: 'src/assets/images/Meta.png', OffreName: 'Backend Engineer', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'Oracle', CompanyLogo: 'src/assets/images/Oracle.png', OffreName: 'Software Engineer', OffreDesciption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
    ],
});


</script>