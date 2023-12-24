// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmggiZjgcrhpLLLVaZ1KnpehuujE-CnUg",
  authDomain: "netflixgpt-63bde.firebaseapp.com",
  projectId: "netflixgpt-63bde",
  storageBucket: "netflixgpt-63bde.appspot.com",
  messagingSenderId: "365680064163",
  appId: "1:365680064163:web:5f7176574ed5d26853b116",
  measurementId: "G-VYC1NSKNFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
