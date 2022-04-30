import { Socket } from 'socket.io'

class GameHandler {
    io: any
    socket: any

    constructor(io, socket) {
        this.io = io
        this.socket = socket
    }

    getSocketGameRoom(socket: Socket): string {
        const socketRooms = Array.from(socket.rooms.values()).filter(
            (r) => r !== socket.id
        )
        const gameRoom = socketRooms && socketRooms[0]

        return gameRoom
    }

    updateGame(message) {
        const gameRoom = this.getSocketGameRoom(this.socket)
        this.socket.to(gameRoom).emit('on_game_update', message)
    }

    gameWin(message) {
        const gameRoom = this.getSocketGameRoom(this.socket)
        this.socket.to(gameRoom).emit('on_game_win', message)
    }

}




module.exports = GameHandler