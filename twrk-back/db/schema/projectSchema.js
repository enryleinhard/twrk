"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const mongoose = require('mongoose');

export const projectSchema = new mongoose.Schema({
    projectName: {
        type: String
    },
    year: {
        type: Number
    },
    projectSkills: {
        type: Array
    },
    projectType: {
        type: Array
    },
    date: {
        type: String
    },
    description: {
        type: String
    },
    users: {
        type: Array
    }
});