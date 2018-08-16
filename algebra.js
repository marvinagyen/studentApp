// Initialize Variables
var usernameElem = document.getElementById("user");
var messageElem = document.getElementById("msg");
var btn = document.getElementById("submit");

// Call Function when Clicking Button
btn.addEventListener("click", updateDB);

var database = firebase.database().ref("Algebra/");
console.log(database);

// Create Function
function updateDB (event) {
    event.preventDefault();
    var username = usernameElem.value;
    var message = messageElem.value;

    usernameElem.value = "";
    messageElem.value = "";

    console.log(username + " : " + message);

    // Update DataBase

    var value = {
        PROFILENAME: username,
        TXTMSG: message,
    };
    database.push(value);
};

// createContainer 
var chatContainer = document.querySelector(".CHAT");

// eventListener 

database.on("child_added", addMessageToChat);

function addMessageToChat(rowData){
    // Initalize func variables
    var row = rowData.val();
    var name = row.PROFILENAME;
    var text = row.TXTMSG;
    var d = new Date(); //date time
    let dateadd = document.createElement("p")
    dateadd.innerHTML = d.toDateString();
    dateadd.className = "date";
    dateadd.style.textDecoration = "underline";
    dateadd.style.fontSize = "10px";
    chatContainer.prepend(dateadd);
    // add message into the chat
    let pElem = document.createElement("p");
    pElem.style.fontSize = '15px'; 
    pElem.innerText = name + ": " + text;
    chatContainer.prepend(pElem);
};