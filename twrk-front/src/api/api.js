import axios from "axios";
const GRAPHQL_URL = "https://twrk-back.vercel.app/graphql"

export default{
    async getRecommendedProjects(){

    },
    async getAllProjects(){
        const data = await axios.post(GRAPHQL_URL, {
            query: `query {getAllProject {
                  id
                  projectName
                  description
                  projectSkills
                  projectType
                  date
                  users {
                    interests
                    experience
                  }
            }}`,

        },
        {
        headers: {
            'Content-Type': 'application/json'
        }
        }).catch(err => console.log(err))   
        return data.data.data.getAllProject
    },
    async createProject(projectName, projectDescription, projectSkills, projectType, date){
        const data = await axios.post(GRAPHQL_URL, {
            query: `mutation {createProject (
                  projectName: "${projectName}",
                  description: "${projectDescription}",
                  projectSkills: "${projectSkills}",
                  projectType: "${projectType}",
                  date: "${date}",
                  ){
                    id
                    projectName
                    description
                    projectSkills
                    projectType
                    date
                  }
            }}`,

        },
        {
        headers: {
            'Content-Type': 'application/json'
        }
        }).then().catch(err => console.log(err))   
        return data.data.data
    },
    async createUser(email,password,skills,interests) {
        var axios = require('axios');
        var data = JSON.stringify({
        query: `mutation{
        createUser(input:{
            firstName:"Enryl",
            lastName:"Einhard",
            gender:MALE,
            age:23,
            language:INDONESIAN,
            email:${email},
            specialization: ["dataScience"],
            skills: ${skills},
            interests: ${interests},
            experience: ["Statistics Development"],
            projects: [""]
        }){
            id
            firstName
            lastName
            gender
            age
            language
            email
            specialization
            skills
            interests
            experience
            projects {
            id
            }
        }
        }`,
        variables: {}
        });

        var config = {
        method: 'post',
        url: 'https://twrk-back.vercel.app/graphql',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    }