class GameDITokens {
    static readonly getPlayersInViewUseCase = Symbol.for('getPlayersInViewUseCase')
    static readonly gamePlayersRepository = Symbol.for('gamePlayersRepositoy')
}

export default GameDITokens;