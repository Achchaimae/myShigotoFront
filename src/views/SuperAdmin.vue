<template>
    <main class="text-white">
        <section class="flex text-white justify-between flex-row  m-4">
            <div class="w-36 ">
                <img src="@/assets/images/logo.png" alt="logo" />

            </div>
            <div @click="logout">
                <i class="fa-solid fa-sign-out text-2xl"></i>
            </div>
        </section>
        <section class="w-[90%] bg-white m-auto h-[90vh] rounded-lg p-4 text-center flex flex-col gap-8 text-black">
            <h1 class="text-2xl font-bold">Welcome Back <span class="text-[#9191E9]">Achchaimae Khalaf</span></h1>
            <div class="overflow-x-auto">
                <table class="table-auto min-w-max w-full">

                    <thead>

                        <tr class="bg-gray-200 text-gray-600 h-14 text-sm py-4 leading-normal">
                            <th>Company </th>
                            <th>City </th>
                            <th>Validation Document</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light divide-y divide-gray-200">

                        <tr class="border-b border-gray-200 hover:bg-gray-100 items-center" v-for="companies in company">

                            <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="mr-2">
                            <img class="w-12 h-12 rounded-full object-contain bg-red-300" :src="companies.image" />
                        </div>
                        <div class="text-sm font-semibold">
                            {{ companies.FirstName }}
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ companies.city }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <button class="bg-blue-500 text-white rounded-full p-2 mr-2"
                            @click="download(companies.document_validation)">
                            Download
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <a :href="'mailto:' + companies.email">{{ companies.email }}</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div v-if="companies.validation === 'pending'">
                            <button class="bg-green-500 text-white rounded-lg p-2 mr-2"
                                @click="accept(companies.id)">Accept</button>
                            <button class="bg-red-500 text-white rounded-lg p-2 mr-2"
                                @click="refuse(companies.id)">Refuse</button>
                        </div>
                        <div v-else>
                            {{ companies.validation }}
                        </div>
                    </div>
                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>
<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const router = useRouter();

const test = ref('pending');

const company = ref(null);
const accept = (id) => {
    axios.put('http://127.0.0.1:8000/api/accepted/' + id)
        .then(response => {
            createToast('the company get accepted',
                {

                    showIcon: 'true',
                    type: 'success',
                    position: 'bottom-left',
                })
            //call the function to refresh the page
            companies();


        })
        .catch(error => {
            console.log(error);
        });

}
const refuse = (id) => {
    axios.put('http://127.0.0.1:8000/api/rejected/' + id)
        .then(response => {
            createToast('the company get accepted',
                {
                    showIcon: 'true',
                    type: 'danger',
                    position: 'bottom-left',
                })
            //call the function to refresh the page
            companies();
        })
        .catch(error => {
            console.log(error);
        });
}
//download document
function download(url) {
    const extension = url.split('.').pop();
    axios.get(url, { responseType: 'blob' })
        .then(response => {
            const blob = new Blob([response.data], { type: `application/${extension}` });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `document.${extension}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error(error);
        });
}
const companies = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/showCompany');
        company.value = response.data.data;
        var data = response.data.data;
    } catch (error) {
        console.log(error);
    }
};

function check(status) {
    if (status == 'pending') {
        return true;
    } else {
        return false;
    }
}

onMounted(companies);



//logout

const logout = () => {
    localStorage.removeItem('token')
    //taostify to say that you are logged out
    toast.success('You are logged out')

    router.push('/login')
}



</script>