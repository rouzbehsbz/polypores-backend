import { injectable } from "inversify";
import GameConfig from "../../configuration/game-config";
import Entity from "../common/abstractions/entity";
import { Optional } from "../common/types";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import Player from "./player";

@injectable()
class Game extends Entity implements IGamePlayersRepository {
    private readonly tickrate = GameConfig.TICKRATE;

    private realtimePlayers: Map<string, Player>;
    private tickratedPlayers: Map<string, Player>;

    constructor() {
        super();

        this.realtimePlayers = new Map();
        this.tickratedPlayers = new Map();
    }

    static new() {
        const game = new Game();

        game.startGameLoop();

        return game;
    }

    private startGameLoop() {
        setInterval(() => {
            this.tickratedPlayers = this.realtimePlayers;
        }, this.tickrate)
    }

    async addRealtimePlayer(player: Player): Promise<void> {
        this.realtimePlayers.set(player.id, player);
    }

    async deleteRealtimePlayer(player: Player): Promise<void> {
        this.realtimePlayers.delete(player.id);
    }

    async getAllTickratedPlayers(): Promise<Player[]> {
        return Array.from(this.tickratedPlayers.values());
    }

    async getRealtimePlayerById(id: string): Promise<Optional<Player>> {
        return this.realtimePlayers.get(id);
    }
}

export default Game