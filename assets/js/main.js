const messageForm = document.querySelector('.message-form');
const messageList = document.querySelector('.message-list');

// hard-coded messages for demonstration purposes
const messages = [
	{name: "John", message: "Congratulations on your bachelor party!"},
	{name: "Mike", message: "I'm looking forward to the party!"},
	{name: "Sarah", message: "Can't wait to celebrate with you!"},
];

// populate the message list with the initial messages
populateMessageList(messages);

// add an event listener to the message form to handle form submissions
messageForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const nameInput = document.querySelector('#name');
	const messageInput = document.querySelector('#message');

	const name = nameInput.value.trim();
	const message = messageInput.value.trim();

	// validate the inputs
	if (name === '' || message === '') {
		alert('Please fill in both fields.');
		return;
	}

	// create a new message object and add it to the message list
	const newMessage = {name, message};
	addMessageToList(newMessage);

	// clear the input fields
	nameInput.value = '';
	messageInput.value = '';
});

function populateMessageList(messages) {
	messages.forEach((message) => {
		addMessageToList(message);
	});
}

function addMessageToList(message) {
	const li = document.createElement('li');
	li.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
	messageList.appendChild(li);
}

// Retrieve the message list from the server
function retrieveMessages() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var messages = JSON.parse(xhr.responseText);
        displayMessages(messages);
      }
    };
    xhr.open("GET", "getMessages.php", true);
    xhr.send();
  }
  
  // Display the message list on the page
  function displayMessages(messages) {
    var messageList = document.getElementById("message-list");
    messageList.innerHTML = "";
    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      var messageItem = document.createElement("li");
      messageItem.innerHTML = "<span>" + message.author + ":</span> " + message.content;
      messageList.appendChild(messageItem);
    }
  }
  
  // Add a new message to the message board
  function postMessage() {
    var author = document.getElementById("author-input").value;
    var content = document.getElementById("content-input").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var message = JSON.parse(xhr.responseText);
        displayMessage(message);
        document.getElementById("author-input").value = "";
        document.getElementById("content-input").value = "";
      }
    };
    xhr.open("POST", "addMessage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("author=" + author + "&content=" + content);
  }
  
  // Display a new message on the page
  function displayMessage(message) {
    var messageList = document.getElementById("message-list");
    var messageItem = document.createElement("li");
    messageItem.innerHTML = "<span>" + message.author + ":</span> " + message.content;
    messageList.appendChild(messageItem);
  }
  
  // Delete a message from the message board
  function deleteMessage(messageId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var messageItem = document.getElementById("message-" + messageId);
        messageItem.parentNode.removeChild(messageItem);
      }
    };
    xhr.open("POST", "deleteMessage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("messageId=" + messageId);
  }
  
  // Update a message on the message board
  function updateMessage(messageId) {
    var content = prompt("Enter the new message content:");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var message = JSON.parse(xhr.responseText);
        var messageItem = document.getElementById("message-" + messageId);
        messageItem.innerHTML = "<span>" + message.author + ":</span> " + message.content;
      }
    };
    xhr.open("POST", "updateMessage.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("messageId=" + messageId + "&content=" + content);
  }
  
  // Set up event listeners
  document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();
    postMessage();
  });
  document.getElementById("message-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
      var messageId = event.target.getAttribute("data-message-id");
      deleteMessage(messageId);
    } else if (event.target.classList.contains("update-button")) {
      var messageId = event.target.getAttribute("data")
    }});
    const form = document.querySelector('.topic-form');
    const board = document.querySelector('.board');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // get the input values
        const topicInput = document.querySelector('#topic');
        const descriptionInput = document.querySelector('#description');
        const topic = topicInput.value.trim();
        const description = descriptionInput.value.trim();
    
        // validate the inputs
        if (topic === '' || description === '') {
            alert('Please fill in both fields.');
            return;
        }
        
        // create a new "sticky note" element and add it to the board
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h3');
        title.textContent = topic;
        
        const desc = document.createElement('p');
        desc.textContent = description;
        
        card.appendChild(title);
        card.appendChild(desc);
        
        board.appendChild(card);
        
        // clear the input fields
        topicInput.value = '';
        descriptionInput.value = '';
    });
    