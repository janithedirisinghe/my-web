// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbu3Evzc0RzRVD2Emyb1UPeAn0D0xYNE4",
    authDomain: "my-web-bebc6.firebaseapp.com",
    projectId: "my-web-bebc6",
    storageBucket: "my-web-bebc6.appspot.com",
    messagingSenderId: "782609685587",
    appId: "1:782609685587:web:f2271374232bed3b987aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Initialize Storage (For storing images)
const storage = getStorage(app);

export { db, storage };
