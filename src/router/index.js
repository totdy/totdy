import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: ()=>import('../views/home.vue')},
        {path: '/about', name: 'about', component: ()=>import('../views/about.vue')},
        {path: '/games', name: 'games', component: ()=>import('../views/games.vue')},
        {path: '/games/:gameSlug', component: ()=>import('../views/game.vue')},
        {path: '/privacyPolicy', name: 'privacyPolicy', component: ()=>import('../views/privacyPolicy.vue')}
    ]
})

export default router