// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxuFxSwUVtpSb8FOmgNmxcgLyPtsmTgHo",
  authDomain: "ema-john-simple-f08c3.firebaseapp.com",
  projectId: "ema-john-simple-f08c3",
  storageBucket: "ema-john-simple-f08c3.appspot.com",
  messagingSenderId: "865430272548",
  appId: "1:865430272548:web:a23859a81eede8ad2e36b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;