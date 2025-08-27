// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVUqd-euCQnjBHIhA25LJAF_wH1iKf7w",
  authDomain: "auth-context-691b2.firebaseapp.com",
  projectId: "auth-context-691b2",
  storageBucket: "auth-context-691b2.firebasestorage.app",
  messagingSenderId: "727075854075",
  appId: "1:727075854075:web:68110da233e6c1b47a825e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;