import IUpdatePlayerPositionUseCase, { UpdatePlayerPositionInputPort } from "../interfaces/use-cases/update-player-position-use-case";

class UpdatePlayerPositionUseCase implements IUpdatePlayerPositionUseCase {
    async execute(input: UpdatePlayerPositionInputPort): Promise<undefined> {
        
    }
}

export default UpdatePlayerPositionUseCase;