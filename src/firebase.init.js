// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU5o8jcA2iPSiHJ0VuYcvVOPqG4wqpeJE",
  authDomain: "my-user-100e9.firebaseapp.com",
  projectId: "my-user-100e9",
  storageBucket: "my-user-100e9.appspot.com",
  messagingSenderId: "143776118145",
  appId: "1:143776118145:web:be90a269e6a861abb5e480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;