// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

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
const db = getFirestore();
export default db;