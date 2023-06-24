import UseCase from "../../common/abstractions/use-case";

type PlayerJoinGameInputPort = {
    playerId: string,
    playerName: string
}

type PlayerJoinGameOutputPort = boolean

interface IPlayerJoinGameUseCase extends UseCase<
    PlayerJoinGameInputPort,
    PlayerJoinGameOutputPort
> {}

export default IPlayerJoinGameUseCase;
export type {
    PlayerJoinGameInputPort,
    PlayerJoinGameOutputPort
}