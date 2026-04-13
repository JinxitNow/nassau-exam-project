import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcKCg11AUxKELC6hznqecPCE1zKONbZPE",
  authDomain: "nassau-exam.firebaseapp.com",
  databaseURL: "https://nassau-exam-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nassau-exam",
  storageBucket: "nassau-exam.firebasestorage.app",
  messagingSenderId: "783887844986",
  appId: "1:783887844986:web:073092a31d2615b5155dc3"
};

const app = initializeApp(firebaseConfig);

// 🔥 Realtime Database export
export const db = getDatabase(app);