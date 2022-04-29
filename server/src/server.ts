const server = require('http').createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})
io.on('connection', (socket) => {
  socket.emit('hello', 'youtube tutorial')
  socket.on('play', (index) => {
    console.log('server received', index)
    socket.broadcast.emit('play', index)
  })
})

server.listen(9000)
