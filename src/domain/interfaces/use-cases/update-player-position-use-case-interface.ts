import UseCase from "../../common/abstractions/use-case";
import { PlayerMovementKeyCode } from "../../common/enums";

type UpdatePlayerPositionInputPort = {
    playerId: string,
    movementKeyCode: PlayerMovementKeyCode
}

type UpdatePlayerPositionOutputPort = boolean;

interface IUpdatePlayerPositionUseCase extends UseCase<
    UpdatePlayerPositionInputPort,
    UpdatePlayerPositionOutputPort
> {}

export default IUpdatePlayerPositionUseCase;
export type {
    UpdatePlayerPositionInputPort,
    UpdatePlayerPositionOutputPort
}