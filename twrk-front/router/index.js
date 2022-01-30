import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MatchPage from '../views/MatchPage.vue'
import MyProject from '../views/Dashboard/MyProject.vue'
import CreateProject from '../views/Dashboard/CreateProject.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import ExploreProject from '../views/Dashboard/ExploreProject.vue'
import Leaderboards from '../views/Dashboard/Leaderboards.vue'
import Profile from '../views/Dashboard/Profile.vue'
import EditProfile from '../views/Dashboard/EditProfile.vue'
import Personalization from '../views/Personalization.vue'



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
    path: '/account',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/account/edit',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/account/personalization',
    name: 'Personalization',
    component: Personalization
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router