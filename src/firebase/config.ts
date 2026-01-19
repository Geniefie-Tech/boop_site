import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCncm24KmsrQrviFZyX43Oe2H2zBk8xcEI",
  authDomain: "booporg-38bf1.firebaseapp.com",
  projectId: "booporg-38bf1",
  storageBucket: "booporg-38bf1.firebasestorage.app",
  messagingSenderId: "601780937608",
  appId: "1:601780937608:web:f49010b380acd91d4b903d",
  measurementId: "G-TDESEV7HKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
