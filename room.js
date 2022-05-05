
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbczxrinVjFo7Hw0MOCjJ4A7GcNsoX6Nk",
    authDomain: "fir-10edf.firebaseapp.com",
    databaseURL: "https://fir-10edf-default-rtdb.firebaseio.com",
    projectId: "fir-10edf",
    storageBucket: "fir-10edf.appspot.com",
    messagingSenderId: "403001450372",
    appId: "1:403001450372:web:a1d817927589c9ca9bc7d1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function logout(){
    window.location = "index.html";

    localStorage.removeItem("user_name", user_name);

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html;"
}

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "msg.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "msg.html";
}