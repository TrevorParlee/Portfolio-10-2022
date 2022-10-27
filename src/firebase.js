// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCk9HLbUMUMSm_L_tvI6VZfELEOD0d-l8Y',
  authDomain: 'react-portfolio-dashboar-340ec.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-340ec',
  storageBucket: 'react-portfolio-dashboar-340ec.appspot.com',
  messagingSenderId: '948094793445',
  appId: '1:948094793445:web:6f4665f772e2a81809460c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
