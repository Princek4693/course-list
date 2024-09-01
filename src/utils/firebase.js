// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBairaqM_on3NrDYjLT-2_oBdZNaWrkp20",
  authDomain: "courselist-90998.firebaseapp.com",
  projectId: "courselist-90998",
  storageBucket: "courselist-90998.appspot.com",
  messagingSenderId: "146233724905",
  appId: "1:146233724905:web:6a48b1247f0a4a70e68578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


