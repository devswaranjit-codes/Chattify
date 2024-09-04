// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"

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
const analytics = getAnalytics(app);
