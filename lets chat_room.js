
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCd4uPtEz6MPclhUND2muceCdEFJQQ1Ww0",
      authDomain: "lets-chat-73d2c.firebaseapp.com",
      projectId: "lets-chat-73d2c",
      storageBucket: "lets-chat-73d2c.appspot.com",
      messagingSenderId: "497394898521",
      appId: "1:497394898521:web:610eef2608829e4ab30348",
      measurementId: "G-LENXPZWG8W"
    };
    
    // Initialize Firebase
    initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
