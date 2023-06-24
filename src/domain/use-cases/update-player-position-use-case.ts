import { PlayerMovementKeyCode } from "../common/enums";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import IUpdatePlayerPositionUseCase, { UpdatePlayerPositionInputPort, UpdatePlayerPositionOutputPort } from "../interfaces/use-cases/update-player-position-use-case-interface";
import {injectable} from 'inversify';

@injectable()
class UpdatePlayerPositionUseCase implements IUpdatePlayerPositionUseCase {
    private gamePlayersRepository: IGamePlayersRepository;

    constructor(
        gamePlayersRepository: IGamePlayersRepository
    ) {
        this.gamePlayersRepository = gamePlayersRepository
    }

    async execute(input: UpdatePlayerPositionInputPort): Promise<UpdatePlayerPositionOutputPort> {
        const player = await this.gamePlayersRepository.getRealtimePlayerById(input.playerId);

        if(!player) {
            return false;
        }

        switch(input.movementKeyCode) {
            case PlayerMovementKeyCode.UP: {
                player.y -= player.speed;
                break;
            }
            case PlayerMovementKeyCode.DOWN: {
                player.y += player.speed;
                break;
            }
            case PlayerMovementKeyCode.RIGHT: {
                player.x += player.speed;
                break;
            }
            case PlayerMovementKeyCode.LEFT: {
                player.x -= player.speed;
                break;
            }
        }

        return true;
    }
}

export default UpdatePlayerPositionUseCase;