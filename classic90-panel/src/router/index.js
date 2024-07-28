import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/DashboardPage.vue')
    },
    {
      path: '/product/:id?',
      children: [
        {
          path: '/create-product',
          name: 'productCreate',
          component: () => import('@/views/product/ProductCreatePage.vue')
        }
      ]
    }
  ]
})

export default router
