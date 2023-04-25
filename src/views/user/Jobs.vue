<template>
    <main class="text-white">
        <Navbar />
        <section class="flex flex-col justify-center items-center sm:flex-row">
            <div class="mb-8 sm:mb-0 sm:mr-8">
                <div class="flex flex-col gap-4 justify-center items-center">
                    <h1 class="text-5xl sm:text-8xl text-center font-bold my-4">Get the job you <span
                            class="text-[#531CB3]">crave.</span> </h1>
                    <!-- search input -->
                   <search/>
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




//get the value from the search input


</script>