import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBaDVEzG5JA-ketwHwtLo1nxnW6sUAAY1I",
  authDomain: "crwn-db-a2910.firebaseapp.com",
  databaseURL: "https://crwn-db-a2910.firebaseio.com",
  projectId: "crwn-db-a2910",
  storageBucket: "crwn-db-a2910.appspot.com",
  messagingSenderId: "505742848752",
  appId: "1:505742848752:web:8d66a5fc14b6e1822f0835",
  measurementId: "G-1B8RC6ZXVY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
