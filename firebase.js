import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMN2b28ob4z-nBOBaUvztFqTaKPNjG4F8",
  authDomain: "noblesfood-27c51.firebaseapp.com",
  projectId: "noblesfood-27c51",
  storageBucket: "noblesfood-27c51.firebasestorage.app",
  messagingSenderId: "347118874821",
  appId: "1:347118874821:web:a360659aabbaef547980ac",
  measurementId: "G-NPKCWE6WY9",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
