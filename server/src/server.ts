import { tictactoeInit } from './tictactoe/index'
// setup server

const http = require('http')
const path = require('path')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
	cors: {
		origin: '*'
	}
})

io.on('connection', (socket) => {
	tictactoeInit(io, socket)
}

)

// set static folder
app.use(express.static(path.join(__dirname, 'index.html')))

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
