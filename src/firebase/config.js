import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuQSuRGGhuVCZDufkB5_-34ZqR1b6U85k",
  authDomain: "notifyapp-1780b.firebaseapp.com",
  projectId: "notifyapp-1780b",
  storageBucket: "notifyapp-1780b.appspot.com",
  messagingSenderId: "463338203647",
  appId: "1:463338203647:web:fce0d05f55cb0197de5fca"
};

firebase.initializeApp(firebaseConfig);

export default firebase;