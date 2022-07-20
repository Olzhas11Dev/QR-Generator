// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqMDSkKbhkmKRNPuG1MRg12iyyoct-SuU",
    authDomain: "auth-c92be.firebaseapp.com",
    projectId: "auth-c92be",
    storageBucket: "auth-c92be.appspot.com",
    messagingSenderId: "662694782442",
    appId: "1:662694782442:web:becf81b55376811ac43e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider();



