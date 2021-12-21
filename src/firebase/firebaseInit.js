import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDO_7HxABdDA-_qhZprQSs2iDXEWEajA4",
    authDomain: "fireblogs-860cc.firebaseapp.com",
    projectId: "fireblogs-860cc",
    storageBucket: "fireblogs-860cc.appspot.com",
    messagingSenderId: "727968348986",
    appId: "1:727968348986:web:ca49a3c455eb0716d42e03"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();