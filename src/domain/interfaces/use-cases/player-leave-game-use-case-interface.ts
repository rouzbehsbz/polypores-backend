import UseCase from "../../common/abstractions/use-case";

type PlayerLeaveGameInputPort = {
    playerId: string
}

type PlayerLeaveGameOutputPort = boolean

interface IPlayerLeaveGameUseCase extends UseCase<
    PlayerLeaveGameInputPort,
    PlayerLeaveGameOutputPort
> {}

export default IPlayerLeaveGameUseCase;
export type {
    PlayerLeaveGameInputPort,
    PlayerLeaveGameOutputPort
}