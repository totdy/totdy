import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import games from '../views/games.vue'
import privacyPolicy from '../views/privacyPolicy.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: home},
        {path: '/about', name: 'about', component: about},
        {path: '/games', name: 'games', component: games},
        {path: '/privacyPolicy', name: 'privacyPolicy', component: privacyPolicy}
    ]
})

export default router