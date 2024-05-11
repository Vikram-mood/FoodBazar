// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKjI-e82qC1VIVpqWO0J_bZR6z8VfvME0",
  authDomain: "food-bazar-9f311.firebaseapp.com",
  projectId: "food-bazar-9f311",
  storageBucket: "food-bazar-9f311.appspot.com",
  messagingSenderId: "1001162099047",
  appId: "1:1001162099047:web:c6be53e32654a921a447c2",
  measurementId: "G-1PVSRJJHEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);