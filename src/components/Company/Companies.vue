<template>
    <main>
        <div class="m-4 flex  justify-around gap-4 flex-wrap">
            <CompanyCard v-for="card in obj.cards" :CompanyName="card.CompanyName" :CompanyLogo="card.CompanyLogo" :CompanyLocation="card.CompanyLocation" />
        </div>
    </main>
</template>
<script setup>
import CompanyCard from '@/components/Company/CompanyCard.vue'
import { reactive } from 'vue'

const obj = reactive({
    cards : [
        {CompanyName: 'Oracle', CompanyLogo: 'src/assets/images/Oracle.png', CompanyLocation: 'Rabat'},
        {CompanyName: 'Google', CompanyLogo: 'src/assets/images/Google.png', CompanyLocation: 'Casablanca'},
        {CompanyName: 'Meta', CompanyLogo: 'src/assets/images/Meta.png', CompanyLocation: 'Rabat'},
        {CompanyName: 'Microsoft', CompanyLogo: 'src/assets/images/Microsoft.png', CompanyLocation: 'Rabat'},
        {CompanyName: 'Meta', CompanyLogo: 'src/assets/images/Meta.png', CompanyLocation: 'Rabat'},
        {CompanyName: 'Oracle', CompanyLogo: 'src/assets/images/Oracle.png', CompanyLocation: 'Rabat'},
        
    ],
})
</script>