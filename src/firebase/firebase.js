// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB2sND1XvnNNKLzBN3wLp6OLYwrLFvgqY0",
    authDomain: "mealdb-7d9af.firebaseapp.com",
    databaseURL: "https://mealdb-7d9af-default-rtdb.firebaseio.com",
    projectId: "mealdb-7d9af",
    storageBucket: "mealdb-7d9af.appspot.com",
    messagingSenderId: "761064760019",
    appId: "1:761064760019:web:28690af7315cb5d60a2a26",
    measurementId: "G-RH216PVVFG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
