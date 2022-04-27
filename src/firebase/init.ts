import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "codedenx.firebaseapp.com",
  projectId: "codedenx",
  storageBucket: "codedenx.appspot.com",
  messagingSenderId: "1007702659011",
  appId: "1:1007702659011:web:f31e410c1faad8edbdf776",
  measurementId: "G-5DEX9YX706",
};

export const app = initializeApp(firebaseConfig);
