import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4d52L3gIr97TVfKhdbqxp6WawY6BMRGM",
  authDomain: "fir-slack-channel.firebaseapp.com",
  databaseURL: "https://fir-slack-channel.firebaseio.com",
  projectId: "fir-slack-channel",
  storageBucket: "fir-slack-channel.appspot.com",
  messagingSenderId: "460794053889",
  appId: "1:460794053889:web:8c7a291cc0017569974700",
  measurementId: "G-DDT72LC5D8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
