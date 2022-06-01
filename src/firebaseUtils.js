// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUwLQJyW_ZLlWR0oiR0FuH27PVVHdUstM",
  authDomain: "site-8c6e2.firebaseapp.com",
  projectId: "site-8c6e2",
  storageBucket: "site-8c6e2.appspot.com",
  messagingSenderId: "741284001793",
  appId: "1:741284001793:web:7b91cecb7cc6473935e800",
  measurementId: "G-66VYZ13QVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);