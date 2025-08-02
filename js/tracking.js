// js/tracking.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY4ripKlTwQ8n7gsabBibq5e6Mtlei9EU",
  authDomain: "youneedthistool-93178.firebaseapp.com",
  projectId: "youneedthistool-93178",
  storageBucket: "youneedthistool-93178.firebasestorage.app",
  messagingSenderId: "844231154258",
  appId: "1:844231154258:web:5fef186c9ebd3adcec9d8b",
  measurementId: "G-9FG1PV7TX4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function logClick(el) {
  try {
    await addDoc(collection(db, "clicks"), {
      platform: el.dataset.platform || "unknown",
      trackingId: el.dataset.trackingid || "none",
      productId: el.dataset.productid || "none",
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      language: navigator.language
    });
    console.log("Click logged:", el.dataset.platform);
  } catch (e) {
    console.error("Error logging click:", e);
  }
}

export async function trackRedirect(el) {
  await logClick(el);
  // Pode adicionar aqui outras ações de redirecionamento se quiser
}
