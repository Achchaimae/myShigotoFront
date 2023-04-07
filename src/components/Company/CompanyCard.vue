<template>
     <div class="bg-[#9191E9] w-96 h-44 justify-center flex flex-col rounded-lg p-4 ">
                <div class="flex gap-4">
                    <div class=" bg-white p-2 w-20 h-20 rounded flex justify-center items-center text-center">

                        <img :src="CompanyLogo"  alt="">
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-3xl font-semibold">{{ CompanyName }}</h2>
                        <p>{{ CompanyLocation }}</p>
                    </div>

                </div>
                <div class="flex justify-end gap-4">
                    <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 rounded-full px-4 py-1 hover:bg-[#531CB3] ">
                        Offre
                    </button>
                    <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 rounded-full px-4 py-1 hover:bg-[#531CB3] ">
                        About
                    </button>
                    <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 rounded-full px-4 py-1 hover:bg-[#531CB3] ">
                        Q&A
                    </button>
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
    CompanyLocation: {
        type: String,
        required: true
    }
});
</script>