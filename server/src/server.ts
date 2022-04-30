// setup server

const http = require('http')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const socketHandler = require('./utils/MainController')
const roomHandler = require('./utils/RoomController')
const gameHandler = require('./utils/GameController')


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

  socket.on('join_game', (message) => {
    handlerRooms.joinGame(message)
  })

  socket.on('update_game', (message) => {
    handlerGames.updateGame(message)
  })

  socket.on('game_win', (message) => {
    handlerGames.gameWin(message)
  })





})


// set static folder
app.use(express.static(path.join(__dirname, 'index.html')))

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})