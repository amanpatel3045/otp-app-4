// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1pOGBAkD2Q4MhOlicZvt1EunxARLf4tA",
  authDomain: "otp-project-66a90.firebaseapp.com",
  projectId: "otp-project-66a90",
  storageBucket: "otp-project-66a90.appspot.com",
  messagingSenderId: "21506226510",
  appId: "1:21506226510:web:a9aa83950cc2e0df51861f",
  measurementId: "G-9W6TKM0C9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);