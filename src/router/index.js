import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id:name',
    name: 'job_details',
    component: JobDetails,
    props: true  //Accept any routing paramters as props.  This needs to be setup in the associated component as well.
  },
  {
    path: '/all-jobs', //redirect this param to /jpbs
    redirect: '/jobs' 
  },
  {
    path: '/:catchAll(.*)',
    name: 'not_found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
