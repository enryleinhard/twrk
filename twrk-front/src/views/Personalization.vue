<template>
    <div class="h-full w-screen flex flex-col gap-5 items-center justify-center font-semibold text-lg py-8 text-black">
        <div class="flex flex-col items-center gap-3">
            <p class="text-3xl font-bold w-3/4 text-left">What are you into?</p>
            <p class="w-3/4 text-left pb-6">Select projects that you are intersted in.</p>
            <div class="flex flex-wrap gap-5 w-3/4">
                <button @click="addToInterests(keyword)" v-for="keyword in interestKeys" :key="keyword" :id="keyword" class="text-base font-semibold px-6 py-2 bg-white border-2 border-black rounded-full">{{ keyword }}</button>
            </div>
        </div>
        <div class="flex flex-col items-center gap-3 pt-10">
            <p class="text-3xl font-bold w-3/4 text-left">What experience do you have?</p>
            <p class="w-3/4 text-left pb-6">Select fields that you have any experience in.</p>
            <div class="flex flex-wrap gap-5 w-3/4 pb-10">
                <button @click="addToProjectsSkills(keyword)" v-for="keyword in projectSkillsKeys" :key="keyword" :id="keyword" class="text-base font-semibold px-6 py-2 bg-white border-2 border-black rounded-full">{{ keyword }}</button>
            </div>
        </div>
        <div class="border-2 border-black cursor-pointer w-1/2 px-12 py-2 mx-32 rounded-full font-semibold bg-white hover:bg-lillac shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div @click="submitPersonalization()" class="flex flex-row items-center justify-center gap-2 cursor-pointer">
                <p class="text-black text-xl">Submit</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                </svg>

            </div>

        </div>
    </div>
</template>

<script>
import api from '../api/api.js'
export default {
    data() {
        return {
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
    created() {
        this.splitText()
    },
    methods: {
        async submitPersonalization(){
            await api.createUser("asd","asd",this.projectSelections, this.interestsSelections).then((x) => {
                console.log(x)
            })
            window.location.href = "/../../explore-project";
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
                document.getElementById(keyword).style.backgroundColor = 'white'
                document.getElementById(keyword).style.color = 'black'
            } else {
                this.projectSelections.push(keyword)
                document.getElementById(keyword).style.backgroundColor = "#84DFFF"
                document.getElementById(keyword).style.color = "black"
            }
            console.log(this.projectSelections)
        },
        addToInterests(keyword) {
            if(this.interestsSelections.includes(keyword)) {
                this.interestsSelections = this.interestsSelections.filter(e => e !== keyword)
                document.getElementById(keyword).style.backgroundColor = 'white'
                document.getElementById(keyword).style.color = 'black'
            } else {
                this.interestsSelections.push(keyword)
                document.getElementById(keyword).style.backgroundColor = "#EDD2F3"
                document.getElementById(keyword).style.color = "black"
            }
            console.log(this.interestsSelections)

        }
    }
}
</script>

<style lang="scss" scoped>

</style>