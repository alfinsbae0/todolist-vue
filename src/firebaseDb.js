import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsWDRjAMbWbrpwXNj5vM5zJQp31lzpeik",
    authDomain: "crudvue-b7f4c.firebaseapp.com",
    projectId: "crudvue-b7f4c",
    storageBucket: "crudvue-b7f4c.appspot.com",
    messagingSenderId: "51336039074",
    appId: "1:51336039074:web:ac81a686e2f9984cef65fb",
    measurementId: "G-FTJEZFF34D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
