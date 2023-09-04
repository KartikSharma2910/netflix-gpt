// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4lFNhTkOZefMuycbTP2RKuM1ZsLk40s",
  authDomain: "netflix-gpt-3f5e8.firebaseapp.com",
  projectId: "netflix-gpt-3f5e8",
  storageBucket: "netflix-gpt-3f5e8.appspot.com",
  messagingSenderId: "278878740496",
  appId: "1:278878740496:web:319c9e30664dabe5326a95",
  measurementId: "G-6YBVYF7024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
