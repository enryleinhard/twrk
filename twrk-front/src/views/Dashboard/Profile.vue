<template>
    <div class="w-screen h-full px-16 py-8 flex flex-col gap-5 justify-center text-black font-bold text-4xl bg-cream">
        <div class="flex flex-row justify-center gap-5 w-full items-center">
            <img src="../../assets/K.png" class="w-64 rounded-full" alt="">
            <div class="flex flex-col text-left justify-center w-1/3">
                <p class="text-3xl font-bold">Keane Dylan Yennoto</p>
                <p class="text-xl font-medium">@kdy</p>
                <div class="flex flex-row items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p class="font-semibold text-lg">Kowloon Tong, Hong Kong 🇭🇰</p>
                </div>
                <div class="flex flex-row items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>
                    <p class="font-semibold text-lg">🔥</p>
                    <p class="font-semibold text-lg">A person who likes to code</p>
                </div>
                <div class="flex flex-row items-center py-2 gap-3 hover:animatespin">
                <p class="border-2 border-black bg-lillac px-3 hover:bg-white text-black border-1 rounded-full py-2 text-sm font-semibold shadow-lg transition duration-500 ease-in-out transform hover:scale-110">
                    Edit Profile
                </p>
                
                </div>
            </div>
        </div>
        <div class="h-6">

        </div>
        <div class="flex flex-row w-full justify-center gap-20">
            <div class="flex flex-col text-xl font-semibold w-1/4 mx-6">
                <p class="text-3xl font-bold p-1">Top Skills</p>
                
                <!-- <div class="flex flex-col gap-3 text-left bg-blue-300 shadow-sm rounded-xl p-5 w-full h-full">
                    <p class=" text-white font-bold ">WEB DEVELOPMENT</p>
                    <ul class="list-disc ml-12 font-medium text-sm text-left">
                        <li>Vue JS</li>
                        <li>Tailwind CSS</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div> -->
            <div class="bg-white shadow-md overflow-hidden sm:rounded-xl px-0 my-4 border">
                <div class="px-5 py-5 sm:px-6">
                <h3 class="leading-6 font-semibold text-gray-900 text-xl">
                    Machine Learning
                </h3>
                <p class="mt-1 max-w-2xl text-right text-gray-500">
                    <ul class="text-md list-disc mt-1 max-w-2xl text-sm px-5 text-gray-500">
                        <li>TensorFlow</li>
                        <li>SciKit-Learn</li>
                        <li>Recommender System</li>
                    </ul>
                </p>
                </div>
            </div>
            <div class="bg-white shadow-md overflow-hidden sm:rounded-xl my-4 px-0 border">
                <div class="px-5 py-5 sm:px-6">
                <h3 class="leading-6 font-semibold text-gray-900 text-xl">
                    Data Science
                </h3>
                <p class="mt-1 max-w-2xl text-right text-gray-500">
                    <ul class="text-md list-disc mt-1 max-w-2xl text-sm px-5 text-gray-500">
                        <li>TKA</li>
                        <li>Market Basket</li>
                        <li>Blockchain</li>
                    </ul>
                </p>
                </div>
            </div>
            <div class="bg-white shadow-md overflow-hidden sm:rounded-xl my-4 px-0 border">
                <div class="px-5 py-5 sm:px-6">
                <h3 class="leading-6 font-semibold text-gray-900 text-xl">
                    Programming
                </h3>
                <p class="mt-1 max-w-2xl text-right text-gray-500">
                    <ul class="text-md list-disc mt-1 max-w-2xl text-sm px-5 text-gray-500">
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                    </ul>
                </p>
                </div>
            </div>
            </div>
            <div class="flex flex-col w-3/4 gap-5">
                <div class="flex flex-row text-xl gap-5 items-center">
                    <p>I am an Expert in: </p>
                    <div class="flex flex-wrap gap-4">
                        <p class="bg-blue-300 text-white rounded-full shadow-md p-4 py-2 text-sm font-semibold ">
                            Machine Learning
                        </p>
                        <p class="bg-blue-300 text-white rounded-full shadow-md p-4 py-2 text-sm font-semibold ">
                            Artifical Intelligence
                        </p>
                        <p class="bg-blue-300 text-white rounded-full shadow-md p-4 py-2 text-sm font-semibold ">
                            Blockchain
                        </p>
                    </div>
                </div>
                <div class="flex flex-row text-xl gap-5 items-center">
                    <p>I am an interested in: </p>
                    <div class="flex flex-wrap gap-4">
                        <p class="bg-blue-300 text-white rounded-full shadow-md p-4 py-2 text-sm font-semibold ">
                            Risk Analysis
                        </p>
                        <p class="bg-blue-300 text-white rounded-full  shadow-md p-4 py-2 text-sm font-semibold  ">
                            Fraud Detection
                        </p>
                        <p class="bg-blue-300 text-white rounded-full  shadow-md p-4 py-2 text-sm font-semibold  ">
                            Cinematography
                        </p>
                    </div>
                </div>
                <div class="flex flex-col text-xl gap-5 items-center">
                    <p class="text-left w-full">Projects: </p>
                    <div class="flex flex-row w-full gap-6 justify-around">
                        <div class="flex flex-col h-96 border-2 border-black rounded-xl" > 
                            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                            <a href="/project-detail">
                            <img class="w-80 h-32 rounded-t-lg filter drop-shadow-sm" 
                            src="../../assets/dummy-project-box.jpg" 
                            alt="image">
                            </a>
                            <a class="h-full" href="/project-detail">
                            <div class="w-80 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 ">
                                <p class="font-semibold">Anti Cheat Fraud Detection</p>
                                <p class="font-medium text-sm text-justify">Designed to prevent players from cheating in online games, Outlier behaviours are tagged as cheating using analysis from multiple machine learning models</p>
                                <p class="font-semibold text-sm text-left">Posted on 19 January 2022</p>
                            </div>
                            </a>
                        </div>
                        <div class="flex flex-col h-96 border-2 border-black rounded-xl" > 
                            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                            <a href="/project-detail">
                            <img class="w-80 h-32 rounded-t-lg filter drop-shadow-sm" 
                            src="../../assets/dummy-project-box.jpg" 
                            alt="image">
                            </a>
                            <a class="h-full" href="/project-detail">
                            <div class="w-80 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                                <p class="font-semibold">Food Recommender System</p>
                                <p class="font-medium text-sm text-justify">Comparing collaborative filtering and content-based filtering, for foods recommender systems</p>
                                <p class="font-semibold text-sm text-left">Posted on 10 January 2022</p>
                            </div>
                            </a>
                        </div>
                        <div class="flex flex-col h-96 border-2 border-black rounded-xl" > 
                            <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                            <a href="/project-detail">
                            <img class="w-80 h-32 rounded-t-lg filter drop-shadow-sm" 
                            src="../../assets/dummy-project-box.jpg" 
                            alt="image">
                            </a>
                            <a class="h-full" href="/project-detail">
                            <div class="w-80 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                                <p class="font-semibold">Gaming Artificial Intelligence</p>
                                <p class="font-medium text-sm text-justify">Creating AI to play mutiple FPS shooters, with the goal of beating the highest score possible done by humans</p>
                                <p class="font-semibold text-sm text-left">Posted on 10 January 2022</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    <a href="/my-project" class="bg-white text-black font-semibold shadow-lg transition duration-500 ease-in-out transform hover:scale-110 px-6 py-2 rounded-full">See All</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>