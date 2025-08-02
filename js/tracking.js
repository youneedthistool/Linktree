// Inicializa Firebase (coloque sua config aqui)
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

// Função para logar clique em botões (passa o elemento <a> ou botão)
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

// Função para logar redirecionamento
export async function logRedirect(info) {
  try {
    await addDoc(collection(db, "redirects"), {
      ...info,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      language: navigator.language
    });
    console.log("Redirect logged:", info);
  } catch (e) {
    console.error("Error logging redirect:", e);
  }
}

// Função para logar visita (ex: ao carregar página)
export async function logVisit(info = {}) {
  try {
    await addDoc(collection(db, "visits"), {
      ...info,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      language: navigator.language
    });
    console.log("Visit logged");
  } catch (e) {
    console.error("Error logging visit:", e);
  }
}
