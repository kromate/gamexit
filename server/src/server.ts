import { tictactoeInit } from './tictactoe/index'
// setup server
const http = require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')
const SocketHandler = require('./core/MainController')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
	cors: {
		origin: '*'
	}
})

io.on('connection', (socket) => {
	const handlerSocket = new SocketHandler(io, socket)
	handlerSocket.connected()
	tictactoeInit(io, socket)
})
io.on('disconnect', (socket) => {
	const handlerSocket = new SocketHandler(io, socket)
	handlerSocket.disconnected()
	tictactoeInit(io, socket)
})

// set static folder
app.use(express.static(path.join(__dirname, 'index.html')))

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
