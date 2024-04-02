import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AddForm from '@/components/admin-dashboard-components/AddForm.vue'
//import EditForm from '@/components/admin-dashboard-components/EditForm.vue'

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
      component: AboutView
    },
    {
      path: '/add-form',
      name: 'addForm',
    component: () => import('../components/admin-dashboard-components/AddForm.vue'),
     
      meta: { requiresAuth: true }
    },
    {
      path: '/edit-form/:id_product',
      name: 'editForm',
    component: () => import('../components/admin-dashboard-components/EditForm.vue'),
  
      props: true,
      meta: { requiresAuth: true }
    }
  ]
})

export default router
