import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFAOy3GNsQIJNgpaUhSG3xV38xZaBa8ws",
  authDomain: "signalreactnative.firebaseapp.com",
  projectId: "signalreactnative",
  storageBucket: "signalreactnative.appspot.com",
  messagingSenderId: "886721022886",
  appId: "1:886721022886:web:e21d0838e94c08a910dd67",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
