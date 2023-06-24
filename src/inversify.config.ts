import {Container} from 'inversify';
import IGamePlayersRepository from './domain/interfaces/repositories/game-players-repository-interface';
import Game from './domain/entities/game';
import IUpdatePlayerPositionUseCase from './domain/interfaces/use-cases/update-player-position-use-case-interface';
import UpdatePlayerPositionUseCase from './domain/use-cases/update-player-position-use-case';
import IGetPlayersInViewUseCase from './domain/interfaces/use-cases/get-players-in-view-use-case-interface';
import GetPlayersInViewUseCase from './domain/use-cases/get-players-in-view-use-case';

const container = new Container();

container.bind<IGamePlayersRepository>(Game).toSelf().inSingletonScope();

container.bind<IUpdatePlayerPositionUseCase>(UpdatePlayerPositionUseCase);
container.bind<IGetPlayersInViewUseCase>(GetPlayersInViewUseCase);

export default container;