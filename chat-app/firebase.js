// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth import -> step 1
import {getAuth} from "firebase/auth";
// firestore import -> step 1
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0_-m-3GN1m712tv4kWcoN6GmUj-rQDuw",
  authDomain: "chat-app-4730e.firebaseapp.com",
  projectId: "chat-app-4730e",
  storageBucket: "chat-app-4730e.appspot.com",
  messagingSenderId: "479235362830",
  appId: "1:479235362830:web:e6e6f48a838c684009ec5f",
  measurementId: "G-QTTLTCNC94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth step 2
const auth = getAuth(app);
// firestore step 2
const db = getFirestore();
const storage = getStorage();


export { auth, db, storage };
