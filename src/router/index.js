import { createRouter, createWebHistory } from 'vue-router';
// Import route components
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Manage from '../views/Manage.vue';
import Login from '../views/Login.vue';
// Create the router instance
const router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(),
    // Define some route records, each route record should map to a component.
    routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/manage', name: 'manage', component: Manage },
    { path: '/login', name: 'login', component: Login },
    ],
    });

    export default router; 