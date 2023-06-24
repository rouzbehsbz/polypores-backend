import GameConfig from "../../configuration/game-config";
import Entity from "../common/abstractions/entity";
import { Optional } from "../common/types";
import IGamePlayersRepository from "../interfaces/repositories/game-players-repository-interface";
import Player from "./player";

class Game extends Entity implements IGamePlayersRepository {
    private readonly tickrate = GameConfig.TICKRATE;

    private realtimePlayers: Map<string, Player>;
    private tickratedPlayers: Map<string, Player>;

    private constructor() {
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

    async addPlayer(player: Player): Promise<void> {
        this.realtimePlayers.set(player.id, player);
    }

    async deletePlayer(player: Player): Promise<void> {
        this.realtimePlayers.delete(player.id);
    }

    async getAllPlayers(): Promise<Player[]> {
        return Array.from(this.tickratedPlayers.values());
    }

    async getPlayerById(id: string): Promise<Optional<Player>> {
        return this.realtimePlayers.get(id);
    }
}

export default Game