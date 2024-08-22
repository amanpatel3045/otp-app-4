// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBRPZuSCZEjB2_znXQEt64sXoLeJWplyNM",
  authDomain: "cloudcomputing-2fa89.firebaseapp.com",
  projectId: "cloudcomputing-2fa89",
  storageBucket: "cloudcomputing-2fa89.appspot.com",
  messagingSenderId: "244232674284",
  appId: "1:244232674284:web:d838b5036e7319d1c37ec9",
  measurementId: "G-HWP9LXS586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
