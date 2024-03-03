// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-NcEiiOVQ_oQOr6Ae4NT1lRD34NWCMAQ",
  authDomain: "sds-1-c4ddf.firebaseapp.com",
  projectId: "sds-1-c4ddf",
  storageBucket: "sds-1-c4ddf.appspot.com",
  messagingSenderId: "288841842588",
  appId: "1:288841842588:web:95e6c8d4956babb5365259",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
