import { Socket } from 'socket.io-client'

export interface IStartGame {
    start: boolean;
    symbol: 'x' | 'o';
}
export type IPlayMatrix = Array<Array<number | null>>;

class GameService {
    public async joinGameRoom(socket: Socket | null, roomId: string, userId:string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            socket!.emit('tic_join_game', { roomId, userId })
            socket!.on('tic_room_joined', () => resolve(true))
            socket!.on('tic_room_rejoined', () => resolve(true))
            socket!.on('tic_room_join_error', (e) => reject(e))
            socket!.on('tic_multi_room_error', (e) => reject(e))
        })
    }

    public async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
        socket.emit('tic_update_game', { matrix: gameMatrix })
    }

    public async onGameUpdate(
        socket: Socket,
        listener: (matrix: IPlayMatrix) => void
    ) {
        socket.on('tic_on_game_update', (board) => listener(board))
    }

    public async onStartGame(
        socket: Socket,
        listener: (options: IStartGame) => void
    ) {
        socket.on('tic_start_game', listener)
    }

    public async gameWin(socket: Socket, message: string) {
        socket.emit('tic_game_win', { message })
    }

    public async onGameWin(socket: Socket, listener: (message: string) => void) {
        socket.on('tic_on_game_win', (message) => listener(message))
    }

    public async gameRematch(socket: Socket, message: string) {
        socket.emit('tic_game_rematch', { message })
    }

    public async onGameRematch(socket: Socket, listener: (message: string) => void) {
        socket.on('tic_on_game_rematch', ({ message }) => listener(message))
    }
}

export default new GameService()
