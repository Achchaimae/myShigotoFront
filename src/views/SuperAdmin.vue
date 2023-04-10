<template>
    <main class="text-white">
        
        <section  class="flex text-white justify-between flex-row  m-4">
            <div class="w-36 ">
                <img src="@/assets/images/logo.png" alt="logo" />
            </div>
            <div>
                <i class="fa-solid fa-sign-out text-2xl"></i>
            </div>
        </section>
        <section class="w-[90%] bg-white m-auto h-[90vh] rounded-lg p-4 text-center flex flex-col gap-8 text-black">
            <h1 class="text-2xl font-bold">Welcome Back <span class="text-[#9191E9]">Achchaimae Khalaf</span></h1>
            <div>
                <table  class="min-w-max w-full table-auto">
            
            <thead>
                <tr  class="bg-gray-200 text-gray-600 h-14 text-sm py-4 leading-normal">
                    <th>Company </th>
                    <th>City </th>
                    <th>Validation Document</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light text-center ">
                <tr class="border-b border-gray-200 hover:bg-gray-100">

                    <td class="py-3 px-6 text-left whitespace-nowrap flex ">
                        <div class="mr-2">
                            <img class="w-12 h-12 rounded-full p-2 object-contain bg-red-300" src="@/assets/images/oracle.png"/>
                        </div>
                         <span>
                            WEB Dev
                        </span>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        File
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        achchaimae1@gmail.com
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        0682751559
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <button class="bg-green-500 text-white rounded-lg p-2">Accept</button>
                        <button class="bg-red-500 text-white rounded-lg p-2">Refuse</button>
                    </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">

                    <td class="py-3 px-6 text-left whitespace-nowrap flex ">
                        <div class="mr-2">
                            <img class="w-12 h-12 rounded-full p-2 object-contain bg-red-300" src="@/assets/images/oracle.png"/>
                        </div>
                        <span>
                            WEB Dev
                        </span>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        File
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        achchaimae1@gmail.com
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        0682751559
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                        <button class="bg-green-500 text-white rounded-lg p-2">Accept</button>
                        <button class="bg-red-500 text-white rounded-lg p-2">Refuse</button>
                    </td>
                </tr> 
                
            </tbody>
       </table>
            </div>
        </section>

    </main>

</template>
<script setup>
</script>