// https://firebase.google.com/docs/web/setup?hl=es-419
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCX5rZTNfu2Hxa8A8JSWypx0z0PIp5CD3s",
    authDomain: "messaging-app-a71bd.firebaseapp.com",
    projectId: "messaging-app-a71bd",
    storageBucket: "messaging-app-a71bd.appspot.com",
    messagingSenderId: "487705585637",
    appId: "1:487705585637:web:0b2f3b1ab40e5169f3710c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;