import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChwWVmPZPQ2OYK9IMM477zkgr-Q1me5KQ",
    authDomain: "crwn-db-55433.firebaseapp.com",
    databaseURL: "https://crwn-db-55433.firebaseio.com",
    projectId: "crwn-db-55433",
    storageBucket: "crwn-db-55433.appspot.com",
    messagingSenderId: "845166485464",
    appId: "1:845166485464:web:2401c2d4794654bb6f9cad",
    measurementId: "G-WNQP00DJWL"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;




