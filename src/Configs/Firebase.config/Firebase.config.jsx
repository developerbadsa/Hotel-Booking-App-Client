// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcpARaHH7JNyNztoSlF0qsuHCO56smMWQ",
  authDomain: "hotels-room-booking-project.firebaseapp.com",
  projectId: "hotels-room-booking-project",
  storageBucket: "hotels-room-booking-project.appspot.com",
  messagingSenderId: "372810264156",
  appId: "1:372810264156:web:9129e99d0dc8b44df94099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
