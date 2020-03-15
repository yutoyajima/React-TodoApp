// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "AIzaSyC7XC6AF1R7ye60qHoY274clGcDt0de5mk",
   authDomain: "yyreacttodoapp.firebaseapp.com",
   databaseURL: "https://yyreacttodoapp.firebaseio.com",
   projectId: "yyreacttodoapp",
   storageBucket: "yyreacttodoapp.appspot.com",
   messagingSenderId: "391587363591",
   appId: "1:391587363591:web:c48388601225e0616763a2"
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export { db }