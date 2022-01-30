<template>
    <div class="h-full w-screen flex flex-col gap-5 items-center justify-center font-semibold text-lg py-8 text-black">
        <div class="flex flex-col items-center gap-3 w-3/4">
            <p class="text-3xl font-bold w-full text-left">My Projects</p>
            <div class="flex flex-row w-full gap-6 justify-around">
                <div class="flex flex-col w-3/4 h-96" > 
                    <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                    <a href="/project-detail">
                    <img class="w-64 h-32 rounded-t-lg filter drop-shadow-sm" 
                    src="https://www.mi-pay.com/wp-content/uploads/2020/06/3DS2-800x500.jpg" 
                    alt="image">
                    </a>
                    <a class="h-full" href="/project-detail">
                    <div class="w-64 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                        <p class="font-semibold">Anti Cheat Fraud Detection</p>
                        <p class="font-medium text-sm text-justify">Designed to prevent players from cheating in online games, Outlier behaviours are tagged as cheating using analysis from multiple machine learning models</p>
                        <p class="font-semibold text-sm text-left">Posted on 19 January 2022</p>
                    </div>
                    </a>
                </div>
                <div class="flex flex-col w-3/4 h-96" > 
                    <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                    <a href="/project-detail">
                    <img class="w-64 h-32 rounded-t-lg filter drop-shadow-sm" 
                    src="https://images.ctfassets.net/1wryd5vd9xez/16lzTu0knOLalZ7nLtnlwL/cc523873c3e443e97319252bdd4f8150/https___cdn-images-1.medium.com_max_5312_1_viwgLcZIk8qunz-t053a3w.png" 
                    alt="image">
                    </a>
                    <a class="h-full" href="/project-detail">
                    <div class="w-64 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                        <p class="font-semibold">Food Recommender System</p>
                        <p class="font-medium text-sm text-justify">Comparing collaborative filtering and content-based filtering, for foods recommender systems</p>
                        <p class="font-semibold text-sm text-left">Posted on 10 January 2022</p>
                    </div>
                    </a>
                </div>
                <div class="flex flex-col w-3/4 h-96" > 
                    <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                    <a href="/project-detail">
                    <img class="w-64 h-32 rounded-t-lg filter drop-shadow-sm" 
                    src="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_AI_gaming.png" 
                    alt="image">
                    </a>
                    <a class="h-full" href="/project-detail">
                    <div class="w-64 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                        <p class="font-semibold">🎮 GAMING USING AI </p>
                        <p class="font-medium text-sm text-justify">Creating AI to play mutiple FPS shooters, with the goal of beating the highest score possible done by humans</p>
                        <p class="font-semibold text-sm text-left">Posted on 11 December 2021</p>
                    </div>
                    </a>
                </div>
                <div class="flex flex-col w-3/4 h-96" > 
                    <!-- v-for="recommended in recommendeds" :key="recommended" :id="recommended" -->
                    <a href="/project-detail">
                    <img class="w-64 h-32 rounded-t-lg filter drop-shadow-sm" 
                    src="https://www.xenioo.com/wp-content/uploads/2021/03/discord-chat-gamer-bots.jpg" 
                    alt="image">
                    </a>
                    <a class="h-full" href="/project-detail">
                    <div class="w-64 h-full gap-5 rounded-b-lg bg-cream py-5 px-5 shadow-lg">
                        <p class="font-semibold">NLP Project for Discord Chatbot </p>
                        <p class="font-medium text-sm text-justify">Create commands easily from analysis of various natural English statements</p>
                        <p class="font-semibold text-sm text-left">Posted on 20 January 2022</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="right-0 flex flex-row gap-5">
            
            <a href="/create-project" class="flex items-center justify-center h-14 w-14 text-3xl bg-black rounded-full text-white font-semibold "> + </a>

        </div>

    </div>

</template>



<script>

export default {
    name: 'myproject',

};
</script>

<style>

</style>