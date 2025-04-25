import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMU4gPTuEN1jiT16BFHnFckL7TL30D9H8",
  authDomain: "myfirstappwithfirebase-6a742.firebaseapp.com",
  projectId: "myfirstappwithfirebase-6a742",
  storageBucket: "myfirstappwithfirebase-6a742.firebasestorage.app",
  messagingSenderId: "510090298109",
  appId: "1:510090298109:web:b10355c29a12225a097494"
};

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
