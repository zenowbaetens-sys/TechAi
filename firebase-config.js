// Firebase configuratie

const firebaseConfig = {
  apiKey: "AIzaSyAn4tbG6FuF5pr2SBrjuIkEnQLHn6S51cs",
  authDomain: "techai-afd0c.firebaseapp.com",
  projectId: "techai-afd0c",
  storageBucket: "techai-afd0c.firebasestorage.app",
  messagingSenderId: "1007151286115",
  appId: "1:1007151286115:web:d64b613535090209b0b556",
  measurementId: "G-9QS1K0SBG4"
};


// Firebase starten
const app = firebase.initializeApp(firebaseConfig);


// Login
const auth = firebase.auth();