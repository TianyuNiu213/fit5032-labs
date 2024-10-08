import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuth } from './authenticate'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/login', name: 'Login', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const auth = useAuth()

router.beforeEach((to, from, next) => {
  if (to.name === 'About' && !auth.isAuthenticated.value) {
    alert('You need to login to view this page.') 
    next({ name: 'Login' }) 
  } else {
    next() 
  }
})

export default router
