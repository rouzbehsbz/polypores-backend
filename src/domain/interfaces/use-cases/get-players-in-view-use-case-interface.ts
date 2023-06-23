import UseCase from "../../common/abstractions/use-case";

type GetPlayersInViewInputPort = {
    originX: number,
    originY: number,
    width: number,
    height: number
}

type GetPlayersInViewOutputPort = {
   playerId: string,
   name: string,
   x: number,
   y: number, 
}[]

interface IGetPlayersInViewUseCase extends UseCase<
    GetPlayersInViewInputPort,
    GetPlayersInViewOutputPort
> {}

export default IGetPlayersInViewUseCase;
export type {
    GetPlayersInViewInputPort,
    GetPlayersInViewOutputPort
}