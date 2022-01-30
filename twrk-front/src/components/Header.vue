<template>
  <nav class="relative w-screen flex flex-row items-center justify-center px-40 py-6 bg-cream text-cream">
    <div class="flex gap-5 items-center">
      <a href="/dashboard"><img src="@/assets/2x/Asset1.png" alt="Anagata Logo" class="h-8 w-auto"></a>
      <div class="flex flex-col relative items-center">
        <!-- <button @click="open = !open" id="menu-btn" class="flex justify-between items-center py-2 pr-4 pl-3 w-24 font-medium text-lg text-primary">Menu
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-6 h-6 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 text-primary"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div v-show="open" id="dropdown" class="absolute text-primary flex flex-col rounded-xl mt-10 p-2 text-sm w-28 bg-primary">
          <a class="font-medium text-lg text-cream" href="/home">Home</a>
          <a class="font-medium text-lg text-cream" href="/explore-projects">Projects</a>
          <a class="font-medium text-lg text-cream" href="/account">Profile</a>
          <a class="font-medium text-lg text-cream" href="/settings">Settings</a>
        </div> -->
      </div>
    </div>
    

    <div class="relative flex items-center w-3/5 text-black rounded-full border-2 border-gray-500 ">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute ml-4 z-10 h-5 w-5 text-primary" viewBox="0 0 20 20" fill="#000000">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
      <input type="text" placeholder="Search" class="text-primary relative bg-cream rounded-full text-sm w-full h-10 pl-10 z-0"/>
    </div>
    
    <div v-show="!authorized" class="flex flex-row gap-5">
      <a href="/login" class="flex items-center justify-center ml-2 h-12 w-32 rounded-2xl bg-cream text-black font-semibold ">Sign In</a>
      <a href="/login" class="flex items-center justify-center h-12 w-32 rounded-2xl bg-black text-cream font-semibold hover:bg-primary hover:text-black transition duration-500 ">Register</a>
    </div>

    <div v-show="authorized" class="flex items-center gap-3 ml-8">
      <div class="flex items-center justify-center text-black gap-3">

        <a href="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
        <a href="/tasks">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="/create-project">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      <a href="/profile">
        <img src="https://cdn.discordapp.com/attachments/936840121397956648/937198782674763797/AQJ_4196.jpeg  " class="w-14 h-14 object-cover rounded-full" alt="">
      </a>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Header",
  created(){
    if (localStorage.getItem('authorized') == 'true'){
      console.log("show")
      this.showAccount = "true"
      this.authorized = true
      console.log(this.showAccount)
    } else if (localStorage.getItem('authorized') == 'false'){
      this.showAccount = "false"
      this.authorized = false

      console.log("not showing")
      console.log(this.showAccount)

    }
  },
  data(){
    return {
      open: false,
      showAccount: false,
      authorized: false
    }
  },
  setup() {
    return {};
  },
  method: {
    openDrop(){
      const menuBtn = document.getElementById("menu-btn")
      const dropdown = document.getElementById("dropdown")

      menuBtn.addEventListener('click', () => {
        if(dropdown.classList.contains('hidden')){
          dropdown.classList.add('hidden')
        } else {
          dropdown.classList.remove('flex')
          dropdown.classList.add('hidden')
        }

        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('flex')
      })
    }
  }
};
</script>

<style>

</style>