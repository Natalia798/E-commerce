/* istanbul ignore file */
import { webApiKey } from '../utils/webApiKey';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: webApiKey,
  authDomain: "bookstore-abfca.firebaseapp.com",
  databaseURL: "https://bookstore-abfca.firebaseio.com",
  projectId: "bookstore-abfca",
  storageBucket: "bookstore-abfca.appspot.com",
  messagingSenderId: "488365116934",
  appId: "1:488365116934:web:bf2fc054e114e488957d87",
  measurementId: "G-NXTBG3G0D1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;