export const GameList = async () => {
    return [
        {
            img: (await import('@/assets/games/tictactoe.png')).default,
            name: 'TicTacToe',
            ready: true,
            link: '/games/tictactoe'
        }
    ]
}
