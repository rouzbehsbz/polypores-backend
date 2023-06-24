import {get} from 'env-var';

class GameConfig {
    static readonly TICKRATE = get('GAME_TICKRATE')
        .required()
        .default(15)
        .asIntPositive()
}

export default GameConfig;