import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAWOXkhQTQJhWTTu2l5gZSxNq077peL0zc",
  authDomain: "whatsapp-clone-84a01.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-84a01.firebaseio.com",
  projectId: "whatsapp-clone-84a01",
  storageBucket: "whatsapp-clone-84a01.appspot.com",
  messagingSenderId: "523845139430",
  appId: "1:523845139430:web:45a4b6f0f8b198a1e97427",
  measurementId: "G-THRLR570J3"
};
const firebaseApp = firebase.initializeApp( firebaseConfig );
const db = firebaseApp.firestore(  );
const auth = firebase.auth(  );
const provider = new firebase.auth.GoogleAuthProvider(  );
export {auth, provider};
export default db;