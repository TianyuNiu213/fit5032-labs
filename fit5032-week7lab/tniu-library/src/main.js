import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDv4-kYz_JYAF20i9jCuxjfbHojpzRH8gg",
    authDomain: "fit5032-week7-tniulibrary.firebaseapp.com",
    projectId: "fit5032-week7-tniulibrary",
    storageBucket: "fit5032-week7-tniulibrary.appspot.com",
    messagingSenderId: "223266453669",
    appId: "1:223266453669:web:9cdc6b271adb2c5243754c"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')