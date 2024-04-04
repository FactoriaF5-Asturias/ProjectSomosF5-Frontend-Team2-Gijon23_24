import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import AdminProfileView from "@/views/AdminProfileView.vue";

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
