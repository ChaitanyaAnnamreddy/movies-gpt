// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtYi2C9j32kbtV7Qe7ZG8VYLVG2lD-BL4',
  authDomain: 'react-movies-gpt.firebaseapp.com',
  projectId: 'react-movies-gpt',
  storageBucket: 'react-movies-gpt.firebasestorage.app',
  messagingSenderId: '473840983620',
  appId: '1:473840983620:web:ae5ea343d53fe97da76611',
  measurementId: 'G-Z67M9PGJDH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
