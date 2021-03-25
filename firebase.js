import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjGVEYqCAzeMYZEVU0UlSqmsO6-7JNhJo",
  authDomain: "realtime-chat-368ce.firebaseapp.com",
  projectId: "realtime-chat-368ce",
  storageBucket: "realtime-chat-368ce.appspot.com",
  messagingSenderId: "738428320566",
  appId: "1:738428320566:web:94dce0c4c92c0ba9e11197",
  measurementId: "G-VRSJWDV683",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//If previously there is no firebase setup -> go ahead and initialize the app / firebase that used befire

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//Pass the database and the google authentication
export {db, auth, provider};