import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLRJz_bZf5AxALveKzdFFh2ZZEGme_Dc8",
  authDomain: "admin-movie-14ecb.firebaseapp.com",
  projectId: "admin-movie-14ecb",
  storageBucket: "admin-movie-14ecb.appspot.com",
  messagingSenderId: "525936768600",
  appId: "1:525936768600:web:9148893895b8d3661e7c2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
