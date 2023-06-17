import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-rugby.firebaseapp.com",
  projectId: "tienda-rugby",
  storageBucket: "tienda-rugby.appspot.com",
  messagingSenderId: "467266746767",
  appId: "1:467266746767:web:92d2c303a5c598675333fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)