import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import io from 'socket.io-client'
import { useLoading } from '@/composables/useNotification'
import gameService from '@/composables/games/tictactoe/useGameService'
import socketService from '@/composables/games/useSocketService'
import { playSound } from '@/composables/useUtils'
import clickSound from '@/assets/sounds/click.wav'
import tWin from '@/assets/sounds/t-win.wav'
import tLose from '@/assets/sounds/t-lose.wav'
import tDraw from '@/assets/sounds/t-draw.wav'



// const URL = 'https://gamexit.herokuapp.com/'
const URL = 'http://localhost:9000/'

export const board = ref([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
])

export const globalGameState = {
    hasGameStarted: ref(false),
    player: ref(''),
    disableAll: ref(true),
    result: ref('')
}


const joinRoom = async (id) => {
    const socket = socketService.socket
    const joined = await gameService
        .joinGameRoom(socket, id as string)
        .catch((err) => {
            alert(err.error)
        })
    if (joined) useLoading().closeLoading()
}
const handleGameStart = () => {
    if (socketService.socket)
        gameService.onStartGame(socketService.socket, (options) => {
            ResetGame()

            globalGameState.hasGameStarted.value = true
            globalGameState.disableAll.value = options.start
            globalGameState.player.value = options.symbol
        })
}
const handleGameUpdate = () => {
    if (socketService.socket)
        gameService.onGameUpdate(socketService.socket, (pos) => {
            updateBoard(pos[0], pos[1], pos[2])

        })
}
const updateGameMatrix = (pos) => {
    if (socketService.socket) {
        gameService.updateGame(socketService.socket, pos)
        if (winner.value == globalGameState.player.value) {
            gameService.gameWin(socketService.socket, '0')
        } else if (winner.value) {
            gameService.gameWin(socketService.socket, '1')
            // alert('The Game is a TIE!')
        }
    }
}
const handleGameWin = () => {
    if (socketService.socket)
        gameService.onGameWin(socketService.socket, (message) => {
            console.log(message)
            console.log(typeof message)
            if (message === '0') playSound(tLose)
            else if (message === '1') playSound(tDraw)
        })
}

export const playRematch = () => {
    if (socketService.socket) {
        gameService.gameRematch(socketService.socket, 'requesting a Match')
        ResetGame()
        globalGameState.hasGameStarted.value = false

    }
}

export const connectSocket = async () => {
    useLoading().openLoading('Setting things up')
    const { id } = useRoute().params
    const socket = await socketService
        .connect(URL)
        .catch((err) => {
            console.log('Error: ', err)
        })
    await joinRoom(id)
    handleGameStart()
    handleGameUpdate()
    handleGameWin()
}



const CalculateWinner = (board) => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            globalGameState.disableAll.value = true
            if (globalGameState.player.value === board[a]) playSound(tWin)
            globalGameState.result.value = `Player ${board[a]} wins!`
            return board[a]
        }
    }

    if (!board.includes('')) {
        globalGameState.disableAll.value = true
        globalGameState.result.value = 'This Match ended in a draw'
        return true
    }
    return null
}
export const winner = computed(() => CalculateWinner(board.value.flat()))

export const MakeMove = (x, y) => {
    if (winner.value) return
    if (board.value[x][y]) return
    playSound(clickSound)
    board.value[x][y] = globalGameState.player.value
    updateGameMatrix([x, y, globalGameState.player.value])
    globalGameState.disableAll.value = true

}

const updateBoard = (x, y, player) => {
    if (winner.value) return
    if (board.value[x][y]) return
    playSound(clickSound)
    board.value[x][y] = player
    globalGameState.disableAll.value = false
}

export const ResetGame = () => {
    board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    globalGameState.disableAll.value = true
}

