// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCI9EYt1NT9gt0BYuvsT8pJHbEhUL7jfpQ",
    authDomain: "meal-db-3307f.firebaseapp.com",
    projectId: "meal-db-3307f",
    storageBucket: "meal-db-3307f.appspot.com",
    messagingSenderId: "364968032617",
    appId: "1:364968032617:web:29f83644edea0713a6e5f8",
    measurementId: "G-H5FWQ1C2D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
export default app;