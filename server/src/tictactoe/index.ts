
const RoomHandler = require('./RoomController')
const GameHandler = require('./GameController')

export const tictactoeInit = (io: any, socket: any) => {
	const handlerRooms = new RoomHandler(io, socket)
	const handlerGames = new GameHandler(io, socket)

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
