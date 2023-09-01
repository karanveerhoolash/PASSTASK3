import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path:'/extrac',
      name: 'extrac',
      component: () => import('../views/ExtraC.vue')
    },
    {
      path:'/education',
      name: 'education',
      component: () => import('../views/Education.vue')
    },
    {
      path:'/certifications',
      name: 'certifications',
      component: () => import('../views/Certifications.vue')
    },
    {
      path:'/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
