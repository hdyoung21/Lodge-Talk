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
