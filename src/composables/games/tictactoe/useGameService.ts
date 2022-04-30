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
        listiner: (matrix: IPlayMatrix) => void
    ) {
        socket.on('on_game_update', ({ matrix }) => listiner(matrix))
    }

    public async onStartGame(
        socket: Socket,
        listiner: (options: IStartGame) => void
    ) {
        socket.on('start_game', listiner)
    }

    public async gameWin(socket: Socket, message: string) {
        socket.emit('game_win', { message })
    }

    public async onGameWin(socket: Socket, listiner: (message: string) => void) {
        socket.on('on_game_win', ({ message }) => listiner(message))
    }
}

export default new GameService()
