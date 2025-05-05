// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPO-jxP-eQEZmM9h4Tp958MC14jD-mB4Q",
  authDomain: "appstore-2f8d6.firebaseapp.com",
  projectId: "appstore-2f8d6",
  storageBucket: "appstore-2f8d6.firebasestorage.app",
  messagingSenderId: "315013960190",
  appId: "1:315013960190:web:bb12ceb81a15f0492070af",
  measurementId: "G-TGFV1NTY7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);