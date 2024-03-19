import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pedidos', // Caminho pra acessar a rota
    name: 'Pedidos', // Qual a Vue que será renderizada
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue') // Import da Vue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
