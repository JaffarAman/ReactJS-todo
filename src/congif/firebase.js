import firebase from "firebase"
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyBFGE-iajS3tmioKqm5nMfelRERVvEIrFQ",
    authDomain: "react-todoapplication.firebaseapp.com",
    databaseURL: "https://react-todoapplication-default-rtdb.firebaseio.com",
    projectId: "react-todoapplication",
    storageBucket: "react-todoapplication.appspot.com",
    messagingSenderId: "980624500701",
    appId: "1:980624500701:web:1f2445b1c97d0f173d7834"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);