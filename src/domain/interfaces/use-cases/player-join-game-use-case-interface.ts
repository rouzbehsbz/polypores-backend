import UseCase from "../../common/abstractions/use-case";

type PlayerJoinGameInputPort = {
    playerId: string,
    name: string
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