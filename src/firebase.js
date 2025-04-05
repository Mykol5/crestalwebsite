// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // for authentication
import { getFirestore } from "firebase/firestore"; // if you need Firestore access

const firebaseConfig = {
  apiKey: "AIzaSyBjYfDBhkVMKVRcGkjLEFGN0-c0Er_7DLI",
  authDomain: "galiamelon-fc4b6.firebaseapp.com",
  projectId: "galiamelon-fc4b6",
  storageBucket: "galiamelon-fc4b6.appspot.com",
  messagingSenderId: "1068486889871",
  appId: "1:1068486889871:web:d0416f8f202dc634157bfa",
  measurementId: "G-VX985ZSP9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore so they can be reused in other files
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
