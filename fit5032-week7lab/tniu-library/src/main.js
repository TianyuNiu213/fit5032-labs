import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3hYB_4TsNfcd6SS8V140AtVte-ivMJM",
  authDomain: "week7-tianyu.firebaseapp.com",
  projectId: "week7-tianyu",
  storageBucket: "week7-tianyu.appspot.com",
  messagingSenderId: "636031975854",
  appId: "1:636031975854:web:cbce1cc49b3f7971ef483f"
};

// Initialize Firebase
initializeApp(firebaseConfig);