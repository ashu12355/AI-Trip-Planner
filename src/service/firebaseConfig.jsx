// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 
  authDomain: "ai-trip-planner-318e4.firebaseapp.com",
  projectId: "ai-trip-planner-318e4",
  storageBucket: "ai-trip-planner-318e4.appspot.com",
  messagingSenderId: "390671732680",
  appId: 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);