import {Users,Projects} from '../db/mongo.js'
import mongoose from 'mongoose';

var ObjectId = require('mongodb').ObjectId;

export const resolvers = {
    Query: {
        getAllUser (parent, args, context, info) {
            return Users.find((users) => {
                return users
            });
        },
        findUser (parent, args, context, info) {
            return Users.findOne({_id:args.id},(err,user)=>{
                console.log(user)
                return user
            });
        },
        getAllProject (parent, args, context, info) {
            return Projects.find((projects) => {
                return projects
            });
        },
        findProject (parent, args, context, info) {
            return Projects.findOne({_id:args.id},(err,project)=>{
                console.log(project)
                return project
            });
        }
    },
    User: {
        async projects(parent, args, context, info) {
            // console.log(parent._id)
            let x = await Projects.find(async (projects) => {
                return projects
            });
            let y = await Promise.all(x.map(async (project) => {
                console.log(project)
                if(project.users.includes(parent._id)){
                    return project
                }
            }))
            console.log(y)
            return y.filter(function(el){ return el != undefined });
        }
    },
    Project: {
        async users(parent, args, context, info) {
            let x = await Users.find(async (users) => {
                return users
            });
            let y = await Promise.all(x.map(async (user) => {
                console.log(user)
                if(user.projects.includes(parent._id)){
                    return user
                }
            }))
            console.log(y)
            return y.filter(function(el){ return el != undefined });
        }
    },
    Mutation: {
        async createUser(parent, args, context, info) {

            console.log('created 1 user')

            let user = new Users({
                firstName: args.input.firstName,
                lastName: args.input.lastName,
                gender: args.input.gender,
                language: args.input.language,
                age: args.input.age,
                email: args.input.email,
                specialization: args.input.specialization,
                skills: args.input.skills,
                interests: args.input.interests,
                experience: args.input.experience,
                projects: args.input.projects
            })

            user.id = user._id;

            return await user.save();
        },
        async createProject(parent, args, context, info) {
            let project = new Projects({
                projectName: args.input.projectName,
                description: args.input.description,
                projectSkills: args.input.skills,
                projectType: args.input.type,
                date: args.input.date,
                users: args.input.users
            })

            await args.input.users.map( async (userId) => {
                var x = await Users.findOne({_id:userId},(err,user)=>{
                    return user
                });
                x.projects.push(project._id);
                await x.save();
            })

            project.id = project._id;

            return await project.save();
        }
    }
}
