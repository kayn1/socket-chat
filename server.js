const io = require('socket.io')(3000);

const users = {}

io.on('connection', socket => {
  socket.on('send-message', message => {
    socket.broadcast.emit('chat-message', `${users[socket.id]}  ${message}`)
  })

  socket.on('new-user', userName => {
    socket.broadcast.emit('chat-message', `${userName} joined the chat`)
    users[socket.id] = userName
  })

  socket.on('disconnect', user => {
    let userName = users[socket.id]
    socket.broadcast.emit('chat-message', `${userName} left the chat`)
  })
})
