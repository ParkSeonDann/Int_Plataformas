// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDInAmjMW_0f87cqpMctxoka7A6ujN3T58",
  authDomain: "fir-servicio-tecnico.firebaseapp.com",
  databaseURL: "https://fir-servicio-tecnico-default-rtdb.firebaseio.com",
  projectId: "fir-servicio-tecnico",
  storageBucket: "fir-servicio-tecnico.appspot.com",
  messagingSenderId: "512029357002",
  appId: "1:512029357002:web:df21f2f38b1266b11ed533",
  measurementId: "G-8YJT4T4L42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
