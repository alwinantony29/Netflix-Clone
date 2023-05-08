// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCJqunO2VVIhS809uc9aG9orubqy4VVAQA",
  authDomain: "netflix-clone-a927c.firebaseapp.com",
  projectId: "netflix-clone-a927c",
  storageBucket: "netflix-clone-a927c.appspot.com",
  messagingSenderId: "350978520658",
  appId: "1:350978520658:web:4809778abd62b471b1918b",
  measurementId: "G-MYZ9BZ5G15"
};
export const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);