import { Reducer } from "redux";
import { GameState, GameTypes } from "./types";

const INITIAL_STATE: GameState = {
  started: false
};

const reducer: Reducer<GameState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.START_GAME:
      return { ...state, started: true };
    default:
      return { ...state };
  }
};

export default reducer;
