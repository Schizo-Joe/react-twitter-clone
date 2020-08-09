import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAD7zP7qhRQK4ptkq1DvfUvq6mtglRBbU",
    authDomain: "twitter-clone-560ed.firebaseapp.com",
    databaseURL: "https://twitter-clone-560ed.firebaseio.com",
    projectId: "twitter-clone-560ed",
    storageBucket: "twitter-clone-560ed.appspot.com",
    messagingSenderId: "793522092305",
    appId: "1:793522092305:web:5bd7e8ebebf355e4bd74b0",
    measurementId: "G-E9NNYXLPS8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;