import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import GeekView from '../views/GeekView.vue'
import HomeView from '../views/HomeView.vue'
import HouseView from '../views/HouseView.vue'
import LithophaneView from '../views/LithophaneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'carrito',
      component: CartView
    },
    {
      path: '/favorites',
      name: 'favoritos',
      component: FavoritesView
    },
    {
      path: '/geek',
      name: 'geek',
      component: GeekView
    },
    {
      path: '/house',
      name: 'hogar',
      component: HouseView
    },
    {
      path: '/lithophane',
      name: 'litofanías',
      component: LithophaneView
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
    },
    {
      path: '/favorite',
      name: 'favorite',
    component: () => import('../views/FavoriteView.vue'),
  
      props: true,
      meta: { requiresAuth: true }
    },
 {
			path: "/user/profile",
			name: "user-Profile",
			component: UserProfileView,
		},
		{
			path: "/admin/profile",
			name: "admin-Profile",
			component: AdminProfileView,
		}
  ]})

