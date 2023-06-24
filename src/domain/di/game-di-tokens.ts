class GameDITokens {
    static readonly getPlayersInViewUseCase = Symbol.for('getPlayersInViewUseCase')
    static readonly playerJoinGameUseCase = Symbol.for('playerJoinGameUseCase');
    static readonly playerLeaveGameUseCase = Symbol.for('playerLeaveGameUseCase')

    static readonly gamePlayersRepository = Symbol.for('gamePlayersRepositoy')
}

export default GameDITokens;