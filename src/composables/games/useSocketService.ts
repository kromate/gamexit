import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/cjs'

class SocketService {
    public socket: Socket | null = null

    public connect(
        url: string
    ): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
        return new Promise((res, reject) => {
            this.socket = io(url)

            if (!this.socket) return reject()

            this.socket.on('connect', () => {
                res(this.socket as Socket)
            })

            this.socket.on('connect_error', (err) => {
                console.log('Connection error: ', err)
                reject(err)
            })
        })
    }
}

export default new SocketService()
