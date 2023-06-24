import { inject, injectable } from "inversify";
import IPlayerJoinGameUseCase, { PlayerJoinGameInputPort } from "../interfaces/use-cases/player-join-game-use-case-interface";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import GameDITokens from "../di/game-di-tokens";
import Player from "../entities/player";

@injectable()
class PlayerJoinGameUseCase implements IPlayerJoinGameUseCase {
    private gamePlayersRepository: IGamePlayersRepository;

    constructor(
        @inject(GameDITokens.gamePlayersRepository) gamePlayersRepository: IGamePlayersRepository
    ) {
        this.gamePlayersRepository = gamePlayersRepository;
    }

    async execute(input: PlayerJoinGameInputPort): Promise<boolean> {
        //TODO: Check for duplicate player name
        //TODO: Add random player location

        const player = Player.new({
            id: input.playerId,
            name: input.playerName,
            x: 50,
            y: 50
        })

        await this.gamePlayersRepository.addRealtimePlayer(player);

        return true;
    }
}

export default PlayerJoinGameUseCase