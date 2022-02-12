import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAQvMLKVf2q_8eVO3JNc81f8ZXrr4QcgxM',
  authDomain: 'dojo-site-9594e.firebaseapp.com',
  projectId: 'dojo-site-9594e',
  storageBucket: 'dojo-site-9594e.appspot.com',
  messagingSenderId: '920843005118',
  appId: '1:920843005118:web:a6f6e726d23b4b1ca702ef',
  measurementId: 'G-47SMVT0DH1',
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
