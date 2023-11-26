<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCWbFGf8l8rVb9D9_9pRFXbSyXcFfk4nCk",
    authDomain: "login-firebase-databasewedding.firebaseapp.com",
    projectId: "login-firebase-databasewedding",
    storageBucket: "login-firebase-databasewedding.appspot.com",
    messagingSenderId: "365182297706",
    appId: "1:365182297706:web:a9a2ff1119b57e74f10c13"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script> 
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
// register function
function register{
email = document.getElementById('email').value
password = document.getElementById("password").value
fname= document.getElementById("fname").value
lname=document.getElementById("lname").value
}


// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }