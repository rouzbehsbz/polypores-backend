import { Optional } from "../../common/types";
import Player from "../../entities/player";

interface IGamePlayersRepository {
    addPlayer(player: Player): Promise<void>
    deletePlayer(player: Player): Promise<void>
    getPlayerById(id: string): Promise<Optional<Player>>
    getAllPlayers(): Promise<Player[]>
}

export default IGamePlayersRepository;