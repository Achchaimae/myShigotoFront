<template>
    <main class="text-white">
        <Navbar />
        <hero />
        <img src="@/assets/images/arrow.png"  class="mx-auto w-20 -mt-24  " alt="">
        
        <section>
            <div>
            <h1 class="text-5xl text-center font-bold">Most <span class="text-[#531CB3]">Popular</span> Companies</h1>
        </div>
        <Companies />
        </section>
        <Footer />
    </main>
</template>
<script setup>
// //import the  components
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import hero from "@/components/Company/Hero.vue";
import Companies from "@/components/Company/Companies.vue";

</script>