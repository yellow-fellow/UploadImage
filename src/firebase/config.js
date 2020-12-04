import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQhpIYLKJwqiJ4bVVDczftV5V_GpS6dg0",
    authDomain: "uploadimage-96fd0.firebaseapp.com",
    projectId: "uploadimage-96fd0",
    storageBucket: "uploadimage-96fd0.appspot.com",
    messagingSenderId: "826548336285",
    appId: "1:826548336285:web:f69c86aa8133fa496d0674"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };