/* istanbul ignore file */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAaulPz_FL8EKPBVwdzmSJehL5HEsf1AR0",
  authDomain: "bookstore-13f87.firebaseapp.com",
  databaseURL: "https://bookstore-13f87.firebaseio.com",
  projectId: "bookstore-13f87",
  storageBucket: "bookstore-13f87.appspot.com",
  messagingSenderId: "414044131328",
  appId: "1:414044131328:web:42ece5a1cb2005325108e5",
  measurementId: "G-QLX8BTQK13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;