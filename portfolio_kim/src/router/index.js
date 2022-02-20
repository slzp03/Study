import Vue from "vue"
import VueRouter from "vue-router"

const AboutMe = () => import(/* webpackChunkName: "Home" */ '@/components/AboutMe.vue')
const Repository = () => import(/* webpackChunkName: "Home" */ '@/components/Repository.vue')
const Skill = () => import(/* webpackChunkName: "Home" */ '@/components/Skill.vue')
const Career = () => import(/* webpackChunkName: "Home" */ '@/components/Career.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/aboutme",
    component: AboutMe
  },
  {
    path: "/repository",
    component: Repository
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/career",
    component: Career
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router