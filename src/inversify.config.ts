import {Container} from 'inversify';
import IGamePlayersRepository from './domain/interfaces/repositories/game-players-repository-interface';
import Game from './domain/entities/game';
import IUpdatePlayerPositionUseCase from './domain/interfaces/use-cases/update-player-position-use-case-interface';
import UpdatePlayerPositionUseCase from './domain/use-cases/update-player-position-use-case';
import IGetPlayersInViewUseCase from './domain/interfaces/use-cases/get-players-in-view-use-case-interface';
import GetPlayersInViewUseCase from './domain/use-cases/get-players-in-view-use-case';
import { TYPE, interfaces } from 'inversify-socket-utils';
import MessageController from './presenter/websocket/controllers/message-controller';
import PlayerDITokens from './domain/di/player-di-tokens';
import GameDITokens from './domain/di/game-di-tokens';

const container = new Container();

container.bind<IGamePlayersRepository>(GameDITokens.gamePlayersRepository).to(Game).inSingletonScope();

container.bind<IUpdatePlayerPositionUseCase>(PlayerDITokens.updatePlayerPositionUseCase).to(UpdatePlayerPositionUseCase);
container.bind<IGetPlayersInViewUseCase>(GameDITokens.getPlayersInViewUseCase).to(GetPlayersInViewUseCase);

container.bind<interfaces.Controller>(TYPE.Controller).to(MessageController);

export default container;