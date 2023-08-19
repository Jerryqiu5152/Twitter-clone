import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDprq8N5QT2HMJrxNhVqZCxfQEbskTBQTE",
    authDomain: "twitter-clone-8c2ae.firebaseapp.com",
    projectId: "twitter-clone-8c2ae",
    storageBucket: "twitter-clone-8c2ae.appspot.com",
    messagingSenderId: "217472788164",
    appId: "1:217472788164:web:c6167050020b7e25990b91",
    measurementId: "G-6Z99VSS87S"
  };

  const firebseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db; 