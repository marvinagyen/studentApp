var database = firebase.database().ref("Algebra/");
var database2 = firebase.database().ref("US History/")

// createContainer 
var chatContainer = document.querySelector("#messages");

// eventListener 

database2.on("child_added", addMessageToChat)
database.on("child_added", addMessageToChat);

function addMessageToChat(rowData){
    // Initalize func variables
    var row = rowData.val();
    var name = row.PROFILENAME;
    var text = row.TXTMSG;
    // add message into the chat
    let pElem = document.createElement("p");
    pElem.innerText = name + ": " + text;
    chatContainer.appendChild(pElem);
};