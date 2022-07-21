// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLGk1zDQ6teCi6cZ5uTq4W_75L2uIOZW8',
  authDomain: 'bc-react-828bb.firebaseapp.com',
  databaseURL:
    'https://bc-react-828bb-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bc-react-828bb',
  storageBucket: 'bc-react-828bb.appspot.com',
  messagingSenderId: '112823603850',
  appId: '1:112823603850:web:30d5d36bdcd68b2537d373',
  measurementId: 'G-XWF7ZPNHN2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase();
