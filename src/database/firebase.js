// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBGdl0n6T6OWOIgqhAF-ZeXeWdINxnBSiw',
  authDomain: 'redux-toolkit-saga-fb-v9.firebaseapp.com',
  projectId: 'redux-toolkit-saga-fb-v9',
  storageBucket: 'redux-toolkit-saga-fb-v9.appspot.com',
  messagingSenderId: '1031467217474',
  appId: '1:1031467217474:web:22194cc0bde1d3650b33db',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
