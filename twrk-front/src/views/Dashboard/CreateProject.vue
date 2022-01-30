<template>
  

    <div class="h-full w-full flex flex-col items-center justify-center gap-5 font-semibold text-lg py-8 text-black border-black">
        <p class="text-4xl font-bold">New Project</p>
        <div class="relative h-full w-9/12 m-5 items-center justify-center">
            <div class="flex flex-col p-1 text-lg font-semibold">
                <div class="flex flex-col">
                    <label>Title</label>
                    <input type="text" placeholder="Enter Project Title" v-model="blogTitle" class="border-2 h-8 w-10/12"/>
                </div>
                <div class="flex flex-col w-full h-56">
                    <label>Description</label>
                    <input type="text" placeholder="Enter Description" class="border-2 w-10/12 h-full">
                </div>
                <div class="flex flex-col pt-3">
                    <label>Upload Cover Photo</label>
                    <input class="min-w-max ml-2 mb-2" type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, ,jpeg" />
                </div>
            </div>
        <div class="flex flex-col w-3/4 pt-3">
            <button @click="showCategories = !showCategories" id="menu-btn" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-semibold text-lg text-black">Project Category
                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': showCategories, 'rotate-0': !showCategories}" class="inline w-6 h-6 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 text-black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div v-show="showCategories" class="flex flex-wrap gap-3 w-3/4 ">
                <button @click="addToInterests(keyword)" v-for="keyword in interestKeys" :key="keyword" :id="keyword" class="text-sm font-semibold px-6 py-2 bg-white border-2 border-black rounded-full">{{ keyword }}</button>
            </div>
        </div>
        <div class="flex flex-col w-3/4 pt-3">  
            <button @click="showSkills = !showSkills" id="menu-btn" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-semibold text-lg text-black">Required Skills
                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': showSkills, 'rotate-0': !showSkills}" class="inline w-6 h-6 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 text-black"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div v-show="showSkills" class="flex flex-wrap gap-3 w-3/4 ">
                <button @click="addToProjectsSkills(keyword)" v-for="keyword in projectSkillsKeys" :key="keyword" :id="keyword" class="text-sm font-semibold px-6 py-2 bg-white border-2 border-black rounded-full">{{ keyword }}</button>
            </div>
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
export default {
    data() {
        return { 
            showCategories: false,
            showSkills: false,
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