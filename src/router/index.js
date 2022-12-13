import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/hojavida',
    name: 'hojavida',
    component: () => import(/* webpackChunkName: "about" */ '../views/HojaVidaView.vue')
  },
  {
    path:'/datos',
    name: 'datos',
    component: () => import(/* webpackChunkName: "about" */ '../views/DatosView.vue')
  },
  {
    path:'/academico',
    name: 'academico',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcademicoView.vue')
  },
  {
    path:'/laboral',
    name: 'laboral',
    component: () => import(/* webpackChunkName: "about" */ '../views/LaboralView.vue')
  },
  {
    path:'/referencia',
    name: 'referencia',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReferenciaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
