// setup server

const http = require('http')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const socketHandler = require('./tictactoe/utils/MainController')
const roomHandler = require('./tictactoe/utils/RoomController')
const gameHandler = require('./tictactoe/utils/GameController')


const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: '*',
  },
})




io.on('connection', (socket) => {
  const handlerSocket = new socketHandler(io, socket)
  const handlerRooms = new roomHandler(io, socket)
  const handlerGames = new gameHandler(io, socket)

  handlerSocket.connected()

  socket.on('tic_join_game', (message) => {
    handlerRooms.joinGame(message)
  })

  socket.on('tic_update_game', (message) => {
    handlerGames.updateGame(message)
  })

  socket.on('tic_game_win', (message) => {
    handlerGames.gameWin(message)
  })

  socket.on('tic_game_rematch', (message) => {
    handlerGames.gameWin(message)
  })





})


// set static folder
app.use(express.static(path.join(__dirname, 'index.html')))

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})