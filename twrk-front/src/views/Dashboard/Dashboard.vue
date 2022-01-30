<template>
    <div class="relative h-full w-full bg-cream py-4 px-28">
        <div v-if="showModal" class="left-0 top-0 absolute w-screen h-screen items-center justify-center">
            <Modal @close="toggleModal"/>
        </div>
        <div class="grid grid-cols-5">
            
            <div>
                <a href="/create-project" class="flex items-center justify-center h-14 w-full rounded-2xl bg-black text-cream font-semibold hover:bg-lillac hover:text-black transition duration-500 text-xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                New Project
                </a>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">
                        <a href="/dashboard" class="text-left text-xl font-bold">Dashboard</a>
                    </div>
                </div>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">   
                        <a href="/profile" class="text-left text-xl font-bold">Profile</a>
                    </div>
                </div>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">
                        <a href="/my-project" class="text-left text-xl font-bold">Projects</a>
                    </div>
                </div>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">
                        <a href="/explore-project" class="text-left text-xl font-bold">Explore</a>
                    </div>
                </div>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">
                        <a href="/tasks"  class="text-left text-xl font-bold">Tasks</a >
                    </div>
                </div>
                <div class="flex w-full py-4">
                    <div class="w-1/3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    </div>
                    <div class="w-2/3 flex items-center">
                        <a href="/leaderboard" class="text-left text-xl font-bold">Leaderboard</a>
                    </div>
                </div>
            </div>
            

            <div class="col-span-3 px-10">
                <p class="py-2 text-center text-3xl font-bold">TIMELINE</p>
                <hr cl>
                

                <div id="invitation" class="h-auto rounded-xl bg-cream border-2 border-gray-600 px-8 py-5 mt-6" style="display: none;">
                    <p class="font-bold text-2xl">YOU GOT AN INVITATION !</p>
                    <p class="text-lg mb-6">You just got a request by <a href="/profile" class="font-bold hover:underline">Keane Dylan Yennoto</a>, they want to join you on <a href="/project-detail" class="font-bold hover:underline">Anti Cheat Fraud Detection</a></p>
                    <div class="grid grid-cols-2">
                        <div>
                            <button @click="toggleModal" class="w-11/12 flex items-center justify-center mr-2 h-10 rounded-2xl font-bold bg-primary text-black  hover:bg-black hover:text-cream transition duration-500 text-lg mb-3">
                            ACCEPT
                            </button>
                        </div>
                        <div>
                            <a href="/dashboard" class="w-11/12 flex items-center justify-center mr-2 h-10 rounded-2xl font-bold bg-lillac text-black  hover:bg-black hover:text-cream transition duration-500 text-lg mb-3">
                            DECLINE
                            </a>
                        </div>
                    </div>
                </div>

                
                
            </div>
            <div>
                <p class="py-2 text-center text-3xl font-bold">PROJECTS</p>
                <div class="flex flex-col w-full gap-6 justify-around">
                    <div class="flex flex-col h-96 border-2 border-black rounded-xl" > 
                            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                        <a href="/project-detail">
                        <img class="w-full h-32 rounded-t-lg filter drop-shadow-sm" 
                        src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/01/20182543/shutterstock_739623235.jpg" 
                        alt="image">
                        </a>
                        <a class="h-full" href="/project-detail">
                        <div class="w-full h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                            <p class="font-semibold">Gaming Artificial Intelligence</p>
                            <p class="font-medium text-sm text-justify">Creating AI to play mutiple FPS shooters, with the goal of beating the highest score possible done by humans</p>
                            <p class="font-semibold text-sm text-left">Posted on 10 January 2022</p>
                        </div>
                        </a>
                    </div>
                    <div class="flex flex-col h-96 border-2 border-black rounded-xl" > 
                            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                        <a href="/project-detail">
                        <img class="w-full h-32 rounded-t-lg filter drop-shadow-sm" 
                        src="https://diginomica.com/sites/default/files/images/2019-12/facial-recognition.jpg" 
                        alt="image">
                        </a>
                        <a class="h-full" href="/project-detail">
                        <div class="w-full h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                            <p class="font-semibold">Facial Recognition System</p>
                            <p class="font-medium text-sm text-justify">Research on Facial Recognition using CNN to study human's facial expression</p>
                            <p class="font-semibold text-sm text-left">Posted on 10 January 2022</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="h-20 bg-cream">
    </div>
</template>

<script>
import Modal from '../../components/Modal.vue'

export default {
    name: 'Dashboard',
    components: { Modal },
    created(){
        setTimeout(() => {
            document.getElementById("invitation").style.display = "block";
        }, 2000)
    },
    data() {
        return {
            showModal : false,
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
            document.getElementById("invitation").style.display = 'none';
        }
    }
}
</script>

<style>

</style>