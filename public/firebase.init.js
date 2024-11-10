// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzXevSGhtblcOG7WxSCieRBJew6lbf8yU",
  authDomain: "simple-firebase-auth-pro-381d7.firebaseapp.com",
  projectId: "simple-firebase-auth-pro-381d7",
  storageBucket: "simple-firebase-auth-pro-381d7.firebasestorage.app",
  messagingSenderId: "5575459338",
  appId: "1:5575459338:web:0e4d371f5750eebf8a55f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
