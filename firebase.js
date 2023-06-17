import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPd385J3wgtqTbRsD7MAb3pcpprfSf79c",
  authDomain: "chatapp-nextjs-17a98.firebaseapp.com",
  projectId: "chatapp-nextjs-17a98",
  storageBucket: "chatapp-nextjs-17a98.appspot.com",
  messagingSenderId: "1084700762453",
  appId: "1:1084700762453:web:8965c2ab79df7dfc6d4fdc",
  measurementId: "G-BL09Y76PBM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
