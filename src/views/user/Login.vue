<template>
    <main class="text-white">
        <Navbar />
        <section class="flex justify-around m-center  h-[90vh] items-center">
        
        
        <div>
            <div >
                <h1 class=" text-4xl font-bold">Sign in to you account <span class="text-[#9191E9]">.</span></h1>
                <div class="text-xl font-semibold">
                    New? 
                    <a href="#" class="text-[#9191E9] ">Register Now</a>
                </div>
            </div>
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-[#9191E9] to-[#9191E9] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            <h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="relative">
                                    <input autocomplete="off" id="email" name="email" type="text"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Email address" />
                                    <label for="email"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                                        Address</label>
                                </div>
                                <div class="relative">
                                    <input autocomplete="off" id="password" name="password" type="password"
                                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Password" />
                                    <label for="password"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                <div class="relative">
                                    <button class="bg-[#531CB3] text-white rounded-md px-2 py-1">Log in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="motion-safe:animate-bounce "> -->
            <img src="@/assets/images/cuterobot.png" alt="" >
        <!-- </div> -->
        
    </section>
    </main>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
</script>