import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Notas-note',
    component: () => import(/* webpackChunkName: "Notas" */ '../pages/Notas.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
