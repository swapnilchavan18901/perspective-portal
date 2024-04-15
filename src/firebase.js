import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWD7aykJUrFbJ-NAIe3lf4rSNBAyA5kd4",
  authDomain: "blogwebsite-8464f.firebaseapp.com",
  projectId: "blogwebsite-8464f",
  storageBucket: "blogwebsite-8464f.appspot.com",
  messagingSenderId: "465033598640",
  appId: "1:465033598640:web:a2a1e850071348ac930d75",
  measurementId: "G-508K8N25F6",};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
