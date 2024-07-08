// confi-firebase.js

// Cargar Firebase desde CDN
// Nota: Asegúrate de que estas líneas están después de cargar firebase-app.js y firebase-firestore.js desde la CDN en tu HTML
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
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
