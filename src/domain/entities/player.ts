import PlayerConfig from "../../configuration/player-config";
import Entity from "../common/abstractions/entity";

class Player extends Entity {
    public id: string;
    public name: string;
    public speed: number;
    public x: number;
    public y: number;

    private constructor(id: string, name: string, speed: number, x: number, y: number) {
        super();
        
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.x = x;
        this.y = y;
    }

    static new(payload: {
        id: string,
        name: string,
        x: number,
        y: number
    }) {
        const player = new Player(
                payload.id,
                payload.name,
                PlayerConfig.MOVEMENT_SPEED,
                payload.x,
                payload.y
            )
        
        return player;
    }
}

export default Player;