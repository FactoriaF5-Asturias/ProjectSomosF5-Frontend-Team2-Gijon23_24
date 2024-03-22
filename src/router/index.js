import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";

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
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: DashboardView,
		},
		// {
		//   path: '/add-form',
		//   name: 'addForm',
		//   component: AddForm,
		//   meta: { requiresAuth: true }
		// },
		// {
		//   path: '/edit-form/:id_product',
		//   name: 'editForm',
		//   component: EditForm,
		//   props: true,
		//   meta: { requiresAuth: true }
		// }
	],
});

export default router;
