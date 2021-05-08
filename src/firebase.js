import firebase from "firebase";

 
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyAqa6KU07Me7hnWUdNEA1KRX5tUts8RlAU",
    authDomain: "chat-app-a2391.firebaseapp.com",
    projectId: "chat-app-a2391",
    storageBucket: "chat-app-a2391.appspot.com",
    messagingSenderId: "889861916657",
    appId: "1:889861916657:web:993c991718ab8af1122650"
  });

  const db=firebase.firestore();

  export default db;