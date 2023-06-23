import {get} from 'env-var';

class PlayerConfig {
    static readonly MOVEMENT_SPEED = get('PLAYER_MOVEMENT_SPEED')
        .required()
        .default(5)
        .asIntPositive()
}

export default PlayerConfig;