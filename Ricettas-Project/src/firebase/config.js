import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCOTleKPJiBJagKveYzBwejYhUAOXEFw_Q",
    authDomain: "ourricetta.firebaseapp.com",
    projectId: "ourricetta",
    storageBucket: "ourricetta.appspot.com",
    messagingSenderId: "256924382096",
    appId: "1:256924382096:web:3dcd570851e654b3b5f915"
  };
 
 
  //init firebase
  firebase.initializeApp(firebaseConfig)
 
 
  //init services
const projectFirestore=  firebase.firestore()

export {projectFirestore}