// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_6UATEvOwstjZX0LKFQZSBMM_yuPp_lE",
  authDomain: "react-auth-ema-john.firebaseapp.com",
  projectId: "react-auth-ema-john",
  storageBucket: "react-auth-ema-john.appspot.com",
  messagingSenderId: "17413901739",
  appId: "1:17413901739:web:0a837ee1309237002456ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;