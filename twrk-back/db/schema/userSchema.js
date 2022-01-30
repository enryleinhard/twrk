"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    specialization: {
        type: Array
    },
    skills: {
        type: Array
    },
    interests: {
        type: Array
    },
    experience: {
        type: Array
    },
    projects: {
        type: Array
    }
});