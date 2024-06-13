import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated, isNotAuthenticated, setTitlePage } from "./guards";
import Layout from "@/core/layout/Layout.vue";

const VITE_APP_URL = 'App Minhas Tarefas';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/login/Login.vue"),
            meta: {
                title: `${VITE_APP_URL} - Login`,
            },
            beforeEnter: isNotAuthenticated
        },
        {
            path: "",
            component: Layout,
            props: true,
            children: [
                {
                    path: "/home",
                    component: () => import("@/views/home/Home.vue"),
                    meta: {
                        title: `${VITE_APP_URL} - Home`,
                    }
                }
            ],
            beforeEnter: isAuthenticated
        }
    ],
});

router.beforeEach(setTitlePage);

export default router;
