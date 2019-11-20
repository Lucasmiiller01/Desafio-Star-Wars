import { action } from "typesafe-actions";
import { GameTypes } from "./types";

export const startGame = () => action(GameTypes.START_GAME);
