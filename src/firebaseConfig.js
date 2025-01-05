// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5AThcViMo2VQXo1LfErZ2VkLewAi-MY",
  authDomain: "counter-186fe.firebaseapp.com",
  projectId: "counter-186fe",
  storageBucket: "counter-186fe.firebasestorage.app",
  messagingSenderId: "743356393971",
  appId: "1:743356393971:web:00a16a70183343146a0a86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
