import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import MatchPage from '../views/MatchPage.vue'
import Modal from '../views/Modal.vue'
import MyProject from '../views/Dashboard/MyProject.vue'
import CreateProject from '../views/Dashboard/CreateProject.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import ExploreProject from '../views/Dashboard/ExploreProject.vue'
import Leaderboards from '../views/Dashboard/Leaderboards.vue'
import Profile from '../views/Dashboard/Profile.vue'
import Tasks from '../views/Dashboard/Tasks.vue'
import Personalization from '../views/Personalization.vue'
import ProjectDetail from '../views/Dashboard/ProjectDetail.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/match',
    name: 'MatchPage',
    component: MatchPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/create-project',
    name: 'CreateProject',
    component: CreateProject
  },
  {
    path: '/my-project',
    name: 'MyProject',
    component: MyProject
  },
  {
    path: '/explore-project',
    name: 'ExploreProject',
    component: ExploreProject
  },
  {
    path: '/leaderboards',
    name: 'Leaderboards',
    component: Leaderboards
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/account/personalization',
    name: 'Personalization',
    component: Personalization
  },  
  {
    path: '/project-detail',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router