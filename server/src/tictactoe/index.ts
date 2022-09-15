const SocketHandler = require('./utils/MainController')
const RoomHandler = require('./utils/RoomController')
const GameHandler = require('./utils/GameController')

export const tictactoeInit = (io: any, socket: any) => {
	const handlerSocket = new SocketHandler(io, socket)
	const handlerRooms = new RoomHandler(io, socket)
	const handlerGames = new GameHandler(io, socket)

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
