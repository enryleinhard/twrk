<template>
    <div class="h-screen w-screen flex-col  gap-3 justify-center items-center font-semibold text-lg py-8 text-primary">
        <div class="flex">
            <div class="flex flex-col w-3/4 h-full justify-center items-center gap-5" > 
            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
            <img class="z-10 w-3/4 h-96 rounded-lg filter drop-shadow-sm" 
            src="https://www.mi-pay.com/wp-content/uploads/2020/06/3DS2-800x500.jpg" 
            alt="image">
            <div class="flex flex-col w-3/4">
                <p class="text-black text-lg border-3 ">19 Dec 2021</p>
                <p class="text-primary font-black text-4xl">Anti Cheat Fraud Detection</p>
                <p class="text-black font-medium text-sm text-justify">Designed to prevent players from cheating in online games, Outlier behaviours are tagged as cheating using analysis from multiple machine learning models</p>
            </div>
            <div class="flex flex-wrap gap-2 w-3/4">
                <div v-for="keyword in skills" :key="keyword" :id="keyword" class="text-base text-black font-semibold px-5 py-1 bg-lillac border-2 border-black rounded-full">{{ keyword }}</div>
                <div v-for="keyword in types" :key="keyword" :id="keyword" class="text-base text-black font-semibold px-5 py-1 bg-primary border-2 border-black rounded-full">{{ keyword }}</div>
            </div>
            <div id="joindiv" class="border-2 border-black cursor-pointer w-1/2 px-12 py-2 mx-32 rounded-full font-semibold bg-white hover:bg-primary shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div id="" @click="joinButton()" class="flex flex-row items-center justify-center gap-2 cursor-pointer">
                    <p id="joinbutton" class="text-black text-xl">Join this project </p>
                    <svg v-show="!submitted" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                    <svg v-show="submitted" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-black" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>

            </div>
        </div>
        <div class="w-1/4 h-auto flex flex-col justify-start items-center mr-24 gap-4">
            <p class=" text-black text-center text-3xl font-bold">People in this project</p>
            <div class="w-64 h-24 border-2 border-black rounded-xl p-3">
                <div class="flex justify-center items-center text-black gap-2 ">
                    <img src="../../assets/pas_verena.jpeg" class="w-16 h-16 object-cover rounded-full" alt="">
                    <div class="flex flex-col items-start">
                        <p class="font-bold text-md">Verena Wibisono</p>
                        <p class="font-medium text-sm">Project Manager</p>
                    </div>
                </div>
            </div>
            <div class="w-64 h-24 border-2 border-black rounded-xl p-3">
                <div class="flex justify-center items-center text-black gap-2 ">
                    <img src="https://naturalelements.fr/wp-content/uploads/jurica-koletic-7YVZYZeITc8-unsplash-square-1.jpg" class="w-16 rounded-full" alt="">
                    <div class="flex flex-col items-start">
                        <p class="font-bold text-lg">John Doe</p>
                        <p class="font-medium text-sm">Self-learn data scientist</p>
                    </div>
                </div>
            </div>
            <div class="w-64 h-24 border-2 border-black rounded-xl p-3">
                <div class="flex justify-center items-center text-black gap-2 ">
                    <img src="data:image/jpeg;base64,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" class="w-16 rounded-full" alt="">
                    <div class="flex flex-col items-start">
                        <p class="font-bold text-lg">Jennifer Robin</p>
                        <p class="font-medium text-sm">Harvard MBA</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            submitted: false,
            skills: ["Python", "Tensorflow", "Scikit Learn"],
            types: ["Video Game", "Machine Learning", "Fraud Analysis"],
        }
    },
    methods: {
        joinButton(){
            this.submitted = !this.submitted
            document.getElementById("joinbutton").innerHTML = "You Successfully Applied!"
            document.getElementById("joindiv").style.backgroundColor = "#EDD2F3"
        }
    }
}
</script>

<style>
    .modal {
        width: 500px;
        height: 500px;
        padding: 20px;
        margin: 70px auto;
        background: white;
        border-radius: 10px;
        z-index: 100;
    }
</style>