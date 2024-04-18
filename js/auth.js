// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3eLfXLlxDiFxqJb519JCpkOyoJlIzy2g",
    authDomain: "mohdb-be274.firebaseapp.com",
    databaseURL: "https://mohdb-be274-default-rtdb.firebaseio.com",
    projectId: "mohdb-be274",
    storageBucket: "mohdb-be274.appspot.com",
    messagingSenderId: "110826998013",
    appId: "1:110826998013:web:05772cab0a59f10fe09694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

const provider = new GoogleAuthProvider();
console.log(provider);

// New Registration code start
document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("Registration successfully!!");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
        alert(error);
    });             
});
// End

// Login code start
document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert(user.email+" Login successfully!!!");
        document.getElementById('logout').style.display = 'block';
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
    });             
});
// End

// Logout code start
document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        alert('Sign-out successful.');
        document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        // An error happened.
        console.log('An error happened.');
    });             
});
// End

// Google login code start
document.getElementById("google-login").addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        alert("Welcome "+user.displayName);
        console.log(user);
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });             
});
// End
