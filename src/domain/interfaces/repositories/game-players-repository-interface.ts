import { Optional } from "../../common/types";
import Player from "../../entities/player";

interface IGamePlayersRepository {
    getPlayerById(id: string): Promise<Optional<Player>>
    getAllPlayers(): Promise<Player[]>
}

export default IGamePlayersRepository;