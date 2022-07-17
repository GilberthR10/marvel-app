import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound.vue'
import HomeView from '../views/HomeView.vue'
import HeroView from '../views/HeroView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters/:id',
      name: 'Heroe',
      component: HeroView
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
})

export default router
