const express = require('express')
const socketIO = require('socket.io')
const cors = require('cors')
const PORT = process.env.PORT || 9000
const INDEX = '/index.html'
const app = express();

app.use(cors())
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const io = socketIO(server)

// const io = new Server(9000, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST']
//   }
// })




io.on('connection', (socket) => {
  socket.on('play', (index) => {
    console.log('server received', index)
    socket.broadcast.emit('play', index)
  })
})


