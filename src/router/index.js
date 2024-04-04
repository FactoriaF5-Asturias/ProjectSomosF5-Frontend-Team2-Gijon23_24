import AboutView from "@/views/AboutView.vue";
import AdminProfileView from "@/views/AdminProfileView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
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
		},
	],
});

export default router;
