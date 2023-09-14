// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR5gzLOhsRKwH6t-Gvyq9UEIvoXPw4K-8",
  authDomain: "auth-firebase-a7196.firebaseapp.com",
  projectId: "auth-firebase-a7196",
  storageBucket: "auth-firebase-a7196.appspot.com",
  messagingSenderId: "832152807619",
  appId: "1:832152807619:web:ec4a2d8c2c933afff6da76"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };