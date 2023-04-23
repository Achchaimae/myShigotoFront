<template>
  <section class="flex text-white justify-between flex-row p-4">
    <div class="w-36">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="hidden md:flex justify-between gap-8 font-semibold mt-1">
      <a href="/"> Home </a>
      <a href="/Jobs"> Jobs </a>
      <a href="/company"> Companies </a>
      <a href="/Messages"> Messages </a>
      
    </div>
    <div class="flex md:hidden">
      <button @click="toggleMenu" class="flex items-center px-3 py-2 rounded text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="!menuOpen" fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
          <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M3 7h18v2H3V7zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"></path>
        </svg>
      </button>
      <div v-if="menuOpen" class="absolute right-0 top-12 w-48 py-2 bg-gray-800 rounded shadow-xl z-10">
        <a href="/" class="block px-4 py-2 text-white hover:bg-gray-700"> Home </a>
        <a href="/Jobs" class="block px-4 py-2 text-white hover:bg-gray-700"> Jobs </a>
        <a href="/company" class="block px-4 py-2 text-white hover:bg-gray-700"> Companies </a>
        <a href="/Messages" class="block px-4 py-2 text-white hover:bg-gray-700"> Messages </a>
        <!-- if the user not login show me the sing up button alse show me sign up button using the token in localstorage -->
        <div class=" bg-[#9191E9;] block px-4 py-2 ">
          <a href="/Login">Sing up</a>
        </div>
      </div>
    </div>
    <div class="hidden md:block bg-[#9191E9;] p-2 rounded">
      <a href="/Login">Sing up</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
   //logout function
   
  }
}
</script>
