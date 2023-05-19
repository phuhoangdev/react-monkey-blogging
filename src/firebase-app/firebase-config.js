import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyBA5Bfq9HD_C7nIoW3eTDsBBgCe47FrglA",
     authDomain: "monkey-blogging-94a52.firebaseapp.com",
     projectId: "monkey-blogging-94a52",
     storageBucket: "monkey-blogging-94a52.appspot.com",
     messagingSenderId: "517095576007",
     appId: "1:517095576007:web:8e2da84d1cf38fbf8cc9e2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
