<template>

    <div class="h-full w-screen flex flex-col gap-5 items-center justify-center font-semibold text-lg py-8 text-black">
        <div class="flex flex-col items-center gap-3 w-3/4">
            <p class="text-3xl font-bold w-full text-left">Here are some recommended projects for you.</p>
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
        <div class="flex flex-col items-center gap-3 w-3/4">
            <p class="text-3xl font-bold w-full text-left">Other projects</p>
            <div class="flex flex-row w-full gap-6 justify-around">
                <div v-for="recommended in Object.values(this.allProjects)" :key="recommended" :id="recommended" class="flex flex-col w-3/4 h-96" > 
                    <a href="/project-detail">
                    <img class="w-64 h-32 rounded-t-lg filter drop-shadow-sm" 
                    src="https://mms.businesswire.com/media/20190731005310/en/735773/5/Post-it_App_for_Android.jpg" 
                    alt="image">
                    </a>
                    <a class="h-full" href="/project-detail">
                    <div class="w-64 h-full gap-5 rounded-b-lg bg-cream py-5 px-5">
                        <p class="font-semibold">{{ recommended.projectName }}</p>
                        <p class="font-medium text-sm text-justify">{{ recommended.description}}</p>
                        <p class="font-semibold text-sm text-left">Posted on {{ convertDate(recommended.date) }}</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import api from "../../api/api.js"

export default {

    data() {
        return {
            recommendedProjects: [],
            allProjects: [],
            projectSelections: [],
            interestsSelections: [],
            projectSkillsKeys:  ['Abap', 'Ada', 'C#', 'C', 'C++', 'Cobol', 'Dart', 'Pascal', 'Go', 'Groovy', 'Haskell', 'Java', 'Javascript', 'Julia', 'Kotlin', 'Lua', 'Matlab', 'Objective C', 'Perl', 'Php', 'Python', 'R', 'Ruby', 'Rust', 'Scala', 'Swift', 'Typescript', 'Vba', 'Visual Basic', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Unity', 'Project Manager', 'Figma']
            ,
            interestKeys: [
                "Website",
                "E Commerce",
                "To Do List",
                "Machine Learning",
                "Database",
                "Design",
                "UI/UX",
                "Data Mining",
                "Data Cleaning",
                "Data Analysis",
                "Data",
                "Neural Network",
                "Data Engineering",
                "Artificial Intelligence",
                "Association Rule Mining",
                "Data Visualization",
                "Illustration",
                "Video Editing",
                "Ios",
                "Android",
                "Video Game",
                "Data Architecture",
                "Discord Bot",
                "Cinematography",
                "Food Photography",
                "Risk Analysis",
                "Marketing Strategy",
                "Bussines Recommendations",
                "Market Analysis",
                "Business Plan",
                "Newsletter",
                "Fraud Detection",
                "Maintenance",
                "Web Security",
                "Mobile Application"
            ]
        }
    },
    async created() {
        // this.recommendedProjects = await api.getRecommendedProjects()
        this.allProjects = await api.getAllProjects()
        this.splitText()
        console.log(Object.values(this.allProjects))
        console.log(typeof(this.allProjects))
    },
    methods: {
        convertDate(date){
            date = date.split("/")
            var f = new Date(date[2], date[0] - 1, date[1]);
            var final = f.toString().split(" ")
            return final[1], final[2], final[3];
        },
        splitText() {
            var text = "abap,ada,c#,c,c++,cobol,dart,pascal,go,groovy,haskell,java,javascript,julia,kotlin,lua,matlab,objectiveC,perl,php,python,r,ruby,rust,scala,swift,typescript,vba,visualBasic,adobeIllustrator,adobePhotoshop,adobePremierePro,unity,projectManager,figma"
            const myArray = text.split(",");
            this.keywords = myArray.map((x) => x.replace(/([button-z])([A-Z])/g, '$1 $2'))
            this.keywords = this.keywords.map((x) => x[0].toUpperCase() + x.slice(1))
            console.log(this.keywords)
        },
        addToProjectsSkills(keyword) {
            if(this.projectSelections.includes(keyword)) {
                this.projectSelections = this.projectSelections.filter(e => e !== keyword)
                document.getElementById(keyword).style.backgroundColor = "#FFFCDC"
                document.getElementById(keyword).style.color = "#516BEB"
            } else {
                this.projectSelections.push(keyword)
                document.getElementById(keyword).style.backgroundColor = "#516BEB"
                document.getElementById(keyword).style.color = "white"
            }
            console.log(this.projectSelections)
        },
        addToInterests(keyword) {
            if(this.interestsSelections.includes(keyword)) {
                this.interestsSelections = this.interestsSelections.filter(e => e !== keyword)
                document.getElementById(keyword).style.backgroundColor = "#FFFCDC"
                document.getElementById(keyword).style.color = "#516BEB"
            } else {
                this.interestsSelections.push(keyword)
                document.getElementById(keyword).style.backgroundColor = "#516BEB"
                document.getElementById(keyword).style.color = "white"
            }
            console.log(this.interestsSelections)

        }
    }
}
</script>

<style lang="scss" scoped>

</style>