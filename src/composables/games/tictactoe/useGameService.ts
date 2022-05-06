import { Socket } from 'socket.io-client'

export interface IStartGame {
    start: boolean;
    symbol: 'x' | 'o';
}
export type IPlayMatrix = Array<Array<number | null>>;

class GameService {
    public async joinGameRoom(socket: Socket | null, roomId: string): Promise<boolean> {
        return new Promise((rs, rj) => {
            socket!.emit('join_game', { roomId })
            socket!.on('room_joined', () => rs(true))
            socket!.on('room_join_error', (e) => rj(e))
        })
    }

    public async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
        socket.emit('update_game', { matrix: gameMatrix })
    }

    public async onGameUpdate(
        socket: Socket,
        listener: (matrix: IPlayMatrix) => void
    ) {
        socket.on('on_game_update', ({ matrix }) => listener(matrix))
    }

    public async onStartGame(
        socket: Socket,
        listener: (options: IStartGame) => void
    ) {
        socket.on('start_game', listener)
    }

    public async gameWin(socket: Socket, message: string) {
        socket.emit('game_win', { message })
    }

    public async onGameWin(socket: Socket, listener: (message: string) => void) {
        socket.on('on_game_win', ({ message }) => listener(message))
    }

    public async gameRest(socket: Socket, message: string) {
        socket.emit('game_reset', { message })
    }

    public async onGameRest(socket: Socket, listener: (message: string) => void) {
        socket.on('on_game_reset', ({ message }) => listener(message))
    }
}

export default new GameService()
