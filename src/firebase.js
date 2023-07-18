import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4He_fRy2is_djr-jnLOpGmImlqAz1mYk",
  authDomain: "react-firebase-4c8da.firebaseapp.com",
  projectId: "react-firebase-4c8da",
  storageBucket: "react-firebase-4c8da.appspot.com",
  messagingSenderId: "70863295709",
  appId: "1:70863295709:web:8b9d3f7b7ff8e47645b734",
  measurementId: "G-07XP9R27E0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
