const socketHandler = require('./utils/MainController')
const roomHandler = require('./utils/RoomController')
const gameHandler = require('./utils/GameController')

export const tictactoeInit = (io: any, socket: any) => { 
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
}