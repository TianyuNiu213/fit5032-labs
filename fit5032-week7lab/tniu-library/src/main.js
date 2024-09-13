import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

// Initialize Firebase Auth
const auth = getAuth();

// Create Vue application
const app = createApp(App)

// Configure PrimeVue with Aura theme
app.use(PrimeVue, { theme: { preset: Aura } })

// Initialize router
app.use(router)

// Monitor Firebase authentication state on app load
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user.email);
        // Optionally, you can update the Vuex store or Vue state with user information here
    } else {
        console.log("No user is signed in.");
    }
});

// Mount the Vue application
app.mount('#app')
