import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'gamexit.firebaseapp.com',
  databaseURL: 'https://gamexit-default-rtdb.firebaseio.com',
  projectId: 'gamexit',
  storageBucket: 'gamexit.appspot.com',
  messagingSenderId: '201425929561',
  appId: '1:201425929561:web:129cd895c9384c87ba3848'
}

export const app = initializeApp(firebaseConfig)
