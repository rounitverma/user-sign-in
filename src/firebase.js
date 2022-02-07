import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV2UJTcEqEvQabvP0aRHJCGcFPmCtC-9I",
  authDomain: "user-auth-internship.firebaseapp.com",
  projectId: "user-auth-internship",
  storageBucket: "user-auth-internship.appspot.com",
  messagingSenderId: "124523639576",
  appId: "1:124523639576:web:d10538e82e6aa2cce6a46d",
  measurementId: "G-BN83XJ89N5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
