// add players into the room object and if the id doesn't exist then create a room
// run checks to ensure only two players can join a room
// if that

const rooms: Record<string, string[]> = {}
const isPlaying: Record<string, boolean> = {}

class RoomHandler {
	io: any
	socket: any

	constructor(io, socket) {
		this.io = io
		this.socket = socket
	}

	async joinGame(message) {
		// const connectedSockets = this.io.sockets.adapter.rooms.get(message.roomId)
		if (!rooms[message.roomId]) rooms[message.roomId] = [message.userId]
		else if (this.isPlayerAlreadyInGame(message.roomId, message.userId)) return
		else if (this.getRoomPlayerCount(message.roomId))
			rooms[message.roomId].push(message.userId)
		else {
			this.socket.emit('tic_room_join_error', {
				status: 412,
				error: 'This Room is full'
			})
			return
		}

		await this.socket.join(message.roomId)
		this.io.to(message.roomId).emit('tic_room_joined')

		if (this.io.sockets.adapter.rooms.get(message.roomId).size === 2) {
			isPlaying[message.userId] = true
			this.socket.emit('tic_start_game', { start: true, symbol: 'x' })
			this.socket
				.to(message.roomId)
				.emit('tic_start_game', { start: false, symbol: 'o' })
		}
	}

	private getRoomPlayerCount(roomId) {
		if (rooms[roomId]) {
			const room = rooms[roomId]
			return room.length <= 1
		} else {
			this.socket.emit('tic_room_join_error', {
				status: 412,
				error: 'This Room doesn\'t exist or can\'t be created'
			})
			return false
		}
	}

	private isPlayerAlreadyInGame(roomId, playerId) {
		if (rooms[roomId].includes(playerId) && isPlaying[playerId]) {
			this.socket.emit('tic_room_rejoined')
			return true
		} else {
			return false
		}
	}
}

module.exports = RoomHandler
