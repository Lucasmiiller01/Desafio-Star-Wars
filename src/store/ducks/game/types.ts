export enum GameTypes {
  START_GAME = "@initGame/START_GAME"
}

export interface GameState {
  readonly started: boolean;
}
