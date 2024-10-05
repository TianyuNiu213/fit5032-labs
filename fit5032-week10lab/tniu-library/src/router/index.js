import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import FirebaseSigninView from '../views/FirebaseSigninView.vue';
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import LoginView from '../views/LoginView.vue';
import AddBookView from '../views/AddBookView.vue';
import BookListView from '../views/BookListView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import WeatherView from '../views/WeatherView.vue';
import CountBookAPI from '../views/CountBookAPI.vue';
import GetAllBookAPI from '../views/GetAllBookAPI.vue';   
import { useAuth } from './authenticate';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/FireLogin', name: 'FireLogin', component: FirebaseSigninView },
  { path: '/FireRegister', name: 'FireRegister', component: FirebaseRegisterView },
  { path: '/addbook', name: 'AddBook', component: AddBookView},
  { path: '/getBookCount', name: 'GetBookCount', component: GetBookCountView},
  { path: '/weather', name: 'Weather', component: WeatherView},
  { path: '/countbook', name: 'Countbook', component: CountBookAPI},
  {path: '/GetAllBookAPI', name: 'GetAllBookAPI', component: GetAllBookAPI},
  { path: '/booklist', name: 'Booklist', component: BookListView},
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAdmin: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const auth = useAuth();

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdmin && (!auth.isAuthenticated.value || auth.userRole.value !== 'admin')) {
    alert('Admin access only.');
    next({ name: 'FireLogin' }); // Redirect to login if not admin
  } else {
    next();
  }
});

export default router;
