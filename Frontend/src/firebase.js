// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFPpLr7c9xBAC5mgzgSTyGVRSL2ZSzdBw",
  authDomain: "road-buddiz.firebaseapp.com",
  projectId: "road-buddiz",
  storageBucket: "road-buddiz.appspot.com",
  messagingSenderId: "449974315188",
  appId: "1:449974315188:web:130dc3787477c06f7a0fe1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app, "gs://road-buddiz.appspot.com");
export const db = getFirestore(app);
