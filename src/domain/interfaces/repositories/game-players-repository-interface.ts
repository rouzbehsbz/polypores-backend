import { Optional } from "../../common/types";
import Player from "../../entities/player";

interface IGamePlayersRepository {
    addRealtimePlayer(player: Player): Promise<void>
    deleteRealtimePlayer(player: Player): Promise<void>
    getRealtimePlayerById(id: string): Promise<Optional<Player>>
    getAllTickratedPlayers(): Promise<Player[]>
}

export default IGamePlayersRepository;