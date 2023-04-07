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
        {CompanyName: 'achchaimae', CompanyLogo: 'src/assets/images/Oracle.png', OffreName: 'achchaimae l7m9a', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'l7m9a', CompanyLogo: 'src/assets/images/Google.png', OffreName: 'achchaimae l7m9a', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'crazy', CompanyLogo: 'src/assets/images/Meta.png', OffreName: 'ddd l7m9a', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'msatya', CompanyLogo: 'src/assets/images/Microsoft.png', OffreName: 'achchaimae l7m9a', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'bkaya', CompanyLogo: 'src/assets/images/Meta.png', OffreName: 'achchaimae l7m9a', OffreDesciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
        {CompanyName: 'dawdaw', CompanyLogo: 'src/assets/images/Oracle.png', OffreName: 'achchaimae l7m9a', OffreDesciption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
    ],
});


</script>