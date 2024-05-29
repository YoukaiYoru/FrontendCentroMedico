
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/indexPage.vue'),
      
    
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),routes,
})

export default router
