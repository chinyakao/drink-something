import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'unsort',
    component: () => import( '../components/Home.vue'),
  },
  {
    path: '/nameup',
    name: 'nameup',
    component: () => import( '../components/Home.vue'),
  },
  {
    path: '/namedown',
    name: 'namedown',
    component: () => import( '../components/Home.vue'),
  },
  {
    path: '/priceup',
    name: 'priceup',
    component: () => import( '../components/Home.vue'),
  },
  {
    path: '/pricedown',
    name: 'pricedown',
    component: () => import( '../components/Home.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import( '../components/Edit.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
