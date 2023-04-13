// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {

  apiKey: "AIzaSyCxwqmBQWk6d7nzHP8DbyMMlUUAr9RQaro",
  authDomain: "personal-portfolio-7a956.firebaseapp.com",
  projectId: "personal-portfolio-7a956",
  storageBucket: "personal-portfolio-7a956.appspot.com",
  messagingSenderId: "723339562472",
  appId: "1:723339562472:web:c31695e569a6529c12685d",
  databaseURL: "https://personal-portfolio-7a956-default-rtdb.firebaseio.com/",
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)