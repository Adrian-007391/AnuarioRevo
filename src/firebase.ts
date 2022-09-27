import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP5wnzbckKU70GECG2bEotXntT4-ZwWEQ",
  authDomain: "anuario-revo.firebaseapp.com",
  projectId: "anuario-revo",
  storageBucket: "anuario-revo.appspot.com",
  messagingSenderId: "1020940075674",
  appId: "1:1020940075674:web:a961ffdae8b8f198bbd523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
