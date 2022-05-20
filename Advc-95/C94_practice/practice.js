//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBVWq0UDlCaq_YgZGF4RmjNiKCGAG3pePU",
    authDomain: "kwitter-f6b40.firebaseapp.com",
    databaseURL: "https://kwitter-f6b40-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6b40",
    storageBucket: "kwitter-f6b40.appspot.com",
    messagingSenderId: "602454916907",
    appId: "1:602454916907:web:786f6848e7460d8b0dcf6e"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
        mahek : "patel",
        value2 : "value2",
        value3 : "value3",
        value4 : "value4",
        value5 : "value5"
    });
  }