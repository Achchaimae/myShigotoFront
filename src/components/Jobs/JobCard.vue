<template>
    <div>
        <div class="bg-white w-64 h-72 text-black rounded-lg mt-4">
            <div class="flex">
                <div class="relative">
                    <img  :src="'http://127.0.0.1:8000/' + CompanyLogo" class="absolute top-8 left-3 w-16" alt />
                    <img src="@/assets/images/card.png" alt />
                </div>
                <div class="p-4"> 
                    <h1 class="font-bold text-xl">{{ CompanyName }}</h1>
                    <p>{{  createdAt }}</p>
                </div>
            </div>

            <div class="p-4">
                <h1 class="text-xl font-bold">{{ OffreName }}</h1>
                <p class="font-regular text-gray-400 font-['Display_Fair']">{{ OffreDesciption }}</p>
            </div>
            <div class="flex justify-end px-4">
                <button
                    class="border-2 rounded-full px-8 py-2 mb-4 border-[#531CB3] hover:bg-[#531CB3] hover:text-white hover:border-white hover:cursor-pointer">Apply</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    CompanyLogo: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String,
        required: true
    },
    OffreName: {
        type: String,
        required: true
    },
    OffreDesciption: {
        type: String,
        required: true
    },
     createdAt: {
        type: String,
        required: true
    }
});
</script>