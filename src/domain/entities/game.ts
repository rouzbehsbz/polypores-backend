import GameConfig from "../../configuration/game-config";
import Entity from "../common/abstractions/entity";
import { GameWorldEntities } from "../common/enums";
import { Optional } from "../common/types";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import Player from "./player";

class Game extends Entity implements IGamePlayersRepository {
    private readonly tickrate = GameConfig.TICKRATE;
    
    private players: Map<string, Player>;
    private world: Map<GameWorldEntities, Entity>;

    constructor() {
        super();

        this.players = new Map();
        this.world = new Map();
    }

    private gameLoop() {
        setInterval(() => {
            
        }, this.tickrate)
    }

    getAllPlayers(): Promise<Player[]> {
        throw new Error('Need to implement this');
    }

    getPlayerById(id: string): Promise<Optional<Player>> {
        throw new Error('Need to implement this');
    }
}

export default Game