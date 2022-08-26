// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8eGrCzgdNUKTWlm3Vnw0RMorw5_ND2mI",
  authDomain: "crisnica-a7bda.firebaseapp.com",
  projectId: "crisnica-a7bda",
  storageBucket: "crisnica-a7bda.appspot.com",
  messagingSenderId: "130210317024",
  appId: "1:130210317024:web:3c175ea4e808097c090685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
