<template>
  <section class="flex text-white justify-between flex-row p-4">
    <div class="w-36">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="hidden md:flex justify-between gap-8 font-semibold mt-1">
      <routerLink to="/"> Home </routerLink>
      <routerLink to="/Jobs"> Jobs </routerLink>
      <routerLink to="/company"> Companies </routerLink>
      <routerLink to="/Messages"> Messages </routerLink>
    </div>
    <div class="flex md:hidden">
      <button @click="toggleMenu" class="flex items-center px-3 py-2 rounded text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="!menuOpen" fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M3 7h18v2H3V7zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
        </svg>
      </button>
      <div v-if="menuOpen" class="absolute right-0 top-12 w-48 py-2 bg-gray-800 rounded shadow-xl z-10">
        <routerLink to="/" class="block px-4 py-2 text-white hover:bg-gray-700"> Home </routerLink>
        <RouterLink to="/Jobs" class="block px-4 py-2 text-white hover:bg-gray-700"> Jobs </RouterLink>
        <routerLink to="/company" class="block px-4 py-2 text-white hover:bg-gray-700"> Companies </routerLink>
        <routerLink to="/Messages" class="block px-4 py-2 text-white hover:bg-gray-700"> Messages </routerLink>
        <div class=" bg-[#9191E9;] block px-4 py-2" v-if="isLoggedIn">
          <button @click.prevent="logout">Logout</button> 
        </div>
        <div class=" bg-[#9191E9;] block px-4 py-2" v-else>
          <routerLink to="/Login">Sign up</routerLink>
        </div>
      </div>
    </div>
    <div class="hidden md:block bg-[#9191E9;] p-2 rounded" v-if="!isLoggedIn">
      <routerLink to="/Login">Sign up</routerLink>
    </div>
    <div class="hidden md:block bg-[#9191E9;] p-2 rounded" v-else>
      <routerLink to="/" @click.prevent="logout">Logout</routerLink>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      localStorage.removeItem('token');
      toast.success('Logged out successfully');
      this.$router.push('/Login');
    }
  }
}
</script>
