<template>
    <main class="flex">
        <Navbar/>
        <section class="w-[80%] bg-white m-auto h-[90vh] rounded-lg p-4 text-center">
           <table  class="min-w-max w-full table-auto">
            
                <thead>
                    <tr  class="bg-gray-200 text-gray-600 h-14 text-sm py-4 leading-normal">
                        <th>Project</th>
                        <th>CV</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light text-center ">
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">WEB Dev</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">File</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">achchaimae1@gmail.com</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">0682751559</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <button class="bg-green-500 text-white rounded-lg p-2">Accept</button>
                            <button class="bg-red-500 text-white rounded-lg p-2">Refuse</button>
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">WEB Dev</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">File</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">achchaimae1@gmail.com</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">0682751559</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <button class="bg-green-500 text-white rounded-lg p-2">Accept</button>
                            <button class="bg-red-500 text-white rounded-lg p-2">Refuse</button>
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