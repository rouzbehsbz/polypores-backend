import UseCase from "../../common/abstractions/use-case";
import { PlayerMovementKeyCode } from "../../common/enums";

type UpdatePlayerPositionInputPort = {
    playerId: string,
    movementKeyCode: PlayerMovementKeyCode
}

interface IUpdatePlayerPositionUseCase extends UseCase<UpdatePlayerPositionInputPort, undefined> {}

export default IUpdatePlayerPositionUseCase;
export type {
    UpdatePlayerPositionInputPort
}