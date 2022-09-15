class RoomHandler {
    io: any
    socket: any

    constructor(io, socket) {
        this.io = io
        this.socket = socket
    }

    async joinGame(message) {
        const connectedSockets = this.io.sockets.adapter.rooms.get(message.roomId)
        const socketRooms = Array.from(this.socket.rooms.values()).filter(
            (r) => r !== this.socket.id
        )

        if (
            socketRooms.length > 0 ||
            (connectedSockets && connectedSockets.size === 2)
        ) {
            this.socket.emit('tic_room_join_error', {
                status: 500,
                error: 'Room is full please choose another room to play!'
            })
        } else {
            await this.socket.join(message.roomId)
            this.socket.emit('tic_room_joined')

            if (this.io.sockets.adapter.rooms.get(message.roomId).size === 2) {
                this.socket.emit('tic_start_game', { start: true, symbol: 'x' })
                this.socket
                    .to(message.roomId)
                    .emit('tic_start_game', { start: false, symbol: 'o' })
            }
        }
    }
}

module.exports = RoomHandler
