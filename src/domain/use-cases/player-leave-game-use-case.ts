import { inject, injectable } from "inversify";
import IPlayerLeaveGameUseCase, { PlayerLeaveGameInputPort } from "../interfaces/use-cases/player-leave-game-use-case-interface";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import GameDITokens from "../di/game-di-tokens";

@injectable()
class PlayerLeaveGameUseCase implements IPlayerLeaveGameUseCase {
    private gamePlayersRepository: IGamePlayersRepository;

    constructor(
        @inject(GameDITokens.gamePlayersRepository) gamePlayersRepository: IGamePlayersRepository
    ) {
        this.gamePlayersRepository = gamePlayersRepository;
    }
    
    async execute(input: PlayerLeaveGameInputPort): Promise<boolean> {
        const player = await this.gamePlayersRepository.getRealtimePlayerById(input.playerId);

        if(!player) {
            return false;
        }

        await this.gamePlayersRepository.deleteRealtimePlayer(player);
        
        return true;
    }
}

export default PlayerLeaveGameUseCase;