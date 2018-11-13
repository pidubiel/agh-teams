  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCZfeI4kLNfh73RAvkOUFKTPz5XvCK17oc",
    authDomain: "agh-teams.firebaseapp.com",
    databaseURL: "https://agh-teams.firebaseio.com",
    projectId: "agh-teams",
    storageBucket: "agh-teams.appspot.com",
    messagingSenderId: "1075703292994"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  
  console.log(firebase);

  export default firebase