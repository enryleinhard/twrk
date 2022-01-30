<template>
    <div class="flex flex-col h-screen w-screen">
        <div class="flex flex-row gap-5 items-center justify-center font-semibold text-lg py-8 text-black">
        
            <p class="flex text-right pr-10 mr-10 text-5xl">To Do List</p>
            <input type="text" id="inputTask" placeholder="Enter a task to do" class="flex w-2/5">
            <button class="flex items-center justify-center h-8 w-8 text-2xl rounded-full bg-black text-cream font-semibold hover:bg-lillac hover:text-black transition duration-300"> + </button>

        </div>

        <div class="flex gap-5 items-center justify-center font-semibold text-lg p-3 mt-2 text-black">
        
            <ul class="w-1/4">
                <li class="mb-3">TASKS</li>
                <li type="square">Data Scraping</li>
                <li type="square">Generate Algorithm</li>
                <li type="square">Deployment</li>
            </ul>

            <ul class="w-1/5">
                <li class="mb-3">Date</li>
                <li>2 February 2022</li>
                <li>3 February 2022</li>
                <li>22 February 2022</li>
            </ul>

            <ul class="w-1/5">
                <li class="mb-3">Completion</li>
                <li><input type="checkbox" class="mx-10"></li>
                <li><input type="checkbox" class="mx-10"></li>
                <li><input type="checkbox" class="mx-10"></li>
            </ul>

            <a href="/my-project" class="flex items-center justify-center h-full w-28 rounded-2xl bg-black text-cream font-semibold hover:bg-lillac hover:text-black transition duration-500 text-xl mb-3">
                <p class="text-center p-2">My Project</p>
                </a>

        </div>
    </div>

    

</template>



<script>

export default {


};
</script>

<style>

</style>