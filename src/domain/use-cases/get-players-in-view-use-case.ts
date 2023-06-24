import { injectable } from "inversify";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import IGetPlayersInViewUseCase, { GetPlayersInViewInputPort, GetPlayersInViewOutputPort } from "../interfaces/use-cases/get-players-in-view-use-case-interface";

@injectable()
class GetPlayersInViewUseCase implements IGetPlayersInViewUseCase {
    private gamePlayersRepository: IGamePlayersRepository;

    constructor(
        gamePlayersRepository: IGamePlayersRepository
    ) {
        this.gamePlayersRepository = gamePlayersRepository;
    }

    async execute(input: GetPlayersInViewInputPort): Promise<GetPlayersInViewOutputPort> {
        const players = await this.gamePlayersRepository.getAllPlayers();

        let playersInView: GetPlayersInViewOutputPort = [];

        for(const player of players) {
            if(
                player.x >= input.originX &&
                player.x <= input.originX + input.width &&
                player.y >= input.originY &&
                player.y <= input.originY + input.height
            ) {
                playersInView.push({
                    playerId: player.id,
                    name: player.name,
                    x: player.x,
                    y: player.y
                });
            }
        }

        return playersInView;
    }
}

export default GetPlayersInViewUseCase;