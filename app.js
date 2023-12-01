// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBm_8PZcsCS6kaaOXejWJCNWop6Pd8lGGU",
    authDomain: "wedding-af156.firebaseapp.com",
    databaseURL: "https://wedding-af156-default-rtdb.firebaseio.com",
    projectId: "wedding-af156",
    storageBucket: "wedding-af156.appspot.com",
    messagingSenderId: "54891412272",
    appId: "1:54891412272:web:114d79cb2a146647e4a6f5"}
  firebase.initializeApp(firebaseConfig);
  
  // Email authentication
  function signInWithEmail() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  }
  
  // Email registration
  function registerWithEmail() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registered and signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  }
  
  // Google authentication
// Google registration
function registerWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
      .then((userCredential) => {
        // If the user doesn't exist, it will be registered
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
      });
  }
  