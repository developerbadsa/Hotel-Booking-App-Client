// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUBhlgh23BO9pivuoj2iQZ7dp0L4aoyYU",
  authDomain: "hotel-b8387.firebaseapp.com",
  projectId: "hotel-b8387",
  storageBucket: "hotel-b8387.appspot.com",
  messagingSenderId: "1056445092084",
  appId: "1:1056445092084:web:413afba076c2052d908ea1"
};

// Check if Firebase app with the name '[DEFAULT]' already exists
let app;
try {
  app = getApp('[DEFAULT]');
} catch (e) {
  // If the app does not exist, initialize it
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase
export const auth = getAuth(app);
