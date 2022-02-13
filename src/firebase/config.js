import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAQvMLKVf2q_8eVO3JNc81f8ZXrr4QcgxM',
  authDomain: 'dojo-site-9594e.firebaseapp.com',
  projectId: 'dojo-site-9594e',
  storageBucket: 'dojo-site-9594e.appspot.com',
  messagingSenderId: '920843005118',
  appId: '1:920843005118:web:a6f6e726d23b4b1ca702ef',
  measurementId: 'G-47SMVT0DH1',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const timestamp = serverTimestamp();

export { timestamp, db, auth, storage };
