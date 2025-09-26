// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHskfhwB_Bm2B5wOfwqipaJHMxXJhJSGc",
  authDomain: "doalivrosweb.firebaseapp.com",
  projectId: "doalivrosweb",
  storageBucket: "doalivrosweb.firebasestorage.app",
  messagingSenderId: "1077493985664",
  appId: "1:1077493985664:web:023acaab88a88a1ba0d165",
  measurementId: "G-FZ628XSBW8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

export function cadastrarUsuario(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}


