import { combineReducers } from "redux";

import planets from "./planets";
import game from "./game";

export default combineReducers({
  planets,
  game
});
