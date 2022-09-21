class SocketHandler {
    io: any
    socket: any

    constructor(io, socket) {
        this.io = io
        this.socket = socket
    }

    connected() {
        this.socket.emit('connected')
        // console.log('New Socket connected: ', this.socket.id)
    }

    disconnected() {
        this.socket.emit('disconnected')
        // console.log('Disconnected: ', this.socket.id)
    }
}

module.exports = SocketHandler
