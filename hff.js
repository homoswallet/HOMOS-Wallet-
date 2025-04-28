// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyQfMmzp41jTYV4GXFViV2wMMTIiP8XU",
  authDomain: "wallet-52a17.firebaseapp.com",
  databaseURL: "https://wallet-52a17-default-rtdb.firebaseio.com",
  projectId: "wallet-52a17",
  storageBucket: "wallet-52a17.appspot.com",
  messagingSenderId: "440517088889",
  appId: "1:440517088889:web:a862ab37106851c66066a8",
  measurementId: "G-28Z0S2BGEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// Export initialized services to use them in other files
export { app, analytics, auth, database };