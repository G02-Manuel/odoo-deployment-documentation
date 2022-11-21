// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEAgGoUyjR9jJn2ECgeTo1l0Z8pYdqNw8",
    authDomain: "odoo-documentation-backend.firebaseapp.com",
    projectId: "odoo-documentation-backend",
    storageBucket: "odoo-documentation-backend.appspot.com",
    messagingSenderId: "854496002748",
    appId: "1:854496002748:web:99a6185819afeae45d06b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }