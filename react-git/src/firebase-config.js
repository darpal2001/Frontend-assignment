import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaHuBR0RjI7IWQlgHDKFcR44I7OVyYv6w",
  authDomain: "blog-demo-82330.firebaseapp.com",
  databaseURL: "https://blog-demo-82330-default-rtdb.firebaseio.com",
  projectId: "blog-demo-82330",
  storageBucket: "blog-demo-82330.appspot.com",
  messagingSenderId: "875466170459",
  appId: "1:875466170459:web:1ff9c35c90174033669f7e",
  measurementId: "G-T4TR2FW1V1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
