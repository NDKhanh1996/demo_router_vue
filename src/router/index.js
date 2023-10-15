import { createRouter, createWebHistory } from 'vue-router'
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import Product from "@/components/Product.vue";
import Error from "@/components/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'about',
      component: Error
    }
  ]
})

export default router
