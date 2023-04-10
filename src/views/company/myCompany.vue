<template>
    <main class=" flex ">
        
        <Navbar/>
        <section class="w-[80%] bg-white m-auto h-[90vh] rounded-lg p-4 shadow-lg">
            <table class="min-w-max w-full table-auto my-auto">
                <thead>
                    <tr class="bg-[#9191E9] text-white uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left ">Title</th>
                        <th class="py-3 px-6 text-center">Description</th>
                        <th class="py-3 px-6 text-center">City</th>
                        <th class="py-3 px-6 text-left">Type of Offre</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 hover:bg-[#9191E9] hover:bg-opacity-20">
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center font-medium">
                            hey
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center font-medium">
                            hey
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center font-medium ">
                            Achchaimae Khalaf
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center font-medium">
                                Achchaimae Khalaf
                            </div>
                        </td>
                        <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                                
                                <div class="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                                    <a href="">
                                        <i class="fa-solid fa-pen"></i>
                                    </a>
                                </div>
                            
                                <form method="POST" action="">
                                
                                    <button type="submit" class="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                </form>

                            </div>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </section>
    </main>
</template>
<script setup>
import Navbar from '@/components/Companies/Navbar.vue'
</script>