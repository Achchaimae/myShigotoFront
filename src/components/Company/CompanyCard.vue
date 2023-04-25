<template>
    <div class="bg-[#9191E9] w-96 h-44 justify-center flex flex-col rounded-lg p-4 ">
        <div class="flex gap-4">
            <div class=" bg-white p-2 w-20 h-20 rounded flex justify-center items-center text-center">

                <img :src="CompanyLogo" alt="">
            </div>
            <div class="flex flex-col">
                <h2 class="text-3xl font-semibold">{{ CompanyName }}</h2>
                <p>{{ CompanyLocation }}</p>
            </div>

        </div>
        <div class="flex justify-end gap-4">
            <!-- <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 rounded-full px-4 py-1 hover:bg-[#531CB3] ">
                        Offre
                    </button> -->
            <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 w-24 rounded-full px-4 py-1 hover:bg-[#531CB3] ">
                <!-- routerlik with the id of the company -->
                <router-link :to="{ name: 'aboutcompany', params: { id: id } }">About</router-link>

            </button>
            <button class="bg-white border-2 border-[#531CB3] bg-opacity-20 rounded-full px-4 w-24 py-1 hover:bg-[#531CB3] "
                @click="createConversation(id)">
                Messages
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
import { reactive, ref, onMounted } from 'vue';
const router = useRouter()
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
    },
    id: {
        type: Number,
        required: true
    }
});


// const handleClick = (id) => {
//     console.log(`I was clicked ${id}`);
//     console.log(props.CompanyLocation);


// };
const userId = localStorage.getItem('id');
const token = localStorage.getItem('token');
const createConversation = (id) => {

    if (userId) {

        axios.post('http://127.0.0.1:8000/api/conversation', {
            client_id: userId,
            owner_id: id
        },
            {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )
            .then(() => router.push('/messages'))
    } else {
        //push to login
        router.push('/login')
    }
};


</script>