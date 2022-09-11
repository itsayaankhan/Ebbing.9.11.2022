import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgbpyqH-QxWun32wstSgznBn63jY_Mpm4',
  authDomain: 'ebbing-dev-3bd3d.firebaseapp.com',
  projectId: 'ebbing-dev-3bd3d',
  storageBucket: 'ebbing-dev-3bd3d.appspot.com',
  messagingSenderId: '462492373735',
  appId: '1:462492373735:web:13b5eaf468e0caffb68842',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
