// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7bSWFKzRm1DyITvSRV2z5gziTvpL2b4s",
  authDomain: "technologyelectronics-f094b.firebaseapp.com",
  projectId: "technologyelectronics-f094b",
  storageBucket: "technologyelectronics-f094b.appspot.com",
  messagingSenderId: "733052442195",
  appId: "1:733052442195:web:f84e2201fc0ff4937358a6"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);