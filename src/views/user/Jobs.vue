<template>
    <main class="text-white">
        <Navbar />
        <section class="flex flex-col justify-center items-center sm:flex-row">
            <div class="mb-8 sm:mb-0 sm:mr-8">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h1 class="text-5xl sm:text-8xl text-center font-bold my-4">Get the job you <span
                            class="text-[#531CB3]">crave.</span> </h1>
                    <!-- search input -->
                    <div class="relative text-gray-600 w-full sm:w-[70%]">
                        <input 
                        type="text" 
                        v-model="store.searchByName"
                        placeholder="Job title or keyword"
                        class="bg-white h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none" 
                        />
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
                    <!-- tags -->
                    <tags class="sm:flex" />
                </div>
            </div>
            <div class="w-full sm:w-auto">
                <img src="@/assets/images/jobhero.png" alt="">
            </div>
        </section>


        <h1 class="text-4xl font-bold px-4 mt-4">Random Posts May You Like</h1>
        <Cards class=" mt-12" />
        <Footer />
    </main>
</template>
<script setup>
// //import the  components

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Cards from "@/components/Jobs/PostCards.vue";
import Tags from "@/components/Jobs/Tags.vue";
import search from "@/components/Jobs/Search.vue";
import { ref } from "vue";
import { conversationStore } from "@/store/conversationStore";

const store = conversationStore();
console.log(store.searchByName);


//get the value from the search input


</script>