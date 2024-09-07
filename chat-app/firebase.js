// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth import -> step-1
import { getAuth } from "firebase/auth";
// firstore step-1
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLKwtfBF8p-5zrpBI7LJpKk1I4oji-Yg8",
  authDomain: "chattify-45c29.firebaseapp.com",
  projectId: "chattify-45c29",
  storageBucket: "chattify-45c29.appspot.com",
  messagingSenderId: "802189501823",
  appId: "1:802189501823:web:1d0836a1abb3db1a6fe64a",
  measurementId: "G-5YPN8NF39F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth-step-2
const auth = getAuth(app);
// firestor step-2
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage }
