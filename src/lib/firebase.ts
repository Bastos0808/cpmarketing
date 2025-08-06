// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "site-cp-marketing",
  appId: "1:776314160089:web:b8b8e37c02ef7979bc4fc8",
  storageBucket: "site-cp-marketing.firebasestorage.app",
  apiKey: "AIzaSyCa-EANxPACewmn5sXrfDNJGfKSXSysa-U",
  authDomain: "site-cp-marketing.firebaseapp.com",
  messagingSenderId: "776314160089",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
