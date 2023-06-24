import { inject, injectable } from "inversify";
import IPlayerJoinGameUseCase, { PlayerJoinGameInputPort } from "../interfaces/use-cases/player-join-game-use-case-interface";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import GameDITokens from "../di/game-di-tokens";

@injectable()
class PlayerJoinGameUseCase implements IPlayerJoinGameUseCase {
    private gamePlayersRepository: IGamePlayersRepository;

    constructor(
        @inject(GameDITokens.gamePlayersRepository) gamePlayersRepository: IGamePlayersRepository
    ) {
        this.gamePlayersRepository = gamePlayersRepository;
    }

    async execute(input: PlayerJoinGameInputPort): Promise<boolean> {
        return true;
    }
}

export default PlayerJoinGameUseCase