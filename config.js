import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBY77gCNm_7N8Uy3m2Dil6TXcUtwDgnEu8",
    authDomain: "bedtime-stories-b1583.firebaseapp.com",
    databaseURL: "https://bedtime-stories-b1583.firebaseio.com",
    projectId: "bedtime-stories-b1583",
    storageBucket: "bedtime-stories-b1583.appspot.com",
    messagingSenderId: "1057583992522",
    appId: "1:1057583992522:web:33e0fce0fca461922bae33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();