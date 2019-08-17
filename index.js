const app = require('express')();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

http.listen(3000, () => {
  console.log('Listeing on port 3000')
})

socket.on('connection', (conn) => {
  console.log('User connected')
})

