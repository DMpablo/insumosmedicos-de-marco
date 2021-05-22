import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDYz4gAYQarZNs6KYRUeYDBqGKr5tz2C7k",
  authDomain: "insumos-medicos-53864.firebaseapp.com",
  projectId: "insumos-medicos-53864",
  storageBucket: "insumos-medicos-53864.appspot.com",
  messagingSenderId: "294292958958",
  appId: "1:294292958958:web:9b61adadeae9d5aaeb8dff",
  measurementId: "G-GW13JM6GEG",
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
