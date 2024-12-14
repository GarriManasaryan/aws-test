// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPu-dv1HQLHsflv5dFqI9K01oFpJWl9QA",
    authDomain: "fb-auth-test-b33fe.firebaseapp.com",
    projectId: "fb-auth-test-b33fe",
    storageBucket: "fb-auth-test-b33fe.firebasestorage.app",
    messagingSenderId: "877118251741",
    appId: "1:877118251741:web:7bcea3d46f48dedc3df134",
    measurementId: "G-5R0D7LT24V"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const firebaseInstance = {
    auth,
    googleProvider,
    firebase
};

export default firebaseInstance;