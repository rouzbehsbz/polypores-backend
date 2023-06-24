import { connectedSocket, controller, onMessage, payload } from "inversify-socket-utils";
import { Socket } from "socket.io";
import { UpdatePlayerPositionRequest } from "./dto/update-player-position-dto";
import IUpdatePlayerPositionUseCase from "../../../domain/interfaces/use-cases/update-player-position-use-case-interface";
import { inject, injectable } from "inversify";
import PlayerDITokens from "../../../domain/di/player-di-tokens";
import { GetPlayersInViewRequest } from "./dto/get-players-in-view-dto";
import IGetPlayersInViewUseCase from "../../../domain/interfaces/use-cases/get-players-in-view-use-case-interface";
import GameDITokens from "../../../domain/di/game-di-tokens";

@injectable()
@controller('/')
class MessageController {
    private updatePlayerUseCase: IUpdatePlayerPositionUseCase;
    private getPlayersInViewUseCase: IGetPlayersInViewUseCase;

    constructor(
        @inject(PlayerDITokens.updatePlayerPositionUseCase)
            updatePlayerUseCase: IUpdatePlayerPositionUseCase,
        @inject(GameDITokens.getPlayersInViewUseCase)
            getPlayersInViewUseCase: IGetPlayersInViewUseCase
    ) {
        this.updatePlayerUseCase = updatePlayerUseCase;
        this.getPlayersInViewUseCase = getPlayersInViewUseCase;
    }

    @onMessage('player:updatePosition')
    async updatePlayerPosition(
        @connectedSocket() socket: Socket,
        @payload() payload: UpdatePlayerPositionRequest
    ) {
        await this.updatePlayerUseCase.execute({
            playerId: socket.id,
            movementKeyCode: payload.movementKeyCode
        })
    }

    @onMessage('game:getPlayersInView')
    async getPlayersInView(
        @connectedSocket() socket: Socket,
        @payload() payload: GetPlayersInViewRequest
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