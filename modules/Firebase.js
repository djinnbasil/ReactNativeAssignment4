import firebase from 'firebase';
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_DATABASE_URL,
//   FIREBASE_PROJECTID,
//   FIREBASE_STORAGEBUCKET,
//   FIREBASE_MESSAGINGSENDERID,
//   FIREBASE_APPID,
//   FIREBASE_MEASUREMENTID,
// } from 'react-native-dotenv';

let firebaseConfig = {
    authDomain: "reactnativedb-431d4.firebaseapp.com",
    apiKey: "AIzaSyAI-cFA45t0XtXjM5qncwwCkAWKD4D2t5w",
    databaseURL: "https://reactnativedb-431d4.firebaseio.com",
    projectId: "reactnativedb-431d4",
    storageBucket: "reactnativedb-431d4.appspot.com",
    messagingSenderId: "330024461659"

   
};

let app = firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = app.database();
export const auth = app.auth();

