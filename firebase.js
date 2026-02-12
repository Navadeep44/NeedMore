// ================= FIREBASE CONFIG =================

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYk4BTVNUYEjDnEkNKIQQ9JxxGXccIAqE",
  authDomain: "needmore-19498.firebaseapp.com",
  projectId: "needmore-19498",
  storageBucket: "needmore-19498.firebasestorage.app",
  messagingSenderId: "125193971001",
  appId: "1:125193971001:web:b8f1efc0c45d162cfe34e8",
  measurementId: "G-RTJYGDH78N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);