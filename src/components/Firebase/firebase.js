import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA6EAEEMvnxHaLX1RbzbHGxFpMOdbgjiP4",
  authDomain: "betesport.firebaseapp.com",
  databaseURL: "https://betesport.firebaseio.com",
  projectId: "betesport",
  storageBucket: "betesport.appspot.com",
  messagingSenderId: "190282763167",
  appId: "1:190282763167:web:1ba3d0a94a40588b3ecbaa",
  measurementId: "G-LGKVQE4333"
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;
