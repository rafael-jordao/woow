// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkelvk9rP2k4MFuUL5IXvFeA9AB3H62X8",
  authDomain: "woow-f71c4.firebaseapp.com",
  projectId: "woow-f71c4",
  storageBucket: "woow-f71c4.appspot.com",
  messagingSenderId: "509918145191",
  appId: "1:509918145191:web:3ad2914278e904e6748982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)