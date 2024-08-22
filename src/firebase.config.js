// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBGicGpUqLDMMDwXKlo8GQ05AScIyyCTrE",
  authDomain: "bsaapi-bb1c4.firebaseapp.com",
  projectId: "bsaapi-bb1c4",
  storageBucket: "bsaapi-bb1c4.appspot.com",
  messagingSenderId: "134188340047",
  appId: "1:134188340047:web:d7ab9ff908060af2d46b3a",
  measurementId: "G-63DE2LD4Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
