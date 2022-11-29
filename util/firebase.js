// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaenTYDScCoR8dloUkh09TcouOmvmWTso",
  authDomain: "shop-rest-ba556.firebaseapp.com",
  databaseURL: "https://shop-rest-ba556-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-rest-ba556",
  storageBucket: "shop-rest-ba556.appspot.com",
  messagingSenderId: "133898324238",
  appId: "1:133898324238:web:ed498b11ebfc4e43cd2f5f",
  measurementId: "G-HPQLW6GKBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app