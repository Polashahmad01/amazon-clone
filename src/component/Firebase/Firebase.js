import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8iprzSnA6L-yL9MH2JZVmkRht0pO8jKs",
  authDomain: "clone-c602f.firebaseapp.com",
  projectId: "clone-c602f",
  storageBucket: "clone-c602f.appspot.com",
  messagingSenderId: "308027385155",
  appId: "1:308027385155:web:c824e016c55e7858123bf6",
  measurementId: "G-SL0DNETWZT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };


