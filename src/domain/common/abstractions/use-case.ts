interface UseCase<InputPort, OutputPort> {
    execute(input: InputPort): Promise<OutputPort>
}

export default UseCase;