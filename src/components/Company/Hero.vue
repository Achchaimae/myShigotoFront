<template>
    <section class="flex justify-around items-center  mx-8 ">
        <div class="font-bold w-[50%] text-white">
            <div class="text-5xl ">Find your dream company</div>
            <span class="text-[#531CB3] text-4xl">and get your place</span>
            <div class="flex gap-4 mt-4">
                 
                <div class="relative text-gray-600 w-full">
                    <i class="fa-solid  fa-magnifying-glass h-4 w-4 fill-current text-[#531CB3] text-center hover:animate-pulse absolute left-0 top-0 mt-3 ml-4"></i>
                    <input type="search" name="search" placeholder="     Job title or keyword"
                        class="bg-white h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none">
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                        <i class="fa-solid fa-arrow-right h-4 w-4 fill-current text-[#531CB3] text-center hover:animate-pulse"></i>
                    </button>
                </div>
            </div>
        </div>
        <div >
            <img src="@/assets/images/companyHero.png" alt="">
            <!-- <lottie-player src="src/assets/lottiefile/Companyimg.json"  background="transparent"  speed="1" class=""  style="width: 50%; height: 50%;"  loop autoplay></lottie-player> -->
        </div>
    </section>
</template>
<script setup>
import '@lottiefiles/lottie-player'
</script>