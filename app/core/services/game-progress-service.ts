enum GameState {
  Finished,
  InProgress
}

export class GameProgressService {
  private state: GameState = GameState.InProgress;
  
  newGame(): void {
    this.state = GameState.InProgress;
  }
  
  finishGame(): void {
    this.state = GameState.Finished;
  }
  
  isFinished(): boolean {
    return this.state === GameState.Finished;
  }
  
}
