import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
apiKey: "AIzaSyDfQ_8S9AVQ95f2A43jLzSGOTcFUU_nP8c",
authDomain: "subscriptions-8b83a.firebaseapp.com",
projectId: "subscriptions-8b83a",
storageBucket: "subscriptions-8b83a.firebasestorage.app",
messagingSenderId: "690360334914",
appId: "1:690360334914:web:19fb94aea193654eca0bdb"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
