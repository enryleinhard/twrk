#!/usr/bin/env python3
from fastapi import FastAPI
import json
import requests
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from pydantic import BaseModel
from typing import List


class User(BaseModel):
    id: str
    interests: List[str]
    skills: List[str]


app = FastAPI(
    title="TWRK API",
    description="TWRK API",
    version="0.1.0",
    docs_url='/api',
    openapi_url='/api/openapi.json',
    redoc_url=None
)

@app.post('/api/recommendation')
async def create(user: User):
    query = """query {
        getAllProject {
            id
            projectName
            description
            projectSkills
            projectType
            date
        }
    }"""
    print(user)

    url = 'https://twrk-back.vercel.app/graphql'
    r = requests.post(url, json={'query': query})

    #Receive all projects from database
    all_projects = json.loads(r.text)['data']['getAllProject']
    print(all_projects)

    #Dataframe of all projects 
    df_projects = pd.DataFrame(columns = ["projectId", "projectType", "projectSkills"])

    #Insert appropriate json data to pandas dataframe
    i = 0;
    for project in all_projects:
        df_projects.loc[i,"projectId"] = project["id"]
        df_projects.loc[i,"projectType"] = ' '.join(project["projectType"])
        df_projects.loc[i,"projectSkills"] = ' '.join(project["projectSkills"])
        i += 1

    #Get Current user data
    print(user)
    #inserts user data to first row
    currentUserId = user.id
    currentUserPreference = ' '.join(user.interests)
    currentUserSkills = ' '.join(user.skills)


    new_row = pd.DataFrame({'projectId': currentUserId, "projectType" : currentUserPreference , 'projectSkills': currentUserSkills}, index =[0])
    df_projects = pd.concat([new_row, df_projects]).reset_index(drop = True)

    #features used in content-based approach learning
    selected_features = ['projectType','projectSkills']
    combined_features = df_projects['projectType']+' '+df_projects['projectSkills']
    vectorizer = TfidfVectorizer()
    feature_vectors = vectorizer.fit_transform(combined_features)
    similarity = cosine_similarity(feature_vectors)
    similarity_score = list(enumerate(similarity[0]))
    sorted_similar_project = sorted(similarity_score, key = lambda x:x[1], reverse = True) 

    #remove 0% similarities
    similar_projectId = []
    for x in range(1,len(sorted_similar_project)):
        if sorted_similar_project[x][1] > 0:
            similar_projectId.append(df_projects.loc[sorted_similar_project[x][0],"projectId"])

    print("==============================================")
    print("df_projects")
    print(df_projects)
    print("==============================================")
    print("all_projects[0]")
    print(all_projects[0])
    print("==============================================")
    print("sorted_similar_project")
    print(sorted_similar_project)
    print("==============================================")


    return similar_projectId
