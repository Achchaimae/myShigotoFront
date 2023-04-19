<template>
    <main class="flex flex-row sm:flex-row gap-4 scroll-none">
      <Navbar class="sm:w-[15]"/>
      <section class="w-full sm:w-[80%] bg-white m-auto h-[90vh] rounded-lg p-4 text-center">
        <div class="overflow-x-auto">
          <table class="table-auto min-w-max w-full">
            <thead>
              <tr class="bg-gray-200 text-gray-600 h-14 text-sm py-4 leading-normal">
                <th class="hidden sm:table-cell">Project</th>
                <th class="hidden sm:table-cell">CV</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light text-center">
              <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="applies in apply">
                <td class="hidden sm:table-cell py-3 px-6 text-left whitespace-nowrap">{{ applies.FirstName }} {{  applies.LasttName }}</td>
                <td class="hidden sm:table-cell py-3 px-6 text-left whitespace-nowrap">File</td>
                <td class="py-3 px-6 text-left whitespace-nowrap">{{ applies.email }}</td>
                <td class="py-3 px-6 text-left whitespace-nowrap">{{ applies.tel }}</td>
                <td class="py-3 px-6 text-left whitespace-nowrap gap-2 flex ">
                    <!-- accept and refuse button  -->
                    <div v-if="applies.status === 'pending'">
                        <button class="bg-green-500 text-white rounded-lg p-2" @click="accept(applies.id)">Accept</button>
                        <button class="bg-red-500 text-white rounded-lg p-2" @click="refuse(applies.id)">Refuse</button>
                    </div>
                    <div v-else>
                        {{ applies.status }}
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
  import Navbar from '@/components/Companies/Navbar.vue'
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { reactive , ref , onMounted} from 'vue';
  import { toast} from 'vue3-toastify';
  import { createToast } from 'mosha-vue-toastify';
  import 'mosha-vue-toastify/dist/style.css' 

  const router = useRouter();


  const accept = (id) => {
   axios.put('http://127.0.0.1:8000/api/accepte/'+id)
    .then(response => {
        createToast('the application  get accepted',
        {
        
        showIcon: 'true',
        type: 'success',
        position: 'bottom-left',
        })


    })

    .catch(error => {
        console.log(error);
    });

}

const refuse = (id) => {
    axios.put('http://127.0.0.1:8000/api/reject/'+id)
    .then(response => {
        createToast('the application get rejected',
        {
        showIcon: 'true',
        type: 'danger',
        position: 'bottom-left',
        })
    })
    .catch(error => {
        console.log(error);
    });
}

  const apply =ref(null);

  const applies = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/showPending');
      apply.value = res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  
onMounted(() => {
  applies();
});
  </script>
  
  <style>
  @media (max-width: 639px) {
    .table-auto {
      overflow-x: scroll;
    }
  }
  </style>
  