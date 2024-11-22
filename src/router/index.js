import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/homeView.vue";
import jobView from "@/views/jobView.vue";
import notFoundView from "@/views/notFoundView.vue";
import singleJobView from "@/views/singleJobView.vue";
import addJobView from "@/views/addJobView.vue";
import editJobView from "@/views/editJobView.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/jobs/add',
      name: 'addJob',
      component: addJobView 
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: jobView
    },
    {
      path: '/jobs/:id',
      name: 'readmore',
      component: singleJobView
    },
    {
      path: '/jobs/edit/:id',
      name: 'editJob',  
      component: editJobView 
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFoundView
    },
   
   ]
})

export default router