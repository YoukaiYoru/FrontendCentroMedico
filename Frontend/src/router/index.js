
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/indexPage.vue'),
      
    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/loginPage.vue'),
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: () => import('@/pages/horariosPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),routes,
})

export default router
