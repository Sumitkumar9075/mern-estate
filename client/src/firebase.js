// firebase.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-699d0.firebaseapp.com",
  projectId: "mern-estate-699d0",
  storageBucket: "mern-estate-699d0.appspot.com",
  messagingSenderId: "608505906576",
  appId: "1:608505906576:web:564ff1b71710d4ea489f15"
};

// Initialize Firebase


export const  app = initializeApp(firebaseConfig);;
