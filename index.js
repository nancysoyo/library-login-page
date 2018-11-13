
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaf8_vF3jIzxa--TWosgP31SixnZ0FHFk",
    authDomain: "library-f5e2c.firebaseapp.com",
    databaseURL: "https://library-f5e2c.firebaseio.com",
    projectId: "library-f5e2c",
    storageBucket: "library-f5e2c.appspot.com",
    messagingSenderId: "460055008373"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
        //user is signed in 
        
        document.getElementById("welcome").style.display = "block";
        document.getElementById("login").style.display= "none";

        var user = firebase.auth().currentUser;
        if(user != null){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "welcome " + email_id;
        }

    }else{
        //no user is signed in
        document.getElementById("login").style.display="block";
        document.getElementById("welcome").style.display="none";
    }
});

function login(){
    var userEmail = document.getElementById("username").value;
    var password = document.getElementById("passwd").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error:"+ errorMessage);
      });
}
function logout(){
    firebase.auth().signOut();
    document.getElementById("login").style.diplay="block";
}
