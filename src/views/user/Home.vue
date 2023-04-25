<template>
  <div class="text-white scroll-smooth">
    <Navbar />
    <section
      class="flex flex-col gap-8 md:flex-row text-white items-center justify-center w-5/6 mx-auto"
    >
      <div class="w-full">
        <div class="text-center">
          <p class="font-['Anton'] text-5xl md:text-7xl font-semibold">
            One step closer to
          </p>
          <p class="font-['Bakbak-One'] text-4xl md:text-6xl p-4 text-[#9191E9]">Your Dream Job</p>
        </div>
        <div class="relative text-gray-600 w-full">
          <input
            type="search"
            name="search"
            v-model="searchValue"
            @input="search"
            placeholder="Job title or keyword"
            class="bg-white h-10 px-5 pr-10 rounded-full w-full text-sm focus:outline-none"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
          <div class="bg-white flex flex-col gap-2 rounded-lg px-4">
              <div v-for="result in resultSearch" class="flex justify-between">
                <p>{{ result.title }}</p>
                <button >
                  <a href="#card" class="scroll-smooth">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                
                </button>
              </div>
            </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <img src="@/assets/images/herocopy.png" alt="hero images" class="w-full"/>
      </div>
      
    </section>
    <img src="@/assets/images/decor2.png" alt="" class="w-44 mx-auto -mt-32" />
    <section
      class="flex justify-center flex-col items-center text-white h-auto"
    >
      <p class="text-white py-2">
        let us help you find a job that suits you the best!
      </p>
      <div class="flex justify-between gap-2">
        <div class="flex flex-col text-center">
          <div class="font-[Anton]">20M+</div>
          <div class="font-['Scope-One']">users</div>
        </div>
        <div class="flex flex-col text-center">
          <div class="font-[Anton]">500K+</div>
          <div class="font-['Scope-One']">jobs</div>
        </div>
        <div class="flex flex-col text-center">
          <div class="font-[Anton]">100+</div>
          <div class="font-['Scope-One']">partners</div>
        </div>
      </div>
      <img src="@/assets/images/decor4.png" alt="" />
    </section>
    <section class="text-white">
      <div class="font-semibold text-4xl myt-2 leading-12 pl-4">
        Get your <span class="text-[#531CB3]"> dream job</span> easily
        with just your gadget
      </div>
    </section>
    <StepHome />
    <div class="font-semibold text-4xl myt-2 leading-12 pl-4 text-center">
      <span class="text-[#531CB3]">Latest</span> Jobs Opportunitys
    </div>
    <PostCards id="card" />
    <Footer />
  </div>
</template>

<script setup>
// //import the  components
import Navbar from "@/components/Navbar.vue";
import StepHome from "@/components/Home/StepHome.vue";
import PostCards from "@/components/Home/PostCards.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

//search job
const router = useRouter();
const searchValue = ref("");
const resultSearch = ref('');
const searchJob = async () => {
  await axios
    .get(`http://127.0.0.1:8000/api/V1/posts/search/${searchValue.value}`)
    .then((res) => {
      resultSearch.value = res.data;
      console.log(resultSearch.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
const search = () => {
  console.log(searchValue.value);
  if (searchValue.value == "") {
    resultSearch.value = "";
  } else {
    searchJob();
  }
};
</script>
