// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOj35Hmjl3BajWrt8FFgPcOPdoE1Emap0",
    authDomain: "still-chassis-400715.firebaseapp.com",
    projectId: "still-chassis-400715",
    storageBucket: "still-chassis-400715.appspot.com",
    messagingSenderId: "108954654903",
    appId: "1:108954654903:web:9f4ba1c631d43730055532",
    measurementId: "G-DGLRGVLWXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();
