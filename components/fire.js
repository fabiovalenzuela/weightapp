import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxRk9cR-Jyi3bkjt8Tn9yyesYW1H8x-o8",
    authDomain: "weightapp-85a36.firebaseapp.com",
    projectId: "weightapp-85a36",
    storageBucket: "weightapp-85a36.appspot.com",
    messagingSenderId: "226771835324",
    appId: "1:226771835324:web:126b94e30d51156daa33b9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;