import { Socket } from 'socket.io'
const playerKey = { X: 'O', O: 'X' }
const board = [
	['', '', ''],
	['', '', ''],
	['', '', '']
]
type Player = 'X' | 'O' | '';
class GameHandler {
	io: any
	socket: any
	player: Player

	constructor(io, socket) {
		this.io = io
		this.socket = socket
		this.player = ''
	}

	getSocketGameRoom(socket: Socket): string {
		const socketRooms = Array.from(socket.rooms.values()).filter(
			(r) => r !== socket.id
		)
		const gameRoom = socketRooms && socketRooms[0]

		return gameRoom
	}

	async updateGame(message) {
		if (
			await this.updateBoard(
				message.matrix[0],
				message.matrix[1],
				message.matrix[2]
			)
		)
			return
		this.player = playerKey[message.matrix[2]]
		const gameRoom = this.getSocketGameRoom(this.socket)
		this.socket.to(gameRoom).emit('tic_on_game_update', board)
	}

	gameWin(message) {
		const gameRoom = this.getSocketGameRoom(this.socket)
		this.socket.to(gameRoom).emit('tic_on_game_win', { message, board })
	}

	CalculateWinner = async (board) => {

		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a]
			}
		}

		if (!board.includes('')) {
			this.socket.emit('tic_on_game_draw')
			return true
		}
		return null
	}

	updateBoard = async (x: number, y: number, player: Player) => {
		if (board[x][y]) return true
		board[x][y] = player
		if (await this.CalculateWinner(board.flat())) return true

		return false
	}
}

module.exports = GameHandler
