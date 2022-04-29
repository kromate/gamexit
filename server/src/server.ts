import { Server } from 'socket.io'

const io = new Server(9000, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})




io.on('connection', (socket) => {
  socket.on('play', (index) => {
    console.log('server received', index)
    socket.broadcast.emit('play', index)
  })
})


// io.listen(9000)