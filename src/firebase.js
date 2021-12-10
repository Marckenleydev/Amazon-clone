import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9jgS-wB3g3kX5hbkODh7sZ6-_gyb_S5Q",
    authDomain: "amzon-clone-bf499.firebaseapp.com",
    projectId: "amzon-clone-bf499",
    storageBucket: "amzon-clone-bf499.appspot.com",
    messagingSenderId: "332421395749",
    appId: "1:332421395749:web:618df61fa85da2db8d56cc",
    measurementId: "G-G3DNSZ5V8D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth};
  export default db;