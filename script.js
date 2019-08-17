const socket = io('http://localhost:3000');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('messages-container')

const promptName = prompt('What is your name?')
appendMessage('You joined the chat')

socket.emit('new-user', promptName)

socket.on('chat-message', message => {
  appendMessage(message)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value
  socket.emit('send-message', message)
  appendMessage(message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
  console.log(message)
}