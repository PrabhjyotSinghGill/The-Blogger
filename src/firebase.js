import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91XRJjFgm5mbqja-jB1AhngKidBwDkxA",
  authDomain: "the-blogger-7da63.firebaseapp.com",
  projectId: "the-blogger-7da63",
  storageBucket: "the-blogger-7da63.appspot.com",
  messagingSenderId: "11607085781",
  appId: "1:11607085781:web:7bbb773f81aabdbf8c485c",
  measurementId: "${config.measurementId}",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default firebaseApp;
