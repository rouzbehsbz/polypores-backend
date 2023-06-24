import { connectedSocket, controller, onConnect, onDisconnect, onMessage, payload } from "inversify-socket-utils";
import { Socket } from "socket.io";
import { UpdatePlayerPositionRequestDto } from "./dto/update-player-position-dto";
import IUpdatePlayerPositionUseCase from "../../../domain/interfaces/use-cases/update-player-position-use-case-interface";
import { inject, injectable } from "inversify";
import PlayerDITokens from "../../../domain/di/player-di-tokens";
import { GetPlayersInViewRequestDto } from "./dto/get-players-in-view-dto";
import IGetPlayersInViewUseCase from "../../../domain/interfaces/use-cases/get-players-in-view-use-case-interface";
import GameDITokens from "../../../domain/di/game-di-tokens";
import IPlayerJoinGameUseCase from "../../../domain/interfaces/use-cases/player-join-game-use-case-interface";
import IPlayerLeaveGameUseCase from "../../../domain/interfaces/use-cases/player-leave-game-use-case-interface";
import { PlayerJoinGameRequestDto } from "./dto/player-join-game-dto";

@injectable()
@controller('/')
class MessageController {
    private updatePlayerUseCase: IUpdatePlayerPositionUseCase;
    private getPlayersInViewUseCase: IGetPlayersInViewUseCase;
    private playerJoinGameUseCase: IPlayerJoinGameUseCase;
    private playerLeaveGameUseCase: IPlayerLeaveGameUseCase;

    constructor(
        @inject(PlayerDITokens.updatePlayerPositionUseCase)
            updatePlayerUseCase: IUpdatePlayerPositionUseCase,
        @inject(GameDITokens.getPlayersInViewUseCase)
            getPlayersInViewUseCase: IGetPlayersInViewUseCase,
        @inject(GameDITokens.playerJoinGameUseCase)
            playerJoinGameUseCase: IPlayerJoinGameUseCase,
        @inject(GameDITokens.playerLeaveGameUseCase)
            playerLeaveGameUseCase: IPlayerLeaveGameUseCase
    ) {
        this.updatePlayerUseCase = updatePlayerUseCase;
        this.getPlayersInViewUseCase = getPlayersInViewUseCase;
        this.playerJoinGameUseCase = playerJoinGameUseCase;
        this.playerLeaveGameUseCase = playerLeaveGameUseCase;
    }

    @onConnect('connection')
    async playerConnect(
        @connectedSocket() socket: Socket,
        @payload() payload: PlayerJoinGameRequestDto
    ) {
        await this.playerJoinGameUseCase.execute({
            playerId: socket.id,
            playerName: payload.name
        })
    }

    @onDisconnect('disconnect')
    async playerDisconnect(@connectedSocket() socket: Socket) {
        await this.playerLeaveGameUseCase.execute({
            playerId: socket.id
        })
    }

    @onMessage('player:updatePosition')
    async updatePlayerPosition(
        @connectedSocket() socket: Socket,
        @payload() payload: UpdatePlayerPositionRequestDto
    ) {
        await this.updatePlayerUseCase.execute({
            playerId: socket.id,
            movementKeyCode: payload.movementKeyCode
        })
    }

    @onMessage('game:getPlayersInView')
    async getPlayersInView(
        @connectedSocket() socket: Socket,
        @payload() payload: GetPlayersInViewRequestDto
    ) {
       const result = await this.getPlayersInViewUseCase.execute({
            originX: payload.originX,
            originY: payload.originY,
            width: payload.width,
            height: payload.height
        })

        socket.emit('game:getPlayersInView', result);
    }
}

export default MessageController;